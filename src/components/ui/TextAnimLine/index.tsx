import React, { FC } from 'react'
import styles from './styles.module.sass'
import cn from 'classnames'

const dataAnimAttrValue = 'anim-line'

type ITextAnimLineProps = {
    className?: string
}

export const TextAnimLine: FC<ITextAnimLineProps> = ({ children, className }) => (
    <span className={cn(styles.lineWrapper, className)}>
        <span className={styles.line} data-anim={dataAnimAttrValue}>
            {children}
        </span>
    </span>
)

export const textAnimLineSelector = `[data-anim='${dataAnimAttrValue}']`
