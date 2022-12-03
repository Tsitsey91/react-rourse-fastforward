/** Components in this folder(Pages) are just like 
 * any other component. The only difference is that they
 * will be loaded by our routing-package as pages, when 
 * a certain URL is typed 
 */

const Dummy_Data = [
    {
        id: 'm1',
        title: 'This is a first meetup',
        image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
            'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
        id: 'm2',
        title: 'This is a second meetup',
        image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Meetupstreet 5, 12345 Athens Yoooo',
        description:
            'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
];

function AllMeetupsPage() {
    return (
        <div>
            <h1>All Meetups Page</h1>
            <ul>
                {Dummy_Data.map(
                    (meetup) => { return <li key={meetup.id}>{meetup.title}</li> }
                )}
            </ul>
        </div>
    )
}

export default AllMeetupsPage;