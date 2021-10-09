import React from "react";
import firebase from "./Firebase/firebase";
import styled from "styled-components";

const Styles = styled.div`
  div,
  form {
    margin: auto;
  }
  code {
    color: black;
  }
`;

export const AdminView = () => {
  return (
    <Styles>
      <div>
        <h1>Admin View</h1>
      </div>
    </Styles>
  );
};
