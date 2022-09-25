import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const FadeInAnimation = ({
    children,
    wrapperElement = "div",
    direction = null,
    delay = 0,
    ...props
}) => {
    const Component = wrapperElement;
    let compRef = useRef(null);
    const distance = 500;
    let fadeDirection;
    switch (direction) {
        case "left":
        fadeDirection = { x: -distance };
        break;
        case "right":
        fadeDirection = { x: distance };
        break;
        case "up":
        fadeDirection = { y: distance };
        break;
        case "down":
        fadeDirection = { y: -distance };
        break;
        default:
        fadeDirection = { x: 0 };
    }
    useEffect(() => {
        gsap.fromTo(compRef.current, {opacity: 0}, {...fadeDirection, opacity: 1, duration: 1});
    }, [compRef, fadeDirection, delay]);
    return (
        <Component ref={compRef} {...props}>
        {children}
        </Component>
    );
};

export default FadeInAnimation;