import { produce } from 'immer'
import { ActionTypes } from './actions'
import { Address, ProductRelationship } from '../../contexts/CartContext'

interface CartState {
  productsRelationship: ProductRelationship[]
  address: Address | null
  paymentMethod: 'Cartão de Crédito' | 'Cartão de Débito' | 'Dinheiro'
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_PRODUCT: {
      const ExistentProductIndex = state.productsRelationship.findIndex(
        (prod) => {
          return prod.idProduct === action.payload.newProduct.idProduct
        },
      )

      return produce(state, (draft) => {
        if (ExistentProductIndex < 0) {
          draft.productsRelationship.push(action.payload.newProduct)
        } else {
          const actualQuantity =
            draft.productsRelationship[ExistentProductIndex].quantity
          const quantityToBeAdded = action.payload.newProduct.quantity

          const exceed10 = actualQuantity + quantityToBeAdded > 10

          draft.productsRelationship[ExistentProductIndex].quantity = exceed10
            ? 10
            : actualQuantity + quantityToBeAdded
        }
      })
    }
    case ActionTypes.REMOVE_PRODUCT: {
      const productsWithoutRemoved = state.productsRelationship.filter(
        (prod) => {
          return prod.idProduct !== action.payload.idProductToBeRemoved
        },
      )

      return produce(state, (draft) => {
        draft.productsRelationship = productsWithoutRemoved
      })
    }
    case ActionTypes.ADD_PRODUCT_ITEM: {
      const productIndex = state.productsRelationship.findIndex((prod) => {
        return prod.idProduct === action.payload.idProduct
      })

      if (productIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.productsRelationship[productIndex].quantity += 1
      })
    }
    case ActionTypes.REMOVE_PRODUCT_ITEM: {
      const productIndex = state.productsRelationship.findIndex((prod) => {
        return prod.idProduct === action.payload.idProduct
      })

      if (productIndex < 0) {
        return state
      }

      const quantity = state.productsRelationship[productIndex].quantity

      if (quantity - 1 > 0) {
        return produce(state, (draft) => {
          draft.productsRelationship[productIndex].quantity -= 1
        })
      } else {
        const productsWithoutRemoved = state.productsRelationship.filter(
          (prod) => {
            return prod.idProduct !== action.payload.idProduct
          },
        )
        return produce(state, (draft) => {
          draft.productsRelationship = productsWithoutRemoved
        })
      }
    }
    default:
      return state
  }
}
