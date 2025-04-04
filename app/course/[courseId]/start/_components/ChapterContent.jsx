import React, { useState } from "react";
import YouTube from "react-youtube";
import ReactMarkdown from "react-markdown";
import { HiChevronDoubleRight, HiOutlineClipboardList } from "react-icons/hi";
import "./youtubeAdjustments.css";
import { Button } from "@/components/ui/button";

function ChapterContent({ chapter, content, handleSideBarFunction }) {
  const [selectedVideo, setSelectedVideo] = useState(0);

  // Function to render YouTube videos
  const renderYouTubeVideo = () => {
    if (!content?.videoId) return null;

    const videoId = Array.isArray(content.videoId)
      ? content.videoId[selectedVideo]
      : content.videoId;

    return (
      <div className="video-responsive my-6">
        <YouTube videoId={videoId} opts={{ playerVars: { autoplay: 0 } }} />
      </div>
    );
  };

  // Function to render video buttons
  const renderVideoButtons = () => {
    if (!Array.isArray(content?.videoId)) return null;

    return content.videoId.map((_, index) => (
      <Button
        key={index}
        onClick={() => setSelectedVideo(index)}
        className={`${
          selectedVideo === index
            ? "bg-primary text-white dark:bg-primary dark:text-white"
            : "bg-white text-primary dark:bg-gray-800 dark:text-gray-300 hover:text-white"
        } border-primary`}
      >
        Video {index + 1}
      </Button>
    ));
  };

  return (
    <div className="px-10 dark:bg-gray-900 dark:text-white min-h-screen">
      {/* Sidebar Toggle */}
      <HiChevronDoubleRight
        onClick={() => handleSideBarFunction(true)}
        className="md:hidden mb-5 cursor-pointer border-green-500 border-2 rounded-sm hover:bg-primary hover:text-white dark:border-green-400 dark:hover:bg-primary dark:hover:text-white"
        size={30}
      />

      {/* Chapter Information */}
      <div>
        <h2 className="font-medium text-4xl">{chapter?.ChapterName}</h2>
        <p className="text-gray-500 dark:text-gray-400">{chapter?.About}</p>
      </div>

      {/* Video Section */}
      {renderYouTubeVideo()}

      {/* Responsive Video Buttons */}
      <div className="flex flex-wrap gap-2 my-5 justify-center w-full">
        {renderVideoButtons()}
      </div>

      {/* General Note */}
      <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-2 mb-4">
        🎥 Multiple videos for any chapter! These videos cover the same topic, allowing you to switch if you
        don't like a particular video.
      </p>

      {/* Content Section */}
      <div>
        {content?.content?.chapters?.map((item, index) => (
          <div key={index} className="p-5 bg-slate-50 dark:bg-gray-800 mb-3 rounded-lg">
            <h2 className="font-medium text-lg">{`${index + 1}. ${item?.title}`}</h2>
            <ReactMarkdown>{item?.explanation}</ReactMarkdown>

            {/* Code Example Section */}
            {item?.codeExample && (
              <div className="p-4 bg-black dark:bg-gray-950 text-gray-400 rounded-md mt-3">
                <h2 className="flex justify-end">
                  <HiOutlineClipboardList
                    onClick={async () =>
                      await navigator.clipboard.writeText(
                        item.codeExample.replace(/<\/?precode>/g, "")
                      )
                    }
                    className="cursor-pointer"
                  />
                </h2>
                <pre className="break-words whitespace-pre-wrap overflow-auto">
                  <code>{item.codeExample.replace(/<\/?precode>/g, "")}</code>
                </pre>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChapterContent;
