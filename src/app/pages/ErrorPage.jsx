import { NavLink } from 'react-router';
import styles from './ErrorPage.module.css';

const ErrorPage = () => {
  return (
    <main id={styles['error-page']}>
      <h2>Oh no, this page doesn't exist!</h2>
      <NavLink to='/'>
        <button>Click here to go home</button>
      </NavLink>
    </main>
  );
}

export default ErrorPage;