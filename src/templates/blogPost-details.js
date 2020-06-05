import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import chevron_down from '../images/chevron_down.svg';
import Div100vh from 'react-div-100vh/lib/Div100vh';
import Footer from '../components/footer';

export default class BlogPost extends React.Component {
    
    scrollWin() {
    var offsetHeight = document.querySelector('.banner-section').offsetHeight;
    window.scrollBy({
        top: offsetHeight,
        behavior: 'smooth'
    });
    }

    render(){
        const blogData = this.props.data.prismicBlog.data
        console.log('blogData', blogData);
        return(
            <Layout location="/" noHeader="true"  pathname={this.props.location.pathname}>
                <SEO title='Blog Post'/>
                <main className="detail-page" id="residential-details">
                    {/* <!--   ---------------- banner start here ---------------- --> */}
                    <Div100vh style={{ height: 'calc(100rvh - 60px)'}} className="banner-section" id="banner-section">
                    <picture>
                        {/* {
                        verticalData.data.banner[0].image.mobile &&
                        <source media="(max-width: 581px)" srcSet={verticalData.data.banner[0].image.mobile.url}/>
                        } */}
                        <img src={blogData.banner.url} className="banner-img"/>
                    </picture>
                    <button className="scroll-downs" onClick={this.scrollWin}>
                        <span>Scroll</span>
                        <div className="mousey"><img src={chevron_down} alt="Scroll to content" /></div>
                    </button>
                        {/* <Img fluid={verticalData.data.banner[0].image.localFile.childImageSharp.fluid} alt="banner image here" className="banner-img" /> */}
                    </Div100vh>

                    <section className="detail-page-sections pb-0 pt-sm-0 container container-sm-fluid " >
                        <div className="padding-block-60 page-heading-section">
                            <div className="col-12 padding-sm-0">
                                <h2 className="page-heading text-uppercase">
                                    {blogData.title.text}
                                </h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="mb-4" dangerouslySetInnerHTML={{__html:blogData.description.html }}/>
                            </div>
                        </div>
                    </section>
                </main>
            <Footer/>
            </Layout>
        )
    }
}

export const blogPost = graphql`
    query blogQyery($uid: String!) {
    prismicBlog(uid: { eq: $uid })  {
      data {
        title {
          text
        }
        description{
            html
          }
        banner{
        url
        }
      }
    }
}
`