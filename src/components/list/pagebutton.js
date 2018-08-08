import React, { Component } from 'react';

export default class PageButton extends Component {
    state = {

    }

    handlePageChange = (pageNumber) => {
        if(this.props.onChange){
            this.props.onChange({
                pageNumber,
                pageSize: this.props.pageSize,
            });
        }
    } 
    render() { 
        const { pageNumber = 1,hasNext = true } = this.props;

        const pageBtnList = [];
        pageBtnList.push(<span className="current" key={`${pageNumber}`}>第{pageNumber}页</span>);   
        return ( 
            <div >            
                {pageNumber > 1 && 
                    <button onClick={()=>this.handlePageChange(pageNumber - 1)}>
                        前一页
                    </button>
                }

                {pageBtnList}

                { 
                    hasNext && 
                    <button onClick={()=>this.handlePageChange(pageNumber + 1)}>
                        后一页
                    </button>
                }
    
            </div>
        );
    }
}
 
