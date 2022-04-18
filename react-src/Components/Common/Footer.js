import React from "react";

import styles from "../../Styles/Common/Footer.module.css";

class Footer extends React.Component {
    render() {
        return (
            <div className={styles.footer}>
                &copy; IT254 Project
            </div>
        );
    }
}

export default Footer;
