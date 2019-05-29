import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
    {
        name: 'Trang chủ',
        to: '/',
        exact: true
    },
    {
        name: 'Quản lí sản phẩm',
        to: '/product-list',
        exact: false
    },
    {
        name: 'Quản lí user',
        to: '/user-list',
        exact: false
    },
    {
        name: 'Login',
        to: '/login',
        exact: false
    },
];

const Menulink = ({label, to, activeOnlyWhenExact}) => {
    return (
        <Route 
            path = {to}
            exact = {activeOnlyWhenExact}
            children = {({match}) => {
                var active = match ? 'active' : ''
                return (
                    <li className= {active}>
                        <Link to ={to}>
                            {label}
                        </Link>
                    </li>
                );
            }}
        />
    )
}


class Menu extends Component {
    render() {
        return (
            <div className="navbar navbar-default">
                <Link to="/" className="navbar-brand">Call Api</Link>
                <ul className="nav navbar-nav">
                    {this.showMenus(menus)}
                </ul>
            </div>
        );
    }

    showMenus = (menus) => {
        var result = null ;
        if(menus.length > 0) {
            result = menus.map((menu, index)=> {
                return (
                    <Menulink
                        key = {index}
                        label = {menu.name}
                        to = {menu.to}
                        activeOnlyWhenExact = {menu.exact}
                    />
                );
            });
        }
        return result;
    }
}

export default Menu;
