import { styled } from 'styled-components'

export const Container = styled.main`
  display: flex;
  padding: 2rem 10rem 0;
  flex-direction: column;

  @media (max-width: 820px) {
    padding: 1rem 2rem 0;
  }

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

export const ProductsList = styled.div`
  display: grid;
  column-gap: 2rem;
  row-gap: 2.5rem;
  grid-template-columns: auto auto auto auto;

  @media (max-width: 600px) {
    column-gap: 1.5rem;
    row-gap: 2rem;
    grid-template-columns: auto;
  }

  @media (min-width: 601px) and (max-width: 1000px) {
    column-gap: 1.5rem;
    row-gap: 2rem;
    grid-template-columns: auto auto;
  }
`
