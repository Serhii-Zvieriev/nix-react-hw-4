import { useContext } from "react";
import userContext from "../../context/user-context";

export default function PageFinal() {
  const contextValue = useContext(userContext);

  return (
    <div className="container final">
      <p className="bold">Спасибо за регистрацию</p>
      <div className="center">
        <img height="96" src={contextValue.avatar} alt="avatar" />
      </div>
      <p className="bold">Контактная информация</p>
      <p>Имя: {contextValue.contextName}</p>
      <p>Фамилия: {contextValue.contextSurname}</p>
      <p>Email: {contextValue.contextEmail}</p>
      <p>Город: {contextValue.contextCity}</p>
      <p>Улица: {contextValue.contextStreet}</p>
      <p>Дом: {contextValue.contextHouse}</p>
    </div>
  );
}
