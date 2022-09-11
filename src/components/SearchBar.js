import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import React from "react";


class SearchBar extends React.Component {
    state = {term: ''};


    onFormSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render () {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Search text</label>
                        <input type="text" value={this.state.term} onChange={(e) => this.setState({term: e.target.value})}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;