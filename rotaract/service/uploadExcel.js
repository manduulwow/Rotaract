import axios from 'axios';

const fetcher = axios.create({
    baseURL: process.env.REACT_APP_WS_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

export function UploadExcel(type, userData, token)
{   
    return new Promise((resolve, reject) => {
        fetcher.post('/api/'+type, userData,
            {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Bearer '+token
            }
        }).then(res => res.data);
    });    
}