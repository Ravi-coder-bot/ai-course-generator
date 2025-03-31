import React, { useState } from "react";
import Image from "next/image";
import { HiOutlinePuzzle } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import EditCourseBasicInfo from "./EditCourseBasicInfo";
import { supabase } from "@/lib/supabaseClient";

const CourseBasicInfo = ({ course, refreshData }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const onFileSelected = async (e) => {
    try {
      const file = e.target.files[0];
      if (!file) return;

      setSelectedFile(URL.createObjectURL(file));
      setUploading(true);

      // Delete previous image if it exists
      if (course?.courseBanner && course.courseBanner !== "/placeholder.png") {
        const filePath = course.courseBanner.split("/").pop();
        await supabase.storage.from("ai-course").remove([filePath]);
      }

      // Upload new file to Supabase Storage
      const fileName = `${Date.now()}-${file.name}`;
      const { data, error } = await supabase.storage
        .from("ai-course")
        .upload(fileName, file, {
          cacheControl: "3600",
          upsert: false,
        });

      if (error) throw error;

      // Get public URL of the uploaded file
      const { data: publicUrlData } = supabase.storage
        .from("ai-course")
        .getPublicUrl(fileName);

      const imageUrl = publicUrlData.publicUrl;
      console.log("Image URL:", imageUrl);

      // Update database with new image URL
      const { error: dbError } = await supabase
        .from("courses")
        .update({ courseBanner: imageUrl })
        .eq("id", course.id);

      if (dbError) throw dbError;

      refreshData(true);
      setUploading(false);
    } catch (error) {
      console.error("Error uploading file:", error.message);
      setUploading(false);
    }
  };

  return (
    <div className="p-10 border rounded-xl shadow-sm mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Title */}
        <div>
          <h2 className="text-3xl font-bold flex gap-1">
            {course?.courseOutput?.CourseName}
          </h2>
          <EditCourseBasicInfo course={course} refreshData={() => refreshData(true)} />
          <p className="text-sm text-gray-400 mt-3">{course?.courseOutput?.Description}</p>
          <h2 className="font-medium mt-2 flex gap-2 items-center text-primary">
            <HiOutlinePuzzle size={20} />
            {course?.category}
          </h2>
          <Button className="w-full mt-5">Start</Button>
        </div>

        {/* Image Upload */}
        <div>
          <label htmlFor="course-banner">
            <Image
              src={selectedFile || course?.courseBanner || "/placeholder.png"}
              width={300}
              height={300}
              alt="Course Banner"
              className="w-full rounded-xl object-cover h-[250px] cursor-pointer"
            />
          </label>
          <input
            type="file"
            className="opacity-0"
            id="course-banner"
            onChange={onFileSelected}
            disabled={uploading}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseBasicInfo;
