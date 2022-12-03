
function MeetupItem(props){
    return(
        <div className="card" style="width: 18rem;">
            <img src={props.meetupdata.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.meetupdata.title}</h5>
                    <p className="card-text">{props.meetupdata.description}</p>
                    <button className="btn btn-primary">To Favorites</button>
                </div>
        </div>
    )
}

export default MeetupItem