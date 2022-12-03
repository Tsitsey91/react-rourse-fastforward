import MeetupItem from "./MeetupItem"

function MeetupList(props) {
    return (
        <ul className="list-group">
            {props.meetups.map((meetup) => { 
                return <MeetupItem
                key={meetup.id}
                image={meetup.image}
                title={meetup.title}
                description={meetup.description} />
            })}
        </ul>
    )
}

export default MeetupList