function person(props){
    let vote = props.age >= 18 ? "Go vote!" : "You must be 18 to vote!";
    let hobbies = props.hobbies.map(hobby => <li>{hobby}</li>);
    return (
        <div>
            <p>Learn some information about this person</p>
            <ul>
                <li>Name: {props.name}</li>
                <li>Age: {props.age}</li>
                <ul>Hobbies: 
                    <li>{hobbies}</li>
                </ul>
            </ul>
            <h3>{vote}</h3>
        </div>
    )
}