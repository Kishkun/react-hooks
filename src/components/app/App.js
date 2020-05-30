import React from "react";
import "./app.css";
import Switcher from "../switcher/Switcher"
import HookSwitcher from "../switcher/Switcher-with-useState";
import Person from "../useState/Person";
import HookPerson from "../useState/Person-with-hook";
import ContextWithClass from "../useContext/Context-with-class";
import ContextWithHook from "../useContext/Context-with-hook";

class App extends React.Component {

    render() {

        return (
            <div className="container">
                <Switcher/>
                <HookSwitcher/>
                <hr/>
                <p style={{color: "red"}}>useState example:</p>
                <Person/>
                <HookPerson/>
                <hr/>
                <p style={{color: "red"}}>useContext example:</p>
                <ContextWithClass/>
                <ContextWithHook/>
                <hr/>
            </div>
        )
    }
}

export default App;