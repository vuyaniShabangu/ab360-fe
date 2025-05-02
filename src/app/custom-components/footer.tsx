import Image from "next/image";

export default function Footer(){
    return (
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
                            <li className="font-lexend text-base font-light text-light-bg mb-1 cursor-pointer">About</li>
                            <li className="font-lexend text-base font-light text-light-bg mb-1 cursor-pointer">Features</li>
                            <li className="font-lexend text-base font-light text-light-bg mb-1 cursor-pointer">Pricing</li>
                            <li className="font-lexend text-base font-light text-light-bg mb-1 cursor-pointer">Careers</li>
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
    )
}