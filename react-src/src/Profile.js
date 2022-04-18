import React from "react";
import Items from "./Items";
import Data from "./Data";

import styles from "./Styles/Profile/Profile.module.css"
import { Link } from "react-router-dom";


class Profile extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            items: [{name:"Laptop",imageLink:"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",description:"The title can be misleading.This is not a Laptop.It is speed.", price : 5000}
                   ,

                   {name:"Phone", imageLink:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&w=1000&q=80", price:900, description:"Totally a phone!!"}
                ]

            }

    }


    render() {
        return (
            <>
                <br></br>
                <div className={styles.containerFirst}>
                    <div  className={styles.imageContainer}>
                        <img className={styles.image} src="https://media.istockphoto.com/vectors/profile-picture-vector-illustration-vector-id587805156?k=20&m=587805156&s=612x612&w=0&h=Ok_jDFC5J1NgH20plEgbQZ46XheiAF8sVUKPvocne6Y=" alt="Profile"></img>
                        <Data></Data>
                    </div>

                </div>

                <div className={styles.checkoutButtonContainer}>
                     <button className={styles.checkoutButton} ><Link style= { {textDecoration:"none",color:"black"}}to="/checkout">Proceed to Checkout</Link></button>
                </div>


                <header className={styles.heads}>My Wishlist</header>

                <div className={styles.containerSecond}>
                     <Items wish={false}></Items>
                </div>


                <br /><br /><br/>
            </>
        );
    }
}

export default Profile;
