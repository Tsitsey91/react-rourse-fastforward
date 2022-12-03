//navigation bar

import { Link } from "react-router-dom"

function MainNavigation() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <Link to='/' className="navbar-brand">React/BootStrap Meetups</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to='/new-meetup' className="nav-link active">
                                Add New Meetups
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/' className="nav-link active">
                                All Meetups
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/favorites' className="nav-link active">
                                My Favorites
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )

    // <header>
    //     <div>React Meetups</div>
    //     <nav>
    //         <ul>
    //             <li>
    //                 <Link to='/'>All Meetups</Link>
    //             </li>
    //             <li>
    //                 <Link to='/new-meetup'>Add New Meetups</Link>
    //             </li>
    //             <li>
    //                 <Link to='/favorites'>My Favorites</Link>
    //             </li>
    //         </ul>
    //     </nav>
    // </header>
}

export default MainNavigation