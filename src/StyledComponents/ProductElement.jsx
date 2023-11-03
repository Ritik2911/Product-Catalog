import styled from "styled-components";

export const ProductEle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
transition: all 300ms ease-in;
padding: 1rem;
border-radius: 8px;
margin:0 auto;
width:300px;
background-color: rgb(226 232 240);

&:hover{
    transform: scale(1.1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
`;

export const StyledImg = styled.img`
  border-radius: 8px 8px 0 0;
  height:250px;
  aspect-ratio: 9 / 13;
  object-fit:contain;
`;
export const ProductTitle = styled.h2`
color: #4a5568;
font-weight: 600;
font-size: 1.125rem;
text-align: left;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
width: 10rem;
`;

export const ProductDescription = styled.p`
color: #cbd5e0;
font-weight: 400;
font-size: 16px;
text-align: left;
`;

export const ProductPrice = styled.p`
color: #48bb78;
  font-weight: 600;
  `