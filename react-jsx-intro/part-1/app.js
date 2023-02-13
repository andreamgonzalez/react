import React from react;
import firstComponent from "./firstComponent";
import namedComponent from "./namedComponent";

const App = () => {
    return (
        <div>
            <firstComponent />
            <namedComponent name="Jane"/>
        </div>
    )
}

export default App;