/* import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
 
export function CreateDog() {
  const [dog, setDog] = useState({});
  const history = useHistory();
  function onInputChange(e) {
    e.preventDefault();
    setDog({
      ...dog,
      [e.target.name]: e.target.value,
    });
  }
  function onSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:3001/api/dogs", dog).then(() => {
      history.push("/dogs");
    });
  }
  return (
    <form onSubmit={onSubmit}>
      <label HTMLfor="">Name *</label>
      <input
        onChange={onInputChange}
        type="text"
        name="name"
        value={dog.name}
      />
      <label HTMLfor="">Image *</label>
      <input
        onChange={onInputChange}
        type="text"
        name="image"
        value={dog.image}
      />
      <label HTMLfor="">Name *</label>
      <input type="submit" name="" />
    </form>
  );
}
 */

import React, { useEffect, useState } from "react";

import  {getTemperaments, post}  from "../../store/actions/index";
import { useDispatch, useSelector } from "react-redux";

export function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "Name is required";
  }
  if (!input.height) {
    errors.height = "Height is required";
  } else if (!/\d{1,2}-\d{1,2}/g.test(input.height)) {
    errors.height = "Add a height range. Example: '10-12'";
  }
  if (!input.weight) {
    errors.weight = "Weight is required";
  } else if (!/\d{1,2}-\d{1,2}/g.test(input.weight)) {
    errors.weight = "Add a weight range. Example: '10-12'";
  }
  if (!input.life_span) {
    errors.life_span = "Life Span is required";
  }
  if (!input.temperaments) {
    errors.temperaments = "Add at least one temperament";
  }
  return errors;
}

export default function CreateDog() {
  const [input, setInput] = useState({
    name: "",
    height: "",
    weight: "",
    life_span: "",
    temperaments: [],
  });
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(getTemperaments());
    },
    // eslint-disable-next-line
    []
  );

  const tempss = useSelector((state) => state.temperaments);
 
    
  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(validate({ ...input, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    dispatch(post(input));
  };

  function handleSelect(e) {
    if (input.temperaments.includes(parseInt(e.target.value))) {
      alert("You already selected this temperament. Try again.");
    } else {
      setInput((prev) => ({
        ...prev,
        temperaments: [...prev.temperaments, parseInt(e.target.value)],
      }));
    }
  }

  const tempsNames = (array) => {
    let names = [];
    tempss?.forEach((e) =>
      array.forEach((id) => {
        if (parseInt(id) === e.id) {
          names.push(e.name);
        }
      })
    );
    return names;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div >
        <ul>
          <div >
            <li>
              <label>Name:</label>
            </li>
          </div>
          <input
            
            key="name"
            type="text"
            name="name"
            placeholder="Insert name..."
            onChange={handleInputChange}
            value={input.name}
          />
          {errors.name && <p >{errors.name}</p>}
          <br />
          <div >
            <li>
              <label>Height:</label>
            </li>
          </div>
          <input
            
            key="height"
            type="text"
            name="height"
            placeholder="Insert height..."
            onChange={handleInputChange}
            value={input.height}
          />
          {errors.height && <p >{errors.height}</p>}
          <br />
          <div >
            <li>
              <label>Weight:</label>
            </li>
          </div>
          <input
            
            key="weight"
            type="text"
            name="weight"
            placeholder="Insert weight..."
            onChange={handleInputChange}
            value={input.weight}
          />
          {errors.weight && <p >{errors.weight}</p>}
          <br />
          <div >
            <li>
              <label>Life Span:</label>
            </li>
          </div>
          <input
            
            key="life_span"
            type="text"
            name="life_span"
            placeholder="Insert life span..."
            onChange={handleInputChange}
            value={input.life_span}
          />
          {errors.life_span && (
            <p >{errors.life_span}</p>
          )}
          <br />
          <div >
            <li>
              <label>Temperaments:</label>
            </li>
          </div>
          <select
            
            key="temperaments"
            name="temperaments"
            onChange={(e) => handleSelect(e)}
            required
            value={input.temperaments}
            multiple={true}
          >
            {tempss?.map((e) => (
              <option value={e.id} key={e.id}>
                {e.name}
              </option>
            ))}
          </select>
          {errors.temperaments && (
            <p >{errors.temperaments}</p>
          )}
          <br />
          {input.temperaments.map((e) => (
            <p key = {e} id={e}>{tempsNames([e])}</p>
          ))}
          <button
            
            type="submit"
            name="submit"
            onClick={handleSubmit}
          >
            Create
          </button>
        </ul>
      </div>
    </form>
  );
}

module.export = CreateDog;
