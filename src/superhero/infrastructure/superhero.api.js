import { api } from '../../shared/infrastructure/axios-instance'

/**
 * @summary Fetch superhero data by name from SuperHero API
 * @param {string} name - Superhero name to search
 * @returns {Promise<Object>} - Raw API response
 */
export async function fetchSuperheroByName(name) {
    try {
        const response = await api.get(`/search/${name}`)
        return response.data
    } catch (error) {
        console.error('Error fetching superhero:', error)
        return null
    }
}
