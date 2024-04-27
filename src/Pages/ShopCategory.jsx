import "./CSS/ShopCategory.css";
import Item from "../Components/Item/Item";
import { useSelector } from "react-redux";
import Navbar from "../Components/Navbar/Navbar";
const ShopCategory = (props) => {
  const all_product =useSelector((state)=>state);
  return (
    <><Navbar/>
    <div className="shop-category">
    
      <p>{props.category}</p>
      
      <div className="shopcategory-products">
        {all_product.map((item, idx) => {
          if (props.category === item.category) {
            return (
              <Item
                key={idx}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div></>
  );
};

export default ShopCategory;
