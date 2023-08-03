import { styled } from "styled-components";
import { IconContainer } from "./Global.styled";

export const SkillsCardContainer = styled.div`
display:grid;
grid-template-columns:auto auto;
grid-gap:2rem;
padding:0 5%;

@media(max-width:${({ theme }) => theme.breakpoints.mobile}){
    display:flex;
    flex-wrap:wrap;
    padding:0;
    grid-gap:0rem 2rem;
}
`

export const SkillsCard = styled.div`
width:150px;
height:110px;
border:1px solid #fff;
padding:1rem 0;
border-radius:1rem;
display:flex;
flex-direction:column;
align-items:center;
background-color:${({ theme }) => theme.colors.primary_light};
&>:hover {
    color:${({ theme }) => theme.colors.white};
};
&:nth-child(5) ${IconContainer} {
    animation-name: floating-ball-model-3;
    animation-duration: 7s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
};
@keyframes floating-ball-model-3 {
    from {
        transform: rotate(0deg);
    };
    to { 
        transform: rotate(360deg);
    };
};

@media(max-width:${({ theme }) => theme.breakpoints.mobile}){
    width:45%;
    margin-top:2rem;
}
`