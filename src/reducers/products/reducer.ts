import { produce } from 'immer'
import { ActionTypes } from './actions'
import { Address } from '../../contexts/CartContext'

export interface Product {
  id: string
  name: string
  description: string
  price: number
  tags: string[]
  image: string
  quantity: number
}

interface CartState {
  products: Product[]
  address: Address | null
  paymentMethod: 'Cartão de Crédito' | 'Cartão de Débito' | 'Dinheiro'
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_PRODUCT: {
      return produce(state, (draft) => {
        draft.products.push(action.payload.newProduct)
      })
    }
    case ActionTypes.REMOVE_PRODUCT: {
      const productsWithoutRemoved = state.products.filter((prod) => {
        return prod.id !== action.payload.idProductToBeRemoved
      })

      return produce(state, (draft) => {
        draft.products = productsWithoutRemoved
      })
    }
    case ActionTypes.ADD_PRODUCT_ITEM: {
      const productIndex = state.products.findIndex((prod) => {
        return prod.id === action.payload.idProduct
      })

      if (productIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.products[productIndex].quantity += 1
      })
    }
    case ActionTypes.REMOVE_PRODUCT_ITEM: {
      const productIndex = state.products.findIndex((prod) => {
        return prod.id === action.payload.idProduct
      })

      if (productIndex < 0) {
        return state
      }

      const quantity = state.products[productIndex].quantity

      if (quantity - 1 > 0) {
        return produce(state, (draft) => {
          draft.products[productIndex].quantity -= 1
        })
      } else {
        const productsWithoutRemoved = state.products.filter((prod) => {
          return prod.id !== action.payload.idProduct
        })
        return produce(state, (draft) => {
          draft.products = productsWithoutRemoved
        })
      }
    }
    default:
      return state
  }
}
