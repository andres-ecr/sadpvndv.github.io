//Base imports
import React from 'react';
import { FaInbox } from 'react-icons/fa';
import styled from 'styled-components';

export const FormContainer = styled.section`
  width: 100%;
  padding: 10rem 6rem;
  background: ${({ theme }) => theme.colors.black};
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  font-size: 1.5rem;

  @media (max-width: 950px) {
    width: 60%;
  }

  @media (max-width: 770px) {
    width: 100%;
  }

  input[type='submit'] {
    background: ${({ theme }) => theme.colors.darkGray};
    border: none;
    padding: 1rem;
    border-radius: 0.2rem;
    transition: all ease-out 0.5s;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    width: 18rem;
    font-size: 1.2rem;
    color: white;

    svg {
      fill: white;
      margin-right: 0.5rem;
      transition: all 0.3s;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.primary};

      svg {
        fill: ${({ theme }) => theme.colors.primary};
      }
    }
  }

  input[type='text'],
  input[type='email'],
  input[type='tel'],
  textarea {
    font-size: 1.5rem;
    border: 1.2px solid white;
    border-radius: 0.6rem;
    background: transparent;
    margin-bottom: 2rem;
    transition: all ease-out 0.3s;
    padding: 0.5rem;
    color: ${({ theme }) => theme.colors.secondary};

    @media (max-width: 770px) {
      padding: 2rem;
    }

    @media (max-width: 475px) {
      border-radius: 2.5rem;
      padding: 3rem 2rem;
      font-size: 2.5rem;
    }
  }

  input:focus,
  textarea:focus {
    outline: none;
    border: 1.2px solid ${({ theme }) => theme.colors.primary};
  }

  textarea {
    padding: 1rem;
  }

  label {
    font-weight: 600;
    margin-bottom: 1rem;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.white};
  }

  .form-agreement {
    width: 70%;

    label {
      font-weight: 200;
    }

    a {
      font-weight: 600;
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  .form-send {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 770px) {
      flex-direction: column;
      text-align: center;

      div {
        padding: 1rem 0;
      }
    }
  }
`;

function Form() {
  return (
    <FormContainer>
      <StyledForm>
        <label htmlFor="fname">name</label>
        <input type="text" id="fname" name="fname" required />
        <label htmlFor="email">email</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="phone">phone</label>
        <input type="tel" id="phone" name="phone" required />
        <label htmlFor="message">message</label>
        <textarea
          name="message"
          id="message"
          rows="10"
          cols="30"
          placeholder="tumensaje"
        />
        <div className="form-send">
          <input type="submit" name="submit" />
        </div>
      </StyledForm>
    </FormContainer>
  );
}

export default Form;
