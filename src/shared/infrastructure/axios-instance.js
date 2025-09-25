import axios from 'axios'

/**
 * @summary Axios instance configured for SuperHero APIaxios
 * @author Anyelo
 */
export const api = axios.create({
    baseURL: 'https://www.superheroapi.com/api.php/34c2309f395c1c6e87462599ead8ea44'
})
