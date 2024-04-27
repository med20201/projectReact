import CartItems from "../Components/CartItems/CartItems";
import LoginSignup from "./LoginSignup";

const Cart = () => {
  return (
    <div>
     {<LoginSignup/>?  <CartItems /> : <LoginSignup/>}
    </div>
  );
};

export default Cart;
