import { useContext } from 'react';
import { RoutineContext } from '/src/app/App.jsx';
import styles from './Product.module.css';
import { useNavigate } from 'react-router-dom';
import { getParsedTitle } from './Showcase';
import star from '/src/assets/star.png';

function Product({ product }) {
  const [ routine, setRoutine ] = useContext(RoutineContext);
  const navigate = useNavigate();

  function handleProductSelection() {
    let newRoutine = structuredClone(routine);
    newRoutine[product['category']] = product;
    setRoutine(newRoutine);
    navigate('/');
  }

  return (
    <div className={styles.product}>
      <img src={product['image']}/>
      <h3>{getParsedTitle(product['title'])}</h3>
      <p>{product['price']}</p>
      <div className={styles['stars-container']}>
        <p>{product['stars']}/5</p>
        <img src={star} alt='star'/>
        <p style={{textIndent:'1vh'}}>({product['total_reviews']})</p>
      </div>
      <button onClick={handleProductSelection}>Add to routine</button>
    </div>
  )
}

export default Product;