import React, { FC } from 'react'
import styles from './styles.module.sass'

const dataAnimAttrValue = 'anim-line'

export const TextAnimLine: FC = ({ children }) => {
    return (
        <span className={styles.lineWrapper}>
            <span className={styles.line} data-anim={dataAnimAttrValue}>
                {children}
            </span>
        </span>
    )
}

export const textAnimLineSelector = `[data-anim='${dataAnimAttrValue}']`
