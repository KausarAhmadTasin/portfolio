import React from "react";

const Title = ({ children }) => {
  return (
    <h1 className="text-center mb-6 text-3xl underline font-bold decoration-dashed underline-offset-8 decoration-lime-300">
      {children}
    </h1>
  );
};

export default Title;
