import { styled } from 'styled-components'
import IntroBackground from '../../../../assets/intro_background.svg'

export const BackgroundContainer = styled.div`
  padding: 5.75rem 10rem;
  background-image: url(${IntroBackground});
`

export const Container = styled.div`
  display: flex;
  gap: 3.5rem;

  div#text {
  }

  div#text h1 {
    color: ${(props) => props.theme['base-title']};
    font-family: 'Baloo 2', cursive;
    font-size: 3rem;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    align-self: stretch;
  }

  div#text h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    align-self: stretch;
    margin: 1rem 0 4.125rem 0;
  }
`

export const ItemsContainer = styled.div`
  display: grid;
  row-gap: 1.25rem;
  column-gap: 2.5rem;
  grid-template-columns: 18.375rem 18.375rem;
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
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
