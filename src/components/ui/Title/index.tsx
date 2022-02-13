import React, { forwardRef, HTMLProps } from 'react'
import cn from 'classnames'
import styles from './styles.module.sass'

export enum TitleTagsEnum {
    h1 = 'h1',
    h2 = 'h2',
    h3 = 'h3',
    h4 = 'h4',
    h5 = 'h5',
    h6 = 'h6',
    p = 'p'
}

interface ITitleProps extends HTMLProps<HTMLHeadingElement | HTMLParagraphElement> {
    tagName?: TitleTagsEnum
    className?: string
}

// eslint-disable-next-line react/display-name
export const Title = forwardRef<HTMLHeadingElement | HTMLParagraphElement, ITitleProps>(
    ({ tagName = TitleTagsEnum.p, children, className, ...props }, ref) => {
        const TitleWrapper = tagName || TitleTagsEnum.p

        return (
            <TitleWrapper ref={ref} {...props} className={cn(styles.title, className)}>
                {children}
            </TitleWrapper>
        )
    }
)
