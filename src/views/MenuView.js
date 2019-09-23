import React from 'react';
import { db } from '../data/firebase';
import '../index.css';
import Navbar from '../components/Navbar';
import Btn from '../components/Btn'
import Menu from '../data/menu.json'
import Order from '../components/Order';
import OrderName from '../components/OrderName';
import CategoryBtn from '../components/CategoryBtn'
import LunchBtn from '../components/LunchBtn'


class MenuView extends React.Component{
  
  constructor(props){
    super(props)
    this.state = {list: [], client:"",selectedNavbar:'menu',errorMsg:'',loading:false};
    this.add = this.add.bind(this);
    this.delete = this.delete.bind(this);
    this.view = this.view.bind(this);
    this.changeClient = this.changeClient.bind(this)
    this.clearOrder = this.clearOrder.bind(this);
    this.saveOrder = this.saveOrder.bind(this);
    this.addCheeseorEgg = this.addCheeseorEgg.bind(this);
    this.index = 0; 
  }

  add(valueToAdd,nameToAdd){
    let newList = [...this.state.list] 
    for( let i = 0; i < newList.length; i++) { 
      if (newList[i].name === nameToAdd) {
        newList[i].count++;
        newList[i].value = newList[i].value + valueToAdd;
        return this.setState({list:newList})
      }
    }
    this.setState({list: this.state.list.concat([{name : nameToAdd, unit_value:valueToAdd, value:valueToAdd, id:this.index, count:1 }])});
    this.index ++;
  }

  addCheeseorEgg(eggOrCheese) {
    let newList = [...this.state.list] 
    let lastItem = newList[newList.length-1];
    const lastItemAdd = lastItem.name.substr(lastItem.name.length - 7);

    if(lastItem === undefined || lastItemAdd === '+ Queso' || lastItemAdd === '+ Huevo') {
      return
    }
    if (eggOrCheese === '+ Queso') {
      lastItem.name = lastItem.name+' + Queso';
      lastItem.value = lastItem.value + (lastItem.count * 500);
      return this.setState({list:newList})
    }
    lastItem.name = lastItem.name+' + Huevo';
    lastItem.value = lastItem.value + (lastItem.count * 500);
    this.setState({list:newList})
  }
  
  delete(id) {
    let newList = [...this.state.list] 
    for( var i = 0; i < newList.length; i++) { 
      if ( newList[i].id === id) { 
        if( newList[i].count !== 1) {
          newList[i].value = newList[i].value - newList[i].unit_value ;
          newList[i].count--;
          return this.setState({list:newList})
        }
        newList.splice(i, 1);
        break;
      }
    }
    this.setState({list:newList})
  }

  view(category) {
    category = category.toLowerCase();
    if(category === 'desayunos'){
      this.setState({
        desayunos:true,
        almuerzos:false
      })
    }
    if(category === 'almuerzos') {
      this.setState({
        desayunos:false,
        almuerzos:true
      })
    }
  }

  changeClient(el) {
    this.setState({
      client: el.target.value
    })
  }

  clearOrder() {
    this.setState({
      list: [],
      client:"",
      errorMsg:""
    })
  }

  saveOrder(){
    if(this.state.client === ""){
      this.setState({
        errorMsg:'Debes ingresar un nombre.'
      }) 
      return 
    }
    this.setState({
      loading:true
    })
    let idClient = this.state.client + Date.now();
    let data =
    {
    id: idClient,
    client: this.state.client,
    list: this.state.list,
    not_ready: true,
    time: Date.now() 
    }

    db.collection('ordenes').doc(idClient).set(data)
    .then(() => {
      this.setState({
        loading:false
      })
        this.clearOrder();
    })

  }



  render(){
    return (
      <>
        <Navbar state={this.state.selectedNavbar} />
        <div className="content-row">
          <section className="button-content-col">
            <div className="category-btn-row">
              {Object.keys(Menu).map(btn=> <CategoryBtn  className ="btnCategory" name={btn.toUpperCase()} state={btn === 'Desayunos' ? this.state.desayunos : this.state.almuerzos} view={this.view} key={btn}/>)}
            </div>
              {this.state.desayunos &&
              <div className="item-btn-row"> 
              {Menu.Desayunos.map(btn=><Btn name={btn.name} value={btn.value} add={this.add} key={btn.name}/>)}
              </div> }
              {this.state.almuerzos && <LunchBtn add={this.add} addCheeseorEgg={this.addCheeseorEgg}/>}  
          </section>  
          <aside className="side-content-col">
            <div className="aside-content">
              <div className="line-order">
                <p>PEDIDO</p>
                <p className='error-msg'>{this.state.errorMsg}</p>
              </div>
              <OrderName changeClient={this.changeClient} client={this.state.client}/>
              <div className="order-content">
                <Order list = {this.state.list} delete={this.delete}/>
              </div>
              {!this.state.loading  ?
              <footer className="footer-side">
                <div className="btn-clear-col">
                  <button className="btn-aside-clear" onClick={this.clearOrder}>LIMPIAR</button>
                </div>
                <div className="btn-send-col">
                  <button className="btn-aside" onClick={this.saveOrder}>ENVIAR </button>
                </div>
              </footer>
              : 
              <footer>
                <p>Cargando . . .</p>
              </footer>
              }
            </div>
          </aside>
        </div>
      </>
    )
  }
}

export default MenuView;

