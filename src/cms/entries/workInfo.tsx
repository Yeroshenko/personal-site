import { cmsClient } from '../index'
import { IWorkInfoFields } from '../../@types/generated/cms'

export const getWorkInfo = async (): Promise<IWorkInfoFields> => {
    const { items } = await cmsClient.getEntries<IWorkInfoFields>({
        content_type: 'workInfo',
        limit: 1
    })

    return items[0].fields
}
