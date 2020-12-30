"use strict";

module.exports = {
  siteMetadata: {
    title: "Some Site",
    description: "Describing some site"
  },
  plugins: [{
    resolve: "gatsby-plugin-gtag",
    options: {
      // trackingId: "UA-177304177-1",
      trackingId: "".concat(process.env.GTAG),
      head: true,
      respectDNT: true
    }
  }, {
    resolve: "gatsby-source-instagram",
    options: {
      username: "2094723518"
    }
  }, "gatsby-plugin-react-helmet", "gatsby-plugin-sass", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: "gatsby-transformer-remark",
    options: {
      plugins: [{
        resolve: "gatsby-remark-relative-images",
        options: {
          name: "uploads"
        }
      }, {
        resolve: "gatsby-remark-images",
        options: {
          // It's important to specify the maxWidth (in pixels) of
          // the content container as this plugin uses this as the
          // base for generating different widths of each image.
          maxWidth: 1920
        }
      }, {
        resolve: "gatsby-remark-copy-linked-files",
        options: {
          destinationDir: "static"
        }
      }]
    }
  }, {
    // keep as first gatsby-source-filesystem plugin for gatsby image support
    resolve: "gatsby-source-filesystem",
    options: {
      path: "".concat(__dirname, "/static/img"),
      name: "uploads"
    }
  }, {
    resolve: "gatsby-source-filesystem",
    options: {
      path: "".concat(__dirname, "/src/pages"),
      name: "pages"
    }
  }, {
    resolve: "gatsby-source-filesystem",
    options: {
      path: "".concat(__dirname, "/src/img"),
      name: "images"
    }
  }, {
    resolve: "gatsby-plugin-netlify-cms",
    options: {
      modulePath: "".concat(__dirname, "/src/cms/cms.js")
    }
  }, "gatsby-plugin-netlify" // make sure to keep it last in the array
  ]
};