import React, { forwardRef } from 'react'

import { Document } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

interface IRichTextRenderer {
    className?: string
    document: Document
}

export const RichTextRenderer = forwardRef<HTMLDivElement, IRichTextRenderer>(
    ({ className, document }, ref) => (
        <div className={className} ref={ref}>
            {documentToReactComponents(document)}
        </div>
    )
)

RichTextRenderer.displayName = 'RichTextRenderer'
