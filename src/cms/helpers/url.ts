import { Asset } from 'contentful'

export const getAssetUrl = (asset: Asset): string => `https:${asset.fields.file.url}`
