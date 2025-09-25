// summary: Assembler to transform API data into Superhero entity
// author: Anyelo Alejos
import { Superhero } from "../domain/model/superhero.entity.js"

export class SuperheroAssembler {
    static toEntityFromResource(resource) {
        return new Superhero({
            id: resource.id,
            name: resource.name,
            intelligence: resource.powerstats?.intelligence ?? "Unknown",
            aliases: resource.biography?.aliases ?? [],
            imageUrl: resource.image?.url ?? ""
        })
    }

    static toEntitiesFromResponse(response) {
        if (!response || response.data.response !== 'success') return []
        return response.data.results.map(this.toEntityFromResource)
    }
}

