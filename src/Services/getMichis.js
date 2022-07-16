const keyapi = '31gtCeKQBfk93hCqt1ofM6NJYpKpfrOV'

export default function getMichis ({giftsearch}=''){
    const urlapi = `https://api.giphy.com/v1/gifs/search?api_key=${keyapi}&q=${giftsearch}&limit=10&offset=0&rating=g&lang=en`
    return fetch(urlapi)
        .then(response => response.json())
        .then(resp => {
            const {data} = resp
            const michis = data.map(gift => {
                const {images, id, title} = gift
                const {url} = images.downsized_large
                return {id, title, url}
            })
            return michis
        })
}
