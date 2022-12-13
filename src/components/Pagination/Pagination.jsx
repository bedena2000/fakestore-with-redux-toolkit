import './Pagination.scss';

// Component
import { Pagination } from '@mui/material';

// Redux Toolkit
import { useDispatch } from 'react-redux';
import { changePage } from '../../app/slices/pageSlice';

export const PaginationWrapper = () => {
    const dispatch = useDispatch();
  const onPageChange = (event, value) => {
    const pageNewValue = value;
    dispatch(changePage(pageNewValue));
    console.log(pageNewValue);
  };

  return <Pagination onChange={onPageChange} count={6} variant="outlined" />;
};
