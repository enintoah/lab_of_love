import React from 'react';
import { AuthRoute } from '../util/route_util';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import MainPageContainer from './main_page/main_page_container';
import LoginForm from './session/login_form_container';
import SignupForm from './session/signup_form_container';
// import NavContainer from './nav/nav_container';
import Welcome from './welcome'
import ShowPage from './show_page/show_page_container';
import EditPage from './show_page/edit_page_container';
import MessagingPageContainer from './messaging_page/messaging_page_container';
// import './css/ExaTwqqWQAM6s9m.jpeg'
// import MainPage from './main/main_page';

const App = () => (
    <div>
    {/* // <h1>Logut</h1> */}
    <Switch>
        <Route path='/welcome' component={Welcome}/>
        <AuthRoute path="/login" component={LoginForm}/>
        <AuthRoute path="/signup" component={SignupForm}/>
        <Route exact path="/messaging/:match_id" component={MessagingPageContainer} />
        <Route exact path="/users/:user_id" component={ShowPage} />
        {/* Redirect */}
        <Route exact path="/users/:user_id/edit" component={EditPage}/>
        <Route exact path="/" component={MainPageContainer} />
    </Switch>
    </div>
);

export default App;