import React, { Component } from 'react'

class Search extends Component {
    
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state={
            keyword : ' '
        }
    }

    onChange(e){
        this.setState({
            keyword : e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        this.props.searchUsers(this.state.keyword);
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="container input-group mt-3">
                <input onChange={this.onChange} type="text" className="form-control" placeholder="Search..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button className="btn btn-outline-primary" type="button" id="button-addon2">Search</button>
                </div>
            </form>
        )
    }
}

export default Search
