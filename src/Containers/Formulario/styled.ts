import styled from "styled-components";

export const Formularios = styled.form`
  
    display: flex;
    flex-direction: column;
   max-width: 300px;
   max-height: 600px;
    padding: 5rem;
    width: 100%;
    @media(max-width:768px){
        max-width: 100%;
        width: 100%;
        align-items: center;
        justify-content: center;
        margin: 0;
    }
  

`