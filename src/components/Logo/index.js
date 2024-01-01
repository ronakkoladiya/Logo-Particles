import React from "react";
import ParticleImage, { Vector, forces } from "react-particle-image";
import LogoImg from "../../assets/logo.png";

function Logo() {

    const particleOptions = {
        filter: ({ x, y, image }) => {
            // Get pixel
            const pixel = image.get(x, y);
            // Make a particle for this pixel if blue > 50 (range 0-255)
            return pixel.b > 0;
        },
        color: ({ x, y, image }) => {
            const pixel = image.get(x, y);
            return `rgba(${pixel.r}, ${pixel.g}, ${pixel.b}, 1)`;
        },
        radius: () => 0.8, //particle size
        // mass: () => 1000,
        friction: () => 0.15,
        // initialPosition: ({ canvasDimensions }) => {
        //     return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
        // }
    };

    const motionForce = (x, y) => {
        return forces.disturbance(x, y, 50);
    };

    return (
        <ParticleImage
            src={LogoImg}
            scale={0.35}
            entropy={10}
            maxParticles={16000}
            mouseMoveForce={motionForce}
            touchMoveForce={motionForce}
            particleOptions={particleOptions}
            backgroundColor="transparent"
            width={800}
            height={800}
            creationDuration={1000}
        />
    );
};

export default Logo;