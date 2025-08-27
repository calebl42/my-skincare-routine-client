import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { RoutineContext } from '/src/app/App.jsx';
import styles from './Showcase.module.css';
import { useNavigate } from 'react-router-dom';

function Showcase({ category }) {
  const [ routine, setRoutine ] = useContext(RoutineContext);
  const navigate = useNavigate();

  function handleRemove() {
    let newRoutine = structuredClone(routine);
    newRoutine[category] = null;
    setRoutine(newRoutine);
  }

  return (
    <section className={styles['product']}>
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
          <img src={routine[category]['image']} className={styles['product-img']} />
          <h3>{category}</h3>
          <h4>
            { routine[category]['title'].slice(0, routine[category]['title'].indexOf(',')) }
          </h4>
          <div>
            <button onClick={() => navigate(category + 's')}>change</button>
            <button onClick={handleRemove}>remove</button>
          </div>
        </>
      }
    </section>
  )
}

export default Showcase;