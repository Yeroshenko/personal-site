import React, { FC } from 'react'

import { Title, TitleTagsEnum } from '../Title'
import Arrow from '../../icon/description-arrow.svg'
import styles from './styles.module.sass'

export const HeroSection: FC = () => {
    return (
        <section className={styles.wrapper}>
            <nav className={styles.navigation}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>menu</li>
                    <li className={styles.listItem}>menu</li>
                    <li className={styles.listItem}>menu</li>
                    <li className={styles.listItem}>menu</li>
                </ul>
            </nav>
            <div className={styles.titlesBlock}>
                <Title tagName={TitleTagsEnum.h1}>
                    <span className={styles.titleLine}>Hello.</span>
                    <span className={styles.titleLine}>I am Valeriy</span>
                </Title>
                <div className={styles.descriptionBlock}>
                    <Arrow />
                    <h2 className={styles.description}>Front end Developer</h2>
                </div>
            </div>
        </section>
    )
}
