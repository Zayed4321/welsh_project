import React from 'react';
import Layout from "../../components/layouts/Layout";
import hero from "../../assets/hero.webp";
import rating from "../../assets/rating.png";
import review from "../../assets/fbReview.webp";
import { FaArrowRightLong, FaRegSquareCheck } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { CiMail, CiPhone, CiUser } from 'react-icons/ci';
import { GoPencil } from 'react-icons/go';

const Home = () => {
    return (
        <Layout>
            <div>
                <div >
                    <img src={hero} className='h-[850px] w-full object-cover relative' alt="" />
                </div>
                <div className='absolute top-48' >
                    <div className='flex flex-row' >
                        <div className='w-full' >
                            <div>
                                <h1 className='text-[55px] font-black pl-12 text-white font-barlow' > VICTORIA’S <span className='text-green-one font-barlow' > MOST TRUSTED </span>
                                    <br /> CIVIL CONTRACTING AND <br /> EARTHWORKS EXPERTS </h1>
                                <p className=' pl-12 text-white font-bold text-[22px] mt-2 font-barlow' > SETTING NEW STANDARDS AND DELEVIRING A <span className='text-green-one' > STRESS <br /> FREE </span> EXPERIENCE EVERY TIME. </p>
                                <div className='pl-12 mt-5 flex space-x-8'>
                                    <img src={review} alt="" />
                                    <img src={rating} alt="" />
                                </div>
                                <p className='pl-12 text-white font-bold text-[18px] mt-5 font-barlow' > <span> <FaRegSquareCheck className='inline-block mr-3 text-green-one font-bold' /> Over 7 Years Of Experience </span> </p>
                                <p className='pl-12 text-white font-bold text-[18px] mt-2 font-barlow' > <span> <FaRegSquareCheck className='inline-block mr-3 text-green-one font-bold' /> High Quality Service - Guaranteed </span> </p>
                                <p className='pl-12 text-white font-bold text-[18px] mt-2 font-barlow' > <span> <FaRegSquareCheck className='inline-block mr-3 text-green-one font-bold' /> Serving The Entire State Of Victoria </span> </p>
                                <div className='pl-12 mt-5 flex flex-row space-x-5' >
                                    <Link className='py-2 px-8 bg-white text-[18px] font-bold font-barlow flex items-center' > <CiPhone className='inline-block text-2xl text-black mr-3' /> 0479 408 822 </Link>
                                    <Link className='py-2 px-8 bg-green-one text-[18px] font-bold font-barlow flex items-center' > Book A Free On-Site Inspection Quote <FaArrowRightLong className='inline-block text-xl ml-3' />  </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-10 pl-12 flex items-center justify-center mx-auto w-[1335px]' >
                        <div className='bg-white py-9 px-10 w-full' >
                            <h1 className='text-[34px] font-extrabold font-barlow' > BOOK YOUR FREE ON-SITE INSPECTION AND QUOTE! </h1>
                            <form>
                                <div className='flex flex-row mt-5 space-x-3' >
                                    <div className='w-1/3' >
                                        <label className="input input-bordered flex items-center gap-2">
                                            <input type="text" className="grow placeholder-black" placeholder="Name" />
                                            <CiUser />
                                        </label>
                                    </div>
                                    <div className='w-1/3' >
                                        <label className="input input-bordered flex items-center gap-2">
                                            <input type="text" className="grow placeholder-black" placeholder="Phone" />
                                            <CiPhone />
                                        </label>
                                    </div>
                                    <div className='w-1/3' >
                                        <label className="input input-bordered flex items-center gap-2">
                                            <input type="text" className="grow placeholder-black" placeholder="Mail" />
                                            <CiMail />
                                        </label>
                                    </div>
                                </div>
                                <div className='flex flex-row mt-5 space-x-3' >
                                    <div className='w-2/3' >
                                        <label className="input input-bordered flex items-center gap-2">
                                            <input type="text" className="grow placeholder-black" placeholder="How Can We Help" />
                                            <GoPencil />
                                        </label>
                                    </div>
                                    <div className='w-1/3'>
                                        <button type='submit' className='text-black flex justify-between items-center w-full py-3 px-3 bg-green-one rounded-md cursor-pointer'>
                                            <h1 className='text-start'>Book Now</h1>
                                            <span><FaArrowRightLong className='inline-block' /></span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </Layout>
    )
}

export default Home