import styled from "styled-components"

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