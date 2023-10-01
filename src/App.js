import React from "react";
import { useState } from "react";
import Container from "./Components/Container";
import Header from "./Components/Header";
import GlobalStyles from "./GlobalStyle";

/**IMPPORTACION QE AYUDA PARA LOS TEMES, EN ESTE CASO TEMA CLARI Y TEMA OSCURO 
 * debe encapsular a todos los componente que valar a variar el tema de oscuroa a claro emn este casdo
 * recive un them que recive un obj con los colores que va a utilizar la app
*/
import { ThemeProvider } from "styled-components";

import {temaClaro, temaOscuro} from "./Components/UI/Temas";

import { BtnTema }  from "./Components/UI/Index";
import SwitcherTema from "./Components/SwitcherTema";

function App() {

  const [tema, setTema] = useState(true);

  const cambiarTema = () => {
    setTema(!tema);
  }
  
  return (
    <ThemeProvider theme = {tema? temaClaro:  temaOscuro}> 
      <GlobalStyles/>
      <BtnTema onClick={cambiarTema}>
        <SwitcherTema tema={tema}/>
      </BtnTema>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
