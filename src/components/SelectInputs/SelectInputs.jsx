import React, { useState } from "react";
import ArrowImage from "../../assests/images/Arrow.png";
import ChangeCurrency from "../../assests/images/ChangeCurrency.png";
import './SelectInputs.scss';
const SelectInputs = () => {
  const [option, setOption] = useState(0);
  return (
    <div className="select-inputs">
      <div className="select-buttons">
        <select
          className="select-option"
          onChange={(e) => setOption(e.target.value)}
        >
          <option value={0}>AZN</option>
          <option value={1}>Dollar</option>
          <option value={2}>TL</option>
          <option value={3}>Euro</option>
          <option value={4}>Rubl</option>
        </select>
        <img src={ArrowImage} alt="arrow" />
      </div>
      <button>
        <img src={ChangeCurrency} alt="changecurrency" />
      </button>
      <div className="select-buttons">
        <select
          className="select-option"
          onChange={(e) => setOption(e.target.value)}
        >
          <option value={0}>AZN</option>
          <option value={1}>Dollar</option>
          <option value={2}>TL</option>
          <option value={3}>Euro</option>
          <option value={4}>Rubl</option>
        </select>
        <img src={ArrowImage} alt="arrow" />
      </div>
    </div>
  );
};

export default SelectInputs;
