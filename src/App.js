import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Component/Home/Home/Home';
import LearnerBook from './Component/Learner/LearnerBook/LearnerBook';
import LogIn from './Component/LogIn/LogIn';
import { createContext, useState } from 'react';
import PrivateRoute from './Component/LogIn/PrivateRoute/PrivateRoute';
import Service from './Component/Home/Service/Service';
import LearnerReview from './Component/Learner/LearnerReview/LearnerReview';
import BookingList from './Component/Home/BookingList/BookingList';
import OrderListAdmin from './Component/Home/Admin/OrderListAdmin';
import AddService from './Component/Home/Admin/AddService/AddService';
import AddAdmin from './Component/Home/Admin/AddAdmin/AddAdmin';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute path="/booking">
            <LearnerBook></LearnerBook>
          </PrivateRoute>
          <PrivateRoute path="/booking">
            <Service></Service>
          </PrivateRoute>
          <PrivateRoute path="/learner/review">
            <LearnerReview></LearnerReview>
          </PrivateRoute>
          <PrivateRoute path="/learner/allBooking">
            <BookingList></BookingList>
          </PrivateRoute>
          <PrivateRoute path="/admin/order">
            <OrderListAdmin></OrderListAdmin>
          </PrivateRoute>
          <PrivateRoute path="/admin/addService">
            <AddService></AddService>
          </PrivateRoute>
          <Route path="/admin/addAdmin">
            <AddAdmin></AddAdmin>
          </Route>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
