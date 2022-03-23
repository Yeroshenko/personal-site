import React, { forwardRef, HTMLAttributeAnchorTarget } from 'react'
import cn from 'classnames'

import styles from './styles.module.sass'

interface ICircleButtonProps {
    title: string
    className?: string
    target?: HTMLAttributeAnchorTarget
    href?: string
    animationAttr?: {
        circle?: string
        title?: string
    }
}

export const CircleButton = forwardRef<HTMLAnchorElement, ICircleButtonProps>(
    ({ className, target, href = '#', title, animationAttr }, ref) => {
        const circleProps = animationAttr ? { 'data-anim': animationAttr.circle } : {}
        const titleProps = animationAttr ? { 'data-anim': animationAttr.title } : {}

        return (
            <a className={cn(styles.wrapper, className)} ref={ref} target={target} href={href}>
                <svg className={styles.svg}>
                    <circle
                        {...circleProps}
                        cx="50%"
                        cy="50%"
                        r="49.9%"
                        stroke="currentColor"
                        strokeWidth="1"
                        fillOpacity="0"
                        className={styles.circle}
                    />
                </svg>
                <span className={styles.title} {...titleProps}>
                    {title}
                </span>
            </a>
        )
    }
)
