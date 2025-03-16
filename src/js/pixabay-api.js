import axios from "axios";

const MY_KEY = '49320414-34c235123b434a4e0d748057d';

export function getRequest(request, page = 1, perPage = 15) {
    return axios.get('https://pixabay.com/api/', {
        params: { 
            key: MY_KEY,
            q: request,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            page: page,
            per_page: perPage,
        }
    });
}