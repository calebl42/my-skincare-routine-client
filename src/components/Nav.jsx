import { NavLink } from 'react-router';

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='cleansers'>Cleansers</NavLink>
        </li>
        <li>
          <NavLink to='moisturizers'>Moisturizers</NavLink>
        </li>
        <li>
          <NavLink to='serums'>Serums</NavLink>
        </li>
        <li>
          <NavLink to='creams'>Creams</NavLink>
        </li>
        <li>
          <NavLink to='guide'>Guide</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;