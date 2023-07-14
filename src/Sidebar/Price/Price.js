import React from 'react';
import "./Price.css";
import Input from '../../components/Input';

const Price = ({ handleChange }) => {
  
  return (
    <div className='ml'>
      <h2 className='sidebar-tittle price-tittle'>Price</h2>
      <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value={50}
          title="0 - 500$"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={100}
          title="50 - 100$"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={150}
          title="100 - 150$"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={200}
          title="Over 150$"
          name="test2"
        />


    </div>
  )
}

export default Price