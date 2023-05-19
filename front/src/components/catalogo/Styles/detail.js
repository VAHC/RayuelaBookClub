import styled from "styled-components";

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 5%;
    align-items: flex-start;

`;
export const ReseñasDiv = styled.div`
display: flex;
    flex-direction: column;
    align-items: flex;
    justify-content: space-evenly;
    height: 100%;
`


export const TitleDiv = styled.h1`
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
`;

export const Titulo = styled.h2`
    height: 10%;
    width: 70%;
    font-size: 30px;
    overflow-y: hidden;
    margin-right: 5%;

`;


export const Button = styled.button`
width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #333;
  margin-bottom: 35%;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;


export const InfoTag = styled.h2`
    margin-top: 15px;
    font-size: 18px;
`;

export const ValorTag = styled.span`
margin-top: -20px;
    font-size: 16px
    `;