import styled from 'styled-components'

const BoxInput = styled.div`
  display: flex;
  flex-direction: column;
`
const Form = styled.form`
  height: 6.5rem;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  vertical-align: middle;

  @media only screen and (max-width: 36em) {
    height: 10rem;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;

    input[type='text'] {
      width: 90vw;
    }

    button[type='submit'] {
      width: 90vw;
      padding: 0.5rem 0;
    }
  }
`
const ErrorMessage = styled.p`
  color: var(--red);
  font-size: 0.8em;
  padding: 0.5rem;
`

const InputDefault = styled.input`
  width: 350px;
  padding: 0.8rem;
  border-radius: 8px;
  border: 1px solid var(--gray-500);
  outline: 0;
`

const Label = styled.label`
  margin-bottom: 0.5rem;
`

const SubmitButton = styled.button`
  width: 150px;
  border: 1px solid var(--green);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  text-align: center;
  font-weight: 600;
  align-self: center;

  &:disabled {
    background: var(--gray-600);
    opacity: 0.15;
    cursor: not-allowed;
    &:hover {
      color: inherit;
    }
  }
  &:hover {
    background: var(--green);
    color: var(--gray-10);
  }
`

export { BoxInput, ErrorMessage, Form, InputDefault, Label, SubmitButton }
