import styled from 'styled-components'

export const Btn = styled.a`
    border: .5px solid #5e00eb;
    background-color: #5e00eb;
    border-radius: 30px;
    color: #fff;
    font-weight: bold;
    padding: 1rem 3rem;
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    cursor: pointer;
    transition: all 2s ;
    max-width: 100%;

    &:hover{
        background-color: blueviolet;
        transition: all 2s ;
        color: black
    }

`