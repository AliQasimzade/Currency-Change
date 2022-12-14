import React, { useRef } from "react";
import "./Amount.scss";
import "./Amount-Media.scss";
import Refresh from "../../assests/images/Refresh.png";
import Button from "@mui/material/Button";

const Amount = ({
  fromCurrency,
  toCurrency,
  value,
  setValue,
  currencyValue,
  bool,
  setBool,
  setCurrencyValue,
  to,
  setTo,
  apiKey,
}) => {
  const currencyRef = useRef("");

  const handleChangeCurrency = () => {
    if (currencyValue === 0 || currencyValue === "" || currencyValue === " ") {
      alert("Oops please type any number");
      setBool(false);
    } else {
      fetch(
        `https://api.apilayer.com/exchangerates_data/convert?to=${toCurrency}&from=${fromCurrency}&amount=${currencyRef.current.value}&apikey=${apiKey}`
      )
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setValue(res.result.toFixed(2));
          setTo(res.query.to);
          setBool(true);
        })
        .catch((err) => console.log(err.message));
    }
  };
  return (
    <div className="amount-container">
      <div className="amount">
        <p>Amount</p>
        <div className="type-mount">
          <input
            type="number"
            ref={currencyRef}
            value={currencyValue}
            onChange={(e) => {
              currencyRef.current.value = e.target.value;
              setCurrencyValue(currencyRef.current.value);
            }}
          />
          <Button onClick={handleChangeCurrency}>
            <img src={Refresh} alt="Refresh" />
          </Button>
        </div>
        {bool === true &&
        (currencyValue !== "" ||
          currencyValue !== " " ||
          currencyValue !== 0) ? (
          <p>
            <span>{value}</span>
            {to}
            <span></span>
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default Amount;
