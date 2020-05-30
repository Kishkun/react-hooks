import React, {useState} from "react";

const HookPerson = () => {

    const [firstName, setFirstName] = useState("Bob");
    const [secondName] = useState("Smith");

    const [person, setSecondName] = useState({
       firstName: "Bob",
       secondName: "Smith"
    });

    const updateName = () => setFirstName("Pasha");
    const updateSecondName = () => setSecondName((person) => {
        return {
            ...person,
            secondName: "Kishkun"
        }
    });

    return (
        <div style={{border: "1px solid white"}}>
            <p>{firstName} {secondName}</p>
            <button
                onClick={updateName}>
                update firstName
            </button>
            <br/>
            <p>{person.firstName} {person.secondName}</p>
            <button
                onClick={updateSecondName}>
                update secondName
            </button>
        </div>
    )
};

export default HookPerson;