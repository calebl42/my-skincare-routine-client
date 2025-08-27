import { useContext } from 'react';
import { RoutineContext } from '/src/app/App.jsx';
import { NavLink } from 'react-router';
import styles from './Home.module.css';

function Home() {
  const [ routine, setRoutine ] = useContext(RoutineContext);

  return(
    <main>
      <h2>Products</h2>
      <div id='product-showcase'>
        <div id='cleanser-showcase'>
          { !routine['cleanser'] &&
            <div>
              <h3>add cleanser</h3>
              <NavLink to='cleansers'><img className={styles['plus-icon']} src='/src/assets/plus.png'/></NavLink>
            </div>
          }
          { routine['cleanser'] && routine['cleanser']['title'] }
        </div>
        <div id='cream-showcase'>

        </div>
        <div id='moisturizer-showcase'>

        </div>
        <div id='serum-showcase'>
          
        </div>
      </div>
    </main>
  )
}

export default Home;