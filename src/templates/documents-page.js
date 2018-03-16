import React from 'react';
import Content, { HTMLContent } from '../components/Content';
import DocumentCategories from '../components/DocumentCategories';

export const DocumentsPageTemplate = ({ title, intro, categories }) => {
  return (
    <section className="section">
      <div className="container">
        <div className="content">
          <h1 className="title is-size-2 has-text-weight-bold">{title}</h1>
        </div>
        <div className="section">{intro}</div>
        <div className="box">
          <DocumentCategories categories={categories} />
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
      categories={post.frontmatter.categories}
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
