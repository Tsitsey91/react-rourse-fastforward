// Our 1st custom component with which will wrap other components
import classes from './Card.module.css'

function Card(props) {
    return (
        <div className={classes.card}>
            {props.children}
            {/* the children is a special prop that
            every component receives by default. Children
            always holds the content that is passed between
            the opening and closing component tags...
            see MeetupItem.js file  */}
        </div>
    )
}

export default Card