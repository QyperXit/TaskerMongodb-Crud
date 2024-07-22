import React from "react";
import Box from "./box";
import HeadingText from "./heading-text";

const Header = () => {
  return (
    <header className="py-6">
      <Box>
        <HeadingText
          title={"TaskerCRUD"}
          description={"Organize your task with TASKCRUD"}
        />
      </Box>
    </header>
  );
};

export default Header;
