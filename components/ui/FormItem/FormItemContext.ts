import { createContext, useContext } from 'react';

export const FormItemContext = createContext({ error: false });

export const useFormItemContext = () => useContext(FormItemContext);
