import { GIFResponse } from '../interfaces/gif.response';
import {giphyApi} from './axios'

export const obtenerImagen = async () => {
   try {
    const respuesta = await giphyApi.get<GIFResponse>('/random');
    return respuesta.data.data.images.fixed_height.url;
   } catch (error) {
    throw "URL no encontrado";
   }

    
};


obtenerImagen()
.then(URL => console.log({URL}))
.catch((err) => console.log(err));
