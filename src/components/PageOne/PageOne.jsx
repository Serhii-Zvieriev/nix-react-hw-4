import { useContext, useEffect, useRef } from "react";
import userContext from "../../context/user-context";

export default function PageOne() {
  const contextValue = useContext(userContext);

  const username = useRef();
  const surname = useRef();
  const email = useRef();

  useEffect(() => {
    username.current.value = contextValue.contextName;
    surname.current.value = contextValue.contextSurname;
    email.current.value = contextValue.contextEmail;
  });

  const onClickOnFirstPage = () => {
    if (
      username.current.value === "" ||
      surname.current.value === "" ||
      email.current.value === ""
    ) {
      alert("Заполнены не все поля");
      return;
    }
    contextValue.contextOnNextClick();
    contextValue.contextSetName(username.current.value);
    contextValue.contextSetSurname(surname.current.value);
    contextValue.contextSetEmail(email.current.value);
  };

  return (
    <div className="container">
      <p>Шаг: 1</p>

      <label htmlFor="username">Имя</label>
      <input
        type="text"
        id="username"
        ref={username}
        autoComplete="off"
      ></input>

      <label htmlFor="surname">Фамилия</label>
      <input type="text" id="surname" ref={surname} autoComplete="off"></input>

      <label htmlFor="email">Email</label>
      <input type="text" id="email" ref={email} autoComplete="none"></input>

      <div className="buttons">
        <button onClick={onClickOnFirstPage} type="button">
          Next
        </button>
      </div>
    </div>
  );
}
