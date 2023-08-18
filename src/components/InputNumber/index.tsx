import { Container } from './styles'

export function CustomInputNumber() {
  return (
    <Container>
      <button title="Remover item">-</button>
      <input name="amount" type="text" readOnly value="" placeholder="0" />
      <button title="Adicionar item">+</button>
    </Container>
  )
}
