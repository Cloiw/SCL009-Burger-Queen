import React from 'react';
import logo from '../img/logo.png';
import { Link } from "react-router-dom"

class Navbar extends React.Component {
	constructor(props){
		super(props)
		this.state = {};
	}

	render() {
    return (
			<header>
				<nav className="menu-nav-row">
					<div className="menu-left-col">
							<img className="menu-icon" src={logo} alt="logo" />
					</div>
					<div className="menu-center-col">
							<ul className="menu-ul-row">
								<li className={this.props.state === 'menu' ? 'btn-selected-navbar' : 'menu-ul'}><Link to='/'>MENÚ</Link></li>
								<li className={this.props.state === 'kitchen' ? 'btn-selected-navbar' : 'menu-ul'}><Link to="/Kitchen">COCINA</Link></li>
								<li className={this.props.state === 'ordersReady' ? 'btn-selected-navbar' : 'menu-ul'}><Link to="/OrdersReady">PEDIDOS LISTOS</Link></li>
								<li className={this.props.state === 'record' ? 'btn-selected-navbar' : 'menu-ul'}><Link to="/Record">HISTORIAL</Link></li>
							</ul>
					</div>
					<div className="menu-right-col"></div>
				</nav>
			</header>
		)
	}
}
export default Navbar;