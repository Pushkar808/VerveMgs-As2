import React from 'react'
import { Number } from './number';
import Contentgrid from './contentGrid';
import characters from '../images/characters.png'
import humansImg from '../images/Humaaans - 3 Characters.png'
export const HomePage = () => {
    const imageUrl = 'https://images.pexels.com/photos/325193/pexels-photo-325193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'; // Replace with your actual image URL

    const highlightsData = [
        {
            mainColor: 'bg-red-100',
            imgSrc: 'https://ksa.futurebanksummit.com/wp-content/uploads/2023/05/financial-profit1.png',
            imgColor: 'bg-red-100',
            text: 'VISION 2030 - EMERGENCE OF THE KINGDOM AS A GLOBAL FINANCIAL LEADER'
        },
        {
            mainColor: 'bg-green-100',
            imgSrc: 'https://ksa.futurebanksummit.com/wp-content/uploads/2023/05/tracking1.png',
            imgColor: 'bg-blue-100',
            text: 'DIGITAL TRANSFORMATION - THE FOUNDATIONAL PLATFORM FOR ACHIEVING BUSINESS AGILITY'
        },
        {
            mainColor: 'bg-yellow-100',
            imgSrc: 'https://ksa.futurebanksummit.com/wp-content/uploads/2023/05/bank1.png',
            imgColor: 'bg-green-100',
            text: 'PAYMENTS TODAY & TOMORROW - THE FUTURE OF DIGITAL PAYMENTS'
        },
        {
            mainColor: 'bg-blue-100',
            imgSrc: 'https://ksa.futurebanksummit.com/wp-content/uploads/2023/05/bank-12.png',
            imgColor: 'bg-violet-100',
            text: 'PROVIDING A NEXT-GEN SEAMLESS BANKING CUSTOMER EXPERIENCE'
        },
        {
            mainColor: 'bg-amber-100',
            imgSrc: 'https://ksa.futurebanksummit.com/wp-content/uploads/2023/05/cashless-payment1.png',
            imgColor: 'bg-amber-100',
            text: 'DATA & ANALYTICS PROVIDING A 360° OVERVIEW TO BANKS & CUSTOMERS'
        },
        {
            mainColor: 'bg-pink-100',
            imgSrc: 'https://ksa.futurebanksummit.com/wp-content/uploads/2023/05/pay-per-click1.png',
            imgColor: 'bg-cyan-100',
            text: 'INCLUSIVE BANKING THROUGH OPEN BANKING - BRINGING LEGACY BANKS AND FINTECHS TOGETHER'
        },

        {
            mainColor: 'bg-blue-100',
            imgSrc: 'https://ksa.futurebanksummit.com/wp-content/uploads/2023/05/bank-22.png',
            imgColor: 'bg-orange-100',
            text: 'THE CLOUD IMPERATIVE - A KEY ENABLER FOR BANKS TO ACHIEVE BUSINESS AGILITY THROUGH CLOUD-POWERED DIGITAL TRANSFORMATION'
        },
        {
            mainColor: 'bg-orange-100',
            imgSrc: 'https://ksa.futurebanksummit.com/wp-content/uploads/2023/05/cashless-payment1.png',
            imgColor: 'bg-yellow-100',
            text: 'THE FUTURE OF NBFIs - REVOLUTIONIZING THE MONEY MARKET IN KSA'
        },
        {
            mainColor: 'bg-cyan-100',
            imgSrc: 'https://ksa.futurebanksummit.com/wp-content/uploads/2023/05/mobile-banking1.png',
            imgColor: 'bg-pink-100',
            text: 'DIGITAL ONLY BANKS - THE RISE OF INVISIBLE BANKS FOR GEN-Z CUSTOMERS'
        },
        {
            mainColor: 'bg-yellow-100',
            imgSrc: 'https://ksa.futurebanksummit.com/wp-content/uploads/2023/05/profit1.png',
            imgColor: 'bg-blue-100',
            text: 'EXPERIENTIAL BANKING IN METAVERSE - THE THIRD WORLD BANKING'
        },
    ];
    const meetingData = [
        {
            imgcolor: "text-green-600",
            color: "from-green-400 to-green-600",
            text: 'CIOs, CTOs, Heads of Technology'
        },
        {
            imgcolor: "text-amber-600",
            color: "from-amber-400 to-amber-600",
            text: 'Chief Digital Officers, of Digital Transformation'
        },
        {
            imgcolor: "text-violet-600",
            color: "from-violet-400 to-violet-600",
            text: 'Chief Marketing Officers, Heads of Marketing'
        },
        {
            imgcolor: "text-gray-600",
            color: "from-gray-400 to-gray-600",
            text: 'Heads of Retail Banking'
        },
        {
            imgcolor: "text-orange-600",
            color: "from-orange-400 to-orange-600",
            text: 'Heads of Corporate Banking'
        },
        {
            imgcolor: "text-blue-600",
            color: "from-blue-400 to-blue-600",
            text: 'Heads of Customer Experience'
        },
        {
            imgcolor: "text-cyan-600",
            color: "from-cyan-400 to-cyan-600",
            text: 'Heads of Cards & Payments'
        },
        {
            imgcolor: "text-purple-600",
            color: "from-purple-400 to-purple-600",
            text: 'Head of Data & Analytics'
        }, {
            imgcolor: "text-yellow-600",
            color: "from-yellow-400 to-yellow-600",
            text: 'Heads of Governance & Compliance'
        }
    ]
    const pointsData = [
        {
            title: 'Engaging Sessions',
            description: 'Immerse yourself in thought-provoking sessions with industry experts.',
            color: 'from-purple-500 to-purple-700',
        },
        {
            title: 'Networking Opportunities',
            description: 'Connect with professionals and expand your network during the summit.',
            color: 'from-blue-500 to-blue-700',
        },
        {
            title: 'Innovative Solutions',
            description: 'Explore the latest innovations and solutions shaping the future.',
            color: 'from-green-500 to-green-700',
        }
    ];
    return (
        <>
            <div className="bg-cover bg-center h-[600px] w-full" style={{ backgroundImage: `url(${imageUrl})` }}>
                <div className="bg-black bg-opacity-65 h-full flex items-center justify-center text-white">
                    <h1 className="text-4xl font-semibold">Welcome to Your Summit</h1>
                </div>
            </div>
            <section className='py-3 px-2'>
                <Number />
                <div className='text-4xl my-16 text-center gradient-text w-full h-full leading-normal'>
                    Digital Innovations Transforming the Kingdom's Banking Landscape
                </div>
            </section>
            <Contentgrid classCss="bg-gray-100">
                <div className='col-span-1 text-center w-full flex flex-col'>
                    <div className='w-full h-full -top-16 justify-center absolute'>
                        <img
                            src="https://ksa.futurebanksummit.com/wp-content/uploads/2022/04/3rd-edition-future-banks-summit-2022-event-overview.png"
                            width={300}
                            className='h-96 w-96'
                            alt="Event Overview"
                        />
                    </div>
                </div>
                <div className='col-span-3 w-full pl-2'>
                    <div className='my-4'>
                        <h1 className='gradient-text text-4xl'>Event Overview</h1>
                    </div>
                    <p className='py-2'>
                        The banking industry worldwide is undergoing phenomenal change, giving the banks an opportunity to relook into their existing business models and take a huge leap towards the future. The shift in consumers' digital experience, adoption of next-gen technologies, transformation of customer service to customer engagement, mobile workforce with a need to 'right-size' the branch network are all opportunities for regional banks to seize and accelerate the shift to digital.
                    </p>
                    <p className='py-2'>The 4th Annual Future Banks Summit KSA 2023 will showcase the latest innovations and practical case studies, along with interactive panel discussions designed to guide the banking sector in KSA in identifying the right strategies to overcome long-standing resistance and be future-ready!
                    </p><p className='py-2'> An exciting and timely conference is on its way, discussing the future of the financial industry in KSA driven by innovation and digital advancements, with the adoption of technologies such as AI, digital transformation, digital banking, banking in the metaverse, intelligent automation, regtech, data analytics, cloud migration, cyber security, digital payments models, along with tech-driven redefined business continuity planning strategies.
                    </p>
                </div>
            </Contentgrid>

            <Contentgrid classCss="mt-10">
                <div className='my-4  mx-4  col-span-2'>
                    <h1 className='gradient-text text-6xl leading-normal'>Top Highligts​​</h1>
                </div>
                {
                    highlightsData.map((element) => {
                        return (<div className='container flex col-span-1 my-5  hover:drop-shadow-md cursor-pointer w-full h-full justify-center'>
                            <div className={`relative ${element.mainColor} w-64 h-72 rounded-md px-10 py-20 flex text-center items-center`}>
                                <div className='absolute -top-8 left-[30%] w-20 h-20 drop-shadow-lg '>
                                    <img src={element.imgSrc} className={`rounded-full w-full h-full ${element.imgColor} z-2 object-cover`} />
                                </div>
                                <p className='text-sm font-bold text-gray-500 drop-shadow-xl'>
                                    {element.text}
                                </p>
                            </div>
                        </div>
                        )
                    })
                }
            </Contentgrid>

            <Contentgrid classCss="bg-gray-100">

                <div className='col-span-2 py-5'>
                    <ul className="list-none space-y-4 text-gray-700">
                        {meetingData.map((element) => {
                            return (
                                <li className={`flex items-center p-4 bg-gradient-to-r ${element?.color} rounded-lg shadow-md hover:shadow-lg`}>
                                    <div className="bg-white rounded-full p-2 mr-4">
                                        <svg className={`w-6 h-6 ${element.imgcolor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                    <p className="text-lg font-semibold text-white">{element?.text}</p>
                                </li>
                            );
                        })
                        }
                    </ul>
                </div>
                <div className='my-4 col-span-2  pl-2 flex flex-col items-center'>
                    <h1 className='gradient-text text-4xl'>Who Will You Meet ? </h1>
                    <img src={characters} />
                </div>

            </Contentgrid>

            <Contentgrid classCss="mt-10  mx-2">

                <div className='col-span-3'>
                    <h1 className='gradient-text text-4xl'>Why Attend?</h1>
                    <p className='py-2'>
                        The 4th Annual Future Banks Summit KSA 2023 will highlight the enabling role of digitalization in reshaping the future of banking. The pandemic has forced digital acceleration at such a massive scale that banks are not just looking to transform but are forced to reimagine their business. Delegates will experience a power-packed agenda consisting of presentations, panel discussions, and keynotes from globally and regionally renowned speakers, panelists, and moderators.                    </p>
                    <p className='py-2'>
                        If you are ready to innovate and join the ranks of the brightest minds in the industry while resonating with the following compelling reasons to attend, then register today:
                    </p>
                    <p className='py-2 mx-auto mt-2 '>
                        <ul className='space-x-4 flex '>
                            <li className={`cursor-pointer rounded-lg overflow-hidden transition duration-300 transform hover:scale-105 bg-gradient-to-r from-purple-300 to-purple-400 p-6`}
                            ><div>Gain knowledge and insights from top industry leaders and experts from across the globe.</div>
                            </li><li className={`cursor-pointer rounded-lg overflow-hidden transition duration-300 transform hover:scale-105 bg-gradient-to-r from-red-300 to-red-400 p-6`}
                            ><div>Network with industry peers in a solution-oriented environment.</div>
                            </li><li className={`cursor-pointer rounded-lg overflow-hidden transition duration-300 transform hover:scale-105 bg-gradient-to-r from-green-300 to-green-400 p-6`}
                            ><div>Discuss significant partnerships and collaborations with industry leaders.  </div></li>
                        </ul>
                    </p>
                </div>
                <div className='my-4 col-span-1'>
                    <img src={humansImg} />
                </div>
                {/* <div className="container mx-auto mt-12">
                    <h1 className="text-4xl font-bold text-center mb-8">Key Features</h1>
                    <ul className="list-none space-y-4">
                        {pointsData.map((point, index) => (
                            <li
                                key={index}
                                className={`group cursor-pointer rounded-lg overflow-hidden transition duration-300 transform hover:scale-105 bg-gradient-to-r ${point.color} p-6`}
                            >
                                <div className="mb-4">
                                    <h2 className="text-2xl font-bold text-white group-hover:text-gray-200">{point.title}</h2>
                                </div>
                                <p className="text-gray-100 group-hover:text-gray-300">{point.description}</p>
                            </li>
                        ))}
                    </ul>
                </div> */}
            </Contentgrid >
        </>
    )
}
