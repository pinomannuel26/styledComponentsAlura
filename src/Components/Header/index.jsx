import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo.svg";

/** IMportamos color primarios desde la variables de color q creamos
 * colo en variables o jhay ningun export defauls, por eso el nombre de la variable}la tenemos qe llamar dentro de llaves ({})
 */

 import { colorPrimario } from "../UI/Variables";
 
 
/**Creamos en el styledHeader todos los stilos y en ves de pónerles clases, los englobamos en la etiqueya styledHeader
 * qe es la que contiene los estilos
 * NTA LA PRIMER LETRA DE LOS STLOS DEBE SER EN MAYUSDCULA
 */
 const StyledHeader = styled.nav`
 background-color: ${colorPrimario};
 display: flex;
 justify-content: space-between;
 padding: 0 15vw;
 height: 10vh;
 align-items: center;
`

const Logo = styled.img`
  height: 50px;
  width: 50px;
`

const BtnHeader = styled.a`
    text-align: center;
    border-radius: 3px;
    padding: 5px 20px;
    margin: 0 10px;
    font-weight: 600;
    border: 2px solid white;
    color: ${ ({primary}) => primary ? "white" : colorPrimario }; {/**Recibir props o parametros para los stilos, operador ternario */}
    background: ${ (props) => props.primary ? "transparent" : "white" }; {/**Estamos desestructurando a primary de ua ves para no tenes que acceder a props, pero de ambas manera se puede */}
`

const Header = () => {
  return (
    <StyledHeader>
      <Logo src={logo} alt="Logo Smart Bank" /> {/**Antes era una etiqueta de img, pero solo se le pone logo por que en los stilo ya se le estan aplicando a un styled.img que es lo mismo */}
      <div>
        <BtnHeader href="https://google.com"> 
        Ayuda
        </BtnHeader>
        <BtnHeader primary href="https://google.com"> {/** es como enviar a primary un true  q es la props de estilos de los botones */}
          Salir
        </BtnHeader>
      </div>
    </StyledHeader>
  );
};

export default Header;