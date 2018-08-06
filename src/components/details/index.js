import React,{Component} from 'react';
import './style.css';




export default class Details extends Component{
    constructor(props){
        super(props);
        this.state={
            
            data:[]
        }
    }
    componentDidMount(){
        let url = window.location.href.split("/");
       // console.log(url);
        let id = url[url.length-1];
       // console.log(id);
        // this.fetchData();
        // console.log(this.state);
      
        //console.log(this.props.id);
         fetch(`https://cnodejs.org/api/v1/topic/${id}`)
         .then(data=>data.json()).then((res) => {
            // console.log(res.data);
            this.setState({
                data : res.data
            })
         })
         
      
    }
   
  
    // fetchData = () => {
    

    //   fetchRandomData()
    //     .then((res) => {
    
    //       const data = res.data.map((item) => {
    //         return {
    //           id: item.id,
    //           author_id: item.author_id,
    //           tab: item.tab,
    //           content: item.content,
    //           create_at:item.create_at,
    //           author:item.author,
    //           reply_count:item.reply_count,
    //           visit_count:item.visit_count,
    //           title:item.title

    //         };
    //       })
    
    //       this.setState({
    //         data,
    //       });
    //     //   console.log(res.data);
    //     })
        
    
    // }
    render(){
        console.log(this.state.data)
        let content = this.state.data.content;
        let title = this.state.data.title;
      // console.log(content);
      //document.getElementsByClassName("content")[0].innerHTML = content;
        if(content){
            document.getElementsByClassName("content")[0].innerHTML = content;
            document.getElementsByClassName("title")[0].innerHTML = title;
         }
          
   
        return(
            <div className="details">
                {/* <button onclick={this.handleClickBack}>回到上一页</button> */}
                {/* <Items data={this.state.data}/> */}
            
                {/* {content} */}
                <div className="title"></div>
                <div className="content"></div>
            </div>
        )
    }
}