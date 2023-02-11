import { useState } from "react";
// import { createContext } from "react";
import userContext from "../../context/user-context";
import PageOne from "../PageOne/PageOne";
import PageSecond from "../PageSecond/PageSecond";
import PageThird from "../PageThird/PageThird";
import PageFourth from "../PageFourth/PageFourth";
import PageFinal from "../PageFinal/PageFinal";

// const userContext = createContext();
// console.log(userContext);

export default function RegistrationModal() {
  const [currentPage, setSurrentPage] = useState(1);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [house, setHouse] = useState("");

  const onNextClick = () => {
    setSurrentPage(currentPage + 1);
  };

  const onPreviousClick = () => {
    setSurrentPage(currentPage - 1);
  };

  const myContext = {
    contextCurrentPage: currentPage,
    contextSetSurrentPage: setSurrentPage,
    contextName: name,
    contextSetName: setName,
    contextSurname: surname,
    contextSetSurname: setSurname,
    contextEmail: email,
    contextSetEmail: setEmail,
    contextCity: city,
    contextSetCity: setCity,
    contextStreet: street,
    contextSetStreet: setStreet,
    contextHouse: house,
    contextSetHouse: setHouse,
    contextOnNextClick: onNextClick,
    contextOnPreviousClick: onPreviousClick,
  };

  return (
    <>
      <userContext.Provider value={myContext}>
        {currentPage === 1 && <PageOne />}
        {currentPage === 2 && <PageSecond />}
        {currentPage === 3 && <PageThird />}
        {currentPage === 4 && <PageFourth />}
        {currentPage === 5 && <PageFinal />}
      </userContext.Provider>
    </>
  );
}
