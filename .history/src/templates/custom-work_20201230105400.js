import React from "react";
import { graphql } from "gatsby";
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
