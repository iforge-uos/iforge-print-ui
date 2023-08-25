import React from 'react'

const Seperator = () => {
  return (
    <section className="py-15 sm:py-12 md:py-16 lg:py-20 py-xl-20 bg-light dark:bg-muted p-10 w-full flex justify-center items-center overflow-x-hidden">
        <div className="container">
            <div className="row mb-10">
                <div className="col-lg-6">
                    <h2 className="text-3xl sm:text-4xl max-w-md md:max-w-lg text-center md:text-left">
                        <div className="font-semibold mt-2 xl:mt-5 lg:mt-5">Manage, monitor and view</div>
                        your prints in one place.
                    </h2> 
                </div>
            </div>
            <div className="flex flex-col gap-8 sm:flex-row sm:gap-12 md:gap-40 mt-20 ml-20 ">
                <div className="max-w-sm">
                    <h3 className="text-lg font-medium mb-2 lg:text-2xl xl:text-2xl">
                        Printer Management
                    </h3>
                    <p className="text-m lg:text-lg xl:text-lg font-light">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sodales porttitor purus, nec elementum neque malesuada in
                    </p>
                </div>
                <div className="max-w-sm">
                    <h3 className="text-lg font-medium mb-2 lg:text-2xl xl:text-2xl">
                        Active monitoring
                    </h3>
                    <p className="text-m lg:text-lg xl:text-lg font-light">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sodales porttitor purus, nec elementum neque malesuada in
                    </p>
                </div>
                <div className="max-w-sm">
                    <h3 className="text-lg font-medium mb-2 lg:text-2xl xl:text-2xl">
                        Print Queue System
                    </h3>
                    <p className="text-m lg:text-lg xl:text-lg font-light">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sodales porttitor purus, nec elementum neque malesuada in
                    </p>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Seperator