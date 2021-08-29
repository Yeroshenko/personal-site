import React, { FC, useEffect, useRef } from 'react'
import { gsap } from 'gsap'

import { Title, TitleTagsEnum } from '../Title'
import Arrow from '../../icon/description-arrow.svg'
import styles from './styles.module.sass'
import { TextAnimLine, textAnimLineSelector } from '../TextAnimLine'

export const HeroSection: FC = () => {
    const titleRef = useRef<HTMLHeadingElement>(null)
    const navListRef = useRef<HTMLUListElement>(null)
    const arrowRef = useRef<HTMLDivElement>(null)
    const descriptionRef = useRef<HTMLHeadingElement>(null)

    useEffect(() => {
        const titleSelector = gsap.utils.selector(titleRef)
        const descriptionSelector = gsap.utils.selector(descriptionRef)

        gsap.from(titleSelector(textAnimLineSelector), 1.5, {
            y: 130,
            ease: 'power4.out',
            delay: 0.2,
            stagger: { amount: 0.3 }
        })

        gsap.from(navListRef.current, 1.3, {
            y: -100,
            ease: 'power4.out',
            delay: 0.1
        })

        gsap.from(arrowRef.current, 1, {
            y: -20,
            x: -20,
            opacity: 0,
            ease: 'power4.out',
            delay: 1.2
        })

        gsap.from(descriptionSelector(textAnimLineSelector), 1, {
            y: 40,
            delay: 1,
            ease: 'power4.out',
            stagger: { amount: 0.3 }
        })
    }, [])

    return (
        <section className={styles.wrapper}>
            <nav className={styles.navigation}>
                <ul className={styles.list} ref={navListRef}>
                    <li className={styles.listItem}>menu</li>
                    <li className={styles.listItem}>menu</li>
                    <li className={styles.listItem}>menu</li>
                    <li className={styles.listItem}>menu</li>
                </ul>
            </nav>
            <div className={styles.titlesBlock}>
                <Title tagName={TitleTagsEnum.h1} ref={titleRef}>
                    <TextAnimLine>Hello.</TextAnimLine>
                    <TextAnimLine>I am Valeriy</TextAnimLine>
                </Title>
                <div className={styles.descriptionBlock}>
                    <div className={styles.arrowWrapper} ref={arrowRef}>
                        <Arrow />
                    </div>
                    <h2 className={styles.description} ref={descriptionRef}>
                        <TextAnimLine>Front end</TextAnimLine>
                        <TextAnimLine>Developer</TextAnimLine>
                    </h2>
                </div>
            </div>
        </section>
    )
}
