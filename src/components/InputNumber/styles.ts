import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.375rem;
  gap: 0.25rem;
  background: ${(props) => props.theme['base-button']};

  input {
    outline: 0;
    background: transparent;
    border: 0;
    text-align: center;
    display: block;
    color: ${(props) => props.theme['base-title']};
    width: 1.25rem;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    outline: 0;
    background: transparent;
    border: 0;
    color: ${(props) => props.theme.purple};
    font-size: 0.875rem;
    cursor: pointer;
    width: 0.875rem;
    height: 0.875rem;
  }
`
