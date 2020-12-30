import React from "react";
import { link, graphql } from "gatsby";
import Layout from "../components/Layout";
import { Container } from "react-bootstrap";
import Instagram from "../components/instagram";

export const CustomWorkPage = ({
    title,
    titleSEO,
    backgroundImage,
    content,
  }) => (
    <div>
        <Container>
            <Instagram />
        </Container>
    </div>
  );

  const CustomWorkPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;
    console.log("FRONTMATTER", frontmatter);
    return (
      <Layout>
        <IndexPageTemplate
          title={frontmatter.title}
          titleSEO={frontmatter.titleSEO}
          backgroundImage={frontmatter.backgroundImage}
          content={frontmatter.content}
        />
      </Layout>
    );
  };

export default CustomWorkPage;

export const pageQuery = graphql`
  query CustomWorkPage {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        titleSEO
        backgroundImage {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        content
      }
    }
  }
`;
