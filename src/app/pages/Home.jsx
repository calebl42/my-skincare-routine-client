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
          <h3>Cleanser</h3>
          { !routine['cleanser'] &&
            <div>
              <NavLink to='cleansers'>
                <img className={styles['plus-icon']} src='/src/assets/plus.png'/>
              </NavLink>
            </div>
          }
          { routine['cleanser'] && routine['cleanser']['title'] }
        </div>
        <div id='moisturizer-showcase'>
          <h3>Moisturizer</h3>
          { !routine['moisturizer'] &&
            <div>
              <NavLink to='moisturizers'>
                <img className={styles['plus-icon']} src='/src/assets/plus.png'/>
              </NavLink>
            </div>
          }
          { routine['moisturizer'] && routine['moisturizer']['title'] }
        </div>
        <div id='serum-showcase'>
          <h3>Serum</h3>
          { !routine['serum'] &&
            <div>
              <NavLink to='serums'>
                <img className={styles['plus-icon']} src='/src/assets/plus.png'/>
              </NavLink>
            </div>
          }
          { routine['serum'] && routine['serum']['title'] }
        </div>
        <div id='cream-showcase'>
          <h3>Cream</h3>
          { !routine['cream'] &&
            <div>
              <NavLink to='creams'>
                <img className={styles['plus-icon']} src='/src/assets/plus.png'/>
              </NavLink>
            </div>
          }
          { routine['cream'] && routine['cream']['title'] }
        </div>
      </div>
    </main>
  )
}

export default Home;