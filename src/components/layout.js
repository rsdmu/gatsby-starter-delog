import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "./navigation" // Assuming Navigation is also in the same components directory
import SEO from "./seo" // Importing SEO from the same directory
import 'prismjs/themes/prism-okaidia.css'

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <div className="site-wrapper">
      <SEO 
        title={data.site.siteMetadata.title} 
        description="Your site description here" // Add your site description
        metaTag="l3J0y3XD8D3n9javX6yPcBrEYB9SXnICRguNy3C5JHA" // Your specific Google verification content
      />
      <header className="site-header">
        <div className="site-title">
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </div>
        <Navigation />
      </header>
      {children}
      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} Rashid A. Mushkani</p>
      </footer>
    </div>
  )
}
