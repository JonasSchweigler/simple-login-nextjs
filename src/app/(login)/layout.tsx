import React from "react";
import { ImageBanner } from "./components/ImageBanner";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout(props: LayoutProps) {
  return (
    <div className='flex flex-row min-h-screen h-full'>
      <div className='flex-1 md:p-12 sm:p-6 p-3'>{props.children}</div>
      <div className='flex-1 md:block hidden'>
        {/* Image Banner */}
        <ImageBanner />
      </div>
    </div>
  );
}

export default Layout;
