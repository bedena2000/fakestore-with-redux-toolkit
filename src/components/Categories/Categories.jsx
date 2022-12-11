import './Categories.scss';

// Components
import { CategoriesItem } from '../CategoriesItem/CategoriesItem';

export const Categories = () => {
    return <div className="categories">
        <CategoriesItem categoryName='Clothes' />
        <CategoriesItem categoryName='Electronics' />
        <CategoriesItem categoryName='Furniture' />
        <CategoriesItem categoryName='Shoes' />
    </div>
};