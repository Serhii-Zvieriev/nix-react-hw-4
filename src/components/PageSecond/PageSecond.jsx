import { useContext, useRef, useEffect } from "react";
import userContext from "../../context/user-context";

export default function PageSecond() {
  const contextValue = useContext(userContext);

  const city = useRef();
  const street = useRef();
  const house = useRef();

  useEffect(() => {
    city.current.value = contextValue.contextCity;
    street.current.value = contextValue.contextStreet;
    house.current.value = contextValue.contextHouse;
  });

  const onClickOnSecondPage = () => {
    if (
      city.current.value === "" ||
      street.current.value === "" ||
      house.current.value === ""
    ) {
      alert("Заполнены не все поля");
      return;
    }
    contextValue.contextOnNextClick();
    contextValue.contextSetCity(city.current.value);
    contextValue.contextSetStreet(street.current.value);
    contextValue.contextSetHouse(house.current.value);
  };

  const onClickOnSecondPagePrevious = () => {
    contextValue.contextOnPreviousClick();
    // contextValue.contextName;
    // contextValue.contextSurname;
    // contextValue.contextEmail;
  };

  return (
    <div className="container">
      <p>Шаг: 2</p>

      <label htmlFor="city">Город</label>
      <input type="text" id="city" ref={city} autoComplete="none"></input>

      <label htmlFor="street">Улица</label>
      <input type="text" id="street" ref={street} autoComplete="none"></input>

      <label htmlFor="house">Дом</label>
      <input type="text" id="house" ref={house} autoComplete="none"></input>

      <div className="buttons">
        <button type="button" onClick={onClickOnSecondPagePrevious}>
          Previous
        </button>
        <button type="button" onClick={onClickOnSecondPage}>
          Next
        </button>
      </div>
    </div>
  );
}
