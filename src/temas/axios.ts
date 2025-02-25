import axios from "axios";
import { GIFResponse } from "../interfaces/gif.response";

const apiKey = "O6SK7GZnfFjsH4IwyxYZjNY8ZG8HY7hx";

export const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey,
    },
});

giphyApi.get<GIFResponse>('/random')
.then((resp) => {console.log(resp.data.data.url)})
.catch(err => console.error(err))


