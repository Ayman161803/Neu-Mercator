import React from "react";
import { Link } from "react-router-dom";

import styles from "../../Styles/Common/Menu.module.css";

class Menu extends React.Component {
    loginRender = () => {
      if (this.props.isAuthenticated) {
        return (
          <ul className={styles.list}>
            <li><button className={styles.likeLink} onClick={this.props.setAuth}><Link to="/login">Logout</Link></button></li>
          </ul>
        )
      } else
      {
        return (
          <ul className={styles.list}>
            <li><Link to="/login">Login</Link></li>
          </ul>
        );
      }
    }

    render() {
        return (
            <div className={`${styles.box} ${this.props.visible ? styles.visible : styles.invisible}`}>
                <ul className={styles.list}>
                    <li>Menu</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/item">Catalogue</Link></li>
                    <li><Link to="/profile">Your Profile</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    {this.loginRender()}
                    <li><Link to="/checkout">Cart</Link></li>
                </ul>
            </div>
        );
    }
}

export default Menu;
