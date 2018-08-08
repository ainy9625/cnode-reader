import React,{Component} from 'react';
import { fetchDetailData } from '../../services';
import Replies from './replies'
import './style.css';

export default class Details extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[],            
        }
    }
    componentDidMount(){
        let url = window.location.href.split("/");
        let id = url[url.length-1];
      
        fetchDetailData(id).then((res)=>{          
            this.setState({
                data :res.data,                
            })           
        });
    }

    handleClickBack(e){
        e.preventDefault();
        e.stopPropagation();
        window.history.back();
    }
   
    render(){
        let content = this.state.data.content;
        let title = this.state.data.title;
    
        if(content){
            document.getElementsByClassName("content")[0].innerHTML = content;
            document.getElementsByClassName("title")[0].innerHTML = title;           
        }

        return(
            <div className="details">
                <button onClick={this.handleClickBack.bind(this)}>回到上一页</button>
            
                {/* {content} */}
                <div className="article">
                    <div className="title"></div>
                    <div className="content"></div>
                </div>
                
                <Replies data={this.state.data}/>
            </div>
        )
    }
}