import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/author/author.jpg'
import { Helmet } from "react-helmet"
const ATB = (props)=>{
	
	return (
		<>
		 	<Layout>
             <Helmet title="About the Author | DR. ESTELLE GROSS CYRUS"/>
		 		<Nav pathExt={props.path}/>
                 <Banner 
                 spanFirst={`About The`}
                 contextHeading={`Author`}/>


		 		<div className="container">
				    <section className="body-author-contents">

                        <div className="heading-quote">
                            <div className="author-image-container">
                                <img src={AuthorImg} alt="author-profile"/>
                            </div> 

                            <div className="heading-quote">
                                <h4>
                                {/* “Sounds a lot like God to me”.  */}
                                </h4>
                                
                                <span className="ata-span-fx">
                                From Vision to Reality
                                </span>
                            </div>
                        </div>

                        <article 
                            className="article-section" id="author">

                            <p>
                            Dr. Estelle Gross Cyrus is the founder and Executive Director of “Right Way” Ministries International Inc. based in Maryland, United States of America. Through this ministry, Dr. Cyrus has served in or led missionary teams to Europe, Africa, Asia, the Caribbean, South America, Canada, and across the United States, including ministry among the Native Americans.
                            </p>

                            <p>
                            Dr. Cyrus has a heart for God and His Word, with a passion to share the intimacy of God through prayer.   She conducts special workshops and teachings on topics such as victorious prayer, the power of God’s word, spiritual warfare, Leadership Development, and the journey to spiritual renewal.
                            </p>

                            <p>
                            Dr. Estelle Gross Cyrus is always willing to serve the Body of Christ, and considers it a privilege to be invited to minister the Word of God. 
                            </p>

                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author |  Writer </span>
                                    DR. ESTELLE GROSS CYRUS
                                </span>
                            </p>
                            
                        </article>
              

                    </section>
                </div>

		 	</Layout>
		</>
	)
}


export default ATB;