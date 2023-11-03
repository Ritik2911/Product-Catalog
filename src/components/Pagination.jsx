import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Button, PgnDiv } from '../StyledComponents/Pagination';

const Pagination = (props) => {
  const {totalPage,currentPage,setCurrentPage} = useContext(AppContext);
  console.log("total page" ,totalPage);
  return (
    <PgnDiv>
      <Button disabled={currentPage === 0} onClick={() => setCurrentPage(currentPage-1)}>PREV</Button>
      <p>{currentPage+1} of {totalPage}</p>
      <Button disabled={currentPage >= totalPage-1} onClick={() => setCurrentPage(currentPage+1)}  >NEXT</Button>
    </PgnDiv>
  )
};

export default Pagination;