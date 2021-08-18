import React, { Component } from 'react';

import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';


class GifListContainer extends Component {

    state = {
        gifs: []
    }

    fetchGifs = (query) => {
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=AxCw5XsgmWN7yxTc2CLtIZojDTxoiHma&q=${query}&limit=3&offset=0&rating=g&lang=en`)
        .then((response) => response.json())
        .then(({data}) => {
            this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
        })
    }

    render(){
        return (
            <div>
                <GifSearch fetchGifs={this.fetchGifs} />
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }
}


export default GifListContainer;