import { Button } from 'react-bootstrap';
import styles from './styles.module.css';

const Product = () => {
    return (
        <div className={`${styles.product} text-center`} role='button'>
            <img alt=""
            src="https://eg.hm.com/assets/styles/HNM/14482498/6103a8463876770c30cdba3535b7be1f333315fe/2/image-thumb__3464789__product_listing/cb91f8f128ac2125e0ec3a008a2e8d2497d15434.jpg"/>
            <div>
            <h4 className='mt-3'>Title</h4>
            <span className='d-block mb-2'>10 EGP</span>
            <Button>ADD To Card</Button>
            </div>
        </div>
    )
}

export default Product;