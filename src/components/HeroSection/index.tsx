import React, { FC, useEffect, useMemo, useRef } from 'react'
import { gsap } from 'gsap'

import { getAssetUrl } from '@cms/helpers/url'
import { IWorkInfoFields } from '@shared-types/generated/cms'
import { CircleButton } from '@components/HeroSection/components/CircleButton'
import { TextAnimLine, textAnimLineSelector } from '../ui/TextAnimLine'
import { Title, TitleTagsEnum } from '../ui/Title'
import { RichTextRenderer } from '../ui/RichTextRenderer'

import Arrow from '@icons/description-arrow.svg'
import styles from './styles.module.sass'

interface IHeroSectionProps {
    workInfo: IWorkInfoFields
}

export const HeroSection: FC<IHeroSectionProps> = ({ workInfo }) => {
    const titleRef = useRef<HTMLHeadingElement>(null)
    const navListRef = useRef<HTMLUListElement>(null)
    const arrowRef = useRef<HTMLDivElement>(null)
    const descriptionRef = useRef<HTMLHeadingElement>(null)
    const aboutRef = useRef<HTMLDivElement>(null)
    const circleButtonRef = useRef<HTMLAnchorElement>(null)

    const cvUrl = useMemo(() => getAssetUrl(workInfo.cv), [])

    useEffect(() => {
        const titleSelector = gsap.utils.selector(titleRef)
        const descriptionSelector = gsap.utils.selector(descriptionRef)
        const aboutSelector = gsap.utils.selector(aboutRef)
        const circleButtonSelector = gsap.utils.selector(circleButtonRef)

        gsap.from(titleSelector(textAnimLineSelector), 1.5, {
            y: 130,
            opacity: 0,
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

        gsap.from(aboutSelector('p'), 2.5, {
            y: 50,
            opacity: 0,
            delay: 1,
            ease: 'power4.out',
            stagger: { amount: 0.3 }
        })

        gsap.from(circleButtonSelector('svg'), 2.5, {})
    }, [])

    console.log({ workInfo })

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
            <div className={styles.aboutMe}>
                <CircleButton ref={circleButtonRef} href={cvUrl} target="_blank" title="show cv" />
                <RichTextRenderer
                    document={workInfo.about}
                    className={styles.aboutMeText}
                    ref={aboutRef}
                />
            </div>
        </section>
    )
}
