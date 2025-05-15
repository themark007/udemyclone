import React, { useEffect, useState } from "react";

function Viewcourse() {
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/courses/select");
        const data = await response.json();

        if (data.videos && data.videos.length > 0) {
          setVideoUrl(data.videos[0].link); // Get first video link
        } else {
          console.error("No videos found");
        }
      } catch (err) {
        console.error("Failed to fetch videos:", err);
      }
    };

    fetchVideos();
  }, []);

  const getYoutubeEmbedUrl = (url) => {
    try {
      const videoId = new URL(url).searchParams.get("v");
      return `https://www.youtube.com/embed/${videoId}`;
    } catch (err) {
      console.error("Invalid YouTube URL format");
      return "";
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Welcome to View Course</h1>
      <p>Where learning meets innovation</p>

      {videoUrl ? (
        <iframe
          width="800"
          height="450"
          src={getYoutubeEmbedUrl(videoUrl)}
          title="Course Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <p>Loading video...</p>
      )}
    </div>
  );
}

export default Viewcourse;