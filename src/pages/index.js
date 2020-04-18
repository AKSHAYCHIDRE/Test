import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Slider from 'react-slick';
import { graphql, Link } from "gatsby";
import innerHeight from 'ios-inner-height';

class IndexPage extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedVertical: null,
      residential: null,
      commercial: null,
      hospitality: null,
      leisure: null,
      contactFlag:false,
      mailFlag:false,
      chatFlag:false,
      verticalsName: 'residential'
    }
  }

  componentWillMount() {
    // let scrollHandle = this;
    const residentialData = this.props.data.prismicResidential;
    this.setState({selectedVertical: residentialData.data})
    // const commercialData = this.props.data.prismicCommercial;
    // const hospitalityData = this.props.data.prismicHospitality;
    // const leisureData  = this.props.data.prismicLeisureClub;

    // setTimeout(function(){
    //   scrollHandle.handleOurVerticals(commercialData, 'commercial')
    //   }, 12000);

    // setTimeout(function(){
    //   scrollHandle.handleOurVerticals(hospitalityData, 'hospitality')
    //   }, 24000);

    // setTimeout(function(){
    //   scrollHandle.handleOurVerticals(leisureData, 'leisure-club')
    //   }, 36000);

    // setTimeout(function(){
    //   scrollHandle.handleOurVerticals(residentialData,'residential')
    //   }, 48000);
  }

  handleOurVerticals = (event, vertical) => {
    this.setState({selectedVertical: event.data, verticalsName: vertical})
  }

  render() {
    const commercialData = this.props.data.prismicCommercial;
    const hospitalityData = this.props.data.prismicHospitality;
    const leisureData  = this.props.data.prismicLeisureClub;
    const residentialData = this.props.data.prismicResidential;
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      // autoplay: true,
      autoplaySpeed: 7000,
      slidesToShow: 1,
      arrows: true,
      slidesToScroll: 1
    };
    const bannerHeight =  {
      height: innerHeight() - 120,
      overflow: 'hidden'
    };


    return (
      <Layout location="/" noHeader="true"  pathname={this.props.location.pathname}>
        <SEO title="Home"/>
        {innerHeight()}
         <br />
        {bannerHeight.height}
        <div className="home-slider">
          {
            this.state.selectedVertical &&
            <section>
            {/* <picture>
              <source media="(max-width: 581px)" srcSet={this.state.selectedVertical.banner.mobile.url}/>
            {
             <img src={this.state.selectedVertical.banner.url} className="banner-img" style={{width:'100%'}} />
            }
            </picture>
            <div className="banner-caption">
              <img src={this.state.selectedVertical.banner_caption_logo.localFile.childImageSharp.fluid.src}/>
            </div> */}
              <div style={bannerHeight}>
            <Slider {...settings}>
              {
                this.state.selectedVertical.gallery.map((item, index) => {
                  console.log(item);

                  return(
                    <div key={index} className="banner-section fullheight">
                      <Link to={`${this.state.verticalsName}/${item.project_url}`}>
                        <picture>
                          <source media="(max-width: 581px)" srcSet={item.image.mobile.url}/>
                            {
                              <img src={item.image.url} className="banner-img" style={{width:'100%'}} />
                            }
                        </picture>
                        {/* <div className="banner-caption">
                          <img src={item.image.logo.url}/>
                        </div> */}
                      </Link>
                    </div>
                  )
                })
              }
            </Slider>
              </div>
          </section>
          }
        </div>

        <div>
          <footer className="our-verticals-tabs d-flex">
            <div className="container d-flex">
              <ul className="p-0 d-flex w-100 justify-content-around list-style-none text-uppercase nav nav-tabs border-0" id="myTab" role="tablist">

                <li className={`nav-item d-flex align-items-center ${this.state.selectedVertical==residentialData.data?'active':''}`} onClick={()=>this.handleOurVerticals(residentialData,'residential')}>
                  <div className="tab d-flex align-items-center">
                  <span className="icon-Residential_inactive icon"></span>
                    <span>Residential</span>
                  </div>
                </li>

                <li className={`nav-item d-flex align-items-center ${this.state.selectedVertical==commercialData.data?'active':''}`} onClick={()=>this.handleOurVerticals(commercialData, 'commercial')}>
                  <div className="tab d-flex align-items-center">
                  <span className="icon-Commercial_inactive icon"></span>
                    <span> Commercial </span>
                  </div>
                </li>

                <li className={`nav-item d-flex align-items-center ${this.state.selectedVertical==hospitalityData.data?'active':''}`} onClick={()=>this.handleOurVerticals(hospitalityData, 'hospitality')}>
                  <div className="tab d-flex align-items-center">
                  <span className="icon-Hospitality_inactive icon"></span>
                    <span>Hospitality</span>
                  </div>
                </li>

                <li className={`nav-item d-flex align-items-center ${this.state.selectedVertical==leisureData.data?'active':''}`} onClick={()=>this.handleOurVerticals(leisureData, 'leisure-club')}>
                  <div className="tab d-flex align-items-center">
                  <span className="icon-Leisure_inactive icon"></span>
                    <span>Leisure</span>
                  </div>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </Layout>
    )
  }
}

export default IndexPage

export const pageDataResidential = graphql` {
  prismicResidential {
    data {
      gallery {
        project_url
        image {
          url
          mobile {
            url
          }
          logo {
            url
          }
        }
      }
    }
  }

  prismicCommercial {
    data {
      banner {
        url
        mobile{
          url
        }
      }
      gallery {
        project_name
        project_url
        image {
          url
          mobile{
            url
          }
          logo {
            url
          }
        }
      }
    }
  }
  prismicHospitality {
    data {
      banner {
        url
        mobile {
          url
        }
      }
      gallery {
        project_name
        project_url
        image {
          url
          mobile{
            url
          }
          logo {
            url
          }
        }
      }
    }
  }
  prismicLeisureClub {
    data {
      banner {
        url
        mobile {
          url
        }
      }
      gallery {
        project_name
        project_url
        image {
          url
          mobile{
            url
          }
          logo {
            url
          }
        }
      }
    }
  }
}`
