import React from "react";
import { Link } from "react-router-dom";

import Menu from "./Menu";
import styles from "../../Styles/Common/Header.module.css";

class Header extends React.Component {
    state = { visible: false };

    toggleMenu = (event) => {
        this.setState({visible: !this.state.visible});
    }

    render() {
        return (
            <div style={{zIndex: 1000}}>
                <div className={styles.header}>
                    <div className={styles.text}>
                        <Link to="/">Mercator</Link>
                    </div>
                    <div className={styles.topRight}>

                        <button style={{marginRight:"1vw"}}className={styles.button} onClick={this.toggleMenu}>
                            <i className={`fas fa-${this.state.visible ? "times" : "bars"}`}></i>
                        </button>
                    </div>
                </div>
                <Menu visible={this.state.visible} isAuthenticated={this.props.isAuthenticated}
                setAuth={this.props.setAuth}/>
            </div>
        );
    }
}

export default Header;
