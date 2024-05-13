import Basket from "@assets/svg/cart.svg?react";
import styles from './styles.module.css';

const HeaderBasket = () => {
    return (
        <div role="button" className="me-3 position-relative">
            <Basket />
            <span className={`${styles.count} bg-info text-white text-center rounded-circle position-absolute px-2`}>
                1
            </span>
        </div>
    )
}

export default HeaderBasket