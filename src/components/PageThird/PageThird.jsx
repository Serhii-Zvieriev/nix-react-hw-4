import { useContext, useRef, useEffect } from "react";
import userContext from "../../context/user-context";

export default function PageThird() {
  const contextValue = useContext(userContext);
  const input = useRef();
  const img = useRef();

  function readFile(input) {
    let file = input.target.files[0];
    console.log(input.target.files[0]);
    let reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
    } else {
      img.src = "";
    }

    reader.onload = function () {
      contextValue.sestAvatar(reader.result);
    };

    reader.onerror = function () {
      console.log(reader.error);
    };
  }

  return (
    <div className="container">
      <p>Шаг: 3</p>

      <input
        type="file"
        ref={input}
        onChange={readFile}
        // placeholder="Прикрепите файл"
      ></input>

      <div className="center">
        <img
          // width="auto"
          height="64"
          ref={img}
          src={contextValue.avatar}
          alt="ImagePreview..."
        />
      </div>

      <div className="buttons">
        <button type="button" onClick={contextValue.contextOnPreviousClick}>
          Previous
        </button>
        <button type="button">Next</button>
      </div>
    </div>
  );
}
