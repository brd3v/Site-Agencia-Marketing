import styled from "styled-components";

export const Template = styled.div`
  @media(max-width: 768px){
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
      }
display: grid;
width: 100%;
grid-template-columns: 200px 200px 200px;
justify-content: center;
height: 100vh;
margin-top: 5rem;
  gap: 50px 100px;
  & img{
    height: 50%;
    width: 100%;
      }
      & p {
        text-align: center;
        margin-bottom: 2vw;
        font-weight: bold;
      }
      & h5 {
        text-align: center;
        margin-top: 5vw;
      }
      & a {        width: 50%;
  background-color: gray;
  padding: 2px;
  color: #fff;
        text-decoration: none;
        border-radius: 5px;

      }


`

export const Main = styled.div`
margin-top: 5rem;
`
