import React from 'react'
import './item.css';
const Item = (props) => {

 


  function checkPrime(num) { 
    if (num <= 1) return false; // negatives
    if (num % 2 === 0 && num > 2) return false; // even numbers
    const s = Math.sqrt(num); // store the square to loop faster
    for(let i = 3; i <= s; i += 2) { // start from 3, stop at the square, increment in twos
        if(num % i === 0) return false; // modulo shows a divisor was found
    }
    return true;
  }
  return (
   
   
    <div className='boxContainer' style={{backgroundColor:(checkPrime(props.number) ? "red" : (props.number)%2===0 ? "green" : "yellow")}}>
      <h1>{props.number}</h1>
    </div>

  )
}

export default Item
