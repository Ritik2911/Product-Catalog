import React from 'react'
import { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { CategoryData, SortOptions } from '../data/Product';
import { CategoryFilter, FilterDiv, SortFilter } from '../StyledComponents/Filter';

const Filter = () => {
    const {category, setCategory,settingTotalData,sortBy,setSortBy,settingTotalDataSortBy} = useContext(AppContext);
    const handleCategoryChange = (e) => {
      const target = e.target.value;
      setCategory(target);
    }

    useEffect(() => {
      settingTotalData();
      setSortBy('none');
    }, [category]);

    const handleSortChange = (e) => {
      const target = e.target.value;
      setSortBy(target);
      console.log(sortBy);
    }

    useEffect(() => {
      settingTotalDataSortBy();
    },[sortBy])

  return (
    <FilterDiv>
    <CategoryFilter>
      <label htmlFor="category">Category</label>
        <select value={category} onChange={handleCategoryChange} name='category' id='category'>
          <option value='all'>All</option>
          {CategoryData.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </CategoryFilter>

      <SortFilter>
            <label htmlFor='sortBy'>Sort By</label>
            <select value={sortBy} onChange={handleSortChange} name='sortBy' id='sortBy'>
              <option value='none' disabled={sortBy !== 'none'}>Sort By</option>
                {SortOptions.map((sortOption) => (
                    <option key={sortOption.id} value={sortOption.id}>
                        {sortOption.name}
                    </option>
                ))}
            </select>
        </SortFilter>
              </FilterDiv>
  )
}

export default Filter
