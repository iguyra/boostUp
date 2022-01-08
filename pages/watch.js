import { useState } from "react";

export default function watch() {
  const [currentVideo, setCurrentVideo] = useState("/static/v.mp4");

  let changeCurrentVideo = (url) => {
    console.log("clickking");

    setCurrentVideo(url);
  };

  console.log(currentVideo, "currentVideo");

  return (
    <div className="watch">
      <div className="watch__container">
        <div className="watch__videoContainer">
          <video
            width={"100%"}
            height={"100%"}
            controls
            src={currentVideo}
          ></video>
          {/* <video controls>
            <source src={currentVideo} type="video/mp4"></source>
          </video> */}
        </div>

        <div className="watch__videoList">
          <ul>
            <li>
              <img
                onClick={() => changeCurrentVideo("/static/v2.mp4")}
                src="/static/hero.jpg"
                alt=""
              />
              <span> first video</span>
            </li>

            <li>
              <img
                onClick={() => changeCurrentVideo("/static/v1.mp4")}
                src="/static/hero.jpg"
                alt=""
              />
              <span> second video</span>
            </li>

            <li>
              <img
                onClick={() => changeCurrentVideo("/static/v.mp4")}
                src="/static/hero.jpg"
                alt=""
              />
              <span> thrid video</span>
            </li>

            <li>
              <img
                onClick={() => changeCurrentVideo("/static/movie.mp4")}
                src="/static/hero.jpg"
                alt=""
              />
              <span> foth video</span>
            </li>

            <li>fifth video</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
