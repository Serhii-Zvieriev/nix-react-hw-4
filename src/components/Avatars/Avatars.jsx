import { useContext } from "react";
import userContext from "../../context/user-context";

export default function Avatars() {
  const contextValue = useContext(userContext);

  const hendelClick = (e) => {
    // console.log(e.target.src);
    contextValue.sestAvatar(e.target.src);
  };
  return (
    <div className="grid">
      <img
        className="clickOnImg"
        onClick={hendelClick}
        height="64"
        src="img/ava1.webp"
        alt="1"
      />
      <img
        className="clickOnImg"
        onClick={hendelClick}
        height="64"
        src="img/ava2.webp"
        alt="2"
      />
      <img
        className="clickOnImg"
        onClick={hendelClick}
        height="64"
        src="img/ava3.png"
        alt="3"
      />
      <img
        className="clickOnImg"
        onClick={hendelClick}
        height="64"
        src="img/ava4.png"
        alt="4"
      />
      <img
        className="clickOnImg"
        onClick={hendelClick}
        height="64"
        src="img/ava5.webp"
        alt="5"
      />
      <img
        className="clickOnImg"
        onClick={hendelClick}
        height="64"
        src="img/ava6.png"
        alt="6"
      />
      <img
        className="clickOnImg"
        onClick={hendelClick}
        height="64"
        src="img/ava7.jpg"
        alt="7"
      />
      <img
        className="clickOnImg"
        onClick={hendelClick}
        height="64"
        src="img/ava8.png"
        alt="8"
      />
    </div>
  );
}
