import React from "react";
import styles from "./Styles/Checkout/Bill.module.css"

class Bill extends React.Component {


    render() {
        return (
            <>
            <div className={styles.container}>
               <button className={styles.pay_button}>Pay &#x20B9;</button>
            </div>
            </>
        );
    }
}

export default Bill;
