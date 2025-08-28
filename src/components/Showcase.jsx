import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { RoutineContext } from '/src/app/App.jsx';
import styles from './Showcase.module.css';
import { useNavigate } from 'react-router-dom';

export function getParsedTitle(title) {
  let commaIndex = title.indexOf(',');
  let dashIndex = title.indexOf(' - '); 
  let altDashIndex = title.indexOf(' – '); 
  let vertIndex = title.indexOf(' | ');
  let cutoffs = [];
  if (commaIndex >= 0) cutoffs.push(commaIndex);
  if (dashIndex >= 0) cutoffs.push(dashIndex);
  if (altDashIndex >= 0) cutoffs.push(altDashIndex);
  if (vertIndex >= 0) cutoffs.push(vertIndex);

  if (cutoffs.length === 0) {
    return title;
  } else {
    return title.slice(0, Math.min(...cutoffs));
  }
}

function Showcase({ category }) {
  const [ routine, setRoutine ] = useContext(RoutineContext);
  const navigate = useNavigate();

  function handleRemove() {
    let newRoutine = structuredClone(routine);
    newRoutine[category] = null;
    setRoutine(newRoutine);
  }


  return (
    <section className={styles['product'] + ' ' + (category === 'cream' ? styles['cream'] : '')}>
      { !routine[category] &&
        <>
          <h3>{category}</h3>
          <NavLink to={category + 's'}>
            <img className={styles['plus-icon']} src='/src/assets/plus.png'/>
          </NavLink>
        </>
      }
      { routine[category] && 
        <>
          <h3>{category}</h3>
          <img src={routine[category]['image']} className={styles['product-img']} />
          <h3>
            {getParsedTitle(routine[category]['title'])}
          </h3>
          <p>Price: {' ' + routine[category]['price_string']}</p>
          <div id={styles['showcase-buttons']}>
            <button id={styles['amazon-link']}>
              <a href={routine[category]['url']} target='_blank'>
                <img src='/src/assets/amazon.png'/>
              </a>
            </button>
            <button onClick={() => navigate(category + 's')}>change</button>
            <button onClick={handleRemove}>remove</button>
          </div>
        </>
      }
    </section>
  )
}

export default Showcase;