import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {useLocation, useNavigate} from 'react-router-dom'
import { useForm } from "../hooks/useForm";
import { searchCards } from "../store/pokemon/thunks";
import queryString from 'query-string';
import pokemon from 'pokemontcgsdk'
export const SearchBar = () => {
  
  
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const location = useLocation();
  
  const {q =''} = queryString.parse(location.search);

  const { searchText, onInputChange } = useForm({ searchText: q });

  
  
  
  
  const onSearchSubmit = (event) => {
    
    event.preventDefault();
    
    // if(searchText.trim().length<=1)return;
    navigate(`?q=${searchText}`)
  };
  
  useEffect(() => {
    pokemon.card.where({ q: `name:${q}` })
    .then(result => {
      console.log(result.data[0].name) // "Blastoise"
    })
   
    
    
  }, [])

  return (
    <form onSubmit={onSearchSubmit}>
    <input
      type="text"
      placeholder="Hero"
      className="form-control"
      name="searchText"
      autoComplete="off"
      value={searchText}
      onChange={onInputChange}
    />
    <button onClick={ ()=>{dispatch(searchCards(q))}} className="btn btn-outline-primary mt-3">Search</button>
  </form>
  );
};
