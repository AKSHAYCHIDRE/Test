import React from 'react';
import Layout from '../components/layout';
import Footer from '../components/footer';
import SEO from "../components/seo";
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

class PrivacyPolicy extends React.Component {
  render(){
    const privacyData = this.props.data.prismicPrivacyPolicy.data;
    console.log('privacyData', privacyData);
    return(
      <Layout location="/" noHeader="true"  pathname={this.props.location.pathname}>
        <SEO title={privacyData.title.text} />
          <div className="page-heading-section container container-sm-fluid bg-color">
            <div className="padding-block-60">
              <h2 className="page-heading">{privacyData.title.text}</h2>
            </div>
            <div className="row ">
              <div className="col-lg-12">
                <div dangerouslySetInnerHTML={{__html: privacyData.description.html}}/>
              </div>
              <div className="col-lg-6"> 
              {/* <Img fluid={privacyData.image.localFile.childImageSharp.fluid} className="w-100 h-100"/> */}
              </div>
            </div>
          </div>
      </Layout>
    )
  } 
}
export default PrivacyPolicy;

export const privacyPolicy = graphql` {
  prismicPrivacyPolicy {
    data {
      title {
        text
      }
      description {
        html
      }
      group {
        title1 {
          text
        }
        description1 {
          html
        }
      }
      description1 {
        text
      }
    }
  }
}`