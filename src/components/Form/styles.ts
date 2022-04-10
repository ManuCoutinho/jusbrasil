import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  vertical-align: middle;
`

const InputDefault = styled.input`
  width: 350px;
  padding: 0.8rem;
  border-radius: 8px;
  border: 1px solid var(--gray-500);
  outline: 0;
  margin: 1rem 0;
`

const Label = styled.label``

const SubmitButton = styled.button`
  border: 1px solid var(--green);
  padding: 0.8rem 1rem;
  border-radius: 8px;
  text-align: center;
  font-weight: 600;

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

export { Form, InputDefault, Label, SubmitButton }
