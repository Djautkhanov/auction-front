import React from 'react'
import styles from '../Main/Main.module.scss'


export const Main = () => {
    return (
        <div className={styles.main_wrapper}>
            <div className={styles.main_container}>
                <div className={styles.main}>
                    <div>
                    <h1>онлайн аукцион <br />
                        современного искусства
                    </h1>
                    <div className={styles.btn}>
                        <button>
                            стать участником
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
