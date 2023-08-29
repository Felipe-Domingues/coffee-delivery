import { styled } from 'styled-components'
import { BaseButton } from '../../../../layouts/DefaultLayout/styles'

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px 36px;
  background: ${(props) => props.theme['base-card']};
  padding: 1.25rem;

  img#ProductImage {
    width: 7.5rem;
    height: 7.5rem;
    margin: -2.5rem 0 1rem;
  }

  h3#name {
    font-family: 'Baloo 2', cursive;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    text-align: center;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 0.5rem;
  }

  p#description {
    color: ${(props) => props.theme['base-label']};
    text-align: center;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    margin-bottom: 2.0625rem;
  }
`

export const TagsContainer = styled.div`
  gap: 0.25rem;
  margin-bottom: 1rem;

  span {
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    font-size: 0.625rem;
    padding: 0.25rem 0.5rem;
    border-radius: 9999px;
    text-transform: uppercase;
    font-weight: 700;
    line-height: 130%;
  }
`

export const BuyContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0 0.25rem;
  justify-content: space-between;
  align-items: center;

  div#CartContainer {
    display: flex;
    gap: 0.5rem;
  }
`
export const Price = styled.p`
  color: ${(props) => props.theme['base-text']};
  text-align: right;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 18.2px */

  span {
    font-family: 'Baloo 2', cursive;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
  }
`

export const AddToCart = styled(BaseButton)`
  color: ${(props) => props.theme['base-card']};
  background: ${(props) => props.theme['purple-dark']};
  transition: background-color 0.6s;

  &:hover {
    background: ${(props) => props.theme.purple};
  }
`
