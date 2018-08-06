import React,{Component} from 'react';
import {fetchRandomData} from '../../services';
import Items from './item';
import './style.css';

export default class List extends Component{
    constructor(props){
        super(props);
        this.state={
            
            data:[]
        }
    }
    componentDidMount(){
  
        this.fetchData();
      
    }
    fetchData = () => {
    

      fetchRandomData()
        .then((res) => {
    
          const data = res.data.map((item) => {
            return {
              id:item.id,
              author_id:item.author_id,
              tab:item.tab,
              content:item.content,
              create_at:item.create_at,
              author:item.author,
              reply_count:item.reply_count,
              visit_count:item.visit_count,
              title:item.title

            };
          })
    
          this.setState({
            data,
          });
          console.log(res.data);
        })
        
    
    }
    render(){
    //    console.log(this.state.data)
        return(
            <div>
                <Items data={this.state.data}/>
                <ul className="pageNum">
                    <li>上一页</li>
                    <li className = "active">1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li>10</li>
                    <li>下一页</li>

                </ul>
            </div>
        )
    }
}