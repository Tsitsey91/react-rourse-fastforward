import MeetupItem from './MeetupItem'
import classes from './MeetupList.module.css'

function MeetupList(props) {
    return (
        <ul className={classes.list}>
            {props.meetups.map((meetup) => {
                return <MeetupItem
                    key={meetup.id}
                    id={meetup.id}
                    image={meetup.image}
                    title={meetup.title}
                    address={meetup.address}
                    description={meetup.description}
                    /** we could also pass the whole object with 
                    meetup = {meetup}
                    and destructure it inside the MeetupItem.js file
                     */
                />
            })}
        </ul>
    )
}

export default MeetupList