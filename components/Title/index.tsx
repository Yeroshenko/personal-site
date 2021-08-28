import React, { FC } from 'react'
import styles from './styles.module.sass'
import cn from 'classnames'

export enum TitleTagsEnum {
    h1 = 'h1',
    h2 = 'h2',
    h3 = 'h3',
    h4 = 'h4',
    h5 = 'h5',
    h6 = 'h6',
    p = 'p'
}

interface ITitleProps {
    tagName?: TitleTagsEnum
    className?: string
}

export const Title: FC<ITitleProps> = ({ tagName = TitleTagsEnum.p, children, className }) => {
    const TitleWrapper = tagName || TitleTagsEnum.p

    return <TitleWrapper className={cn(styles.title, className)}>{children}</TitleWrapper>
}
