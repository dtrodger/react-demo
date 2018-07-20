import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar.js';

const YOUTUBE_KEY = 'AIzaSyDQrm2XulJDuGuQ-jDvRnBO1hF7nKmHf5g';

const App = () => {
    return (
        <div>
            <searchBar />
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('.container'));