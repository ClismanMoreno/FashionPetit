import Video from '@/components/Tutorial/Video';
import React from 'react';

const page = () => {
  return (
    <div className="w-full">
      <div>
        <h1 className="my-10 font-semibold text-sm sm:text-xl lg:text-3xl xl:text-5xl text-white text-center">
          TE DEJAMOS UN VIDEO TUTORIAL
        </h1>
        <Video />
      </div>
    </div>
  );
};

export default page;
