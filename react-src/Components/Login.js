import React from "react";
import styles from "../Styles/Login/Login.module.css";
import {Link} from "react-router-dom";

class Login extends React.Component {
  render() {
    return (
      <div class={styles.entirePage}>
        <div className={styles.box}>
          <div className={styles.header}>
            Login
          </div>

          <div className={styles.login}>
            <div className={styles.username}>
              <label for="username">Username:</label>
              <input className={styles.input} type="text" name="u_name" id="username" />
            </div>

            <div className={styles.password}>
              <label for="password">Password:</label>
              <input className={styles.input} type="password" name="p_name" id="password" />
            </div>

            <div>
              <Link to="/"><button
                className={styles.submit}
                onClick={this.props.setAuth}>Login</button>
              </Link>

              <Link
                to="/SignUp"><button
                className={styles.submit}>SignUp</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
