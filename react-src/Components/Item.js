import React from "react";
import { toast } from "react-toastify";
import styles from "../Styles/Items/Item.module.css"

class Item extends React.Component {

    constructor(props) {
        super(props);
        this.state = {itemsLeft: props.itemsLeft};
        if(this.props.wish){
            this.wishButton=<button className={styles.buy_button} onClick={()=>{this.addWish()}}>Add to Wish</button>

        }
        else{
            this.wishButton=<></>
        }
      }

     addWish(e) {
        toast.configure();
        toast.success("Added item to Wish")
    }

    decreaseItemCount(e) {
        toast.configure();
        toast.success("Added item to Cart")
        this.setState(prevState => ({
            itemsLeft: (prevState.itemsLeft -1)>=0?(prevState.itemsLeft -1):prevState.itemsLeft
          }));
    }

    render() {

        if(this.state.itemsLeft<=0){
            return <></>
        }



        return (

            <><div className={styles.container}>
                <br></br>
                <h1 className={styles.name}>{this.props.name}</h1>
                <br></br>
                <img className={styles.img} src={this.props.imageLink} width={100} height={300}/>
                <hr />
                <p className={styles.description}>{this.props.description}</p>
                <hr />
                <h4 style={{textAlign:"center",padding:"0.5vw"}}>&#x20B9;{this.props.price}</h4>
                <h5 style={{textAlign:"center"}} className={styles.itemsLeft} >Items left: {this.state.itemsLeft}</h5>
                <div className={styles.button_container}>
                {this.wishButton}
                <button className={styles.add_button} onClick={()=>{this.decreaseItemCount()}}>Add to cart</button>

                </div>
                <br></br><br/>
            </div>
 </>
        );
    }
}

export default Item;
