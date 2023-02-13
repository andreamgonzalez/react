import React from react;

import tweetComponent from "./tweetComponent";

function App() {
    return (
        <div>
            <tweetComponent username="jenni jones" name="jenni_from_the_block" date={new Date().toString()} message="This a wild tweet"/>
            <tweetComponent username="bobby bob" name="bobiddy_bob" date={new Date().toString()} message="This tweet cray"/>
            <tweetComponent username="adam smith" name="adam" date={new Date().toString()} message="This a cool tweet"/>
        </div>
    );
}

export default App;