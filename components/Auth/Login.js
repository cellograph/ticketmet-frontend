import React, { useContext, useState, useEffect } from "react";
import jwtDecode from "jwt-decode";

import { BigBoldText } from "../styles/helpers.styles";
import { FormTag, FormGroupTag, InputTag, Button } from "../styles/form.styles";
import Link from "next/link";
import { useFormik } from "formik";
import { loginSchema } from "../../lib/validation/authValidation";
import { login } from "../../lib/actions/authActions";
import UserContext from "../Context/UserContext";
import Router from "next/router";

function Login(props) {
  const [error, setError] = useState(null);
  const { user, setUser } = useContext(UserContext);
  const [token, setToken] = useState(null);

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      isWait: false,
    },

    validationSchema: loginSchema,
    onSubmit: async (data, actions) => {
      actions.setSubmitting(true);
      const res = await login(data);
      actions.resetForm();
      actions.setSubmitting(false);
      if (res.data) {
        const data = jwtDecode(res.data.data);
        setUser({
          isAuth: true,
          user: data,
        });
      } else if (!res.data) {
        setError(res);
      }
    },
  });

  return (
    <>
      <BigBoldText
        style={{
          textAlign: "center",
        }}
      >
        Welcome to <em>Ticketmet!</em>
      </BigBoldText>
      <div style={{ margin: "2rem" }} />
      {error && <p>Invalid email or password.</p>}
      <FormTag onSubmit={handleSubmit} noValidate method="POST">
        <FormGroupTag>
          <label htmlFor="email">Email Address</label>
          <InputTag
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your email"
          />
          {errors.email && touched.email ? <p>{errors.email}</p> : null}
        </FormGroupTag>
        <FormGroupTag>
          <label htmlFor="password">Password</label>
          <InputTag
            type="password"
            placeholder="Enter your password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password ? <p>{errors.email}</p> : null}
        </FormGroupTag>
        <p style={{ margin: "1rem" }}>
          <Link href="auth/forgot">
            <a style={{ color: "navy" }}>Forgot password</a>
          </Link>
        </p>
        <Button type="submit" disabled={isSubmitting}>
          Login
        </Button>
      </FormTag>
      <p
        style={{
          textAlign: "center",
          marginTop: "5rem",
        }}
      >
        Already have an account?{" "}
        <Link href="/auth/join">
          <a style={{ color: "navy" }}>Join Now</a>
        </Link>
      </p>
    </>
  );
}

export default Login;
