import React from 'react';
import { Outlet } from 'react-router-dom';
import { useReducer } from "react";
import { getSortedData } from '../../components/getSortedData';
import { getFilteredData } from '../../components/getFilteredData';
import {reducer} from "../../components/filterSortReducer"
import { obj } from '../../components/Object';
export default function Collection() {
 
  return (
    <div>

      <Outlet/>
    </div>
  );
}
