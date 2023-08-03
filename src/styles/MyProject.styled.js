import { styled } from "styled-components";

export const TechStackCard = styled.div`
display:inline-block;
background-color:${({ theme }) => theme.colors.secondary};
color:#fff;
padding:0.3rem 1rem;
border-radius:5px;

@media(max-width:${({ theme }) => theme.breakpoints.mobile}){
    margin:0.5rem 1rem 0.5rem 0;
}
`

export const ProjectImageContainer = styled.div`
display:flex;
justify-content:${({ justify }) => justify};
`

export const ProjectImage = styled.div`
border:1px solid #fff;
width:90%;
height:300px;
border-radius:10px;

&>img{
    height:100%;
    width:100%;
    border-radius:10px;
}

@media(max-width:${({ theme }) => theme.breakpoints.mobile}){
    width:100%;
    margin-top:2rem;
}
`