export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=e1F8FYqV6yxP9gwAXkCkewVA0HGhSCaI&q=${ encodeURI(category) }&limit=10&offset=0`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map( e => {
       return  {
                    id: e.id,
                    title: e.title,
                    url: e.images.downsized_medium.url
                };
    })

   return gifs;
}