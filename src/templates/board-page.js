import React from 'react';
import Content, { HTMLContent } from '../components/Content';
import BoardMembers from '../components/BoardMembers';

export const BoardPageTemplate = ({ title, content, contentComponent, boardMembers }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section">
      <div className="container">
        <div className="content">
          <h1 className="title is-size-2 has-text-weight-bold">{title}</h1>
        </div>
        <PageContent className="content" content={content} />
        <BoardMembers boardMembers={boardMembers} />
      </div>
    </section>
  );
};

export default ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <BoardPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
      boardMembers={post.frontmatter.boardMembers}
    />
  );
};

export const boardPageQuery = graphql`
  query BoardPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        boardMembers {
          name
          post
          email
        }
      }
    }
  }
`;
