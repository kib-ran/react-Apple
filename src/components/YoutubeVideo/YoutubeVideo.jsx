import React, { useEffect, useState } from "react";
// import "./YoutubeVideo.css";
const YoutubeVideo = () => {
  const [appleVideos, setAppleVideos] = useState([]);

  const apikey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const apple = async () => {
      try {
        const response = await fetch(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=8&order=date&key=${apikey}`
        );
        const data = await response.json();
        // console.log(data);
        setAppleVideos(data.items);
      } catch (error) {
        console.log(error);
      }
    };
    // fetchAppleVideos();
    apple();
  }, []);

  console.log(appleVideos);

  return (
    <>
      <div className="allVideosWrapper">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold video-title-wrapper">
                Latest Videos
              </div>
            </div>
            {appleVideos.map((singleVideo, i) => {
              let vidId = singleVideo.id.videoId;
              let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
              let videoWrapper = (
                <div key={i} className="col-sm-12 col-md-6">
                  <div className="singleVideoWrapper">
                    <div className="videoThumbnail">
                      <a href={vidLink} target="_blank">
                        <img src={singleVideo.snippet.thumbnails.high.url} />
                      </a>
                    </div>
                    <div className="videoInfoWrapper">
                      <div className="videoTitle">
                        <a href={vidLink} target="_blank">
                          {singleVideo.snippet.title}
                        </a>
                      </div>
                      <div className="videoDesc">
                        {singleVideo.snippet.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
              return videoWrapper;
            })}

            {/* {this.videoWrapper} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default YoutubeVideo;


