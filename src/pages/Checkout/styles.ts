import { styled } from 'styled-components'
import { BaseButton } from '../../layouts/DefaultLayout/styles'

export const Container = styled.main`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 2rem;
  margin: 2.5rem 10rem 1rem;

  h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Baloo 2', cursive;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 23.4px */
    margin-bottom: 0.9375rem;
  }

  h3 {
    color: ${(props) => props.theme['base-subtitle']};
    /* Text/Regular M */
    font-family: Roboto;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 20.8px */
  }
`

export const AddressCard = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;
  border-radius: 6px;

  div#CardTitle {
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 0.5rem;

    div#icon {
      color: ${(props) => props.theme['yellow-dark']};
    }

    p {
      color: ${(props) => props.theme['base-text']};
      /* Text/Regular S */
      font-family: Roboto;
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 400;
      line-height: 130%; /* 18.2px */
    }
  }
`

export const AddressForm = styled.form`
  display: grid;
  width: 100%;
  grid-template-columns: 12.5rem auto 3.75rem;
  grid-template-rows: auto auto auto auto;
  gap: 1rem 0.75rem;
  grid-auto-flow: row;
  grid-template-areas:
    'cep . .'
    'rua rua rua'
    'numero complemento complemento'
    'bairro cidade uf';

  #cep {
    grid-area: cep;
    width: 12.5rem;
  }

  #rua {
    grid-area: rua;
  }

  #numero {
    grid-area: numero;
    width: 12.5rem;
  }

  #complemento {
    grid-area: complemento;
  }

  #bairro {
    grid-area: bairro;
    width: 12.5rem;
  }

  #cidade {
    grid-area: cidade;
  }

  #uf {
    grid-area: uf;
    width: 3.75rem;
    text-transform: uppercase;
  }

  input {
    display: flex;
    padding: 12px;
    align-items: center;
    align-self: stretch;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme['base-button']};
    background: ${(props) => props.theme['base-input']};
  }
`

export const PaymentCard = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;
  border-radius: 6px;
  margin-top: 0.75rem;

  div#CardTitle {
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 0.5rem;

    div#icon {
      color: ${(props) => props.theme.purple};
    }

    p {
      color: ${(props) => props.theme['base-text']};
      /* Text/Regular S */
      font-family: Roboto;
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 400;
      line-height: 130%; /* 18.2px */
    }
  }
`

export const PaymentMethodsContainer = styled.div`
  display: flex;
  /* grid-template-columns: auto auto auto; */
  gap: 0.75rem;
  width: 100%;

  div.input-radio {
    display: flex;
    flex: 1;
  }
  input[type='radio'] {
    display: none;
  }
  input[type='radio'] + label {
    display: flex;
    align-items: center;
    padding: 1rem;
    border-radius: 6px;
    gap: 0.75rem;
    background: ${(props) => props.theme['base-button']};
    flex: 1;
    cursor: pointer;

    color: ${(props) => props.theme.purple};

    p {
      color: ${(props) => props.theme['base-text']};
      font-family: Roboto;
      font-size: 0.75rem;
      font-style: normal;
      font-weight: 400;
      text-transform: uppercase;
    }
  }
  input[type='radio'] + label:hover {
    background: ${(props) => props.theme['base-hover']};
  }
  input[type='radio']:checked + label {
    border: 1px solid ${(props) => props.theme.purple};
    background: ${(props) => props.theme['purple-light']};
  }
`

export const CartProducts = styled.div`
  display: flex;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px;
  padding: 2.5rem;
  flex-direction: column;
  gap: 1.5rem;
`

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 16.5rem;
  overflow: auto;
`

export const Product = styled.div`
  div#container {
    display: flex;
    padding: 0.5rem 0.25rem;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;

    p#productPrice {
      color: ${(props) => props.theme['base-text']};
      text-align: right;
      font-size: 1rem;
      font-style: normal;
      font-weight: 700;
      line-height: 130%; /* 20.8px */
    }
  }

  div#info {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    img {
      width: 4rem;
      height: 4rem;
    }
  }

  div#details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;

    p {
      color: ${(props) => props.theme['base-subtitle']};
      font-style: normal;
      font-weight: 400;
      line-height: 130%; /* 20.8px */
    }

    div#actions {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }

  &::after {
    content: '';
    background: ${(props) => props.theme['base-button']};
    margin: 1.5rem 0;
    height: 1px;
    width: 100%;
    display: block;
  }
`

export const RemoveProductButton = styled(BaseButton)`
  background: ${(props) => props.theme['base-button']};
  gap: 0.25rem;
  color: ${(props) => props.theme['base-text']};
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem;
  height: 2.1875rem;

  div {
    color: ${(props) => props.theme.purple};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }
`

export const CheckoutResume = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: space-between;
    color: ${(props) => props.theme['base-text']};
    text-align: right;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 20.8px */
  }

  div:nth-child(3) {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 26px */
  }
`
export const DoCheckoutButton = styled(BaseButton)`
  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 22.4px */
  text-transform: uppercase;
  padding: 0.75rem 0.5rem;

  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`
