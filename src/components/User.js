const User = (props) => {
    return (
        <div className="aboutCard">
            <h2>Name: {props.name}</h2>
            <h3>Location: {props.location}</h3>
        </div>
    )
}

export default User;