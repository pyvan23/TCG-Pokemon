import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../store/pokemon/thunks";

export const Section = () => {
  const dispatch = useDispatch();

  const { isLoading, pokemons, filterCardsState } = useSelector(
    (state) => state.pokemon
  );

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  // useEffect(() => {
  //   dispatch(filterPokemons());
  // }, []);

  return (
    <>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {pokemons.map((card) => (
              <div key={card.id} className="col mb-5">
                <div className="card h-100">
                  <div
                    className="badge bg-dark text-white position-absolute"
                    style={{ top: "0.5rem", right: "0.5rem" }}
                  >
                    Sale
                  </div>

                  <img
                    className="card-img-top"
                    src={card.images.large}
                    alt={card.name}
                  />

                  <div className="card-body p-4">
                    <div className="text-center">
                      <h3 className="fw-bolder">{card.name}</h3>
                      <p className="text-bg-opacity-100">
                        National Pokedex Number: {card.nationalPokedexNumbers}
                      </p>
                      <div className="d-flex justify-content-center small text-warning mb-2">
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                      </div>
                      <span className="text-muted text-decoration-line-through">
                        $20.00
                      </span>
                      $18.00
                    </div>
                  </div>

                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <a className="btn btn-outline-dark mt-auto" href="#">
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
