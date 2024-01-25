import * as React from "react";
import { FormContext } from "./form";

export const FormField = ({
  children,
  name,
  title,
}: {
  children: React.ReactNode;
  name: string;
  title: string;
}) => {
  const {values, errors} = React.useContext(FormContext);

  return (
    <>
      <div
        className={
          "form-field" + (errors && errors[name] ? " form-field-error" : "")
        }
      >
        <label>{title}</label>
        {children}
        {errors && errors[name] && 
          <div className="text-red-500 text-sm">{errors[name]}</div>
        }
      </div>
    </>
  );
};
