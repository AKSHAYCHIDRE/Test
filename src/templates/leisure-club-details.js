import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Footer from '../components/footer';
import Img from 'gatsby-image';
import Slider from 'react-slick';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import chevron_down from '../images/chevron_down.svg';
import Div100vh from 'react-div-100vh/lib/Div100vh';

class LeisureDetails extends React.Component {
  state = {
    activeSlide:null,
    photoIndex: 0,
    isOpen: false,
  };
  scrollWin() {
    var offsetHeight = document.querySelector('.banner-section').offsetHeight;
    window.scrollBy({
      top: offsetHeight,
      behavior: 'smooth'
    });
  }
  render(){
    const { photoIndex, isOpen } = this.state;
    const leisureData = this.props.data.prismicOurVerticalsArticle;
    let settings = {
    // className:"center",
    centerMode: true,
    centerPadding: '200px',
    slidesToShow: 1,
    speed:400,
    afterChange: current => this.setState({ activeSlide: current }),
    responsive: [
        {
        breakpoint: 992,
        settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '100px',
            slidesToShow: 1,

        }
        },
        {
        breakpoint: 768,
        settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '100px',
            slidesToShow: 1
        }
        },
        {
        breakpoint: 580,
        settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '80px',
            slidesToShow: 1
        }
        },
        {
        breakpoint: 500,
        settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
        }
        }
    ]
    };
    return(
      <Layout location="/" noHeader="true"  pathname={this.props.location.pathname}>
        <SEO title={leisureData.data.title.text}/>
        <main className="detail-page">
          {/* <!-- ---------------- banner start here ---------------- --> */}
          <Div100vh style={{ height: 'calc(100rvh - 60px)'}} className="banner-section" id="banner-section">
              <picture>
                <source media="(min-width: 581px)" srcSet={leisureData.data.banner[0].image.localFile.childImageSharp.url}/>
                <Img fluid={leisureData.data.banner[0].image.localFile.childImageSharp.fluid} alt="banner image here" className="banner-img"/>
              </picture>

              <div className="scroll-downs" onClick={this.scrollWin}>
                <span>Scroll</span>
                <div className="mousey"><img src={chevron_down} /></div>
              </div>
              {/* <Img fluid={leisureData.data.banner[0].image.localFile.childImageSharp.fluid} alt="banner image here" className="banner-img" /> */}
            </Div100vh>
          {/* <!-- ---------------- banner end here ---------------- --> */}
          {/*  {/* <!------------------ middle section start here ----------------------> */}
            <section className="detail-page-sections pt-sm-0 container" id={leisureData.uid}>
              <div className="logo-card">
                <picture className="d-flex justify-content-center justify-content-sm-center align-items-center">
                  <source media="(min-width: 581px)" srcSet={leisureData.data.logo.url} />
                  <img src={leisureData.data.logo.url} alt="hospital Logo" />
                </picture>
              </div>
                <div className="row mt-0 mt-sm-5">
                  <div className="col-12">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/leisure-club">Leisure</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">{leisureData.data.title.text}</li>
                      </ol>
                    </nav>
                  </div>
                </div>
              <div className="padding-block-60">
                <h2 className="page-heading text-uppercase">
                  {leisureData.data.heading.text}
                </h2>
              </div>
              <div className="row">
                <div className="col-12 d-flex d-sm-block flex-wrap justify-content-end">
                  <div className="mb-4" dangerouslySetInnerHTML={{__html:leisureData.data.description.html }}/>
                  {/* <a href="#" className="d-flex justify-content-between align-items-center btn-tertiary hospitality-viewmore">
                    <span> View Website </span>
                    <i className="fas fa-arrow-right"></i>
                  </a> */}
                </div>
              </div>
            </section>
          {/*  {/* <!------------------ middle section end here ------------------------> */}
          {/* <!-- ------------------- Showcase section start here ------------------- --> */}
            <section className="slider-page slider-bg">
              <h2 className="section-title text-uppercase text-center">
                Showcase
              </h2>
              <div className="slider-wrapper">
                <div className="container">
                  <Slider {...settings}>
                    {
                      leisureData.data.showcase.map((item,value)=>{
                        return(
                          <div key={value}>
                            <div  className="slider-img image-ratio" onClick={() => this.setState({ isOpen: true ,photoIndex:value})}>
                              <Img fluid={item.image1.localFile.childImageSharp.fluid} alt=" Showcase slider" className="life-at-bramha-slider-image" />
                              <p className="showcase-slide-caption">{item.caption}</p>
                            </div>
                          </div>
                        )
                      })
                    }
                    </Slider>
                    {
                      isOpen &&
                      <Lightbox
                        mainSrc={leisureData.data.showcase[photoIndex].image1.localFile.childImageSharp.fluid.src}
                        nextSrc={leisureData.data.showcase[(photoIndex + 1) % leisureData.data.showcase.length].image1.localFile.childImageSharp.fluid.src}
                        prevSrc={leisureData.data.showcase[(photoIndex + leisureData.data.showcase.length - 1) % leisureData.data.showcase.length].image1.localFile.childImageSharp.fluid.src}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                          this.setState({
                            photoIndex: (photoIndex + leisureData.data.showcase.length - 1) % leisureData.data.showcase.length,
                          })
                        }
                        onMoveNextRequest={() =>
                          this.setState({
                            photoIndex: (photoIndex + 1) % leisureData.data.showcase.length,
                          })
                        }
                        imageCaption={leisureData.data.showcase[photoIndex].caption}
                        animationDuration={800}
                      />
                    }
                    <p className=" text-left text-sm-center pages mb-0">
                      {this.state.activeSlide + 1} of {leisureData.data.showcase.length}
                    </p>
                  </div>
                </div>
              </section>
          {/* <!-- ------------------- Showcase section end here ------------------- --> */}
          {/* <!-- ------------------- Location section start here ------------------- --> */}
            <section className="location-sections">
              <h2 className="section-title text-uppercase text-center">
                Location
              </h2>
              <div className="map-image">
                <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.9979896405875!2d73.87803231420851!3d18.52899298740413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c056fa4d8413%3A0xe2b3bd637ed792be!2sResidency%20Club!5e0!3m2!1sen!2sin!4v1576302776373!5m2!1sen!2sin" style={{ width:"100%", height:"372px", frameborder:"0", border:"0", allowFullScreen:"0"}}></iframe>
              </div>
            </section>
          {/* <!-- ------------------- Location section end here ------------------- --> */}
          {/* <!-- ------------------- Download Brouchure section start here ------------------- --> */}
            <div className="container detail-page-sections d-flex justify-content-center download-btn">
              <a href="#pdf-link" download="Brouchure.pdf" className="btn-secondary text-center">Download Brochure</a>
            </div>
          {/* <!-- ------------------- Download Brouchure section end here ------------------- --> */}
          </main>
        <Footer />
      </Layout>
    )
  }
}
export default LeisureDetails;

export const leisurePage = graphql`
  query leisureData($uid: String!) {
  prismicOurVerticalsArticle(uid: { eq: $uid }) {
    uid
    data {
      title {
        text
      }
      sub_title {
        text
      }
      banner {
        image {
          localFile {
            childImageSharp {
                fluid(maxWidth: 1150) {
                  ...GatsbyImageSharpFluid
                  presentationWidth
                }
            }
          }
        }
      }
      logo {
        url
      }
      maharera {
        url
      }
      heading {
        text
      }
      description {
        html
      }
      phase {
        title1 {
          text
        }
        description1 {
          text
        }
      }
      flat_bhk {
        text
      }
      flat_address {
        text
      }
      tag_line {
        text
      }
      unique_features {
          text
      }
      thumbnail {
        url
      }
      showcase {
        image1 {
          localFile {
            childImageSharp {
                fluid(maxWidth: 1150) {
                  ...GatsbyImageSharpFluid
                  presentationWidth
              }
            }
          }
        }
        caption
      }
      floor_plans {
        title1 {
          text
        }
        image1 {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1150) {
                ...GatsbyImageSharpFluid
                presentationWidth
              }
            }
          }
        }
      }
      amenities1 {
        text
      }
      amenities {
        title1 {
            text
        }
        description1 {
          text
        }
      }
      fact_file_heading {
        text
      }
      fact_file {
        title1 {
          text
        }
        description1 {
          text
        }
      }
      site_progress_heading {
          text
      }
      site_progress {
        images {
          localFile {
              childImageSharp {
                  fluid(maxWidth: 1150) {
                      ...GatsbyImageSharpFluid
                      presentationWidth
                  }
              }
          }
        }
      }
    }
  }
}`
