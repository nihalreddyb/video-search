import axios from 'axios';

const KEY = 'AIzaSyCxmV6SgfIW3JEInoikUkKmGftgn4wCdcs';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 25,
        key: KEY   
    }
})