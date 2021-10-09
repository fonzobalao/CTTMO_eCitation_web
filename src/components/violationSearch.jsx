import React from "react";
import styled from "styled-components";
import useForm from "react-hook-form";

const Styles = styled.div`
  div,
  form {
    margin: auto;
  }
`;

export const violationSearch = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = input => {
    console.log(input);
  };

  return (
    <Styles>
      <div className="searchBar" class="input-group-sm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            name="userInput"
            className="form-control"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Control Number"
            id="controlNum"
            ref={register}
          />
          <br />
          <input className="btn btn-primary" type="submit" value="Submit" />
        </form>
      </div>
    </Styles>
  );
};
