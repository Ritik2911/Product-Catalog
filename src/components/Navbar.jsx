import { FaShoppingCart } from "react-icons/fa";
import image from "../assets/logo.png";
import { CartDiv, NavArea, NavDiv } from "../StyledComponents/Navbar";

const Navbar = () => {
  return (
    <NavArea >
      <nav>
        <NavDiv>
          <div>
            <img src={image} alt="" width="120px" />
          </div>

          <CartDiv >
            <div>
              <p>Home</p>
            </div>

            <div>
              <div>
                <FaShoppingCart />
              </div>
            </div>
          </CartDiv>
        </NavDiv>
      </nav>
    </NavArea>
  );
};

export default Navbar;
