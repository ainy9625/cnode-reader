import React, { Component } from 'react';

class PageButton extends Component {

    constructor(props) {
        super(props);
        this.setNext=this.setNext.bind(this);
        this.setUp=this.setUp.bind(this);
        this.state={
            // pageNumber: 0,  //跳转页码
            current:this.props.current, //存储当前页页码
           
        }
       
    }

    //下一页
    setNext(){
        if( this.state.current < this.props.totalPage){
            this.setState({
                current:this.state.current + 1 //点击下一页，当前页码+1
            },function () {
                this.props.setPage(this.state.current);
            })
        }
    }

    //上一页
    setUp(){
        if(this.state.current > 1){
            this.setState({
                current:this.state.current - 1 //点击上一页，当前页码-1
            },function () {
                this.props.setPage(this.state.current);
            })
        }
    }
    render() {
        console.log(this.state);
        return (
            <div className="page">
                <ul className="pageNum">
                        <li onClick={ this.setUp }>上一页</li>
                        {/* <li className = "active">1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                        <li>9</li>
                        <li>10</li> */}
                        <li>{ this.state.current }页/ { this.props.totalPage }页</li>
                        <li onClick={ this.setNext }>下一页</li>

                </ul>
                
                
            </div>
        );
    }
}


export default PageButton