import React, { useState } from "react";

import privado from "../../assets/images/privado.svg";
import ojo from "../../assets/images/ojo.svg";
import dinero from "../../assets/images/dinero.svg";

/*IMPORTAMOS EL COMPONENTE ICONO PARA PODERLO UTILIZAR AQUI */
import { Icono, IconoTema, Box, Saldo, Detalle, Btn } from "../UI/Index";

import styled from "styled-components"


/**HERENCIA
 * En ves de . le ponemos entre parentesis '()'
 * el componente al cual le vamos a heredar suis atributos
 * es decir IconoMargin, coge todos os estilos que vengan desde icono y le agrega los que nosotros queremos
 * en tese caso el margin-top, 
 * es como tener 
 *  height: 25px;
    width: 25px;
    margin-top: 2px;
 */
const IconoMargin = styled(Icono)`
  margin-top: 2px;
`


const Account = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Box>
      <h2>Cuenta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponible
        <span>
          <IconoTema src={dinero} alt="Icono de saldo" />
        </span>
        {toggleState ? (
          <Saldo>
            <Detalle>$</Detalle> 8,621.50
          </Saldo>
        ) : null}
      </div>

      <Btn onClick={toggleHandler}>
        <IconoMargin
   
          src={toggleState ? privado : ojo}
          alt="Privacidad de saldo"
        />
      </Btn>
    </Box>
  );
};

export default Account;
