import React, { Component } from 'react';
import { HashRouter as Router, Link } from "react-router-dom";

export default class Items extends Component {


    render() {
        console.log(this.props.data)
        let Item = this.props.data.map((element, index) => {
            return <li key={index} >
            <Link className="listLi" to={{ pathname: `details/${element.id}` }}>
            <span>{element.reply_count}/{element.visit_count}</span>{element.title}
            </Link></li>
        })

        return (
            <Router>
                <div className="list">
                    {Item}
                </div>
            </Router>
        )
    }
}