'use client';
import React, { useState } from 'react';
import { Substrack } from '../assets/Substrack';

const Video: React.FC = () => {
  const [playvideo, setPlayvideo] = useState(false);
  const videoId = 'I2mv4456l74'; // Reemplaza con el ID del video de YouTube

  const handlePlayVideo = () => {
    setPlayvideo(true);
  };

  return (
    <div className="relative flex justify-center">
      <div
        className={`relative border-2 bg-purple-900/50 border-purple-900 p-4 w-5/6 md:w-[520px] h-[40dvh] md:h-[300px] lg:w-3/4 lg:h-[550px] mb-10 ${
          playvideo ? 'z-10' : ''
        }`}
      >
        {playvideo ? (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="absolute inset-0 bg-[#008CDB] opacity-55 z-0"></div>
        )}
      </div>
      {!playvideo && (
        <button
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          onClick={handlePlayVideo}
        >
          <Substrack />
          <p className="text-[14px] md:text-[24px] font-semibold text-[#008CDB] font-rubik">
            Ver Vídeo
          </p>
        </button>
      )}
    </div>
  );
};

export default Video;
