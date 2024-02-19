import Image from "next/image";
import React from "react";

export const ImageBanner = () => {
  return (
    <div className='relative h-screen'>
      <Image src={"/banner.jpeg"} alt='banner' fill className='object-cover' />
    </div>
  );
};
