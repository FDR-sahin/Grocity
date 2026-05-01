import React from "react";

function Heading({firstH, secondH}) {
  return (
    <div className="w-fit mx-auto">
      <h1 className="md:text-5xl text-[2rem] font-bold">
        <span className="text-orange-500">{firstH}</span> {secondH}
      </h1>
      <div className="bg-amber-500 md:w-40 w-25 h-2 rounded-full md:mt-5 mt-2 ml-auto"></div>
    </div>
  );
}

export default Heading;
