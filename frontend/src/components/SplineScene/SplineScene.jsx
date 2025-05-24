import React from 'react';
import Spline from "@splinetool/react-spline";

const SplineScene = () => {
  
  return (
    <div style={{ height: '300px', width: '300px' }}>
      <Spline scene="/scene.splinecode" />
    </div>
  );
};

export default SplineScene;