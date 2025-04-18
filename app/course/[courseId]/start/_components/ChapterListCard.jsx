import React from "react";
import { HiOutlineClock } from "react-icons/hi";

function ChapterListCard({ chapter, index }) {
  return (
    <div className="grid grid-cols-5 p-4 border-b items-center bg-white dark:bg-gray-800 dark:border-gray-700">
      <div>
        <h2 className="flex items-center justify-center bg-primary text-white rounded-full w-8 h-8 text-center">
          {index + 1}
        </h2>
      </div>

      <div className="col-span-4">
        <h2 className="font-medium dark:text-white">{chapter?.ChapterName}</h2>
        <h2 className="flex items-center gap-2 text-sm text-primary dark:text-gray-300">
          <HiOutlineClock />
          {chapter?.Duration}
        </h2>
      </div>
    </div>
  );
}

export default ChapterListCard;
