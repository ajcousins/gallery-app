import React, { useState } from "react";

export default function SellDialogue({
  title,
  handleSell,
  confirmSellingData,
}) {
  const [error, setError] = useState("");

  const handleConfirm = (e) => {
    e.preventDefault();
    if (!e.target.form.price.value) {
      setError("Please enter a Unit Price.");
      return;
    }
    if (e.target.form.price.value <= 0) {
      setError("Invalid price.");
      return;
    }
    if (!e.target.form.quantity.value) {
      setError("Please enter a Quantity.");
      return;
    }

    confirmSellingData({
      price: e.target.form.price.value,
      quantity: e.target.form.quantity.value,
    });
  };

  return (
    <div className='sell-dialogue'>
      <form>
        <div className='sell-dialogue__grid'>
          <h3 className='sell-dialogue__title'>{title} </h3>
          {error && (
            <div className='error-msg sell-dialogue__error'>{error}</div>
          )}

          <div style={{ display: "flex", alignItems: "center" }}>
            <label for='price'>Unit Price (£):</label>
          </div>
          <input
            className='sell-dialogue__input'
            id='price'
            type='number'
            step='0.01'
            min='0.01'
            required
          />

          <div style={{ display: "flex", alignItems: "center" }}>
            <label for='quantity'>Quantity in Stock:</label>
          </div>
          <input
            className='sell-dialogue__input'
            id='quantity'
            type='number'
            step='1'
            min='1'
          />
          <div className='sell-dialogue__btn-panel'>
            <button type='submit' onClick={handleConfirm}>
              Confirm
            </button>
            <button onClick={handleSell}>Cancel</button>
          </div>
        </div>
      </form>
    </div>
  );
}
