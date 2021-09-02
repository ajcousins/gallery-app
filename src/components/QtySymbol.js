import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function QtySymbol() {
  const basket = useSelector((state) => state.basket);
  const [qty, setQty] = useState(0);

  useEffect(() => {
    if (basket.length === 0) setQty(0);
    const items = basket.reduce((prev, cur) => {
      return prev + cur.qty;
    }, 0);
    setQty(items);
  }, [basket]);

  return <>{qty !== 0 && <div className='qty-symbol'>{qty}</div>}</>;
}
