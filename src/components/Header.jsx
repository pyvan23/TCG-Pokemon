import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { searchCards } from "../store/pokemon/thunks";
import queryString from 'query-string';
import { useForm } from "../hooks/useForm";
import { useEffect } from "react";


export const Header = () => {


  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();



  const { q = '' } = queryString.parse(location.search);

  const { searchText, onInputChange, onResetForm, } = useForm({ searchText: q });

  // dispatch(searchCards(q))
  
  
  
  
  const onSearchSubmit = (event) => {
    
    event.preventDefault();
    
    if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`)
    console.log(searchText)
  };
  
  useEffect(() => {
    dispatch(searchCards)
  }, [onSearchSubmit])
  
  
  

 
  return (
    <header className="bg-dark py-5">
      <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white">
          <h1 className="display-4 fw-bolder">Pokemon TCG Shop</h1>
          <p className="lead fw-normal text-white-50 mb-0">Just looking here</p>
        </div>
        <div className="input-group">
          <form onSubmit={onSearchSubmit}>
            <input
              
              type="text"
              placeholder="TCG"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
              
              

            />
            <button type="reset" onClick={()=>{dispatch(searchCards(q))}}  className="btn btn-outline-primary mt-3">Search</button>
          </form>
        </div>
      </div>
    </header>
  );
};
