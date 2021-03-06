import React from "react";
import { link, graphql } from "gatsby";
import Layout from "../components/Layout";
import { Container, Row, Col } from "react-bootstrap";
import Instagram from "../components/instagram";

export const CustomWorkTemplate = ({
    title,
    titleSEO,
    backgroundImage,
    content,
  }) => (
    <div className="customWork">
      <Container>
        <Row className="d-flex flex-row justify-content-center">
          <h1>Our Custom Work</h1>
        </Row>
      </Container>


        <Container className="mt-5">
          <Row className="d-flex">
              <Instagram />
          </Row>
        </Container>
    </div>
  );

  const CustomWorkPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;
    console.log("FRONTMATTER", frontmatter);
    return (
      <Layout>
        <CustomWorkTemplate
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
  query CustomWorkTemplate {
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
