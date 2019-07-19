
import React from "react";

import { db } from "./firebase";

class SaveOrder extends React.Component {
  constructor(props) {
    super(props);
    this.saveOrder = this.saveOrder.bind(this)
    this.state = {
      formValues: {
        name: "",
        role: ""
      }
    };
  }

  saveOrder = () => {
    const data = {
      ...this.state.formValues,
      uid: new Date().getTime()
    };
    db.collection("ordenes").doc().set(data).then(() => {
       console.log("oli")
      })
  };

  

  render() {
   
    return (
      <>
        <div>
          
              <button onClick={this.saveOrder}>
                ENVIAR
              </button>
            
        </div>
      </>
    );
  }
}

  export default SaveOrder;