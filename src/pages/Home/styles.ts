import styled from "styled-components";

export const Container = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

form{ 
display: flex;
flex-direction: column;
align-items: center;
gap: 3.5rem;
}

`;




export const BaseCountdownButton = styled.button`
 width: 100%;
 height: 56px;
 display: flex;
 justify-content: center;
 align-items: center;
 border:0;
 outline: none;
 gap: 0.5rem;
 font-weight: bold;
 color: ${(props) => props.theme["gray-100"]};
 border-radius: 4px;
 cursor: pointer;


`

export const StartCountdownButton = styled(BaseCountdownButton)`
 background-color: ${(props) => props.theme["green-500"]};

&:disabled{
    opacity: .7;
    cursor: not-allowed;
}

&:not(:disabled):hover{
    background-color: ${(props) => props.theme["green-700"]};
}
`
export const StopCountdownButton = styled(BaseCountdownButton)`
 background-color: ${(props) => props.theme["red-500"]};
`