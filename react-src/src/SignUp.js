import React from "react";
import styles from "./Styles/SignUp/SignUp.module.css";
import {Link} from "react-router-dom";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class SignUp extends React.Component {

  constructor(props){
    super(props);
    this.showToast = this.showToast.bind(this);
  }

  showToast(e){
    toast.configure();
    toast("Account created succesfuly")
  }


  render() {
    return (
      <div class={styles.entirePage}>
      <div className={styles.box}>
        <div className={styles.header}>
          Sign Up
        </div>

        <div className={styles.login}>
          <div className={styles.username}>
            <label className={styles.labels} for="username">Username:</label>
            <input className={styles.input} type="text" name="u_name" id="username" />
          </div>
          <div className={styles.password}>
            <label className={styles.labels}  for="password">Email:</label>
            <input className={styles.input} type="email" name="e_name" id="password" />
          </div>
          <div className={styles.password}>
            <label className={styles.labels}  for="password">Door Number:</label>
            <input className={styles.input} type="password" name="p_name" id="password" />
          </div>
          <div className={styles.password}>
            <label className={styles.labels} for="password">Street:</label>
            <input className={styles.input} type="password" name="p_name" id="password" />
          </div>
          <div className={styles.password}>
            <label className={styles.labels} for="password">Landmark:</label>
            <input className={styles.input} type="password" name="p_name" id="password" />
          </div>
          <div className={styles.password}>
            <label className={styles.labels} for="password">City:</label>
            <input className={styles.input} type="password" name="p_name" id="password" />
          </div>
          <div className={styles.password}>
            <label className={styles.labels} for="password">Pincode:</label>
            <input className={styles.input} type="password" name="p_name" id="password" />
          </div>
          <div className={styles.password}>
            <label className={styles.labels} for="password">Password:</label>
            <input className={styles.input} type="password" name="p_name" id="password" />
          </div>
          <div className={styles.password}>
            <label className={styles.labels} for="password">Re-enter:</label>
            <input className={styles.input} type="password" name="p_name" id="password" />
          </div>
          <div>
          <Link to="/login"><button className={styles.submit}>Login</button></Link>
          <Link to="/login"><button className={styles.submit} onClick={this.showToast}>SignUp</button></Link>
          </div>
         </div>
      </div>
      </div>
    );
  }
}

export default SignUp;