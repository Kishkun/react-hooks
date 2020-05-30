import React from "react";

class Switcher extends React.Component{

    state = {
        color: 'white'
    };

    setDark = () => {
        this.setState({
            color: 'black'
        })
    };

    setLight = () => {
        this.setState({
            color: 'white'
        })
    };

    render() {
        const {color} = this.state

        return (
            <div
                style={{
                    padding: "10px",
                    backgroundColor:color
                }}
            >
                <button onClick={this.setDark}>Change in Dark</button>
                <button onClick={this.setLight}>Change in Light</button>
            </div>
        )
    }
}

export default Switcher;