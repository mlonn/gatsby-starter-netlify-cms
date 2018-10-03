import React from "react";
import { Redirect } from 'react-router-dom'
import Helmet from "react-helmet";
import Content, { HTMLContent } from "../components/Content";

export default class MemversForm extends React.Component {
  
  render() {
    
    const { data } = this.props;
    const { edges: edges } = data.allMarkdownRemark;
    const url = edges.filter(edge => edge.node.frontmatter.templateKey === "member")[0].node.frontmatter.url;
    //window.location.href = url
    return <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Skickar dig vidare till folmuläret...</h1>
          </div>
        </div>
      </section>
  }
}

export const pageQuery = graphql`
  query MemberFormQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            url
            templateKey
          }
        }
      }
    }
  }
`;
