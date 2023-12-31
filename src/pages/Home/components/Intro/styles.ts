import { styled } from 'styled-components'
import IntroBackground from '../../../../assets/intro_background.svg'

export const BackgroundContainer = styled.div`
  padding: 5.75rem 10rem;
  background-image: url(${IntroBackground});

  @media (max-width: 600px) {
    padding: 2.5rem 2rem;
    background-size: cover;
  }

  @media (min-width: 601px) and (max-width: 1000px) {
    padding: 2.5rem 2rem;
    background: none;
  }
`

export const Container = styled.div`
  display: flex;
  gap: 3.5rem;

  @media (max-width: 600px) {
    display: block;

    img {
      display: none;
    }
  }

  @media (min-width: 601px) and (max-width: 1300px) {
    display: flex;

    img {
      display: none;
    }
  }

  div#text h1 {
    color: ${(props) => props.theme['base-title']};
    font-family: 'Baloo 2', cursive;
    font-size: 3rem;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    align-self: stretch;

    @media (max-width: 820px) {
      font-size: 1.7rem;
    }
  }

  div#text h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    align-self: stretch;
    margin: 1rem 0 4.125rem 0;

    @media (max-width: 820px) {
      font-size: 1rem;
      margin-bottom: 2rem;
    }
  }
`

export const ItemsContainer = styled.div`
  display: grid;
  row-gap: 1.25rem;
  column-gap: 2.5rem;
  grid-template-columns: 18.375rem 18.375rem;

  @media (max-width: 820px) {
    row-gap: 1.25rem;
    column-gap: 2rem;
    grid-template-columns: auto auto;
  }
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  @media (max-width: 820px) {
    display: grid;
    column-gap: 0.75rem;
    grid-template-columns: 2rem auto;
  }
`
const ICON_COLORS = {
  yellow: 'yellow',
  yellowDark: 'yellow-dark',
  gray: 'base-text',
  purple: 'purple',
} as const

interface ItemIconProps {
  statuscolor: keyof typeof ICON_COLORS
}

export const ItemIcon = styled.div<ItemIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  width: 2rem;
  border-radius: 9999px;
  background: ${(props) => props.theme[ICON_COLORS[props.statuscolor]]};
  color: ${(props) => props.theme.background};
`
