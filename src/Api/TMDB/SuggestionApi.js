import axios from './axios.js'
import requests from './request.js'

export async function getPopular(){
    try {
        const response = await axios.get(requests.fetchNetflixOriginals)
        return response.data;
    } catch (error) {
        throw(error)
    }
}

export async function getTop(){
    try {
        const response = await axios.get(requests.fetchTopRated)
            return response.data
    } catch (error) {
        throw(error)
    }
}

export async function getActionMovies(){
    try {
        const response = await axios.get(requests.fetchActionMovies)
        return response.data
    } catch (error) {
        throw(error)
    }
}