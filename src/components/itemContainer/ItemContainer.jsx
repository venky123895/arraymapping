import React from 'react'
import Item from '../Items/Item'
import './itemContainer.css'
const ItemContainer = () => {
    const numbers=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
  return (
    <>
    <h1>30 Days of React</h1>
    <p>Number Generator</p>
    <div id='container'>
        {
            numbers.map((num)=>{
                return <Item number={num}/>
            })
        }
    </div></>
  )
}

export default ItemContainer
