import { useContext, useRef } from "react";
import userContext from "../../context/user-context";

import Avatars from "../Avatars/Avatars";

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

  const onClickOnThirdPage = () => {
    if (!contextValue.avatar) {
      alert("выбирете аватарку");
      return;
    }
    contextValue.contextOnNextClick();
  };

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

      <Avatars />

      <div className="buttons">
        <button type="button" onClick={contextValue.contextOnPreviousClick}>
          Previous
        </button>
        <button type="button" onClick={onClickOnThirdPage}>
          Next
        </button>
      </div>
    </div>
  );
}
