import React, { useState, useContext } from "react";
import HomePageBodySection from "./Sections/HomePageBodySection";
import styled from "styled-components";
import { BigNormalText, BigBoldText } from "./styles/helpers.styles";
import { FormTag, FormGroupTag, InputTag, Button } from "./styles/form.styles";



const SectionCard = styled.div`
  padding: 2rem;
  width: 100%;
  min-height: 10rem;
  background: #fff;
  border: 1px solid #ddd;
  box-shadow: 0px 8px 8.28px 0.72px rgba(0, 0, 0, 0.04);

  .sechead {
    margin-bottom: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-size: 2.2rem;
    }
    button {
      border: none;
      outline: none;
      background: navy;
      color: #fff;
      padding: 0.8rem 1.6rem;
    }
  }

  .secbody {
    width: 40%;
    margin: 1rem auto;
    min-height: 4rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    * {
      margin-right: 1rem;
    }
  }

  .secform {
    width: 40%;
    margin: 1rem auto;
    min-height: 4rem;
  }
`;

function ProfileCard(props) {
  const [edit, setEdit] = useState(false);
  
  return (
    <HomePageBodySection bg="#fff">
      <div
        style={{
          width: "80%",
          height: "100%",
          margin: "3rem auto",
        }}
      >
        <SectionCard>
          <div className="sechead">
            <h2>Your Profile</h2>
            <button type="button" onClick={() => setEdit(!edit)}>
              Edit Profile
            </button>
          </div>
          {!edit ? (
            <>
              <div className="secbody">
                <BigBoldText fsz="1.6rem">Full Name:</BigBoldText>
                <BigNormalText fsz="1.6rem">Ahmed Rakib Imran</BigNormalText>
              </div>
              <div className="secbody">
                <BigBoldText fsz="1.6rem">Gender: </BigBoldText>
                <BigNormalText fsz="1.6rem">Male</BigNormalText>
              </div>
              <div className="secbody">
                <BigBoldText fsz="1.6rem">Mobile: </BigBoldText>
                <BigNormalText fsz="1.6rem">+880 1955898711</BigNormalText>
              </div>
            </>
          ) : (
            <div className="secform">
              <FormTag method="POST" noValidate>
                <FormGroupTag>
                  <label htmlFor="firstName">First Name</label>
                  <InputTag type="text" placeholder="Enter your First Name" />
                </FormGroupTag>
                <FormGroupTag>
                  <label htmlFor="lastName">Last Name</label>
                  <InputTag type="text" placeholder="Enter your Last Name" />
                </FormGroupTag>
                <FormGroupTag>
                  <label htmlFor="mobile">Mobile</label>
                  <InputTag type="mobile" placeholder="Enter your Mobile" />
                </FormGroupTag>
                <Button type="submit">Save</Button>
              </FormTag>
            </div>
          )}
        </SectionCard>
      </div>
    </HomePageBodySection>
  );
}

export default ProfileCard;
