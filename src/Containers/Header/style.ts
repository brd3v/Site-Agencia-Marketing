import styled from 'styled-components'


export const HeaderConteiner = styled.div`
    padding: 10px 50px;
    max-width: 100%;
    border-bottom: 4px solid #cecece;
    display: flex;
    align-items: center;
    background-color: #fff;
    justify-content: space-between;
    @media(max-width:768px){
        max-width: 100%;
        width: 100%;
    }
  
`

export const NavI = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
           @media(max-width:768px){
     display: none;
    }


`