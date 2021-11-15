import axios from 'Axios';

export default axios.create({
    baseurl: 'https://www.googleapis.com/youtube/v3',
})