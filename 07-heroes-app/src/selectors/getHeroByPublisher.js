import { heroes } from "../data/heroes";

export const getHeroByPublisher = (publisher) => {

    const validPublihsers = ['DC Comics', 'Marvel Comics'];

    if(! validPublihsers.includes(publisher)){
        throw new Error('No se encontro el publisher')
    }
    //console.log(heroes);
    return heroes.filter( h => h.publisher == publisher );
}
