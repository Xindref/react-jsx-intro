const Person = (props) => (
    <div>
        <p>Learn some information about {props.name}! {props.name} is {props.age} years old.</p>
        <h3>{props.age >= 18 ? `${props.name} should go vote soon!` :
            `${props.name} is not old enough to vote yet.`}</h3>
        <p>{props.name}'s hobbies include:</p>
        <ul>
            {props.hobbies.map(hobby => <li>{hobby}</li>)}
        </ul>
    </div>
);