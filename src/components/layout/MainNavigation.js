//navigation bar

import { Link } from "react-router-dom"

function MainNavigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand">React/BootStrap Meetups</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to='/new-meetup' className="nav-link active">
                                Add New Meetups
                            </Link>
                        </li>
                        <li className="nav-item">
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


}

export default MainNavigation