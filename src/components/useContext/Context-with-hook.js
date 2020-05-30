import React, {useContext} from "react";

const MyContext = React.createContext();

const Parent = () => {
  return(
      <MyContext.Provider value="this is my context with hook">
          <Child />
      </MyContext.Provider>
  )
};

const Child = () => {
    const value = useContext(MyContext);
    return(
        <p>{value}</p>
    )
};

const ContextWithHook = () => {
    return (
        <div style={{border: "1px solid white", padding: "5px"}}>
            <Parent/>
        </div>
    )
};

export default ContextWithHook;