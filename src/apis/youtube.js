import axios from 'axios';

const KEY = 'AIzaSyDw3mXMexbohNoQ4N4I4gfZwdc-BV7AG0M';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        'part': 'snippet',
        maxResults: 5,
        key: KEY
    }
});