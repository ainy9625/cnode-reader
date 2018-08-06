import React,{Component} from 'react';
import {fetchRandomData} from '../../services';
import Items from './item';
import PageButton from './pagebutton';
import './style.css';

export default class List extends Component{
    constructor(props){
        super(props);
        this.state={
            
            data:[],
            totalNum: '',//总条数
            current: 1, //当前页
            pageSize: 10, //每一页条数
            totalPage: 0,//总页数
            indexList: []
        }
        this.setPage = this.setPage.bind(this);
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
          const { pageSize } = this.state;
          this.setState({
            data,
            totalPage: Math.ceil(res.data.length / pageSize), //拿到数据后计算总页数
            indexList: res.data.slice(0, pageSize)
          });
          console.log(res.data);
        })
        
    
    }
    setPage(pageNumber) {
         console.log(this.state.pageSize);
          const {pageSize}  = this.state;
          const startIndex = (pageNumber - 1) * pageSize;
    
          this.setState({
            indexList: this.state.data.slice(startIndex, startIndex + pageSize),
    
          })
      }

    render(){
    //    console.log(this.state.data)
        return(
            <div>
                <Items data={this.state.indexList}/>
                {/* <ul className="pageNum">
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

                </ul> */}
                <PageButton {...this.state} setPage={this.setPage} />
            </div>
        )
    }
}