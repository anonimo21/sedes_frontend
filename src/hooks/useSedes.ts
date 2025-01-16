import axios from 'axios';
import { Sede } from '../types';
import { useState } from 'react';

export default function useSedes() {

    const [sedes, setSedes] = useState<Sede[]>([
        {
            code: 0,
            creationDate: '',
            foto: '',
            name: ''
        }
    ]);

    const fetchSedes = async () => {
        try {
            const url = 'http://127.0.0.1:8000/api/locations';

            const { data: sedesResult } = await axios.get<Sede>(url, {
                headers: {
                    'API-Key': import.meta.env.VITE_API_KEY
                }
            })
            console.log(sedesResult.sedes);
            setSedes(sedesResult.sedes);
        } catch (error) {
            console.error(error);
        }
    }

    return {
        sedes,
        fetchSedes
    }
}