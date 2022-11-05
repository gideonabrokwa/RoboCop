import React, {Component} from 'react';
import CardList from './CardList';
import Searchbox from './Searchbox';
import scroll from './scroll';
import './App.css';

class App extends React.Component {
constructor() {
    super()
    this.state = {
        robots: [],
        searchbox: ''
    }
}

componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users => {this.setState({robots: users})});
}

onSearchChange = (event) => {
    this.setState({searchbox: event.target.value})


}

render() {
    const filterRobots = this.state.robots.filter(robots=> {
        return robots.name.toLowerCase().includes(this.state.searchbox.toLowerCase());
    })
    if (this.state.robots.length === 0) {
        return <h1>loading</h1>
    } else {
        return (
            <dir className='tc'>
                <h2 className='f1'>RoboCobs</h2>
                <Searchbox SearchChange= {this.onSearchChange}/>
                <scroll>
                    <CardList robots={filterRobots}/>
                </scroll>
            </dir>
    
        );

    }
   
 }
}
    

export default App;