import React from 'react'

function About() {
    return (
        <>
            <section className="pt-20 lg:pt-[120px] pb-12 lg:pb-[90px] overflow-hidden">
                <div className="container">
                    <div className="flex flex-wrap justify-between items-center -mx-4">
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="flex items-center -mx-3 sm:-mx-4">
                                <div className="w-full xl:w-1/2 px-3 sm:px-4">
                                    <div className="py-3 sm:py-4">
                                        <img src="https://cdn.tailgrids.com/1.0/assets/images/services/image-1.jpg"
                                            alt=""
                                            className="rounded-2xl w-full"
                                        />
                                    </div>
                                    <div className="py-3 sm:py-4">
                                        <img src="https://cdn.tailgrids.com/1.0/assets/images/services/image-2.jpg"
                                            alt=""
                                            className="rounded-2xl w-full"
                                        />
                                    </div>
                                </div>
                                <div className="w-full xl:w-1/2 px-3 sm:px-4">
                                    <div className="my-4 relative z-10">
                                        <img src="https://cdn.tailgrids.com/1.0/assets/images/services/image-3.jpg"
                                            alt=""
                                            className="rounded-2xl w-full"
                                        />

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 xl:w-5/12 px-4">
                            <div className="mt-10 lg:mt-0">
                                <span className="font-semibold text-lg text-primary mb-2 block">
                                    Why Choose Us
                                </span>
                                <h2 className="font-bold text-3xl sm:text-4xl text-dark mb-8">
                                    Make your customers happy by giving services.
                                </h2>
                                <p className="text-base text-body-color mb-8">
                                    It is a long established fact that a reader will be distracted
                                    by the readable content of a page when looking at its layout.
                                    The point of using Lorem Ipsum is that it has a more-or-less.
                                </p>
                                <p className="text-base text-body-color mb-12">
                                    A domain name is one of the first steps to establishing your
                                    brand. Secure a consistent brand image with a domain name that
                                    matches your business.
                                </p>
                                <a href="javascript:void(0)" className=" py-4 px-10 lg:px-8 xl:px-10 inline-flex items-center justify-center text-center text-white text-base bg-primary hover:bg-opacity-90 font-normal rounded-lg "               >
                                    Get Started
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About