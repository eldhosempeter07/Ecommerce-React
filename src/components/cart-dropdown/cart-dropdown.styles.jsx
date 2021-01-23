import styled from "styled-components";
import { CustomButton } from "../custom-button/custom-button.component";

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;
`

export const CartItemContainer = styled.div`
    height: 240px;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      scrollbar-color: rgba(80, 80, 80, 0) rgba(0, 0, 0, 0); //for mozilla
      scrollbar-width: thin; // scrollbar style for mozilla
      overflow: auto;
      color: rgba(80, 80, 80, 0);
      transition: all 0.3s;
   
      &::-webkit-scrollbar {
        width: 14px;
      }
      
      &::-webkit-scrollbar-thumb {
        background-clip: content-box;
        border: 4px solid transparent;
        border-radius: 0;
        box-shadow: inset 0 0 0 10px;
      }
      
      &::-webkit-scrollbar-button {
        width: 0;
        height: 0;
        display: none;
      }
      
      &::-webkit-scrollbar-corner {
        background-color: transparent;
      }
      
      :hover{
      scrollbar-color: rgba(80, 80, 80, 0.4) rgba(0, 0, 0, 0); //for mozilla
      color: rgba(80, 80, 80, 0.45);
    }
`

export const EmptyMessageContainer  = styled.span`
    font-size: 18px;
    margin: 50px auto;
    color: black;
`

export const CartDropdownButton  = styled(CustomButton)`
    margin-top: auto;

`