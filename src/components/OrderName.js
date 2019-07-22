import React, {Component} from 'react';

class OrderName extends Component{
  
      render() {
        return (
          <form onSubmit={this.props.sendName} >
            <label>
              Cliente:
              <input value={this.props.client} onChange={this.props.changeClient} nameclient={this.addName}/>
              <button type="submit" nameclient={this.addName}>OK!</button>
            </label>
          </form>
        );
      }
    }

export default OrderName