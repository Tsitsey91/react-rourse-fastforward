
function MeetupItem(props) {
    return (
        <div className="card mb-4">
            <div className="h-100 d-inline-block">
                <img src={props.image} className="card-img-top" alt={props.title} style={{maxHeight:300}} />
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <button className="btn btn-primary">To Favorites</button>
            </div>
        </div>
    )
}

export default MeetupItem