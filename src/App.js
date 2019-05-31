import React from 'react';
import Table from './Table';


class App extends React.Component {
    state = {
        data: [],
        total: null
    }
    render() {
        return (
            <Table data={this.state.data} fetchData={this.fetchData} total={this.state.total}/>
        );

// API call to fetch table data
    }
    componentDidMount() {
        this.fetchData(1);
    }
    fetchData = (pageNumber) => {
        var url = "http://www.omdbapi.com/?s=iron&apikey=c7e2df9&page=" + pageNumber;
        fetch(url).then(res => res.json()).then(res => {
            this.setState({ data: res.Search, total: res.totalResults})
        })
    }
}

export default App;


