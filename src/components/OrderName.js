import React, {Component} from 'react';

class OrderName extends Component{
    constructor(props){
        super(props)
        this.state = {
            client: ""
        }
        this.changeClient = this.changeClient.bind(this)
    }

    changeClient(el){
        el.preventDefault();
        this.setState({
            client: el.target.value 
        })
    }

    render(){
        return (
            <form>
                <div className="ordenform">
                    <label>ORDEN</label>
                    <input type="text" onChange={this.changeClient} />
                    <input className ="buttonOrden" type="submit" value="enviar" onSubmit={this.changeClient}/>
                </div>
            </form>
        
        )
    }
}

export default OrderName