import axios from 'axios';

const fetcher = axios.create({
    baseURL: process.env.REACT_APP_WS_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

export function uploadExcelService(type, userData)
{   
    return new Promise((resolve, reject) => {
        fetcher.post('/api/'+type, userData,
            {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => res.data);
    });    
}