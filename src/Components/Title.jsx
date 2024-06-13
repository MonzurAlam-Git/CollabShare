import React from "react";

const Title = (children) => {
  const { parentText, childText } = children;
  return (
    <div className="mt-10 ">
      <div className="flex items-center justify-center ">
        <div className="relative">
          {/* highlighted Text */}
          <h1 className="text-xl lg:text-4xl text-black relative z-10">
            {parentText}
          </h1>
          {/*Background Text */}
          <h1 className="text-2xl lg:text-8xl font-bold text-black opacity-10 top-0 left-0 transform -translate-y-1/8 translate-x-1/4">
            {childText}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Title;
