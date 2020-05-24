import React from "react";
import { BigBoldText } from "../styles/helpers.styles";
import { FormTag, FormGroupTag, InputTag, Button } from "../styles/form.styles";
import Link from "next/link";

function Registration(props) {
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
      <FormTag noValidate method="POST">
        <FormGroupTag>
          <label htmlFor="firstName">First Name</label>
          <InputTag type="text" placeholder="Enter your First Name" />
        </FormGroupTag>
        <FormGroupTag>
          <label htmlFor="lastName">Last Name</label>
          <InputTag type="text" placeholder="Enter your Last Name" />
        </FormGroupTag>
        <FormGroupTag>
          <label htmlFor="email">Email Address</label>
          <InputTag type="email" placeholder="Enter your email" />
        </FormGroupTag>
        <FormGroupTag>
          <label htmlFor="password">Password</label>
          <InputTag type="password" placeholder="Enter your password" />
        </FormGroupTag>
        <FormGroupTag>
          <label htmlFor="confirmPassword">Password</label>
          <InputTag
            type="confirmPassword"
            placeholder="Confirm your password"
          />
        </FormGroupTag>

        <Button type="submit">Join</Button>
      </FormTag>
      <p
        style={{
          textAlign: "center",
          marginTop: "5rem",
        }}
      >
        Already have an account?{" "}
        <Link href="/auth/login">
          <a style={{ color: "navy" }}>Login</a>
        </Link>
      </p>
    </>
  );
}

export default Registration;
