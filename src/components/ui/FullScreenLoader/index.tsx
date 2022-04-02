import React, { FC, useEffect, useRef } from 'react'
import cn from 'classnames'

import styles from './styles.module.sass'
import { gsap } from 'gsap'

type IFullScreenLoaderProps = {
    isVisible?: boolean
    className?: string
    onHide?: () => void
}

export const FullScreenLoader: FC<IFullScreenLoaderProps> = ({ className, isVisible, onHide }) => {
    const wrapperRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (isVisible) {
            gsap.to(wrapperRef.current, 1, {
                opacity: 1,
                display: 'flex',
                ease: 'power4.out'
            })
        } else {
            gsap.to(wrapperRef.current, 1, {
                opacity: 0,
                ease: 'power4.out',
                display: 'none',
                onComplete: onHide
            })
        }
    }, [isVisible, onHide])

    return (
        <div className={cn(styles.wrapper, className)} ref={wrapperRef}>
            <span className={styles.loadingText}>LOADING ...</span>
        </div>
    )
}
