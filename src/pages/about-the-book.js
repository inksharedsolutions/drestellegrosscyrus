import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../../static/book/book.png'
import { Helmet } from "react-helmet"

const ATB = (props)=>{


    const slug =(props.location.href);
    
	const disqusConfig = {
	  shortname: 'dr-estelle-gross-cyrus',
	  config: { identifier:  12, slug}
    }
    

	return (
		<>
		 	<Layout>
             <Helmet title="About the Book | DR. ESTELLE GROSS CYRUS"/>
		 		<Nav pathExt={props.path}/>
            
		 		<Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                 
                 />

                <main className="wrapperMain">
                    <div 
                        className="container"
                        id="book-containers" >

                            <BookInfo
                                data={{
                                    title:`From Vision to Reality`,
                                    spanTitle: "Implementing God's Plan",
                                    imgSrc: Book1,
                                    id:'the_gifted_one',
                                    content:
                                    `
                                    <p>God's call to ministry is an invitation to partner with Him. From Vision to Reality reveals how to move in God's timing to implement God's plan. It identifies how a vision can also be a hindrance to our personal relationship with God. Using numerous biblical examples of leaders in both the Old and New Testament, the author discloses how God is involved in giving the vision and partnering with us in the accomplishment of His vision. There are helpful exercises and strategy worksheets at the end of each section. As we navigate each obstacle in fulfilling His vision, God can touch the world through you.</p>
                                    <p>ESTELLE GROSS CYRUS is founder and director of "RIGHT WAY" MINISTRIES INTERNATIONAL, Inc. (RWMI) located in Baltimore, Maryland, and established in 1983. The ministry has taken Dr. Cyrus to Europe, Asia, Africa, South America, the Caribbean, Canada, and across the United States. She has also worked among Native American communities.</p>
                                    <p>Dr. Cyrus learned to unleash God's power against great odds to found RWMI at a time when there was no support for an African American female in ministry. She was called by God to go into the world and make disciples. Dr. Cyrus desires believers to operate in the miraculous as they partner with God by faith.</p>
                                    <p>Dr. Cyrus graduated from Washington Bible College and Capital Bible Seminary (CBS). She was the first female to receive a master's of theology degree from CBS. Dr. Cyrus is married to Dereck Cyrus. They have three grown children. When not traveling, she ministers at her home church, Grace Pointe Community Church of the Nazarene.</p>
                                    `,
                                    
                                    ebooks:{
                                        stratton : '',
                                        barnes: 'https://www.barnesandnoble.com/w/from-vision-to-reality-dr-estelle-gross-cyrus/1136645429?ean=9781643459578',
                                        amazon :'https://www.amazon.com/Vision-Reality-Implementing-Gods-Plan-ebook/dp/B085VT5FZ4/ref=sr_1_1?dchild=1&keywords=9781643459578&qid=1584117075&sr=8-1', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/Vision-Reality-Implementing-Gods-Plan/dp/1643459562/ref=sr_1_1?dchild=1&keywords=9781643459561&qid=1584117095&sr=8-1',
                                        barnes:'https://www.barnesandnoble.com/w/from-vision-to-reality-dr-estelle-gross-cyrus/1136645429?ean=9781643459561',
                                        booksamillion:'https://www.booksamillion.com/p/From-Vision-Reality/Estelle-Gross-Cyrus/9781643459561?id=8238323095674&_ga=2.62850220.124488087.1625267199-1205166702.1623175305',
                                    },
                                    // hardcover:{
                                    //     amazon:'https://www.amazon.com/God-Particle-Personal-Journey-Know/dp/1648951074/ref=sr_1_1?dchild=1&keywords=9781648951077&qid=1594756701&sr=8-1',
                                    //     barnes:'https://www.barnesandnoble.com/w/the-god-particle-dr-rhy-ronald-p-rozzi-ms-d/1137333891?ean=9781648951077',
                                    //     booksamillion:'https://www.booksamillion.com/p/God-Particle/Rhy-Ronald-P-Rozzi-MS/9781648951077?id=8158356429268',
                                    // }
                                }}
                            />
                            <div className="commentSection" >
                                <DiscussionEmbed {...disqusConfig} />
                            </div>
                    </div>	
                </main>
		 	</Layout>
		</>
	)
}


export default ATB;