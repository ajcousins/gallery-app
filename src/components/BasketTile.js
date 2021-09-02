import React from "react";
import numberToGBP from "../utils/numberToGBP";
import { useDispatch } from "react-redux";
import { updateQty, deleteItem } from "../actions";

export default function BasketTile({ item, qty, frontUrl, price }) {
  const dispatch = useDispatch();

  const handleQtyChange = (e) => {
    if (e.target.value < 1) return;
    if (e.target.value > 99) return;
    console.log("Change", e.target.value);
    dispatch(
      updateQty({
        title: item,
        qty: e.target.value,
      })
    );
  };

  const handleDeleteItem = () => {
    console.log("Delete");
    dispatch(
      deleteItem({
        title: item,
      })
    );
  };

  return (
    <div className='basket__tile'>
      <div className='basket__tile__img-wrapper'>
        <img className='basket__tile__img' src={frontUrl} alt={item} />
      </div>
      <div className='basket__tile__info'>
        <div className='basket__tile__item'>{item}</div>
        <div className='basket__tile__unit-price'>
          {numberToGBP(price * qty)}
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          Qty:
          <input
            class='front-input'
            type='number'
            style={{ width: "3.5em", marginLeft: "0.5em" }}
            value={qty}
            onChange={handleQtyChange}
          />
          <button
            class='front-btn btn-danger'
            style={{ marginLeft: "1em" }}
            onClick={handleDeleteItem}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
