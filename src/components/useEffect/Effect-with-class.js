import React from "react";

class ClassCounter extends React.Component{

    state = {
        value: 0,
        isVisible: true
    };

    componentDidMount() {
        console.log("class: mount")
    };

    componentDidUpdate(prevProps) {
        console.log("class: update")
    }

    onPlus = () => {
        this.setState({
            value: this.state.value + 1
        })
    };

    hideBlock = () => {
        this.setState({
            isVisible: false
        })
    };

    showBlock = () => {
        this.setState({
            isVisible: true
        })
    };

    render() {
        const { value, isVisible } = this.state;

        if (isVisible) {
            return (
                <div>
                    <button onClick={this.onPlus}>+</button>
                    <button onClick={this.hideBlock}>hide</button>
                    <p>{value}</p>
                </div>
            )
        }

        return(
            <div>
                <button onClick={this.showBlock}>show</button>
                <p>this is my Effect with class</p>
            </div>
        )
    }
}

export default ClassCounter;