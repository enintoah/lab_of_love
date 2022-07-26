import axios from 'axios';

export const getcards = (cards)=>{
    return axios.get('/api/cards/',cards)
}