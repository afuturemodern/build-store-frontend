import React, { createContext } from 'react';
import { useSignupForm } from './useSignupForm';

const SignupFormContext = createContext({} as ReturnType<typeof useSignupForm>);

const SignupFormContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <SignupFormContext.Provider value={useSignupForm()}>
            {children}
        </SignupFormContext.Provider>
    );
};

export { SignupFormContext, SignupFormContextProvider };