'use client';

import * as React from "react";
import { useValidation } from "../../lib/hooks/useValidation";
import * as Joi from "joi";
import { AuthUser, useAuthStore } from "../../lib/stores/useAuthStore";
import { useState } from "react";
import { useHttp } from "../../lib/hooks/useHttp";
import { Button } from "../common/button";
import { MERCHANT_LOGIN_API as LOGIN_API } from "../../lib/config";
import { Form } from "../common/form";
import { FormField } from "../common/form-field";

const schema = Joi.object({
  username: Joi.string().required().label("Username"),
  password: Joi.string().required().label("Password"),
});

export const LoginForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const setCurrentUser = useAuthStore((state: any) => state.setCurrentUser);
  const { httpPost } = useHttp();
  const {
    isValid,
    handleChange,
    errors,
    values,
  } = useValidation(schema, { username: "", password: "" });

  const submit = async (event: any) => {
    event.preventDefault();
    if (isValid()) {
      const { username, password } = values;
      setSubmitting(true);
      try {
        const response = await httpPost(LOGIN_API, {
          username,
          password,
        });
        setCurrentUser(response.data as AuthUser);
      } catch (err: any) {
        setError(err.response.data.message);
      } finally {
        setSubmitting(false);
      }
    }
  };

  return (
    <Form formData={{ values, errors }} onSubmit={submit}>
      <FormField name="username" title="Username/Email">
        <input
          type="text"
          name="username"
          autoFocus={true}
          value={values.username}
          onChange={handleChange}
        />
      </FormField>
      <FormField name="password" title="Password">
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
      </FormField>
      <div className="flex justify-end mb-3">
        <Button type="submit" disabled={submitting} className="px-5">Register</Button>
      </div>
      {error && <p className="alert">{error}</p>}
    </Form>
  );
};
