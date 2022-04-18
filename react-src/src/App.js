import React from "react";

import "./Styles/Reset.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./Common/Header";
import Footer from "./Common/Footer";

import Home from "./Home";
import Items from "./Items";
import Profile from "./Profile";
import About from "./About";
import Checkout from "./Checkout";
import Login from "./Login";
import SignUp from "./SignUp";
import { toast } from "react-toastify";

//cart page yet to be added
class App extends React.Component {

      state = {
          isAuthenticated: false
      };

      setAuth = () => {
        this.setState({
          isAuthenticated: !this.state.isAuthenticated
        });
        if(!this.state.isAuthenticated){
            toast.configure();
            toast.success("Logged in Sucessfully")
        }
        else{
            toast.configure();
            toast.success("Logged out Sucessfully")
        }
      }


    render() {
        return (
            <div>
                <Router>
                    <Header isAuthenticated={this.state.isAuthenticated}
                        setAuth={this.setAuth}/>
                    <Routes>
                        <Route
                            path="/"
                            element={<Home />}
                        />
                        <Route
                            path="/item"
                            element={<Items wish={true} />}
                        />
                        <Route
                            path="/profile"
                            element={<Profile />}
                        />
                        <Route
                            path="/about"
                            element={<About />}
                        />
                        <Route
                            path="/checkout"
                            element={<Checkout />}

                         ></Route>
                         <Route
                            path="/login"
                            element={<Login setAuth={this.setAuth}/>}
                        />
                        <Route
                            path="/signup"
                            element={<SignUp />}
                        />
                    </Routes>
                    <Footer />
                </Router>
            </div>
        );
    }
}

export default App;
