import { Minus, Plus } from '@phosphor-icons/react'
import { Container } from './styles'

interface CustomInputNumberProps {
  idProduct: string
  quantity: string | number
  canDecreaseQuantity: () => boolean
  decreaseQuantity: (el: HTMLInputElement | null) => void
  canIncreaseQuantity: () => boolean
  increaseQuantity: (el: HTMLInputElement | null) => void
}

export function CustomInputNumber(props: CustomInputNumberProps) {
  function handleDecreaseQuantity() {
    props.decreaseQuantity(
      document.querySelector(`[name="${'amount' + props.idProduct}"]`),
    )
  }
  function handleIncreaseQuantity() {
    props.increaseQuantity(
      document.querySelector(`[name="${'amount' + props.idProduct}"]`),
    )
  }

  return (
    <Container>
      <button
        title="Remover item"
        disabled={props.canDecreaseQuantity()}
        onClick={handleDecreaseQuantity}
      >
        <Minus size={14} weight="bold" />
      </button>
      <input
        name={'amount' + props.idProduct}
        type="text"
        readOnly
        value={props.quantity}
        placeholder="0"
      />
      <button
        title="Adicionar item"
        disabled={props.canIncreaseQuantity()}
        onClick={handleIncreaseQuantity}
      >
        <Plus size={14} weight="bold" />
      </button>
    </Container>
  )
}
