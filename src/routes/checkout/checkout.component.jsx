import { useSelector } from "react-redux";

import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
// import PaymentForm from "../../components/payment-form/payment-form.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
  TestWarning,
  StripeButtonContainer,
} from "./checkout.styles";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>Total: ${cartTotal}</Total>
      <TestWarning>
        *Please use the following text credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/24 - CVV: 123
      </TestWarning>
      <StripeButtonContainer>
        <StripeCheckoutButton price={cartTotal} />
      </StripeButtonContainer>
    </CheckoutContainer>
  );
};

export default Checkout;
