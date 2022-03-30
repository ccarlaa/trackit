import { createContext } from 'react';

export const InfoLogin = createContext();

export function InfoProvider(children) {
    return (
        <InfoLogin.Provider>
            {children}
        </InfoLogin.Provider>
    )
}