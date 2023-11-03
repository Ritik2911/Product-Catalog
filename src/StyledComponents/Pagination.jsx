import styled from "styled-components";

export const PgnDiv = styled.div`
display:flex;
align-items:center;
justify-content:center;
gap:1rem;
width:100%;
max-width: 1040px;
margin:0px auto;
padding: 20px 0;
`;

export const Button = styled.button`
background-color: #FFFFFF;
border: 1px solid rgba(0, 0, 0, 0.1);
border-radius: .25rem;
box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
box-sizing: border-box;
color: rgba(0, 0, 0, 0.85);
cursor: pointer;
font-family: system-ui, -apple-system, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif;
font-size: 16px;
font-weight: 600;
margin: 0;
padding:10px 25px;
text-decoration: none;
transition: all 250ms;
user-select: none;
-webkit-user-select: none;
touch-action: manipulation;
vertical-align: baseline;
width: auto;

&:hover,
&:focus {
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  color: rgba(0, 0, 0, 0.65);
  transform: translateY(-1px);
}

&:active {
  background-color: #F0F0F1;
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
  color: rgba(0, 0, 0, 0.65);
  transform: translateY(0);
}
`;