import React, { useState } from "react";
import "../index.css";

interface HexagonProps {}

const Hexagon: React.FC<HexagonProps> = () => {
    const [isPressed, setIsPressed] = useState<boolean>(false);

    const togglePressed = () => {
        setIsPressed((prevState) => !prevState);
    };

    return (
        <div
            className={`hexagon ${isPressed ? "pressed" : ""}`}
            onClick={togglePressed}
        >
            {/* Your hexagon content */}
            <h1>Hello</h1>
        </div>
    );
};

export default Hexagon;
