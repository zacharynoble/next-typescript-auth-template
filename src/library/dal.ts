import 'server-only';

import { cookies } from 'next/headers';
import { cache } from 'react';

import { api } from '@/library/api';
import type { User } from '@/types';

const options = () => ({
    headers: {
        Cookie: cookies().toString(),
    },
});

export const getUser = cache(async () =>
    api
        .get<User>('/user', options())
        .then(res => res.data)
        .catch(() => undefined),
);
