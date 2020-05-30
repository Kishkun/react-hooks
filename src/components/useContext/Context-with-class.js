import React from "react";

const MyContext = React.createContext();

const Parent = () => {
    return (
        <MyContext.Provider value="this is my context with class">
            <Child/>
        </MyContext.Provider>
    )
};

const Child = () => {
    return (
        <MyContext.Consumer>
            {
                (value) => {
                    return (
                        <p>{value}</p>
                    )
                }
            }
        </MyContext.Consumer>
    )
};

class ContextWithClass extends React.Component {
    render() {
        return (
            <Parent/>
        )
    }
}

export default ContextWithClass;