import { styled } from "styled-components";

export const ShowcaseParticleContainer = styled.div`
position:relative;

@media(max-width:${({ theme }) => theme.breakpoints.mobile}){
	display:none;
}
`

export const ShowcaseImageCard = styled.div`
position:relative;
overflow:hidden;
border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
height: 380px;
background-size:cover;
width: 330px;
animation: morph 10s ease-in-out infinite;
transition: all 1s ease-in-out;
outline:3px solid white;
border:5px solid black;
}
@keyframes morph {
    0%{
	    border-radius:  60% 40% 30% 70% / 60% 30% 70% 40%;
	} 
	50%{
		border-radius:  50% 60% 70% 40% / 70% 60% 50% 50%;
	}
	100%{
		border-radius:  60% 40% 30% 70% / 60% 30% 70% 40%;
	} 
`

export const Particle = styled.img`
postion:absolute;
top:${({ top }) => top};
left:${({ left }) => left};
right=${({ right }) => right};
bottom:${({ bottom }) => bottom};
`