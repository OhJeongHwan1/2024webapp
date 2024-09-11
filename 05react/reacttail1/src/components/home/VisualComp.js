import React from "react";

function VisualComp() {
  return (
    <div className="visual">
      <div className="container mx-auto h-auto md:h-80 py-10 flex text-white items-center px-4 text-center md:text-left">
        <div>
          <h2 className="text-4xl mb-3">안녕하세요</h2>
          <p className="mb-3">
            The href attribute requires a valid value to be accessible. Provide
            a valid, navigable address as the href value. If you cannot provide
            a valid href, but still need the element to resemble a link
          </p>
          <div className="px-4 py-3 bg-blue-200 inline-block rounded-md text-gray-800 hover:bg-blue-400 hover:text-white">
            PRODUCT
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisualComp;
