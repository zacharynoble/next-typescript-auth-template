import { useContext } from 'react';

import { AuthContext } from '@/contexts/auth-context';

export const useAuth = () => {
    const useAuthContext = useContext(AuthContext);

    if (!useAuthContext) throw new Error('Auth context provider not found');

    return useAuthContext;
};
