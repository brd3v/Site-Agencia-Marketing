import styled  from "styled-components";

export const SectioInicio = styled.section`
  background-image: url('/logo/plano de fundo.png');
    background-size: cover;
  
    height: 80vh;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    @media(max-width:768px){
        max-width: 100%;
        width: 100%;
        background-color: red;
    }

    @media(max-width:768px){
      background-image: url('/logo/perfil_mobile.png');
    }
  
`
export const Hero = styled.div`
width: 90%;

padding: 5rem 0 5rem 8rem;
height: 250%;
  & .img{
    height: 100%;

    
  }
`