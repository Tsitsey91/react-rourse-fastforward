import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import Layout from "./components/layout/Layout";


function App() {
  //domain -> localhost:3000
  // my-page.com

  return (
    <Layout>
      <Switch>
        <Route path='/' exact={true}>
          <AllMeetupsPage></AllMeetupsPage>
        </Route>
        <Route path='/new-meetup'>
          <NewMeetupPage></NewMeetupPage>
        </Route>
        <Route path='/favorites'>
          <FavoritesPage></FavoritesPage>
        </Route>
      </Switch>
    </Layout>
  )
}

export default App;



/* Added Routing package: react-router-dom

In the end it means that we need
to add this routing tool to our code
so that we have this thing watching for URL changes.
And we need to let this thing
this tool know which component should be loaded
as a page for which route, for which URL. */