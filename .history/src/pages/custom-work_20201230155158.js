import React from "react";
import { link, graphql } from "gatsby";
import Layout from "../components/Layout";
import { Container, Row, Col, Button } from "react-bootstrap";
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
          <h1>OUR CUSTOM WORK</h1>
        </Row>
        <Row>
          <Col>
            <Row>
              <p>Below is some of our custom work. We pride ourselves in our attention to detail, the ability to complete complex and percise work. Contact us to receive a quote on custom work for your project.</p>
            </Row>
            <Row>
              <Button className="mx-auto">Contact Us</Button>
              <a href="/#contact" class="btn btn-primary btn-lg center" tabindex="-1" role="button" aria-disabled="true">Contact Us</a>
            </Row>
          </Col>
          <Col>
            <h3>List of Custom Work</h3>
            <ul>
              <li>Roll Cages</li>
              <li>Bumpers</li>
              <li>Shock Mounts</li>
              <li>Engine Mounts</li>
              <li>Light Racks</li>
              <li>Tire Racks</li>
              <li>Custom Work</li>
            </ul>
          </Col>
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
