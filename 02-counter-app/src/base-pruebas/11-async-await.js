

// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

export const getImagen = async() => {

    try {

        const apiKey = 'e1F8FYqV6yxP9gwAXkCkewVA0HGhSCaI';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        //const img = document.createElement('img');
        //img.src = url;
        //document.body.append( img );
        return url;
    } catch (error) {
        // manejo del error
       return 'error';
    }
    
    
    
}



