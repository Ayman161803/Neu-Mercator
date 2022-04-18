import React from "react";
import styles from "./Styles/About/About.module.css";

const msg1 = "Hello! Welcome to Mercator!";
const msg2 = "This is an e-commerce site created using ReactJS. It has been done as part of the IT254 Course Project."
const msg3 = "Team members are Adarsh Kishore, Md Ayman Nawaz, Harish Gumnur and Amogh B Shetty.";

class About extends React.Component {
  render() {
    return(
        <div class={styles.box}>
            <p class={styles.heading}>
                {msg1}
            </p>
            <p>
                {msg2}
            </p>
            <p>
                {msg3}
            </p>
        </div>
    );
  }
};

export default About;
