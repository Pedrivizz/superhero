import { fetchSuperheroes } from '../infrastructure/superhero.api.js'
import { assembleSuperheroes } from '../infrastructure/superhero.assembler.js'

let state = {
    heroes: [],
    error: null
}

export async function searchSuperheroes(term) {
    try {
        const rawData = await fetchSuperheroes(term)
        state.heroes = assembleSuperheroes(rawData)
        state.error = null
    } catch (err) {
        state.heroes = []
        state.error = 'No se pudo cargar los héroes'
    }
}

export function getHeroes() {
    return state.heroes
}

export function getError() {
    return state.error
}
