import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { RoutineContext } from '/src/app/App.jsx';
import styles from './Showcase.module.css';
import plus from '/src/assets/plus.png';
import amazon from '/src/assets/amazon.png';

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
  const [ routine, setRoutine, navigate ] = useContext(RoutineContext);

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
            <img className={styles['plus-icon']} src={plus} alt='plus'/>
          </NavLink>
        </>
      }
      { routine[category] && 
        <>
          <h3>{category}</h3>
          <img src={routine[category]['image']} className={styles['product-img']} alt='product' />
          <h3>
            {getParsedTitle(routine[category]['title'])}
          </h3>
          <p>Price: {' ' + routine[category]['price']}</p>
          <div id={styles['showcase-buttons']}>
            <button id={styles['amazon-link']}>
              <a href={routine[category]['url']} target='_blank'>
                <img src={amazon} alt='amazon'/>
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