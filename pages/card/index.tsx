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
    <div>
      {/* <Button
        color="primary"
        type="button"
        onClick={() => setModalOpen(!modalOpen)}
      >
        Launch demo modal
      </Button>
      <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
        <div className=" modal-header">
          <h5 className=" modal-title" id="exampleModalLabel">
            Modal title
          </h5>
          <button
            aria-label="Close"
            className=" close"
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <ModalBody>...</ModalBody>
        <ModalFooter>
          <Button
            color="secondary"
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >
            Close
          </Button>
          <Button color="primary" type="button">
            Save changes
          </Button>
        </ModalFooter>
      </Modal> */}
      <div className="cart">
        <h1>Products in your cart</h1>
        {carts?.map((item: any) => (
          <div className="item" key={item.id}>
            <Image
              src={getImageURL(item.attributes.image.data.attributes.url)}
              width={200}
              height={200}
              alt=""
            />
            <div className="details">
              <h1>{item.attributes.name}</h1>
              <p>{item.desc?.substring(0, 100)}</p>
              <div className="price">
                {item.quantity} x ${item.attributes.price}
              </div>
              <div onClick={() => handleIncrease(item)}>+</div>
            </div>
            <DeleteOutlined
              className="delete"
              onClick={() => handlleRemove(item.id)}
            />
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
