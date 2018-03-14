import React from 'react';
import Content, { HTMLContent } from '../components/Content';

export const DocumentsPageTemplate = ({ title, intro, categorys }) => {
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">{title}</h2>
              <div>{intro}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <DocumentsPageTemplate
      intro={post.frontmatter.intro}
      title={post.frontmatter.title}
      categorys={post.frontmatter.categorys}
    />
  );
};

export const documentsPageQuery = graphql`
  query DocumentsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        intro
        categories {
          category {
            categoryName
            files {
              name
              file
            }
          }
        }
      }
    }
  }
`;
