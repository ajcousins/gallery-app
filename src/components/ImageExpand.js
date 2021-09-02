import React, { useState, useEffect } from "react";
import { ReactComponent as Exit } from "../svg/exit-white.svg";
import { ReactComponent as Left } from "../svg/left-white.svg";
import { ReactComponent as Right } from "../svg/right-white.svg";
import BottomPanel from "./BottomPanel";
import numberToGBP from "../utils/numberToGBP";
import { useDispatch } from "react-redux";
import { addToBasket } from "../actions";
import { NavLink } from "react-router-dom";

export default function ImageExpand({
  expandHandler,
  docs,
  collection,
  frontUrl,
}) {
  const [imgArray, setImgArray] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [current, setCurrent] = useState(0);
  const dispatch = useDispatch();
  const [isAddedToBasket, setIsAddedToBasket] = useState(false);

  useEffect(() => {
    // sort docs array so that front image is at start of array
    const docsCopy = [...docs];
    docsCopy.sort((a, b) => {
      if (a.refString === collection.front) return -1;
      else if (b.refString === collection.front) return 1;
      else return 0;
    });
    setLoaded(true);
    setImgArray(docsCopy);
  }, [docs, collection.front]);

  useEffect(() => {
    console.log(imgArray);
  }, [imgArray]);

  useEffect(() => {
    console.log(`${current + 1} of ${imgArray.length}`);
  }, [current, imgArray]);

  const nextHandler = () => {
    if (current === imgArray.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  const prevHandler = () => {
    if (current === 0) {
      setCurrent(imgArray.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  const handleAddToBasket = () => {
    // console.log(collection.title);
    dispatch(
      addToBasket({
        title: collection.title,
        frontUrl,
        price: collection.sellData.price,
      })
    );
    setIsAddedToBasket(true);
  };

  const handleViewBasket = () => {};

  return (
    <div className='img-expand-wrapper-front'>
      <div className='img-expand-wrapper-front__left-container'>
        <div
          className='img-expand-wrapper-front__exit-symbol'
          onClick={expandHandler}
        >
          <Exit />
        </div>
        {imgArray.length > 1 ? (
          <div
            className='img-expand-wrapper-front__left-symbol'
            onClick={prevHandler}
          >
            <Left />
          </div>
        ) : null}
        {imgArray.length > 1 ? (
          <div
            className='img-expand-wrapper-front__right-symbol'
            onClick={nextHandler}
          >
            <Right />
          </div>
        ) : null}
        {imgArray.length > 1 ? (
          <div className='img-expand-wrapper-front__bottom-panel'>
            <BottomPanel current={current} length={imgArray.length} />
          </div>
        ) : null}
        <div className='img-expand-wrapper-front__img-container'>
          {loaded && (
            <img
              className='img-expand-wrapper-front__img'
              src={imgArray[current].url}
              alt={collection.front}
            />
          )}
        </div>
      </div>
      <div className='img-expand-wrapper-front__right-container'>
        <div className='img-expand-wrapper-front__right-container__inner'>
          <h3 className='img-expand-wrapper-front__right-container__title'>
            {collection.title}
          </h3>
          <div className='img-expand-wrapper-front__right-container__description'>
            {collection.description}
          </div>
          {collection.sellData && collection.sellData.quantity > 0 && (
            <div className='img-expand-wrapper-front__right-container__sell'>
              {isAddedToBasket ? (
                <>
                  <div
                    className='img-expand-wrapper-front__right-container__description'
                    style={{ marginBottom: "0.5em" }}
                  >
                    {collection.title} has been added to your basket!
                  </div>
                  <NavLink to='/basket' exact>
                    <button
                      className='btn-front'
                      onClick={handleViewBasket}
                      style={{ marginBottom: "0.5em" }}
                    >
                      View Basket
                    </button>
                  </NavLink>
                </>
              ) : (
                <>
                  Buy this piece for:
                  <h3 className='img-expand-wrapper-front__right-container__price'>
                    {numberToGBP(collection.sellData.price)}
                  </h3>
                  <button
                    className='btn-front'
                    style={{ marginBottom: "0.5em" }}
                    onClick={handleAddToBasket}
                  >
                    Add to Basket
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
