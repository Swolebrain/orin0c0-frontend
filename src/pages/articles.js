import React from 'react'
import Link from 'gatsby-link';


const PostLinkTile = ({node}) => {
    return (
        <li>
            <Link to={`/articles/git ${node.slug}`}>{node.title}</Link>
        </li>
    );
};

const ArticlesPage = ({data}) => (
    <div>
        <h1>Articles Page</h1>
        <ul>
            {
                data.allContentfulBlog.edges.map( edge =>
                    <PostLinkTile node={edge.node} key={edge.node.slug} />
                )
            }
        </ul>
    </div>
)

export default ArticlesPage

export const pageQuery = graphql`
    query pageQuery {
        allContentfulBlog(filter: { node_locale: {eq: "en-US"} }) {
            edges {
                node {
                    title
                    slug
                }
            }
        }
    }
`