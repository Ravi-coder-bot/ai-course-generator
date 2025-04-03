import React, { useState } from "react";
import Image from "next/image";
import { HiOutlinePuzzle } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import EditCourseBasicInfo from "./EditCourseBasicInfo";
import { supabase } from "@/lib/supabaseClient";
import { db } from "@/configs/db";
import { CourseList } from "@/configs/schema";
import { eq } from "drizzle-orm";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";

const CourseBasicInfo = ({ course, refreshData, edit = true }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();

  const onFileSelected = async (e) => {
    try {
      const file = e.target.files[0];
      if (!file) return;

      setSelectedFile(URL.createObjectURL(file));
      setUploading(true);

      if (course?.courseBanner && course.courseBanner !== "/placeholder.png") {
        const filePath = course.courseBanner.split("/").pop();
        await supabase.storage.from("ai-course").remove([filePath]);
      }

      const fileName = `${Date.now()}-${file.name}`;
      const { data, error } = await supabase.storage
        .from("ai-course")
        .upload(fileName, file, {
          cacheControl: "3600",
          upsert: false,
        });

      if (error) throw error;
      toast({
        variant: "success",
        duration: 3000,
        title: "Image Uploaded Successfully!",
        description: "Image has been uploaded successfully.",
      });

      const { data: publicUrlData } = supabase.storage
        .from("ai-course")
        .getPublicUrl(fileName);

      const imageUrl = publicUrlData.publicUrl;
      if (!imageUrl) {
        toast({
          variant: "error",
          duration: 3000,
          title: "Public URL not found.",
          description: "There was a problem with your request.",
        });
        return;
      }

      await db
        .update(CourseList)
        .set({ courseBanner: imageUrl })
        .where(eq(CourseList.id, course?.id));

      refreshData(true);
    } catch (error) {
      toast({
        variant: "destructive",
        duration: 3000,
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    }
  };

  return (
    <div className="p-10 border rounded-xl shadow-sm mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold flex gap-1">
            {course?.courseOutput?.CourseName}
          </h2>
          {edit && (
            <EditCourseBasicInfo course={course} size={50} refreshData={() => refreshData(true)} />
          )}
          <p className="text-sm text-gray-400 mt-3">{course?.courseOutput?.Description}</p>
          <h2 className="font-medium mt-2 flex gap-2 items-center text-primary">
            <HiOutlinePuzzle size={20} />
            {course?.category}
          </h2>
          {!edit && (
            <Link href={`/course/${course?.courseId}/start`}>
              <Button className="w-full mt-5">Start</Button>
            </Link>
          )}
        </div>

        <div>
          <label htmlFor="upload-image" className="cursor-pointer block">
            <Image
              src={selectedFile ? selectedFile : course?.courseBanner || "/placeholder.png"}
              quality={100}
              priority={true}
              alt="Course banner"
              width={300}
              height={300}
              className="w-full rounded-xl object-cover h-[250px]"
            />
          </label>
          {edit && (
            <input
              type="file"
              accept="image/*"
              id="upload-image"
              className="hidden"
              onChange={onFileSelected}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseBasicInfo;

