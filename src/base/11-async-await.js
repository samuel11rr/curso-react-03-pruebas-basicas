export const getImagen = async() => {

    try {

        const apiKey = 'vzjvKeO6aO8ny7ShoR4tHc6BGWK5EPl6';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        return 'No existe';
    }
    
    
    
}
