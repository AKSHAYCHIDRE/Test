import React from 'react'
import Layout from '../components/layout'
import aboutUs from '../styles/images/about-us-banner.jpg';
import { graphql } from 'gatsby';
import Footer from '../components/footer';
class NRI extends React.Component {
  render(){
    const nriData = this.props.data.prismicNri.data;
    console.log('nri data from nri page', nriData);
    return(
      <Layout>
        <div>
          <section className="banner-section">
            <img src={nriData.banner.url} alt="banner image here" className="banner-img" />
          </section>

          <section className="career-info container">
            <div className="padding-block-60">
              <h2 className="page-heading"> Guidlines for NRIs</h2> 
            </div>
            <div className="row">
              <div className="col-12">
                <p className="text m-0">
                {nriData.description.text}
                </p>
              </div>
            </div>
          </section>

          <section className="container">
            <div className="row">
              <div className="col-sm-6 my-5">
                <form action="">
                  <input type="search" placeholder="Search using Key Word, FAQs, Title" className="form-control search-bar"/>
                  <button className="search-btn"><i className="fas fa-search"></i></button>
                </form>
              </div>
              <div className="col-12 accordions-sect padding-block-60 pt-0">
                <div className="accordion" id="accordionExample">
                  {
                    nriData.group.map((item,value)=>{
                      return(
                        <div key={value} className="card border-0">
                          <div className="card-header" id="headingOne">
                            <h5 className="mb-0 d-flex justify-content-between align-items-center section-title-secondary">
                              {item.heading1.text}
                              <button className="btn btn-link" type="button" data-toggle="collapse" data-target={`#collapseOne${value}`} aria-expanded="true" aria-controls="collapseOne">
                                <i className="fas fa-chevron-down"></i>
                              </button>
                            </h5>
                          </div>
                      
                          <div id={`collapseOne${value}`} className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div className="card-body" dangerouslySetInnerHTML={{__html: item.description1.html}} />
                            {
                              item.description2.html && 
                                <div className="card-body" dangerouslySetInnerHTML={{__html: item.description2.html}}/>
                            }
                            {
                              item.description3.html &&  
                                <div className="card-body" dangerouslySetInnerHTML={{__html: item.description3.html}} />
                            }
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </section>  
        </div>
        <Footer />
      </Layout>
    )
  }
}
export default NRI;

export const nriPage = graphql`{
  prismicNri {
 		data {
      title {
        text
      }
      heading {
        text
      }
      description {
        text
      }
      banner {
      	url
      }
      group {
        heading1 {
          text
        }
        description1 {
          html
        }
        description2 {
          html
        }
        description3 {
          html
        }
      }
    }  
  }
}`