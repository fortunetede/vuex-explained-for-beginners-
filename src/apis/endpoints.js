import Vue from 'vue'
import axios from 'axios' 


const API_URL = 'https://jsonplaceholder.typicode.com'
const posts = API_URL + '/posts'

let headers = {
    'content-type': 'application/json',
}


export default {

    getPosts () {
        return axios({
            method: 'get',
            headers: headers,
            url: posts
        }).then((data) => {
            return data.data
        }).catch((error) => {
            console.log(error)
        })
    },

} 