import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Evw0TT349e3PGqrKglHlVwUMy8gun5u3VD-wVX5i3lw'
    }
});