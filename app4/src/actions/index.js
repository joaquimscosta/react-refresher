import axios from 'axios'

const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=123456fake'
export const FETCH_POSTS = 'fetch_posts'
export function fetchPost(){
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    return {
        type:FETCH_POSTS,
        payload:request
    }
}