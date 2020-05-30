import React, {useEffect, useState} from "react";

const HookCounter = () => {

    const [value, setValue] = useState(0);
    const [isVisible, setHide] = useState(true);

    const updateValue = () => setValue((v) => v + 1);

    const hideBlock = () => setHide(false);
    const showBlock = () => setHide(true);

    useEffect(() => {
        console.log("useEffect()");

        return (
            console.log("clear useEffect")
        )
    }, [value]);

    if (isVisible) {
        return (
            <div>
                <button
                onClick={updateValue}>+</button>
                <button
                onClick={hideBlock}>hide</button>
                <p>{value}</p>
            </div>
        )
    }

    return (
        <div style={{border: "1px solid white", padding: "5px"}}>
            <button onClick={showBlock}>show</button>
            <p>this is my Effect with hook</p>
        </div>
    )
};

export default HookCounter;