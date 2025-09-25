/**
 * @summary Maps raw superhero API data into clean entity objects
 * @author Anyelo
 */

export function mapSuperheroData(apiResponse) {
    if (!apiResponse || apiResponse.response !== 'success') return []

    return apiResponse.results.map(hero => ({
        id: hero.id,
        name: hero.name,
        image: hero.image, // contiene .url
        powerstats: hero.powerstats,
        biography: hero.biography
    }))
}

