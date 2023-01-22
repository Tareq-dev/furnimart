import React from "react";

function Gallary() {
  return (
    <section className="text-gray-600 body-font bg-[#ebfdff]">
      <div className="container px-5 md:py-10 py-4 mx-auto flex flex-wrap">
        <div className="flex w-full md:mb-20 mb-4 flex-wrap">
          <h1 className="text-xl md:tracking-[10px] tracking-[4px] md:text-2xl uppercase title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
            Master Gallary
          </h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto md:text-xl leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify haven't heard of them man bun deep jianbing selfies heirloom.
          </p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block border-2 border-pink-600 rounded-md p-2"
                src="https://www.freepnglogos.com/uploads/furniture-png/photo-antique-furniture-dressing-table-image-39.png"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block border-2 border-pink-600 rounded-md p-2"
                src="https://www.freepnglogos.com/uploads/furniture-png/furniture-png-transparent-images-png-only-20.png"
              />
            </div>
            <div className="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block border-2 border-pink-600 rounded-md p-2"
                src="https://www.freepnglogos.com/uploads/furniture-png/furniture-atelier-4.png"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block border-2 border-pink-600 rounded-md p-2"
                src="https://www.freepnglogos.com/uploads/furniture-png/furniture-how-share-tiny-apartment-with-your-significant-other-22.png"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block border-2 border-pink-600 rounded-md p-2"
                src="https://www.freepnglogos.com/uploads/furniture-png/furniture-png-transparent-images-png-only-10.png"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block border-2 border-pink-600 rounded-md p-2"
                src="https://www.freepnglogos.com/uploads/furniture-png/furniture-denton-bed-handmade-mid-century-modern-wood-bed-frame-35.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallary;
