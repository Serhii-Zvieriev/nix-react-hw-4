export default function PageFourth() {
  return (
    <div className="container">
      <p>Шаг: 4</p>

      <label htmlFor="password">Пароль</label>
      <input type="text" id="password"></input>

      <label htmlFor="confirmPassword">Подтвердить пароль</label>
      <input type="text" id="confirmPassword"></input>

      <div className="buttons">
        <button type="button">Previous</button>
        <button type="button">Next</button>
      </div>
    </div>
  );
}
