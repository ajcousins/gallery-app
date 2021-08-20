import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function SellDialogue({
  title,
  handleSell,
  confirmSellingData,
}) {
  const [error, setError] = useState("");
  const collectionsModel = useSelector((state) => state.collectionsModel);
  const thisIndex = collectionsModel.findIndex(
    (collection) => collection.title === title
  );
  const [sellData, setSellData] = useState({ price: "0", quantity: "0" });

  useEffect(() => {
    if (collectionsModel[thisIndex].sellData) {
      setSellData(collectionsModel[thisIndex].sellData);
    }
  }, []);

  useEffect(() => {
    console.log("sellData: ", sellData);
  }, [sellData]);

  const handleConfirm = (e) => {
    e.preventDefault();
    if (!e.target.form.price.value) {
      setError("Please enter a Unit Price.");
      return;
    }
    if (e.target.form.price.value <= 0) {
      setError("Invalid Price.");
      return;
    }
    if (!e.target.form.quantity.value) {
      setError("Please enter a Quantity.");
      return;
    }
    if (e.target.form.quantity.value <= 0) {
      setError("Invalid Quantity.");
      return;
    }

    confirmSellingData({
      price: e.target.form.price.value,
      quantity: e.target.form.quantity.value,
    });
  };

  const onChangeHandler = (e) => {
    const sellDataCopy = { ...sellData };
    sellDataCopy[e.target.id] = e.target.value;
    setSellData(sellDataCopy);
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
            value={sellData.price}
            onChange={onChangeHandler}
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
            value={sellData.quantity}
            onChange={onChangeHandler}
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
