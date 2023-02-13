import { useContext, useRef } from "react";
import userContext from "../../context/user-context";

export default function PageFourth() {
  const contextValue = useContext(userContext);
  const password = useRef();
  const confirmPassword = useRef();

  const onClickOnFourthPage = () => {
    if (password.current.value === "") {
      alert("введите пароль");
      return;
    }
    if (password.current.value !== confirmPassword.current.value) {
      alert("пароли не совпадают");
      return;
    } else {
      contextValue.sesPassword(password.current.value);
      contextValue.contextOnNextClick();
    }
  };
  return (
    <div className="container">
      <p>Шаг: 4</p>

      <label htmlFor="password">Пароль</label>
      <input ref={password} type="text" id="password"></input>

      <label htmlFor="confirmPassword">Подтвердить пароль</label>
      <input ref={confirmPassword} type="text" id="confirmPassword"></input>

      <div className="buttons">
        <button type="button" onClick={contextValue.contextOnPreviousClick}>
          Previous
        </button>
        <button type="button" onClick={onClickOnFourthPage}>
          Next
        </button>
      </div>
    </div>
  );
}
