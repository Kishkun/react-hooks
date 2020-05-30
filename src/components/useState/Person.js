import React from "react";

class Person extends React.Component{

    state = {
        firstName: "Bob",
        secondName: "Smith"
    };

    updateName = () => {
      this.setState({
          firstName: "Alex"
      })
    };

    render() {
        const  {firstName, secondName} = this.state;

        return (
            <div>
                <p>{firstName} {secondName}</p>
                <button
                onClick={this.updateName}>
                    update to Alex
                </button>
            </div>
        )
    }
}

export default Person;