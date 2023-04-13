import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  
  function reset() {
    setInput("");
  }
  
  function calculator() {
    setInput(eval(input));


    // const arr = [];
    // let index = 0;
    // for (let i = 0; i < input.length; i++) {
    //   if (
    //     input[i] == "+" ||
    //     input[i] == "-" ||
    //     input[i] == "*" ||
    //     input[i] == "/"
    //   ) {
    //     arr.push(input.substring(index, i));
    //     arr.push(input[i]);
    //     index = i + 1;
    //   }
    // }
    // if (index < input.length) arr.push(input.substring(index, input.length));
    // for (let i = 0; i < arr.length; i++) {
    //   if (arr[i] == "/") {
    //     let div = Number(arr[i - 1]) / Number(arr[i + 1]);
    //     arr[i - 1] = div;
    //     arr.splice(i, 2);
    //     i--;
    //   }
    // }
    // for (let i = 0; i < arr.length; i++) {
    //   if (arr[i] == "*") {
    //     let mul = Number(arr[i - 1]) * Number(arr[i + 1]);
    //     arr[i - 1] = mul;
    //     arr.splice(i, 2);
    //     i--;
    //   }
    // }
    // for (let i = 0; i < arr.length; i++) {
    //   if (arr[i] == "+") {
    //     let sum = Number(arr[i - 1]) + Number(arr[i + 1]);
    //     arr[i - 1] = sum;
    //     arr.splice(i, 2);
    //     i--;
    //   } else if (arr[i] == "-") {
    //     if (i == 0) {
    //       arr[i] = 0 - arr[i + 1];
    //       arr.splice(i + 1, 1);
    //     } else {
    //       let sub = Number(arr[i - 1]) - Number(arr[i + 1]);
    //       arr[i - 1] = sub;
    //       arr.splice(i, 2);
    //       i--;
    //     }
    //   }
    // }
    // setInput(arr[0]);
    // console.log(arr);
  }
  return (
    <div className="Calculator">
      <table>
        <thead>
          <tr>
            <th colSpan={4}>
              <input value={input} type="text" readOnly />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td id="calci" onClick={reset}>
                C
            </td>
            <td id="btn-div" onClick={() => setInput(input + "/")}>
              /
            </td>
            <td id="btn-mul" onClick={() => setInput(input + "*")}>
              *
            </td>
            <td id="btn--" onClick={() => setInput(input + "-")}>
              -
            </td>
          </tr>
          <tr>
            <td id="btn-7" onClick={() => setInput(input + 7)}>
              7
            </td>
            <td id="btn-8" onClick={() => setInput(input + 8)}>
              8
            </td>
            <td id="btn-9" onClick={() => setInput(input + 9)}>
              9
            </td>
            <td rowSpan={2} id="plus" onClick={() => setInput(input + "+")}>
              +
            </td>
          </tr>
          <tr>
            <td id="btn-4" onClick={() => setInput(input + 4)}>
              4
            </td>
            <td id="btn-5" onClick={() => setInput(input + 5)}>
              5
            </td>
            <td id="btn-6" onClick={() => setInput(input + 6)}>
              6
            </td>
          </tr>
          <tr>
            <td id="btn-1" onClick={() => setInput(input + 1)}>
              1
            </td>
            <td id="btn-2" onClick={() => setInput(input + 2)}>
              2
            </td>
            <td id="btn-3" onClick={() => setInput(input + 3)}>
              3
            </td>
            <td rowSpan={2} id="equal" onClick={calculator}>
              =
            </td>
          </tr>
          <tr>
            <td id="btn-0" onClick={() => setInput(input + 0)}>
              0
            </td>
            <td onClick={() => setInput(input + ".")}>
              .
            </td>
            <td>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calculator;
