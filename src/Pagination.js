import React from 'react';
import  './assets/style/index.css';

class Pagination extends React.Component {

    state = {
        currentPage: 1
    };

    handlePreviousClick = () => {
        const currentPage = this.state.currentPage;
        if(currentPage > 1){
            this.setState({
                currentPage: currentPage - 1
            });
            this.props.fetchData(currentPage - 1);
        }
    }

    handleNextClick = () => {
        const currentPage = this.state.currentPage;
        if(currentPage < Math.ceil(this.props.total / 5)){
            this.setState({
                currentPage: currentPage + 1
            });
            this.props.fetchData(currentPage + 1);
        }
    }

    handlePageClick = (pageNumber) => {
        this.setState({
            currentPage: pageNumber
        });
        this.props.fetchData(pageNumber);
    }

    
  // Rendering the pagination component
    render() {
        const pageNumbers = [];
        if (this.props.fetchData.total !== null) {
            const currentPage = this.state.currentPage;
            for (let i = currentPage; i < currentPage + 5; i++) {
                pageNumbers.push(i);
            }

            var renderPageNumbers = pageNumbers.map(number => {
                if(number === this.state.currentPage){
                    return (
                        <span key={number} onClick={() => this.handlePageClick(number)}><b>{number}</b> &nbsp; &nbsp; &nbsp;</span>
                    );
                }
                return (
                    <span key={number} onClick={() => this.handlePageClick(number)}>{number}&nbsp; &nbsp; &nbsp;</span>
                );

            });
        }


        return (
            
            <div className = 'pagination'>
                <span onClick={() => this.handlePreviousClick()}>Previous&nbsp; &nbsp; &nbsp;</span>
                {renderPageNumbers}
                <span onClick={() => this.handleNextClick()}>Next</span>
            </div>
        );
    }
}


export default Pagination;
