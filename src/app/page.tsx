import Image from 'next/image';
import Footer from './custom-components/footer';
import Link from 'next/link';

export default function Index() {
  return (
    <div className="">
      <div className="grid min-h-screen lg:grid-cols-2">
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

          <div className="mt-14 grid grid-cols-3 gap-4">
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

      <div className="">
        <div className="grid grid-cols-2">
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
        <div className="grid grid-cols-2">
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

        <div className="grid grid-cols-2">
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
        <div className="grid grid-cols-2">
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

      <div className="bg-light-bg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="py-32">
            <h1 className="text-center font-lexend font-semibold text-hero-text-black text-3xl pb-8">
              What people say
            </h1>
            <div className="grid grid-cols-3 gap-6">
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
        <Footer />
      </div>
    </div>
  );
}
