import styled from "styled-components";

export const ProductsDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  max-width: 1040px;
  padding: 0.5rem;
  margin: 0 auto;
  gap: 2rem 1rem;
  min-height: 80vh;

  @media (max-width: 639px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  @media (min-width: 640px) and (max-width: 767px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;
