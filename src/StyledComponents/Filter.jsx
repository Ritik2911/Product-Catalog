import styled from "styled-components";

export const FilterDiv = styled.div`
color: rgb(15 23 42);
  max-width: 840px;
  padding: 0.75rem 2rem;
  margin: 0 auto 25px;
  display: flex;
  flex-wrap:wrap;
  justify-content:space-between;
  align-items:center;
  background-color:rgb(226 232 240);
  border-radius: 0 0 25px 25px;
`;

export const CategoryFilter = styled.div`
display:flex;
gap:0.5rem;
align-items:center;
flex-direction:column;
justify-content:center;
`;

export const SortFilter = styled(CategoryFilter)`
`
