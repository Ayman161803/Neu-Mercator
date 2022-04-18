import React from "react";
import styles from "./Styles/Profile/Data.module.css"


class Profile extends React.Component {

    render() {
        return (
            <>
            <div className={styles.dataPair}>
                <p>Name : Suresh</p>
            </div>
            <div className={styles.dataPair}>
                <p>Email : notSuresh@gmail.com</p>
            </div>
            <div className={styles.dataPair}>
                <p>Age : 18 </p>
            </div>
            <div className={styles.dataPair}>
                <p>Street No.  : 76</p>
            </div>
            <div className={styles.dataPair}>
                <p>City: Mangalore</p>
            </div>
            <div className={styles.dataPair}>
                <p>Nationality : Indian</p>
            </div>
            </>
        );
    }
}

export default Profile;