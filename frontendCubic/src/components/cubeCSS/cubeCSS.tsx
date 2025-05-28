// components/IsometricCube.tsx
import React from 'react';

const Cube3D = () => {
  return (

    <div className="scene">
      <div className="cube">
        <div className="face frente"></div>
        <div className="face tras"></div>
        <div className="face ladoesq"></div>
        <div className="face ladodir"></div>
        <div className="face cima"></div>
        <div className="face baixo"></div>
      </div>
    </div>
  )
};

export default Cube3D;