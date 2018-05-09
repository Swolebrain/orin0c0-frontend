module.exports = {
    siteMetadata: {
        title: 'Orin0c0 Marketplace',
    },
    plugins: [
        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: '0i4h69sixmot',
                accessToken: '1df8389a1e0e58f5508e455e342180668deb76aee9c18bd1d879afec6c69d597'
            }
        },
        'gatsby-plugin-react-helmet',
        `gatsby-transformer-remark`
    ],
}
