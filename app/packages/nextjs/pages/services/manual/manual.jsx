import React, { useState } from "react";

function ManualEntryPage() {
  const [box1, setBox1] = useState(0);
  const [box2, setBox2] = useState(0);
  const [box3, setBox3] = useState(0);
  const [box4, setBox4] = useState(0);
  const [box5, setBox5] = useState(0);
  const [box6, setBox6] = useState(0);

  const handleSubmit = e => {
    e.preventDefault();
    const result = taxCalc(box1, box2, box3, box4, box5, box6);
  };

  const handleInputChange = field = e = {
    switch (field) {
        case value:

            break;

        default:
            break;
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Box 1 - Wages, tips, other compensation:
          <input type="number" name="box1" value={formData.box1} onChange={handleInputChange} />
        </label>

        <label>
          Box 2 - Federal income tax withheld:
          <input type="number" name="box2" value={formData.box2} onChange={handleInputChange} />
        </label>

        <label>
          Box 3 - Social Security wages:
          <input type="number" name="box3" value={formData.box3} onChange={handleInputChange} />
        </label>

        <label>
          Box 4 - Social Security tax withheld:
          <input type="number" name="box4" value={formData.box4} onChange={handleInputChange} />
        </label>

        <label>
          Box 5 - Medicare wages and tips:
          <input type="number" name="box5" value={formData.box5} onChange={handleInputChange} />
        </label>

        <label>
          Box 6 - Medicare tax withheld:
          <input type="number" name="box6" value={formData.box6} onChange={handleInputChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default ManualEntryPage;

const taxCalc = (box1, box2, box3, box4, box5, box6) => {
  //W2 Inputs
  let wages = box1; //W2 Box 1
  let fedWH = box2; //W2 Box 2
  let ssWages = box3; //W2 Box 3
  let ssTW = box4; //W2 Box 4
  let medWages = box5; //W2 Box 5
  let medTW = box6; //W2 Box 6

  //Tax Rates
  const ssRate = 0.062;
  const medRate = 0.0145;
  const taxRates = [
    [231250, 0.35],
    [182100, 0.32],
    [95375, 0.24],
    [44725, 0.22],
    [11000, 0.12],
  ];

  //Tax Liability Calc
  const ssTax = ssWages => {
    return Math.round(ssWages * ssRate - ssTW);
  };

  const medTax = medWages => {
    return Math.round(medWages * medRate - medTW);
  };

  const fedTax = wages => {
    let tax = 0;

    for (let i = 0; i < taxRates.length; i++) {
      let income = taxRates[i][0];
      const rate = taxRates[i][1];

      if (wages > income) {
        let taxable = 0;

        if (i === 0) {
          taxable = wages - taxRates[i][0];
        } else {
          const prev = taxRates[i - 1][0];

          if (prev > wages) max = wages;
          else max = prev;

          taxable = max - income;
        }

        tax += taxable * rate;
      }
    }

    return tax - fedWH;
  };

  //Taxes Due (Tax Refund)
  return Math.round(ssTax(ssWages) + medTax(medWages) + fedTax(wages));
};
