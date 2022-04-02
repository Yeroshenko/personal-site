import React, { FC, useEffect } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { loadingState } from '../../../state/loading'
import { FullScreenLoader } from '@components/ui/FullScreenLoader'

type IPageLoaderProps = {
    className?: string
}

export const PageLoader: FC<IPageLoaderProps> = ({ className }) => {
    const isLoading = useRecoilValue(loadingState)
    const setIsLoading = useSetRecoilState(loadingState)

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        document.fonts.onloadingdone = () => {
            setIsLoading(false)
        }
    }, [setIsLoading])

    return <FullScreenLoader isVisible={isLoading} className={className} />
}
