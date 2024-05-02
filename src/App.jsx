import React from "react";
import "assets/Styles/App.scss";
import Home from "./pages/Home";

export const AppContext = React.createContext("");

export default function App() {
  
  const items = [
    {
      id: "1",
      title: "Берсерк",
      subtitle: "1 том",
      price: 229,
      img: "assets/Img/1.jpg",
    },
    {
      id: "2",
      title: "Магічна битва",
      subtitle: "1 том",
      price: 279,
      img: "assets/Img/2.jpg",
    },
  ];

  console.log(items);


  return (
    <AppContext.Provider value={{items}}>
      <Home />
    </AppContext.Provider>
  );
}
