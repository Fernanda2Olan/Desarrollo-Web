import type { GIFResponse } from '../interfaces/gif.response'

const apiKey = "O6SK7GZnfFjsH4IwyxYZjNY8ZG8HY7hx";


fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    .then((resp) => resp.json())
    .then((body: GIFResponse) => console.log(body.data.images.fixed_width.url))
    .catch((err) => console.error(err));