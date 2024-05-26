import { xior } from 'xior';

import { API_URL } from '@/config';

export const api = xior.create({ baseURL: API_URL, credentials: 'include' });

export const fetcher = (url: string) => api.get(url).then(res => res.data);
