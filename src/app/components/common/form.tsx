import * as React from "react";

export const Form = ({ children, formData, onSubmit }: { children: React.ReactNode, formData: FormContextType, onSubmit: (event: any) => Promise<void> }) => {
  return <form onSubmit={onSubmit}>
    <FormContext.Provider value={formData}>
    {children}
    </FormContext.Provider>
    </form>
};

export class FormContextType {
    values: any;
    errors: any;
}

export const FormContext = React.createContext(new FormContextType());