import React from 'react'
import styles from './Categories.module.scss'

const Categories = () => {
    return (
        <div className={styles.categories_wrapper}>
            <ul className={styles.category_cart}>
                {/* map <li>categry-item</li> */} тут будут categories
            </ul> 
        </div>
    )
}

export default Categories  
