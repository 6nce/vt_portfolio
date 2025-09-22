import React from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { gsap } from 'gsap'

gsap.registerPlugin(ScrollTrigger)

const ShowcaseSection = () => {
    const sectionRef = useRef(null)
    const project1Ref = useRef(null)
    const project2Ref = useRef(null)
    const project3Ref = useRef(null)



    useGSAP(()=> {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];
        projects.forEach((card,index) =>{
            gsap.fromTo(
                card,
                {
                    y:50,opacity:0
                }, {
                    y:0, opacity:1, duration: 1, delay:0.3 * (index + 1), scrollTrigger:{
                        trigger:card, start: 'top bottom-=100'
                    }
                }
            )
        })
        gsap.fromTo(sectionRef.current, { opacity:0}, {opacity:1, duration:1.5})
    },[])


  return (
    <div id="work" ref={sectionRef} className="app-showcase">
        <div className='w-full'>
            <div className='showcaselayout'>
                {/* LEFT SIDE */}
                <div className='first-project-wrapper' ref={project1Ref} >
                    <div className='image-wrapper'>
                        <img src='/images/powerRangersHorizontal.png'alt="2xl Power Ranger Image" className='hidden 2xl:block'/>
                        <img src='/images/largeProjectImage2.png'alt="xl Power Ranger Image" className='hidden xl:block 2xl:hidden'/>
                        <img src='/images/powerRangersHorizontal.png'alt="lg Power Ranger Image" className='hidden lg:block xl:hidden'/>
                        <img src='/images/powerRangersHorizontal.png'alt="mobile Power Ranger Image" className='hidden md:block lg:hidden'/>
                        <img src='/images/powerRangersHorizontal.png'alt="mobile Power Ranger Image" className='hidden sm:block md:hidden'/>
                        <img src='/images/largeProjectImage2.png'alt="mobile Power Ranger Image" className='block sm:hidden'/>
                    </div>
                    <div className='text-content'>
                        <h2>Working with characters and assets from iconic IPs and brands </h2>
                        <p className='text-white-50 md:text-xl'>
                        Crafting marketing assets that prioritize brand details and ensure consistent identity throughout campaigns
                        </p>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className='project-list-wrapper overflow-hidden'>
                    <div className='project'ref={project2Ref} >
                        <div className='image-wrapper'>
                            <div className="image-wrapper relative z-1 p-5">
                                <img src='/images/ukraine.png'alt="2xl Power Ranger Image" className='hidden 2xl:block'/>
                                <img src='/images/ukraine2.png'alt="xl Power Ranger Image" className='hidden xl:block 2xl:hidden'/>
                                <img src='/images/ukraine.png'alt="lg Power Ranger Image" className='hidden lg:block xl:hidden'/>
                                <img src='/images/ukraine.png'alt="mobile Power Ranger Image" className='hidden md:block lg:hidden'/>
                                <img src='/images/ukraine.png'alt="mobile Power Ranger Image" className='hidden sm:block md:hidden'/>
                                <img src='/images/ukraine.png'alt="mobile Power Ranger Image" className='block sm:hidden'/>
                            </div>
                            <img src="/images/ukraine.png" className="image-wrapper absolute inset-0 w-full h-full object-cover blur-md"/>
                        </div>
                        <h2>Helping to work towards a greater tomorrow</h2>
                        <p className='text-white-50 md:text-xl'>
                            Contributing to high-visibility projects with global impact alongside cross-functional teams. 
                        </p>
                    </div>
                    <div className='project' ref={project3Ref}>
                        <div className='image-wrapper'>
                            <div className="image-wrapper relative z-1 p-5">
                                <img src='/images/multiplayer.png'alt="2xl Power Ranger Image" className='hidden 2xl:block'/>
                                <img src='/images/multiplayerSquare2.png'alt="xl Power Ranger Image" className='hidden xl:block 2xl:hidden'/>
                                <img src='/images/multiplayer.png'alt="lg Power Ranger Image" className='hidden lg:block xl:hidden'/>
                                <img src='/images/multiplayer.png'alt="mobile Power Ranger Image" className='hidden md:block lg:hidden'/>
                                <img src='/images/multiplayer.png'alt="mobile Power Ranger Image" className='hidden sm:block md:hidden'/>
                                <img src='/images/multiplayer.png'alt="mobile Power Ranger Image" className='block sm:hidden'/>
                            </div>
                            <img src="/images/multiplayer.png" className="image-wrapper absolute inset-0 w-full h-full object-cover blur-md"/>
                        </div>
                        <h2>Creating branding for cross-publisher bundles and marketing campaigns.</h2>
                        <p className='text-white-50 md:text-xl'>
                            Providing impactful visuals while balancing the needs of multiple stakeholders.
                        </p>
                    </div>
                </div>
            </div>
        </div>        
    </div>
  )
}

export default ShowcaseSection