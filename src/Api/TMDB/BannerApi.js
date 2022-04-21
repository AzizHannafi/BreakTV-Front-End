import axios from './axios.js'
import requests from './request.js'

export async function getRandomBanner(){
    try {
        const response = await axios.get(requests.fetchTrending)
        return response.data.results;
    } catch (error) {
        throw(error)
    }
}