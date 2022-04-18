import React from "react";
import Item from "./Item";
import styles from "./Styles/Items/Items.module.css"


class Items extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            items: [{name:"Laptop",imageLink:"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",description:"A laptop",itemsLeft:2, price : 5000}
                   ,

                   {name:"Phone", imageLink:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&w=1000&q=80", price:900, itemsLeft:3, description:"Totally a phone!!"},
                   {name:"Phone", imageLink:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&w=1000&q=80", price:900, itemsLeft:8, description:"Totally a phone!!"},
                   {name:"Laptop",imageLink:"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",description:"A laptop",itemsLeft:2, price : 5000},
                   {name:"Phone", imageLink:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&w=1000&q=80", price:900, itemsLeft:3, description:"Totally a phone!!"},
                   {name:"Phone", imageLink:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&w=1000&q=80", price:900, itemsLeft:8, description:"Totally a phone!!"},
                ]
            }
    }

    render() {
        return (
            <>
                <div className={styles.container}>
                    {this.state.items.map(el => (
                        <Item wish={this.props.wish} name={el.name} itemsLeft={el.itemsLeft} imageLink={el.imageLink} description={el.description} price={el.price}/>
                    ))}
                </div>

                <br /><br /><br/>
            </>
        );
    }
}

export default Items;
