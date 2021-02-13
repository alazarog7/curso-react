import { heroes } from "../data/heroes";

export const getHeroByName = ( name = '' ) => {
    const heroesList = heroes;
    if( name === '') {
         return heroesList;
    }
    return heroesList.filter( h => h.superhero
                                    .toLowerCase()
                                    .includes(name) );
}
