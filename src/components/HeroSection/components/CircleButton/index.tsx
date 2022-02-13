import React, { forwardRef, HTMLAttributeAnchorTarget } from 'react'
import cn from 'classnames'

import styles from './styles.module.sass'

interface ICircleButtonProps {
    title: string
    className?: string
    target?: HTMLAttributeAnchorTarget
    href?: string
}

export const CircleButton = forwardRef<HTMLAnchorElement, ICircleButtonProps>(
    ({ className, target, href = '#', title }, ref) => (
        <a className={cn(styles.wrapper, className)} ref={ref} target={target} href={href}>
            <svg className={styles.svg}>
                <circle
                    className="circle"
                    cx="50%"
                    cy="50%"
                    r="49.9%"
                    stroke="currentColor"
                    strokeWidth="1"
                    fillOpacity="0"
                />
            </svg>
            <span className={styles.title}>{title}</span>
        </a>
    )
)
