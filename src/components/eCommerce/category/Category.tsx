import styles from './styles.module.css';

const Category = () => {
    return (
        <div className={`${styles.category} text-center`} role='button'>
            <img className='rounded-circle' alt=""
            src="https://cdn-eu.dynamicyield.com/api/9876644/images/244c68ad42d8b__hp-w12-22032022-h_m-women_shirts-blouses.jpg"/>
            <h4 className='mt-3'>Title</h4>
        </div>
    )
}

export default Category