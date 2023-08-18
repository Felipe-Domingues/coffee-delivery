import { styled } from 'styled-components'

export const Container = styled.main`
  display: flex;
  padding: 2rem 10rem 0;

  h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    margin-bottom: 3.375rem;
  }
`
