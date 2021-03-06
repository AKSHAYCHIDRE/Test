import React from 'react'
import Layout from '../components/layout'
import SEO from "../components/seo";
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

class KnoweldgeHub extends React.Component {
  render(){
    const knowledgeData = this.props.data.prismicKnowledgehub.data;
    const buyerData = this.props.data.prismicBuyersTips.data;
    return(
      <Layout location="/" noHeader="true"  pathname={this.props.location.pathname}>
        <SEO title={knowledgeData.seo_title} description={knowledgeData.seo_description}/>
        <section className="page-heading-section container container-sm-fluid bg-color">
          <div className="padding-block-60">
            <h2 className="page-heading">{knowledgeData.title.text}</h2>
          </div>
         <div className="row mr-0">
          <div className="col-12 knoweldge-hub-title">
            <div className="main-paragraph ">
              <div className="m-0" dangerouslySetInnerHTML={{__html:knowledgeData.description.html }}/>
            </div>
          </div>
         </div>
        </section>
        <section className="knowledge-hub mt-0 mt-md-5">
          <div className=" buyer-tips-banner">
            <div className="container container-sm-fluid">
              <div className="heading">
                <h3 className="text-center text-uppercase section-title ">{buyerData.title.text}</h3>
              </div>
              <div className="position-relative buyer-tips-banner-img">
                <div className="buyer-tips-image">
                  <Img fluid={buyerData.banner.localFile.childImageSharp.fluid} alt="" width="100%"/>
                </div>
                <div className="buyer-tips-box d-flex justify-content-between flex-column">
                  <h3 className=" text-uppercase m-0 section-title d-none d-md-block">{buyerData.title.text}</h3>
                  <p className=" text-white">{buyerData.short_description.text}</p>
                  <div className="know-more">
                    <Link to='buyer-tips' className="link-text">
                      <span className="mr-2">Read More</span>
                      <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="buyer-tips-info">
            <div className="container">
              <div className="row mt-48">
                {
                  knowledgeData.knowledge_topics.map((item,index) => {
                    return(
                      <div className="col-md-6 px-sm-3" key={index} id={`index${index}`}>
                        {
                          !item.topics.document[0].data.heading ?
                          <div className="about-loan card-primary mt-84" >
                            <div className="heading">
                              <h3 className=" text-uppercase m-0 section-title ">{item.topics.document[0].data.title.text}</h3>
                            </div>
                            <div className="row mt-30">
                              <div className="col-md-12 col-lg-6 col-6 pr-0 pr-md-3 pr-lg-0 pl-0 pl-sm-3">
                                <div className="card-primary-img image-ratio33">
                                  <Img fluid={item.topics.document[0].data.banner.localFile.childImageSharp.fluid} alt="" width="100%"/>
                                </div>
                              </div>
                              <div className="col-md-12 col-lg-6  col-6 pl-0 pl-md-3 pl-lg-0 pr-0 pr-sm-3">
                                <div className=" important-notice-section d-flex justify-content-between flex-column bg-light-gray">
                                  <p className='text-overflow'>{item.topics.document[0].data.short_description.text}</p>
                                  <h3 className="inner-section-title  text-center text-sm-center d-block d-sm-none">Important Notices</h3>
                                  <div className="know-more">
                                    <Link to={item.topics.slug} className="link-text">
                                      <span className="mr-3">Know More</span>
                                      <i className="fas fa-arrow-right"></i>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>:
                          <div className="guidelines-nris mt-84" id={`index${index}`}>
                            <div className="heading">
                              <h3 className=" text-uppercase mb-3 section-title">{item.topics.document[0].data.title.text}</h3>
                            </div>
                            <div className="guidelines-nris-wrapper position-relative mt-30">
                              <div className=" guidelines-nris-img">
                              <picture>
                                <source media="(max-width: 581px)" srcSet={item.topics.document[0].data.banner.mobile.url} />
                                <img src={item.topics.document[0].data.banner.url } alt="" width="100%"/>
                              </picture>
                              </div>
                              <div className="guidelines-nris-info position-absolute">
                                <p className="mb-0 text-white">{item.topics.document[0].data.heading.text}</p>
                                <div className="know-more pt-0">
                                  <Link to="/nri" className="link-text">
                                    <span className="mr-sm-5 mr-3">Know More</span>
                                    <i className="fas fa-arrow-right"></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        }
                        {
                          knowledgeData.knowledge_topics.map((item) => {
                            if(item.topics.document[0].data.title.text=="Maha Rera") {
                              return(
                                <div className="col-md-6 d-sm-none p-0" key={index} id={`maharera${index}`}>
                                  <div className="maha-rera-mb d-flex position-relative ">
                                    <Img fluid={item.topics.document[0].data.mobile_view.localFile.childImageSharp.fluid } alt="" width="100%"/>
                                    <div className="ml-3 ">
                                      <h3 className="inner-section-title mb-1">Maha <span className="text-uppercase">Rera</span> </h3>
                                      <p className="m-0">Rules and regulations</p>
                                    </div>
                                    <div className="know-more d-flex align-items-end justify-content-end position-absolute">
                                      <a href="#" className="link-text">
                                        <span  className="mr-3">Know More</span>
                                        <i className="fas fa-arrow-right"></i>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              )
                            }
                          })
                        }
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
export default KnoweldgeHub;

export const knowledgePage = graphql` {
  prismicKnowledgehub {
    uid
    data {
      seo_title,
      seo_description,
      title {
        text
      }
      short_description {
         text
      }
      description {
        html
      }
       knowledge_topics {
        topics {
          slug
          document {
            ...on PrismicAboutLoan {
              data {
                title {
                  text
                }
                banner {
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 1150) {
                        ...GatsbyImageSharpFluid
                        presentationWidth
                      }
                    }
                  }
                }
                short_description {
                  text
                }
                description {
                  text
                }
              }
            }
            ...on PrismicImportantNotice {
             data {
                title {
                  text
                }
                banner {
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 1150) {
                        ...GatsbyImageSharpFluid
                        presentationWidth
                      }
                    }
                  }
                }
                short_description {
                  text
                }
                description {
                  text
                }
              }
            }
            ...on PrismicMaharera {
              data {
                title {
                  text
                }
                mobile_view {
                  localFile {
                   childImageSharp {
                      fluid(maxWidth: 1150) {
                        ...GatsbyImageSharpFluid
                        presentationWidth
                      }
                    }
                  }
                }
                banner {
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 1150) {
                        ...GatsbyImageSharpFluid
                        presentationWidth
                      }
                    }
                  }
                }
                short_description {
                  text
                }
                description {
                  text
                }
              }
            }
            ...on PrismicNri {
              data {
                title {
                  text
                }
                heading {
                  text
                }
                banner {
                  url
                  mobile{
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  prismicBuyersTips {
    uid
    data {
      title {
        text
      }
      short_description {
        text
      }
      banner {
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
}`
