import { useContext } from 'react';
import { RoutineContext } from '/src/app/App.jsx';
import styles from './Home.module.css';
import Showcase from '/src/components/Showcase.jsx'
import cart from '/src/assets/cart.png';

function Home() {
  const [ routine ] = useContext(RoutineContext);

  function getTotalPrice() {
    let total = 0;
    for (let category of ['cleanser', 'moisturizer', 'cream', 'serum']) {
      if (routine[category]) {
        total += Number(routine[category]['price'].slice(1));
      }
    }
    return total;
  }

  return(
    <main>
      <h2>Current Products</h2>
      <div id={styles['product-container']}>
        <Showcase category='cleanser' />
        <Showcase category='moisturizer' />
        <Showcase category='serum' />
        <Showcase category='cream' />
      </div>
      <div id={styles['total']}>
        <img src={cart} alt='cart'/>
        <h2>Total price: ${(Math.round(getTotalPrice() * 100) / 100).toFixed(2)}</h2>
      </div>
    </main>
  )
}

export default Home;