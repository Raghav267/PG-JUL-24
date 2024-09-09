import "./Person.css"

const Person = (props) => {

    return (
        <figure >
            <h2>Name: {props.name}</h2>
            <h3>Age:{props.age}</h3>
            <h2>School: {props.school}</h2>
            {props.children}
        </figure>
    )
}

export default Person
