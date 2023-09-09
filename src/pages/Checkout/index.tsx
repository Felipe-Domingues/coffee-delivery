import {
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Trash,
} from '@phosphor-icons/react'
import {
  AddressCard,
  AddressForm,
  CartProducts,
  CheckoutResume,
  Container,
  DoCheckoutButton,
  PaymentCard,
  PaymentMethodsContainer,
  Product,
  ProductsContainer,
  RemoveProductButton,
} from './styles'
import InputMask from 'react-input-mask'
import { Americano } from '../../assets/products'
import { CustomInputNumber } from '../../components/InputNumber'

export function Checkout() {
  return (
    <Container>
      <div>
        <h2>Complete seu pedido</h2>
        <AddressCard>
          <div id="CardTitle">
            <div id="icon">
              <MapPinLine size={22} />
            </div>
            <div>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>
          <AddressForm>
            <InputMask
              id="cep"
              type="text"
              placeholder="CEP"
              mask="99999-999"
              alwaysShowMask={false}
            />
            <input id="rua" type="text" placeholder="Rua" />
            <input id="numero" type="text" placeholder="Número" />
            <input id="complemento" type="text" placeholder="Complemento" />
            <input id="bairro" type="text" placeholder="Bairro" />
            <input id="cidade" type="text" placeholder="Cidade" />
            <InputMask id="uf" type="text" placeholder="UF" mask="aa" />
          </AddressForm>
        </AddressCard>
        <PaymentCard>
          <div id="CardTitle">
            <div id="icon">
              <CurrencyDollar size={22} />
            </div>
            <div>
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>
          <PaymentMethodsContainer>
            <div className="input-radio">
              <input
                type="radio"
                id="creditCard"
                name="paymentMethods"
                value="Cartão de Crédito"
              />
              <label htmlFor="creditCard">
                <CreditCard size={16} />
                <p>CARTÃO DE CRÉDITO</p>
              </label>
            </div>
            <div className="input-radio">
              <input
                type="radio"
                id="debitCard"
                name="paymentMethods"
                value="Cartão de Débito"
              />
              <label htmlFor="debitCard">
                <CreditCard size={16} />
                <p>CARTÃO DE DÉBITO</p>
              </label>
            </div>
            <div className="input-radio">
              <input
                type="radio"
                id="money"
                name="paymentMethods"
                value="Dinheiro"
              />
              <label htmlFor="money">
                <CreditCard size={16} />
                <p>DINHEIRO</p>
              </label>
            </div>
          </PaymentMethodsContainer>
        </PaymentCard>
      </div>
      <div>
        <h2>Cafés selecionados</h2>
        <CartProducts>
          <ProductsContainer>
            <Product>
              <div id="container">
                <div id="info">
                  <img src={Americano} alt="" />
                  <div id="details">
                    <p>Expresso Tradicional</p>
                    <div id="actions">
                      <CustomInputNumber
                        idProduct="a"
                        quantity={0}
                        canDecreaseQuantity={() => true}
                        canIncreaseQuantity={() => true}
                        decreaseQuantity={(props: any) => {}}
                        increaseQuantity={(props: any) => {}}
                      />
                      <RemoveProductButton>
                        <div>
                          <Trash size={16} />
                        </div>
                        REMOVER
                      </RemoveProductButton>
                    </div>
                  </div>
                </div>
                <p id="productPrice">R$ 9,90</p>
              </div>
            </Product>
            <Product>
              <div id="container">
                <div id="info">
                  <img src={Americano} alt="" />
                  <div id="details">
                    <p>Expresso Tradicional</p>
                    <div id="actions">
                      <CustomInputNumber
                        idProduct="a"
                        quantity={0}
                        canDecreaseQuantity={() => true}
                        canIncreaseQuantity={() => true}
                        decreaseQuantity={(props: any) => {}}
                        increaseQuantity={(props: any) => {}}
                      />
                      <RemoveProductButton>
                        <div>
                          <Trash size={16} />
                        </div>
                        REMOVER
                      </RemoveProductButton>
                    </div>
                  </div>
                </div>
                <p id="productPrice">R$ 9,90</p>
              </div>
            </Product>
          </ProductsContainer>
          <CheckoutResume>
            <div>
              <p>Total de itens</p>
              <p>R$ 29,70</p>
            </div>
            <div>
              <p>Entrega</p>
              <p>R$ 3,50</p>
            </div>
            <div>
              <p>Total</p>
              <p>R$ 33,20</p>
            </div>
          </CheckoutResume>
          <DoCheckoutButton>CONFIRMAR PEDIDO</DoCheckoutButton>
        </CartProducts>
      </div>
    </Container>
  )
}
