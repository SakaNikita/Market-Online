import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterCatégories,
  getSelectedCatégories,
} from "../../Features/product/productsSlice";

const Filter = ({ catégories }) => {
  const dispatch = useDispatch();
  const selectedCatégories = useSelector(getSelectedCatégories);

  return (
    <span
      onClick={() => {
        dispatch(filterCatégories(catégories));
      }}
      className={
        selectedCatégories === catégories
          ? "filterButton filterButtonActive"
          : "filterButton"
      }
    >
      {catégories}
    </span>
  );
};

export default Filter;
