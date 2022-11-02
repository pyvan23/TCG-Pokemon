import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { searchCards } from "../store/pokemon/thunks";
import queryString from 'query-string';


export const Header = () => {
const location = useLocation();
const navigate = useNavigate();
const dispatch = useDispatch();                 
  

const {q =''} = queryString.parse(location.search);
const { register, handleSubmit, watch, formState: { errors } } = useForm({ searchText: q });



const onSubmit = (data) =>{
  
  navigate(`?q=${searchText}`)
} 

  
  // if(searchText.trim().length<=1)return;



  return (
    <header className="bg-dark py-5">
      <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white">
          <h1 className="display-4 fw-bolder">Pokemon TCG Shop</h1>
          <p className="lead fw-normal text-white-50 mb-0">Just looking here</p>
        </div>
        <div className="input-group">
        <form onSubmit={handleSubmit(onSubmit)}
        >
        <input value={searchText}{...register("exampleRequired", { required: true })} />
       <button>search</button>
        </form>
        </div>
      </div>
    </header>
  );
};
