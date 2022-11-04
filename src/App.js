import React from 'react';
import CardList from './components/CardList';
import Searchbox from './components/Searchbox';
import Scroll from './components/Scroll'
//import { robots } from './robots';
import './containers/App.css';

   

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
    .then(users => this.setState({robots: users}));
}

onSearchChange = (event) => {
    this.setState({searchbox: event.target.value})


}

render() {
    const { robots, searchfield }= this.state;
    const filterRobots = robots.filter(robots=> {
        return robots.name.toLowerCase().includes(this.state.searchbox.toLowerCase());
    })
    if (robots.length === 0) {
        return <h1>loading</h1>
    } else {
        return (
            <dir className='tc'>
                <h2 className='f1'>RoboCobs</h2>
                <Searchbox SearchChange= {this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filterRobots}/>
                </Scroll>
            </dir>
    
        );

    }
   
}
}
    

export default App;