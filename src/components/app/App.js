import React from "react";
import "./app.css";
import Switcher from "../switcher/Switcher"
import HookSwitcher from "../switcher/Switcher-with-useState";
import Person from "../person/Person";
import HookPerson from "../person/Person-with-useState";

class App extends React.Component {

    render() {

        return (
            <div className="container">
                <Switcher />
                <HookSwitcher />
                <hr/>
                <Person />
                <hr/>
                <HookPerson />
            </div>
        )
    }
}

export default App;