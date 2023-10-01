import React from 'react'
import styled from "styled-components"
import ImahenFilter from '../../ImahenFilter';

const Card = styled.div`
    box-shadow: 4px 4px 20px 0px rgba(0,0,0,0.1);
    border-radius: 10px;
    margin: 2px 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    font-size: 12px;

`;
/*Stilos para mostrar la informacion */
const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /**TAMBIEN PUEDO CREAR UNA CLASE DENTO DE LOS STILOS */
    .type{
        font-weight: bold;
    }
`;

export default({cargo}) => {

  const {type, from,  value, date} = cargo; 
  return <Card>
            {ImahenFilter(type)}
            <Info>
                <span className='type'>{type}</span>
                <span>{from}</span>
                <span>{value}</span>
            </Info>
            <span>{date}</span>
        </Card>
}

