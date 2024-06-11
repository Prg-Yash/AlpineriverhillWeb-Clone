import React from "react";

const AboutGrid = ({ id, content }) => {
  return (
    <div className="grid grid-cols-12 gap-4 mb-5 ">
      <div className="col-start-3  col-end-11  border rounded-xl shadow-md p-10 hover:shadow-lg     ">
        <div className="flex flex-col gap-3">
          <h1
            className="text-[#E8762B] text-2xl
           text-center"
          >
            {content.title}
          </h1>
          <hr className="flex mx-auto w-[50%]" />
          <p className="text-center text-base">{content.description}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutGrid;
