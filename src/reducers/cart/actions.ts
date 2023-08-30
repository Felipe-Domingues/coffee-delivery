import { ProductRelationship } from '../../contexts/CartContext'

export enum ActionTypes {
  ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  ADD_PRODUCT_ITEM = 'ADD_PRODUCT_ITEM',
  REMOVE_PRODUCT_ITEM = 'REMOVE_PRODUCT_ITEM',
}

export function addNewProductAction(newProduct: ProductRelationship) {
  return {
    type: ActionTypes.ADD_NEW_PRODUCT,
    payload: {
      newProduct,
    },
  }
}

export function RemoveProductAction(idProductToBeRemoved: string) {
  return {
    type: ActionTypes.REMOVE_PRODUCT,
    payload: {
      idProductToBeRemoved,
    },
  }
}

export function AddProductItemAction(idProduct: string) {
  return {
    type: ActionTypes.ADD_PRODUCT_ITEM,
    payload: {
      idProduct,
    },
  }
}

export function RemoveProductItemAction(idProduct: string) {
  return {
    type: ActionTypes.REMOVE_PRODUCT_ITEM,
    payload: {
      idProduct,
    },
  }
}
