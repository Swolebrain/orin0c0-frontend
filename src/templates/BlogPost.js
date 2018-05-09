import React from 'react';
import PropTypes from 'prop-types';

const BlogPost = ({data, ...props}) => (
    <div>
        <h1>{data.contentfulBlog.title}</h1>
        <div dangerouslySetInnerHTML={{__html: data.contentfulBlog.body.childMarkdownRemark.html}}></div>
    </div>
)

BlogPost.propTypes = {
    data: PropTypes.object.isRequired
};

export default BlogPost;

export const pageQuery = graphql`
    query blogPostQuery($slug: String!){
        contentfulBlog(slug: {eq: $slug}) {
            title
            slug
            body {
                childMarkdownRemark {
                    html
                }
            }
        }
    }
`;