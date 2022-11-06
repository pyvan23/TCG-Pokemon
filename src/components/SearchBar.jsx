import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { searchCards } from "../store/pokemon/thunks";
import queryString from "query-string";
import { useForm } from "../hooks/useForm";
import { useEffect } from "react";
import { Section } from "./Section";

export const SearchBar = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const { q = "" } = queryString.parse(location.search);

  
  
  const { searchText, onInputChange, onResetForm } = useForm({ searchText: q });
  
  
  const onSearchSubmit = (event) => {
    event.preventDefault();
    console.log(searchText);
    if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`);
    
  };
  
  useEffect(() => {
    
    const pokeCardFilter = dispatch(searchCards(q))

  }, [])
  
  

  return (
    <>

    <form onSubmit={onSearchSubmit}>
      <input
        
        type="text"
        placeholder="TCG"
        className="form-control"
        name="searchText"
        autoComplete="off"
        value={ searchText }
        onChange={ onInputChange }
      />
      <button className="btn btn-outline-primary mt-3">Search</button>
    </form>
       {
        (q.length > 2)
         ?(<Section/>)
      
         
        : (

          <div className="alert alert-danger">No results <b>{q}</b></div>
        )
      }
      
    </>
        

        
    
  );
};
