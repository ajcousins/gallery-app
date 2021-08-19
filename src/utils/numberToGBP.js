const numberToGBP = (num) => {
  const formatter = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  });

  return formatter.format(num);
};

export default numberToGBP;
