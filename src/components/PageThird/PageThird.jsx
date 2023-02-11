import { useContext, useRef, useEffect } from "react";
import userContext from "../../context/user-context";

export default function PageThird() {
  const contextValue = useContext(userContext);

  return (
    <div className="container">
      <p>Шаг: 3</p>

      <div className="buttons">
        <button type="button" onClick={contextValue.contextOnPreviousClick}>
          Previous
        </button>
        <button type="button">Next</button>
      </div>
    </div>
  );
}
