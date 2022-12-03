import MeetupItem from "./MeetupItem"

function MeetupList(props){
    return (
        <ul className="list-group">
            {props.data.map(
                (meetup) => <MeetupItem meetupdata = {meetup}/>
            )}
        </ul>
    )
}

export default MeetupList