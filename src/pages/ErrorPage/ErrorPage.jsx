import './ErrorPage.scss';
import { Link } from 'react-router-dom';

export const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>ERROR 404</h1>
      <p>Sorry, that page isn't exist</p>
      <Link className='error-page-link' to={'/'}>Main Page</Link>
    </div>
  );
};
