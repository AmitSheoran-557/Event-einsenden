import React from 'react'
import { PlusIcon } from '../utils/icons'
import { useForm } from "react-hook-form";
import { useState } from 'react';


const EventEinsenden = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        console.log(data);
        reset();
        setImages([]);
    };


    const [images, setImages] = useState([]);
    const handleImageSelect = (event) => {
        const files = event.target.files;
        const imageURLs = Array.from(files).map(file => URL.createObjectURL(file));

        setImages((prevImages) => {
            const totalImages = prevImages.length + imageURLs.length;
            if (totalImages > 3) {
                const remainingSlots = 3 - prevImages.length;
                return [...prevImages, ...imageURLs.slice(0, remainingSlots)];
            }
            return [...prevImages, ...imageURLs];
        });
    };

    return (
        <div className='flex justify-center bg-secondary items-center min-h-screen lg:py-[60px] md:py-14 py-12 max-lg:px-4'>
            <div className="max-w-[1280px] mx-auto">
                <h1 className='lg:mb-5 md:mb-4 mb-3 text-center mx-auto text-lightBlack font-bold lg:text-4xl md:text-3xl text-2xl !tracking-[-2%] !leading-[122%]'>Event einsenden</h1>
                <p className='text-center lg:mb-5 mb-4 max-w-[768px] w-full text-primary font-light lg:text-xl md:text-base text-sm !leading-[150%]'>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>

                <div className='max-w-[763px] flex overflow-auto items-center w-full lg:mb-5 md:mb-4 mb-3 py-[7.2px] px-4 rounded-[30px] border-[0.5px] border-dashed bg-white'>

                    <div className='flex lg:gap-4 gap-3 items-center'>

                        {images.map((image, index) => (
                            <div key={index} className="lg:size-24 md:size-16 size-14 flex justify-center items-center lg:rounded-[24px] rounded-2xl overflow-hidden">
                                <img src={image} alt={`Selected ${index}`} className="w-full h-full object-cover flex-wrap" />
                            </div>
                        ))}
                        <div className='lg:py-[30px] md:py-6 sm:py-5 py-4 lg:px-[38px] md:px-6 sm:px-5 px-4 border-[0.5px] border-dashed max-h-20 flex justify-center items-center rounded-[20px]'
                            onClick={() => document.getElementById('file-input').click()} >
                            <PlusIcon />
                            <input id="file-input" type="file" accept="image/*" disabled={images.length >= 3} onChange={handleImageSelect} className="hidden" multiple />
                        </div>

                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='max-w-[763px] w-full mx-auto'>

                    <div className=' border-[0.5px] rounded-[30px] max-w-[763px] bg-white border-lightGray lg:mb-5 md:mb-4 mb-3 relative'>
                        <select className="w-full text-primary lg:py-[18px] py-3 font-bold max-w-[763px] outline-none lg:!text-sm lg:px-4 px-3 rounded-full !text-xs">
                            <option className='max-w-[763px]' value="Kategorie">Kategorie</option>
                            <option className='max-w-[763px]' value="option2">option 2</option>
                            <option className='max-w-[763px]' value="option3">option 3</option>
                        </select>
                    </div>

                    <div className='flex sm:flex-row flex-col max-md:gap-4 sm:justify-between justify-center items-center lg:mb-5 md:mb-4 mb-3'>
                        <div className='md:max-w-[371px] w-full'>
                            <input {...register("Titel", { required: "Titel is required" })} placeholder="Titel" type="text"
                                className="w-full lg:px-4 px-3 lg:py-[17.2px] lg:text-sm text-xs py-3 border-[0.5px] border-lightGray text-primary font-bold rounded-[30px] outline-none" />
                            {errors.Titel && <p className="text-red-500 text-sm">{errors.Titel.message}</p>}
                        </div>
                        <div className='md:max-w-[371px] w-full'>
                            <input {...register("Datum", { required: "Datum is required", })} placeholder="Datum" type="text"
                                className="w-full lg:px-4 px-3 lg:py-[17.2px] lg:text-sm text-xs py-3 border-[0.5px] border-lightGray text-primary font-bold rounded-[30px] outline-none" />
                            {errors.Datum && <p className="text-red-500 text-sm">{errors.Datum.message}</p>}
                        </div>
                    </div>

                    <div className='flex sm:flex-row flex-col max-md:gap-4 sm:justify-between justify-center items-center lg:mb-5 md:mb-4 mb-3'>
                        <div className='md:max-w-[371px] w-full'>
                            <input {...register("Standort", { required: "Standort is required" })} placeholder="Standort" type="text"
                                className="w-full lg:px-4 px-3 lg:py-[17.2px] lg:text-sm text-xs py-3 border-[0.5px] border-lightGray text-primary font-bold rounded-[30px] outline-none" />
                            {errors.Standort && <p className="text-red-500 text-sm">{errors.Standort.message}</p>}
                        </div>
                        <div className='md:max-w-[371px] w-full'>
                            <input {...register("Preis", { required: "Preis is required", })} placeholder="Preis" type="text"
                                className="w-full lg:px-4 px-3 lg:py-[17.2px] lg:text-sm text-xs py-3 border-[0.5px] border-lightGray text-primary font-bold rounded-[30px] outline-none" />
                            {errors.Preis && <p className="text-red-500 text-sm">{errors.Preis.message}</p>}
                        </div>
                    </div>
                    <textarea name="description" id="description" className='text-primary resize-none w-full pt-[55.5px] pb-[33.17px] max-sm:pt-9 max-sm:pb-4 max-sm:font-semibold px-4 outline-none border-[0.5px] border-lightGray rounded-[30px] font-bold text-sm leading-[21px]' placeholder='Details zur Veranstaltung'></textarea>
                    <div className='flex justify-center'>
                        <button type="submit" className="w-full max-w-[361px] button-bg-gradient lg:text-base text-sm !tracking-[-1%] text-center font-bold text-white rounded-[30px] lg:py-4 py-3 mx-auto">
                            Event einsenden
                        </button>
                    </div>

                </form>
            </div >
        </div >
    )
};

export default EventEinsenden