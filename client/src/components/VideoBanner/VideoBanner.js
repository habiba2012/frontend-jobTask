import React from 'react';
import Videojs from 'video.js';
import FashionVideo from '../../assets/videos/fashion.mp4'


const VideoBanner = () => {
    const videoJsOptions = {
        autoplay: true,
        /*   playbackRates: [0.5, 1, 1.25, 1.5, 2],
          width: 720,
          height: 300,
          controls: true, */
        sources: [
            {
                src: FashionVideo,
                type: 'video/mp4',
            },
        ],
    };
    return (
        <video
            id="my-video"
            class="video-js"
            autoplay="true"
            controls="true"
            preload="auto"
            width="640"
            height="400"
            poster="../../assets/images/banner.jpg"
            data-setup="{}"
        >
            <source src={FashionVideo} type="video/mp4" />

        </video>
    );
};

export default VideoBanner;