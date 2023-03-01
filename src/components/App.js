import React, { useState,useEffect } from 'react'
import '../styles/App.css';
/*const App = () => {
  const [maxSum, setMaxSum] = useState(50);
  const [rangeA, setRangeA] = useState(0);
  const [rangeB, setRangeB] = useState(50);

  useEffect(() => {
    const remainingSum = maxSum - rangeB;
    document.getElementById("range-a-holder").querySelector("input[type='range']").max = remainingSum;
  }, [rangeB, maxSum]);

  const handleRangeAChange = (event) => {
    setRangeA(parseInt(event.target.value));
  };

  const handleRangeBChange = (event) => {
    setRangeB(parseInt(event.target.value));
  };

  const sum = rangeA + rangeB;
  return (
    <div>
      <div id="max-sum-holder">
        <label htmlFor="max-sum">Max Sum:</label>
        <input type="number" id="max-sum" name="max-sum" value={maxSum} onChange={(event) => setMaxSum(parseInt(event.target.value))} />
      </div>

      <div id="range-a-holder">
        <label htmlFor="range-a">Range A:</label>
        <input type="range" id="range-a" name="range-a" min="0" max="0" value={rangeA} onChange={handleRangeAChange} />
        <div id="range-a-value">{rangeA}</div>
      </div>

      <div id="range-b-holder">
        <label htmlFor="range-b">Range B:</label>
        <input type="range" id="range-b" name="range-b" min="0" max="50" value={rangeB} onChange={handleRangeBChange} />
        <div id="range-b-value">{rangeB}</div>
      </div>

      <div id="sum">Sum: {sum}</div>
    </div>
  );
}*/


const App = () => {

const [maxSum, setMaxSum] = useState(50);

const [input1, setInput1] = useState(0);

const [input2, setInput2] = useState(50);

const changeHandler1 = e => {

setInput1(e.target.value);

};

const changeHandler2 = e => {

setInput2(e.target.value);

};

return (

<>

<div id="max-sum-holder">

Input max sum:-

<input

onChange={e => setMaxSum(e.target.value)}

value={maxSum}

type={'number'}

/>

</div>

<div id="range-a-holder">

<input

value={input1}

onChange={changeHandler1}

type={'range'}

max={maxSum - input2}

/>

<div id="range-a-value">{input1}</div>

</div>

<div id="range-b-holder">

<input

value={input2}

onChange={changeHandler2}

type={'range'}

max={maxSum - input1}

/>

<div id="range-b-value">{input2}</div>

</div>

<div id="sum">{parseInt(input1) + parseInt(input2)}</div>

</>

);

};


export default App;