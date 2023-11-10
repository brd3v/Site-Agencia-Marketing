import styled from "styled-components";

export const TexArea = styled.textarea`
border: none;
height: 200px;
border-radius: 30px;
resize: none;
width: 300px;
padding: 1rem;
margin-bottom: 1rem;

&:focus{
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
}
`