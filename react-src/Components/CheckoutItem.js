import React from "react";
import styles from "../Styles/Checkout/CheckoutItem.module.css"
import { toast } from "react-toastify";

class CheckoutItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {visible:true};
        this.removeItem = this.removeItem.bind(this);
      }

     removeItem(e) {
         toast.configure();

        toast.error("Removed Item from Cart")

        this.setState(prevState => ({
            visible: false,
          }));

        console.log(this.state);
    }

    render() {
        if(!this.state.visible){
            return <></>
        }
        return (
            <><div className={styles.container}>
                <br></br>
                <h1 className={styles.name}>{this.props.name}</h1>
                <br></br>
                <img className={styles.img} src={this.props.imageLink} width={100} height={300}/>
                <hr />
                <h4 style={{textAlign:"center",padding:"0.5vw"}}>&#x20B9;{this.props.price}</h4>
                <div className={styles.button_container}>
                <button className={styles.buy_button} onClick={this.removeItem}>Remove</button>
                </div>
            </div>
 </>
        );
    }
}

export default CheckoutItem;
