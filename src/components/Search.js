import React from 'react';

class Search extends React.Component {

    state = {inputText: ''};

    onValueChange = (event) => {
        this.setState({inputText: event.target.value});
    }
    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.searchInput(this.state.inputText);
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Search Video...</label>
                        <input type="text" 
                            value={this.state.inputText}
                            onChange = {this.onValueChange} />
                    </div>
                </form>
            </div>
        )
    }
}

export default Search;