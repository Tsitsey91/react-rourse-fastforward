import MeetupList from "../components/meetups/MeetupList";

/** Components in this folder(Pages) are just like 
 * any other component. The only difference is that they
 * will be loaded by our routing-package as pages, when 
 * a certain URL is typed 
 */

const Dummy_Data = [
    {
        id: 'm1',
        title: 'This is a first meetup',
        image:'https://picsum.photos/300/300',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
            'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
        id: 'm2',
        title: 'This is a second meetup',
        image:
            'https://picsum.photos/200/300',
        address: 'Meetupstreet 5, 12345 Athens Yoooo',
        description:
            'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
];


function AllMeetupsPage() {
    return (
        <div className="container">
            <h3 className="display-7">All Meetups Page</h3>
            <MeetupList meetups={Dummy_Data}/>
        </div>
    )
}

export default AllMeetupsPage;