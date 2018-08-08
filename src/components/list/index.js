import React,{ Component} from 'react';
import { fetchListData } from '../../services';
// import Items from './item';
import PageButton from './pagebutton';
import './style.css';
import { LIST_TYPES } from '../../constant';

import { Link } from 'react-router-dom'

console.log(LIST_TYPES);
export default class List extends Component{
    constructor(props){
        super(props);
        this.state={
            
            data:[],//总数据
            indexList: [],//当前渲染的页面数据
            totalNum: '',//总条数
            totalPage: 0,//总页数
            pageNumber: 1, //当前页
            pageSize: 40, //每一页条数 
            type: LIST_TYPES[0], //筛选列表
            LIST_TYPES: []
        }
        // this.setPage = this.setPage.bind(this);
    }
    

    componentDidMount(){
        const pageNumber = this.props.match.params.pageNumber || 1;
        const pageSize = this.props.match.params.pageSize || 40;
        const type = this.props.match.params.type || 'all';
        this.fetchListData(pageNumber, pageSize, type)
        
    }
    fetchListData = (params) => {
        const {type, pageNumber, pageSize} = {...this.state, ...params}
        fetchListData(
          {
            type, 
            pageNumber, 
            pageSize
          }
        )
        .then((res) => {
            
            const data = res.data.map((item) => {
              return {
                id:item.id,
                content:item.content,
                title:item.title,
              
                url:item.author.avatar_url,
                dec:item.last_reply_at,
                reply_count:item.reply_count,
                visit_count:item.visit_count

    
              };
            })
            const { pageSize } = this.state;
            this.props.history.push(`/list/${type}/${pageNumber}/${pageSize}`);
            this.setState({
             
              type, 
              pageNumber, 
              pageSize,
              data,
              totalPage: Math.ceil(res.data.length / pageSize), //计算总页数
              indexList: res.data.slice(0, pageSize)
            });
            console.log(res.data);
        })
    }
    
   
    /*
     * 当分类改变时触发
     */
    handleFilterChange = (value) => {
        console.log(value);
        this.fetchListData({type: value});
    }

    /*
     * 当分类改变时触发
     */
    handlePageChange = ({pageNumber, pageSize}) => {
        this.fetchListData({pageNumber, pageSize});
        
    }

    render(){
    //    console.log(this.state.data)
        return(
            <div>
                <div className="list">
                    <div className="filter">
                        {
                            LIST_TYPES.map(
                            filterValue => (
                                <div
                                className={"filter-item" + (this.state.type === filterValue ? ' active' : '') } 
                                key={filterValue}
                                onClick = {() => this.handleFilterChange(filterValue)}
                                >
                                {filterValue}
                                </div>
                            )
                            )
                        }
                    </div>
                    {
                        this.state.data.map((element, index) => (
                        <li key={index}>
                            <Link className="listLi"
                            to={`/details/${element.id}?url=${encodeURIComponent(element.url)}&pageNumber=${this.state.pageNumber}&desc=${encodeURIComponent(element.desc)}`}
                            >
                            <span>{element.reply_count}/{element.visit_count}</span>{element.title}
                            </Link>
                        </li>
                        ))
                    }
                </div>
                {/* <PageButton {...this.state} setPage={this.setPage} /> */}
                {/* 按钮 */}
                <div className="page-button">
                    <PageButton
                        pageNumber={+this.state.pageNumber}
                        pageSize={+this.state.pageSize}
                        onChange={this.handlePageChange}
                    />
                </div>
                
            </div>
        )
    }
}