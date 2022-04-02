import React, { FC, useEffect, useMemo, useRef } from 'react'
import { gsap } from 'gsap'
import cn from 'classnames'

import { getAssetUrl } from '@cms/helpers/url'
import { IWorkInfoFields } from '@shared-types/generated/cms'
import { CircleButton } from '@components/HeroSection/components/CircleButton'
import { TextAnimLine, textAnimLineSelector } from '../ui/TextAnimLine'
import { Title, TitleTagsEnum } from '../ui/Title'
import { RichTextRenderer } from '../ui/RichTextRenderer'

import Arrow from '@icons/description-arrow.svg'
import styles from './styles.module.sass'
import { getDataAnimSelector } from '../../shared/helpers'

interface IHeroSectionProps {
    workInfo: IWorkInfoFields
}

const CV_CIRCLE_DATA_ANIM = 'cvCircle'
const CV_TITLE_DATA_ANIM = 'cvTitle'

export const HeroSection: FC<IHeroSectionProps> = ({ workInfo }) => {
    const titleRef = useRef<HTMLHeadingElement>(null)
    const navListRef = useRef<HTMLUListElement>(null)
    const arrowRef = useRef<HTMLDivElement>(null)
    const descriptionRef = useRef<HTMLHeadingElement>(null)
    const aboutRef = useRef<HTMLDivElement>(null)
    const circleButtonRef = useRef<HTMLAnchorElement>(null)

    const cvUrl = useMemo(() => getAssetUrl(workInfo.cv), [workInfo.cv])

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

        gsap.from(circleButtonSelector(getDataAnimSelector(CV_CIRCLE_DATA_ANIM)), 5, {
            strokeDashoffset: 1260,
            ease: 'power4.out',
            delay: 1
        })

        gsap.from(circleButtonSelector(getDataAnimSelector(CV_TITLE_DATA_ANIM)), 1, {
            opacity: 0,
            ease: 'power4.out',
            delay: 1
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
                        <TextAnimLine className={styles.descriptionLine}>Front end</TextAnimLine>
                        <TextAnimLine className={styles.descriptionLine}>Developer</TextAnimLine>
                    </h2>
                </div>
            </div>
            <div className={cn(styles.aboutMe, 'container')}>
                <CircleButton
                    title="show cv"
                    target="_blank"
                    href={cvUrl}
                    ref={circleButtonRef}
                    animationAttr={{ circle: CV_CIRCLE_DATA_ANIM, title: CV_TITLE_DATA_ANIM }}
                />
                <RichTextRenderer
                    document={workInfo.about}
                    className={styles.aboutMeText}
                    ref={aboutRef}
                />
            </div>
        </section>
    )
}
