import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {BACKEND_URL} from '../../configs';

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: BACKEND_URL,
        credentials: 'include',
    }),
    tagTypes: ['Todo'],
    endpoints: () => ({}),
    reducerPath: 'api',

})
