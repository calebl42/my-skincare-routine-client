import { useContext } from 'react';
import { RoutineContext } from '/src/app/App.jsx';
import styles from './Product.module.css';
import { useNavigate } from 'react-router-dom';

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
      <p>{product['title']}</p>
      <h4>Stars: {product['stars']}/5</h4>
      <h4>Reviews: {product['total_reviews']}</h4>
      <h3>{product['price']}</h3>
      <button onClick={handleProductSelection}>Add to routine</button>
    </div>
  )
}

export default Product;