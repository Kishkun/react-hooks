import React, {useState} from "react";

const HookSwitcher = () => {

    const [color, setColor] = useState("white");
    const [fontSize, setFontSize] = useState(14);

    const setDark = () => setColor("black");
    const setLight = () => setColor("white");
    const setLarge = () => setFontSize(20);

    return (
        <div
            style={{
                padding: "10px",
                backgroundColor: color
            }}
        >
            <button
                onClick={setDark}>
                Change in Dark
            </button>
            <button
                onClick={setLight}>
                Change in Light
            </button>
            <button
                style={{
                    fontSize: fontSize
                }}
                onClick={setLarge}>
                Change large font size
            </button>
        </div>
    )
};

export default HookSwitcher;