// eslint-disable-next-line @typescript-eslint/no-var-requires
const contentfulManagement = require('contentful-management')
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({ path: '.env.local' })

module.exports = function () {
    const contentfulClient = contentfulManagement.createClient({
        accessToken: process.env.CONTENTFUL_ACCESS_CONTENT_TOKEN
    })

    return contentfulClient
        .getSpace(process.env.CONTENTFUL_SPACE_ID)
        .then(space => space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT_ID))
}
