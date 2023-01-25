import React from "react";
import { useForm } from "@formspree/react";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";

const Form = () => {
  const [state, handleSubmit] = useForm("mwkjpgrd");
  const [error, setError] = useState("");
  console.log(state);

  useEffect(() => {
    if (state.errors.length > 0) {
      console.log(state.errors[0].message);
      setError(state.errors[0].message);
      // console.log();
    } else {
      setError("");
    }
  }, [state]);

  if (state.succeeded) {
    return (
      <Wrapper>
        <h1 className='success-form'>Thanks for Contacting Me!</h1>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {error != "" && (
        <h1
          className='success-form'
          style={{ color: "white", textAlign: "center" }}
        >
          ** {error} **
        </h1>
      )}
      <form
        id='fs-frm'
        name='simple-contact-form'
        acceptCharset='utf-8'
        method='post'
        onSubmit={handleSubmit}
      >
        {/* <input id='fs-frm-inputs' /> */}
        <label htmlFor='full-name'>Full Name</label>
        <input
          type='text'
          name='name'
          id='full-name'
          placeholder='First and Last'
          required=''
        />
        <label htmlFor='email-address'>Email Address</label>
        <input
          type='email'
          name='_replyto'
          id='email-address'
          placeholder='email@domain.tld'
          required=''
        />
        <label htmlFor='message'>Message</label>
        <textarea
          rows='5'
          name='message'
          id='message'
          placeholder='Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla nullam quis risus.'
          required=''
        ></textarea>
        <input
          type='hidden'
          name='_subject'
          id='email-subject'
          value='Contact Form Submission'
        ></input>

        <input type='submit' value='Submit' />
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .form {
    display: flex;
    flex-direction: column;
  }
  .success-form {
    padding: 0;
    margin-left: 0;
    font-size: 2rem;
    font-family: "Josefin Slab";
    font-style: normal;
    line-height: 2.5rem;
    color: rgb(64, 79, 79);
  }
  #fs-frm input,
  #fs-frm select,
  #fs-frm textarea,
  #fs-frm fieldset,
  #fs-frm optgroup,
  #fs-frm label,
  #fs-frm #card-element:disabled {
    font-family: "Josefin Slab";
    font-style: normal;
    font-size: 1.5rem;
    color: inherit;
    border: none;
    border-radius: 0;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  #fs-frm label,
  #fs-frm legend,
  #fs-frm ::placeholder {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    padding-top: 0.2rem;
    display: flex;
    align-items: baseline;
  }

  /* border, padding, margin, width */
  #fs-frm input,
  #fs-frm select,
  #fs-frm textarea,
  #fs-frm #card-element {
    border: 1px solid rgba(0, 0, 0, 0.2);
    background-color: rgba(255, 255, 255, 0.9);
    padding: 0.75em 1rem;
    margin-bottom: 1.5rem;
  }
  #fs-frm input:focus,
  #fs-frm select:focus,
  #fs-frm textarea:focus {
    background-color: white;
    outline-style: solid;
    outline-width: thin;
    outline-color: gray;
    outline-offset: -1px;
  }
  #fs-frm [type="text"],
  #fs-frm [type="email"] {
    width: 100%;
  }
  #fs-frm [type="button"],
  #fs-frm [type="submit"],
  #fs-frm [type="reset"] {
    width: auto;
    cursor: pointer;
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
  }
  #fs-frm [type="button"]:focus,
  #fs-frm [type="submit"]:focus,
  #fs-frm [type="reset"]:focus {
    outline: none;
  }
  #fs-frm [type="submit"],
  #fs-frm [type="reset"] {
    margin-bottom: 0;
  }
  #fs-frm select {
    text-transform: none;
  }

  #fs-frm [type="checkbox"] {
    -webkit-appearance: checkbox;
    -moz-appearance: checkbox;
    appearance: checkbox;
    display: inline-block;
    width: auto;
    margin: 0 0.5em 0 0 !important;
  }

  #fs-frm [type="radio"] {
    -webkit-appearance: radio;
    -moz-appearance: radio;
    appearance: radio;
  }

  /* address, locale */
  #fs-frm fieldset.locale input[name="city"],
  #fs-frm fieldset.locale select[name="state"],
  #fs-frm fieldset.locale input[name="postal-code"] {
    display: inline;
  }
  #fs-frm fieldset.locale input[name="city"] {
    width: 52%;
  }
  #fs-frm fieldset.locale select[name="state"],
  #fs-frm fieldset.locale input[name="postal-code"] {
    width: 20%;
  }
  #fs-frm fieldset.locale input[name="city"],
  #fs-frm fieldset.locale select[name="state"] {
    margin-right: 3%;
  }
`;

export default Form;
