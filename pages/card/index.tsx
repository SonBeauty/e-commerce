import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import Image from "next/image";
import { getImageURL } from "../../utils/ImageUtil";

const Card = () => {
  const dispatch = useDispatch();
  const handlleRemove = (productId) => {
    dispatch({ type: "removeProduct", productId });
  };
  const [modalOpen, setModalOpen] = React.useState(false);
  const { carts } = useSelector((state) => state.cart);
  console.log(carts);

  const handleIncrease = (productId) => {
    console.log(productId);
    dispatch({ type: "increase", productId });
  };

  return (
    <div className="container">
      <div className="container">
        {carts?.map((item: any) => (
          <div className="d-flex" key={item.id}>
            <div className="me-5 mt-5 ">
              <Image
                src={getImageURL(item.attributes.image.data.attributes.url)}
                width={200}
                height={200}
                alt=""
              />
            </div>

            <div className="details mt-5">
              <h1>{item.attributes.name}</h1>
              <p>{item.desc?.substring(0, 100)}</p>
              <div className="price">
                {item.quantity} x ${item.attributes.price}
              </div>
              <div onClick={() => handleIncrease(item)}>+</div>
              <div className="btn btn-danger">
                <DeleteOutlined
                  className=""
                  onClick={() => handlleRemove(item.id)}
                />
              </div>
            </div>
          </div>
        ))}
        <div className="total">
          <span>SUBTOTAL</span>
        </div>
        {/* <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={() => dispatch(resetCart())}>
        Reset Cart
      </span> */}
      </div>
    </div>
  );
};

export default Card;
