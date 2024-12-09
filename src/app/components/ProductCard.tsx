import Image from "next/image"

export default function ProductCard() {
    return (
          <div className="flex md:flex-row flex-col justify-around">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="md:w-6/12 w-full mb-20">
                  <div className="flex items-center justify-center">
  
                      <Image
                          src="/project_1.jpg"
                          alt="Product Three"
                          width={300}
                          height={300}
                      />
                  </div>
                  
                  <p className="text-1xl text-center "> CHANNEL</p>
                  <p className="text-center pt-10">PKR 3,000</p>
                  <div className="flex justify-center items-center my-3">
  
                      <button className="px-6 py-2 bg-blue-600 text-white rounded-md">
                          Buy Now
                      </button>
                  </div>
              </div>
  
              <div className="md:w-6/12 w-full mb-20 ">
                  <div className="flex items-center justify-center">
                      <Image
                          src="/project_2.jpg"
                          alt="Product Three"
                          width={300}
                          height={300}
                      />
                  </div>
                  
                  <p className="text-1xl text-center ">AQUA PERFUME</p>
                  <p className="text-center pt-10">PKR 4,000</p>
                  <div className="flex justify-center items-center my-3">
  
                      <button className="px-6 py-2 bg-blue-600 text-white rounded-md">
                          Buy Now
                      </button>
                  </div>
              </div>
  
              <div className="md:w-6/12 w-full mb-20">
                  <div className="flex items-center justify-center">
                      <Image
                          src="/project_3.jpg"
                          alt="Product Three"
                          width={300}
                          height={300}
                      />
                  </div>
                  <p className="text-1xl text-center ">AQUA PERFUME</p>
                  <p className="text-center pt-10">PKR 5,000</p>
                  <div className="flex justify-center items-center my-3">
                      <button className="px-6 py-2 bg-blue-600 text-white rounded-md">
                          Buy Now
                      </button>
                  </div>
              </div>
          </div>
          </div>
      )
  }