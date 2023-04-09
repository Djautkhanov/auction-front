import React from 'react'
import styles from './Categories.module.scss'
import painting from '../../assets/categories img/Живопись.jpg'
import drawing from '../../assets/categories img/Рисунок.jpg'
import sculpture from '../../assets/categories img/Скульптура.jpg'
import digital_art from '../../assets/categories img/цифровое искусство.jpg'
import handmade from '../../assets/categories img/handmade.jpg'

const Categories = () => {
    return (
        <div className={styles.categories_wrapper}>
            <div className={styles.categories_container}>
                <div className={styles.painting_container}>
                    <div className={styles.painting}>
                        <img src={painting} alt={painting} />
                        <h4>Живопись</h4>
                    </div>
                </div>
                <div className={styles.drawing_container}>
                    <div className={styles.drawing}>
                        <img src={drawing} alt={drawing}/>
                        <h4>Рисунок</h4>
                    </div>
                </div>
                <div className={styles.sculpture_container}>
                    <div className={styles.sculpture}>
                        <img src={sculpture} alt={sculpture}/>
                        <h4>Cкульптура</h4>
                    </div>
                </div>
                <div className={styles.digital_art_container}>
                    <div className={styles.digital_art}>
                        <img src={digital_art} alt={digital_art}/>
                        <h4>Цифровое искусство</h4>
                    </div>
                </div>
                <div className={styles.hanmade_container}>
                    <div className={styles.handmade}>
                        <img src={handmade} alt={handmade}/>
                        <h4>Handmade</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories  
