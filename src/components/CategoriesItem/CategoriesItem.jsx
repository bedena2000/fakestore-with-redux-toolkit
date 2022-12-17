import './CategoriesItem.scss';
import { Link } from 'react-router-dom';

export const CategoriesItem = ({ categoryName, toPage }) => {
  return (
    <div>
      <Link to={`/${toPage}`} className="categoriesItem">
        {categoryName}
      </Link>
    </div>
  );
};
