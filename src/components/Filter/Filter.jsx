import React from 'react';

import { Label, Input } from './Filter.styled';
import { setFilterValue } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selector';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        value={value}
        onChange={e => {
          dispatch(setFilterValue(e.target.value));
        }}
      ></Input>
    </Label>
  );
};

export default Filter;
