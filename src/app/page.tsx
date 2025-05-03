"use client"

import Image from 'next/image';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useRef, useState } from 'react';
import { Separator } from '@/components/ui/separator';

enum tabsValues {
  monthly,
  yearly
}

interface Ref {
  current: any
}

export default function Index() {
  const [tabsValue, setTabsValue] = useState<tabsValues>(tabsValues.monthly)

  const showcasingRef = useRef(null)
  const aboutUsRef = useRef(null)
  const ourServicesRef = useRef(null)
  const testimonialsRef = useRef(null)
  const pricingRef = useRef(null)

  const scrollToPageSection = (refElement: Ref) => {
    if(refElement.current != null){
      refElement.current.scrollIntoView({'behavior': 'smooth'})
    }
  }

  const tabsValueChange = (w:string) => {
    console.log(w)
    if(w == "monthly"){
      setTabsValue(tabsValues.monthly)
    }else {
      setTabsValue(tabsValues.yearly)
    }
  }

  return (
    <div className="">
      <section id='showcasing' ref={showcasingRef}>
        <div className="grid min-h-screen lg:grid-cols-2 bg-gold-light">
          <div className="flex flex-col py-5 px-10 justify-between">
            <Image
              src="/header-logo.svg"
              alt=""
              width={300}
              height={91.82}
              className=""
            />
            <div className="flex flex-col ">
              <h1 className="text-4xl font-semibold font-lexend pb-5">
                Marketing <span className="text-light-purple">streamlined</span>.
                Clients <span className="text-gold-color">satisfied</span>.
              </h1>
              <p className="pb-12 text-hero-text-black font-light text-2xl">{`Your agency's complete marketing ecosystem. Seamlessly connect strategy, creativity, and execution`}</p>
              <div className="flex gap-5 items-center">
                <Link href={'/sign-up'}>
                  <button className="font-lexend bg-dark-purple text-white rounded-sm py-2 px-6 cursor-pointer">
                    Get Started
                  </button>
                </Link>
                <Link href={'/sign-in'}>
                  <button className="font-lexend bg-white border-2 border-dark-purple text-dark-purple rounded-sm py-2 px-6 cursor-pointer">
                    Login
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <Image src="/coke.svg" alt="" width={113} height={37} />
              <Image src="/bf.svg" alt="" width={62.59} height={37} />
              <Image src="/one.svg" alt="" width={37} height={37} />
            </div>
          </div>
          <div className="bg-muted relative hidden lg:block">
            <Image
              width={100}
              height={100}
              src="/hero.svg"
              alt="Adboss 360"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </div>
      </section>

      <section id='about' ref={aboutUsRef}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="py-32">
            <h1 className="text-center font-lexend font-semibold text-hero-text-black text-3xl pb-8">
              Revolutionising Marketing, Advertising & Media Management
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center ">
              <Image src="/image1.png" alt="" width={661} height={441} />
              <div
                className="flex  justify-center items-center px-4"
                style={{ height: '441' }}
              >
                <p className="font-lexend text-center font-light text-2xl mt-4 md:mt-0">
                  A comprehensive super app designed to streamline advertising and
                  media management. The application integrates multiple
                  functionalities into one platform for a seamless user
                  experience.
                </p>
              </div>
            </div>

            <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex flex-col items-center">
                <Image src="/icon1.svg" alt="" width={42} height={42} />
                <h1 className="font-lexend text-xl font-medium py-2 text-center">
                  All-in-One Solution
                </h1>
                <p className="text-center font-lexend font-light text-lg">
                  Unlike competitors, AdBoss Media 360 combines multiple
                  advertising functionalities in one app.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/icon2.svg" alt="" width={34} height={34} />
                <h1 className="font-lexend text-xl font-medium py-2 text-center">
                  Cost Efficiency
                </h1>
                <p className="text-center font-lexend font-light text-lg">
                  Reduces the need for multiple subscriptions and tools.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/icon3.svg" alt="" width={25} height={33} />
                <h1 className="font-lexend text-xl font-medium py-2 text-center">
                  Increased Opportunity
                </h1>
                <p className="text-center font-lexend font-light text-lg">
                  A client initially engaged for a single service can now
                  seamlessly access our expanded portfolio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='our_services' ref={ourServicesRef}>
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className=" bg-dark-bg text-light-bg py-10 px-4">
              <h1 className="text-center font-lexend text-2xl font-semibold pb-8">
                Brand Management
              </h1>
              <p className="max-w-sm mx-auto text-center font-light font-lexend pb-8 text-lg">{`Your agency's complete marketing ecosystem. Seamlessly connect strategy, creativity, and execution.`}</p>
              <div className="flex justify-center">
                <Link href={'/sign-up'}>
                  <button className="bg-dark-purple text-light-bg py-2 px-6 cursor-pointer rounded-sm">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
            <div className=" bg-light-bg text-dark-bg py-10 px-4">
              <h1 className="text-center font-lexend text-2xl font-semibold pb-8">
                Market Research
              </h1>
              <p className="max-w-sm mx-auto text-center font-light font-lexend pb-8 text-lg">{`Your agency's complete marketing ecosystem. Seamlessly connect strategy, creativity, and execution.`}</p>
              <div className="flex justify-center">
              <Link href={'/sign-up'}>
                <button className="bg-dark-purple text-light-bg py-2 px-6 cursor-pointer rounded-sm">
                  Get Started
                </button>
              </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className=" bg-light-bg text-dark-bg py-10 px-4">
              <h1 className="text-center font-lexend text-2xl font-semibold pb-8">
                Media Planning
              </h1>
              <p className="max-w-sm mx-auto text-center font-light font-lexend pb-8 text-lg">{`Your agency's complete marketing ecosystem. Seamlessly connect strategy, creativity, and execution.`}</p>
              <div className="flex justify-center">
                <Link href={'/sign-up'}>
                  <button className="bg-dark-purple text-light-bg py-2 px-6 cursor-pointer rounded-sm">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
            <div className=" bg-dark-bg text-light-bg py-10 px-4">
              <h1 className="text-center font-lexend text-2xl font-semibold pb-8">
                Marketing Strategy
              </h1>
              <p className="max-w-sm mx-auto text-center font-light font-lexend pb-8 text-lg">{`Your agency's complete marketing ecosystem. Seamlessly connect strategy, creativity, and execution.`}</p>
              <div className="flex justify-center">
                <Link href={'/sign-up'}>
                  <button className="bg-dark-purple text-light-bg py-2 px-6 cursor-pointer rounded-sm">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className=" bg-dark-bg text-light-bg py-10 px-4">
              <h1 className="text-center font-lexend text-2xl font-semibold pb-8">
                Digital Marketing
              </h1>
              <p className="max-w-sm mx-auto text-center font-light font-lexend pb-8 text-lg">{`Your agency's complete marketing ecosystem. Seamlessly connect strategy, creativity, and execution.`}</p>
              <div className="flex justify-center">
                <Link href={'/sign-up'}>
                  <button className="bg-dark-purple text-light-bg py-2 px-6 cursor-pointer rounded-sm">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
            <div className=" bg-light-bg text-dark-bg py-10 px-4">
              <h1 className="text-center font-lexend text-2xl font-semibold pb-8">
                Proposal & Pitch Development
              </h1>
              <p className="max-w-sm mx-auto text-center font-light font-lexend pb-8 text-lg">{`Your agency's complete marketing ecosystem. Seamlessly connect strategy, creativity, and execution.`}</p>
              <div className="flex justify-center">
                <Link href={'/sign-up'}>
                  <button className="bg-dark-purple text-light-bg py-2 px-6 cursor-pointer rounded-sm">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className=" bg-light-bg text-dark-bg py-10 px-4">
              <h1 className="text-center font-lexend text-2xl font-semibold pb-8">
                Experiential Marketing
              </h1>
              <p className="max-w-sm mx-auto text-center font-light font-lexend pb-8 text-lg">{`Your agency's complete marketing ecosystem. Seamlessly connect strategy, creativity, and execution.`}</p>
              <div className="flex justify-center">
                <Link href={'/sign-up'}>
                  <button className="bg-dark-purple text-light-bg py-2 px-6 cursor-pointer rounded-sm">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
            <div className=" bg-dark-bg text-light-bg py-10 px-4">
              <h1 className="text-center font-lexend text-2xl font-semibold pb-8">
                A Comprehensive Super App
              </h1>
              <p className="max-w-sm mx-auto text-center font-light font-lexend pb-8 text-lg">{`Your agency's complete marketing ecosystem. Seamlessly connect strategy, creativity, and execution.`}</p>
              <div className="flex justify-center">
                <Link href={'/sign-up'}>
                  <button className="bg-dark-purple text-light-bg py-2 px-6 cursor-pointer rounded-sm">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='testimonials' ref={testimonialsRef}>
        <div className="bg-light-bg">
          <div className="max-w-6xl mx-auto px-4">
            <div className="py-32">
              <h1 className="text-center font-lexend font-semibold text-hero-text-black text-3xl pb-8">
                What people say
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-dark-bg py-7 px-5 rounded-2xl">
                  <h1 className="font-lexend font-semibold text-2xl text-light-bg pb-2">
                    Thobeka Dlongolo
                  </h1>
                  <p className="font-lexend text-light-bg text-sm font-semibold pb-8">
                    Managing Director - Biza iAfrica Consultants
                  </p>
                  <p className="text-gold-dark-color font-lexend font-light text-lg pb-3">
                    “This platform has transformed how we serve our clients. A
                    three month project can now take 3 weeks through AB 360”
                  </p>
                  <div className="mx-auto">
                    <Link href={'/sign-up'}>
                      <button className="w-full text-white rounded-sm py-2 bg-linear-to-r from-gradient-gold to-gradient-blue cursor-pointer">
                        Get Started
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="bg-dark-bg py-7 px-5 rounded-2xl">
                  <h1 className="font-lexend font-semibold text-2xl text-light-bg pb-2">
                    James Maposa
                  </h1>
                  <p className="font-lexend text-light-bg text-sm font-semibold pb-8">
                    Managing Director - Birguid
                  </p>
                  <p className="text-gold-dark-color font-lexend font-light text-lg pb-3">
                    “This platform has transformed how we serve our clients. A
                    three month project can now take 3 weeks through AB 360”
                  </p>
                  <div className="mx-auto">
                    <Link href={'/sign-up'}>
                      <button className="w-full text-white rounded-sm py-2 bg-linear-to-r from-gradient-gold to-gradient-blue cursor-pointer">
                        Get Started
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="bg-dark-bg py-7 px-5 rounded-2xl">
                  <h1 className="font-lexend font-semibold text-2xl text-light-bg pb-2">
                    Olebone Sepeng
                  </h1>
                  <p className="font-lexend text-light-bg text-sm font-semibold pb-8">
                    Operations Specialist
                  </p>
                  <p className="text-gold-dark-color font-lexend font-light text-lg pb-3">
                    “This platform has transformed how we serve our clients. A
                    three month project can now take 3 weeks through AB 360”
                  </p>
                  <div className="mx-auto">
                    <Link href={'/sign-up'}>
                      <button className="w-full text-white rounded-sm py-2 bg-linear-to-r from-gradient-gold to-gradient-blue cursor-pointer">
                        Get Started
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
      </section>
        
      <section id='pricing' ref={pricingRef}>
        <div className="bg-light-bg">
          <div className="max-w-6xl mx-auto px-4 py-11 md:py-24">
            <Tabs defaultValue="monthly" onValueChange={(w:string) => tabsValueChange(w)}>
              <div className="flex flex-col items-center md:flex-row justify-between">
                <div className="">
                  <h1 className='font-lexend text-4xl font-semibold text-dark-purple pb-4'>Simple, transparent</h1>
                  <p style={{color:"#848199"}} className='font-lexend text-lg text-center md:text-start'>No contracts. No surprise fees.</p>
                </div>
                <TabsList className='rounded-2xl gap-2 mt-5 md:mt-0'>
                  <TabsTrigger  className={tabsValue == tabsValues.monthly ? "rounded-2xl px-6 py-4 text-gold-dark-color": "rounded-2xl px-6 py-4"} value="monthly">Monthly</TabsTrigger>
                  <TabsTrigger disabled className='rounded-2xl px-6 py-4' value="yearly">Yearly</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value='monthly' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16'>
                <div className="relative w-[370px] mt-6 mx-auto">
                  <div className="w-[340px] h-[427px] bg-white absolute right-10 bottom-16  py-6 px-7 drop-shadow-[6px_3px_10px_#B9946F] transition duration-150 ease-in-out hover:drop-shadow-[10px_-2px_10px_#B9946F]">
                    <h1 className='relative font-lexend mb-5'>
                      <span className='font-bold text-3xl' style={{color: "#231D4F"}}>R140,000</span>
                      <span className='relative top-3 font-lexend text-sm' style={{color: "#848199"}}>/month</span>
                    </h1>
                    <h1 style={{color: "#231D4F"}} className='font-lexend font-medium text-2xl mb-5'>Essential</h1>
                    <Separator />
                    <ul className='mt-6'>
                      <li className='font-lexend font-light text-sm mb-4 text-light-gray'>1-3 Modules</li>
                      <li className='font-lexend font-light text-sm mb-4 text-light-gray'>Own analytics platform</li>
                      <li className='font-lexend font-light text-sm mb-4 text-light-gray'>Chat support</li>
                      <li className='font-lexend font-light text-sm mb-4 text-light-gray'>Optimize hashtags</li>
                      <li className='font-lexend font-light text-sm text-light-gray'>Unlimited users</li>
                    </ul>
                  </div>
                  <div  className="w-[340px] h-[468px] bg-dark-gold-bg  flex flex-col justify-end ">
                    <h1 className='pb-4 pl-4 text-white text-sm font-lexend'>CHOOSE PLAN</h1>
                  </div>
                </div>
                <div className="relative w-[370px] mt-6 mx-auto">
                  <div className="w-[340px] h-[427px] bg-white absolute right-10 bottom-16 shadow-xl py-6 px-7 drop-shadow-[6px_3px_10px_white] transition duration-150 ease-in-out hover:drop-shadow-[10px_-2px_10px_white]">
                    <h1 className='relative font-lexend mb-5'>
                      <span className='font-bold text-3xl' style={{color: "#231D4F"}}>R170,500</span>
                      <span className='relative top-3 font-lexend text-sm' style={{color: "#848199"}}>/month</span>
                    </h1>
                    <h1 style={{color: "#231D4F"}} className='font-lexend font-medium text-2xl mb-5'>Professional</h1>
                    <Separator />
                    <ul className='mt-6'>
                      <li className='font-lexend font-light text-sm mb-4 text-light-gray'>1-3 Modules</li>
                      <li className='font-lexend font-light text-sm mb-4 text-light-gray'>Own analytics platform</li>
                      <li  className='font-lexend font-light text-sm mb-4 text-light-gray'>Chat support</li>
                      <li  className='font-lexend font-light text-sm mb-4 text-light-gray'>Optimize hashtags</li>
                      <li  className='font-lexend font-light text-sm text-light-gray'>Unlimited users</li>
                    </ul>
                  </div>
                  <div className="w-[340px] h-[468px] bg-dark-purple-bg flex flex-col justify-end">
                    <h1 className='pb-4 pl-4 text-white text-sm font-lexend'>CHOOSE PLAN</h1>
                  </div>
                </div>
                <div className="relative w-[370px] mt-6 mx-auto">
                  <div className="w-[340px] h-[427px] bg-white absolute right-10 bottom-16 shadow-xl py-6 px-7 drop-shadow-[9px_9px_7px_#B9946F] transition duration-150 ease-in-out hover:drop-shadow-[10px_-2px_10px_#B9946F]">
                    <h1 className='relative font-lexend mb-5'>
                      <span className='font-bold text-3xl' style={{color: "#231D4F"}}>R200,000</span>
                      <span className='relative top-3 font-lexend text-sm' style={{color: "#848199"}}>/month</span>
                    </h1>
                    <h1 style={{color: "#231D4F"}} className='font-lexend font-medium text-2xl mb-5'>Premium</h1>
                    <Separator />
                    <ul className='mt-6'>
                      <li  className='font-lexend font-light text-sm mb-4 text-light-gray'>1-3 Modules</li>
                      <li  className='font-lexend font-light text-sm mb-4 text-light-gray'>Own analytics platform</li>
                      <li className='font-lexend font-light text-sm mb-4 text-light-gray'>Chat support</li>
                      <li  className='font-lexend font-light text-sm mb-4 text-light-gray'>Optimize hashtags</li>
                      <li  className='font-lexend font-light text-sm text-light-gray'>Unlimited users</li>
                    </ul>
                  </div>
                  <div  className="w-[340px] h-[468px] bg-dark-gold-bg  flex flex-col justify-end">
                    <h1 className='pb-4 pl-4 text-white text-sm font-lexend'>CHOOSE PLAN</h1>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <section id='footer'>
        <div className="bg-dark-purple py-20 px-10">
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="col-span-1">
                    <Image src="/footer-logo.svg" alt="" width={130} height={124}/>
                    <h1 className="text-light-bg font-lexend font-medium text-3xl mt-7 mb-5">AdBoss Media Group</h1>
                    <p className="text-light-bg font-lexend text-sm">©2025 AdBoss 360 by 2025 AdBoss Media Group</p>
                </div>
                <div className="col-span-2 grid grid-cols-2 mt-7 md:mt-0">
                    <div className="flex flex-col items-start md:items-center">
                        <h1 className="font-lexend font-medium text-2xl text-gold-dark-color">About us</h1>
                        <ul className="flex flex-col md:text-center mt-4">
                            <li onClick={(e) => {e.preventDefault(); scrollToPageSection(showcasingRef)}} className="font-lexend text-base font-light text-light-bg mb-1 cursor-pointer">Home</li>
                            <li onClick={(e) => {e.preventDefault(); scrollToPageSection(aboutUsRef)}} className="font-lexend text-base font-light text-light-bg mb-1 cursor-pointer">About</li>
                            <li onClick={(e) => {e.preventDefault(); scrollToPageSection(ourServicesRef)}} className="font-lexend text-base font-light text-light-bg mb-1 cursor-pointer">Features</li>
                            <li onClick={(e) => {e.preventDefault(); scrollToPageSection(pricingRef)}} className="font-lexend text-base font-light text-light-bg mb-1 cursor-pointer">Pricing</li>
                            <li onClick={(e) => {e.preventDefault(); scrollToPageSection(testimonialsRef)}} className="font-lexend text-base font-light text-light-bg mb-1 cursor-pointer">Testimonials</li>
                            <li className="font-lexend text-base font-light text-light-bg mb-1 cursor-pointer">Blog</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-end">
                        <h1 className="font-lexend font-medium text-2xl text-gold-dark-color mb-4">Get in touch</h1>

                        <p className="font-lexend text-base font-light text-light-bg mb-1">Tel: +27 69 269 6312 </p>
                        <p className="font-lexend text-base font-light text-light-bg mb-1">Cell: +27 82 798 5262</p>
                        <p className="font-lexend text-base font-light text-light-bg mb-3">Email: <span className="underline">info@adbossmedia.com</span></p>

                        <p className="font-lexend text-base font-light text-light-bg mb-1">64 Stone Manor</p>
                        <p className="font-lexend text-base font-light text-light-bg mb-1">46 North Road</p>
                        <p className="font-lexend text-base font-light text-light-bg mb-1">Morningside, Sandton </p>
                        <p className="font-lexend text-base font-light text-light-bg mb-1">2196</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between mt-7">
                <p className="font-lexend text-base text-light-bg">Terms & Conditions | Privacy Policy</p>
                <div className="flex items-center gap-4">
                    <Image className="cursor-pointer" src="/instagram.svg" alt="" width={36} height={36}/>
                    <Image className="cursor-pointer" src="/linkedin.svg" alt="" width={36} height={36}/>
                    <Image className="cursor-pointer" src="/x.svg" alt="" width={30} height={34}/>
                </div>
            </div>
        </div>
      </section>
      </div>
  );
}
