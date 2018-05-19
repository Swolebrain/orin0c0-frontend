/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

exports.modifyWebpackConfig = ({ config, stage }) => {
  switch (stage) {
    case 'build-html':
      config.plugin('define', webpack.DefinePlugin, [
        { 'global.GENTLY': false },
      ])

      break
  }

  return config
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise(async (resolve, reject) => {
    try {
      const blogPostTemplate = path.resolve('src/templates/BlogPost.js')
      const blogs = await graphql(`
        {
          allContentfulBlog(limit: 100) {
            edges {
              node {
                title
                slug
              }
            }
          }
        }
      `)
      if (blogs.errors) reject(blogs.errors)

      blogs.data.allContentfulBlog.edges.forEach(edge => {
        createPage({
          path: '/articles/' + edge.node.slug,
          component: blogPostTemplate,
          context: {
            slug: edge.node.slug,
          },
        })
      })
      resolve(blogs)
    } catch (err) {
      reject(err)
    }
  })
}
