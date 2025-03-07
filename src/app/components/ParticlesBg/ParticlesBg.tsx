"use client";
import React from "react";
import Particles from "./Particles";

export const ParticlesBg = () => {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 ">
      <Particles
        particleColors={["#ffffff", "#00000"]}
        particleCount={500}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={50}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
      <div
        className="absolute top-0 left-0 w-full h-full z-10 opacity-50"
        style={{
          background: `
        linear-gradient(135deg, transparent 90%, var(--primary-color) 100%), 
        linear-gradient(235deg, transparent 90%, var(--secondary-color) 100%)`,
        }}
      ></div>
    </div>
  );
};
