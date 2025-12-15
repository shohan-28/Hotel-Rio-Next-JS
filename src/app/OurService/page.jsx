import React from 'react';
import { MdOutlineSecurity } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import { MdOutlinePayment } from "react-icons/md";
import "./OurService.module.css";
import 'animate.css';

const OurService = () => {
    return (
        <div className='bg-white pb-5'>
            <div className='w-11/12 mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 py-5 h-fit w-full text-black'>
                    <div className='space-y-4 py-4 px-4 flex flex-col justify-center items-center  bg-blue-50 rounded-xl animate__animated animate__backInLeft'>
                        <p className='text-[60px] '><MdOutlineSecurity /></p>
                        <p className='text-base'>We are offering best security sistem in Bangladesh</p>
                    </div>

                    <div className='space-y-4 py-4 px-4 flex flex-col justify-center items-center bg-rose-50 rounded-xl animate__animated animate__fadeIn'>
                        <p className='text-[60px] '><GrServices /></p>
                        <p className='text-base'>We have good review for offering best services</p>
                    </div>

                    <div className='space-y-4 py-4 px-4 flex flex-col justify-center items-center bg-blue-50 rounded-xl animate__animated animate__backInRight'>
                        <p className='text-[60px] '>
                            <MdOutlinePayment />
                        </p>
                        <p className='text-base'>We accept Mobile Banking Payment, Card Payment and Hand Cash</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurService;