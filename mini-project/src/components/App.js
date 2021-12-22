import React, { Component } from 'react';
import Users from './Users';
import Search from './Search';
import axios from 'axios';

export class App extends Component {

    constructor(props){
        super(props);
        this.searchUsers = this.searchUsers.bind(this);


        this.state={
            users : []
        }
    }

    searchUsers(keyword){
        axios
        .get(`https://api.github.com/search/user?q=${keyword}`)
        .then(res=>this.setState({users:res.data.items}));
    }

    render() {
        return (
            <div>
                <Search/>
            </div>
        )
    }
}

export default App
