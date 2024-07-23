import React from "react";

const HeadingText = ({
  title,
  description,
}: {
  title: String;
  description: String;
}) => {
  return (
    <div className=" flex flex-col">
      <h1 className=" md:text-3xl text-2xl title-font mb-1 bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent  font-extrabold">
        {title}
      </h1>
      <p className=" text-base leading-relaxed  text-blue-500">{description}</p>
    </div>
  );
};

export default HeadingText;
