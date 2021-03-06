import React from "react";
import { SpinnerInfinity } from "spinners-react";

const LoaderDetails = () => (
  <div className="max-w-5xl mx-auto flex justify-center pt-36 md:pt-32">
    <SpinnerInfinity
      color="black"
      secondaryColor="rgba(0,0,0,0.1)"
      thickness={140}
    />
  </div>
);

export default LoaderDetails;
