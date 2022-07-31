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

export const FormContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
gap: 0.5rem;
color: ${(props) => props.theme["gray-100"]};
font-size: 1.125 rem;
font-weight: bold;
flex-wrap: wrap;
`
export const InputsContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;
    `

export const BaseInput = styled.input`
    background: transparent;
    height: 2.5rem;
    border: 0;
    border-bottom: 2px solid ${(props) => props.theme["gray-500"]};
    font-weight: bold;
    font-size: 1.125rem;
    padding: 0 0.5rem;
    color: ${(props) => props.theme["gray-100"]};
    margin: 0 1rem;
    
    &:focus{
        border-bottom: 2px solid ${(props) => props.theme["green-500"]};
    }

    &::placeholder{
        color: ${(props) => props.theme["gray-500"]};
    }

    `

export const TaskInput = styled(BaseInput)`
    flex: 1;
    &::-webkit-calendar-picker-indicator{
        display: none !important;
    }
`

export const MinutesAmountInput = styled(BaseInput)`
    width: 4rem;
`

export const CountdownContainer = styled.div`
font-family: 'Roboto Mono', monospace;
font-size: 10rem;
line-height: 8rem;
color: ${(props) => props.theme["gray-100"]};

display: flex;
align-items: center;
gap: 1rem;

span{
    border-radius: 8px;
    padding: 2rem 1rem;
    background-color: ${(props) => props.theme["gray-700"]};
}
`

export const Separator = styled.div`
padding: 2rem 0;
color: ${(props) => props.theme["green-500"]};
width: 4rem;
overflow: hidden;
display: flex;
justify-content: center;
`

export const StartCountdownButton = styled.button`
 width: 100%;
 height: 56px;
 display: flex;
 justify-content: center;
 align-items: center;
 border:0;
 outline: none;
 gap: 0.5rem;
 font-weight: bold;
 background-color: ${(props) => props.theme["green-500"]};
 color: ${(props) => props.theme["gray-100"]};
 border-radius: 4px;
 cursor: pointer;

    &:disabled{
        opacity: .7;
        cursor: not-allowed;
    }

    &:not(:disabled):hover{
        background-color: ${(props) => props.theme["green-700"]};
    }

`