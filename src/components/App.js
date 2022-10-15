import React from "react";
import axios from 'axios';
import SearchBar from "./SearchBar";

class App extends React.Component {
    state = {images: [] };
    onFormSubmit = async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {query: term },
            headers: {
                Authorization: 'Client-ID Evw0TT349e3PGqrKglHlVwUMy8gun5u3VD-wVX5i3lw'
            }
        });

        console.log(this);
        this.setState({images: response.data.results});
    }

    render () {
        return (
        <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar onSubmit={this.onFormSubmit} />
            Found: {this.state.images.length} images
        </div>
        );
    }
}

export default App;
