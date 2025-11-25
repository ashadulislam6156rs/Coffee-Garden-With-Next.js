import React from 'react';
import GalleryFollow from './GalleryFollow';

const FollowUsParent = () => {
    return (
      <div>
        <div className="mb-10 max-w-7xl mx-auto">
          <p className="text-center text-xs pt-5">--- Follow Us Now ---</p>
          <h1 className="text-3xl text-[#331A15] font-semibold text-center py-3 mb-4">
            Follow on Instagram
          </h1>
          <div>{<GalleryFollow></GalleryFollow>}</div>
        </div>
      </div>
    );
};

export default FollowUsParent;