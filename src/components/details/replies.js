import React, { Component } from 'react';
import './style.css';

class Replies extends Component {
    
    render() {
        // console.log(this.props.data);
    
        let replies = this.props.data.replies;
        console.log(replies)
        let detailReplies;
        if (replies) {
            detailReplies = replies.map((item,index) => {
                return (
                <div key={index} className="reply">
                        <h5 className="loginname">{item.author.loginname}</h5>
                        <div dangerouslySetInnerHTML={{ __html:item.content}} className="content"></div> 
                </div>)
            })
        }
        

        return (
            <div className="replies">
                <h3>回复</h3>
               
                {detailReplies}
            </div>
        )
    }
}
export default Replies