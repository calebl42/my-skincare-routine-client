import { useContext } from 'react';
import { RoutineContext } from '/src/app/App.jsx';
import Product from '/src/components/Product.jsx';
import styles from '/src/components/Product.module.css';

function Serums() {
  const [ routine, setRoutine, navigate, amazonProductData, loading ] = useContext(RoutineContext);
  
  if (loading) return (
    <div>loading latest products...</div>
  )

  const productList = amazonProductData.serumJSON.productList.slice(0, 10).map(
    prod => {
      return {...prod, id: crypto.randomUUID(), category: 'serum'};
    }
  );
  
  return (
    <main>
      <h2>Serums</h2>
      <ul>
        <li className={styles['products-header']}>
        <p></p>
        <h3>Product name</h3>
        <p>Price</p>
        <p>Stars + Reviews</p>
        <p></p>
      </li>
      {productList.map(prod => 
        <li key={prod.id}>
          <Product product={prod} />
        </li>
      )}
    </ul>
    </main>
  )
}

export default Serums;