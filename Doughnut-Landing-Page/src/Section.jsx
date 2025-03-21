export default function Section() {
  return (
    <>
      
        <section>
          <div className="bg-[url(src/assets/heropat.jpg)] h-dvh w-[80%] mx-auto flex items-center justify-center">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-2xl font-serif text-center font-semibold w-[90%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
              <button className="bg-black text-white px-3.5 py-1.5 mt-4 cursor-pointer">
                Order Now
              </button>
            </div>
          </div>
        </section>

        <section className="my-10">
          <h2 className="font-sans font-bold text-center mt-7 text-xl mb-2">
            Best Selling
          </h2>

          <p className="font-sans text-md text-center mb-4">
            Impedit accusantium magnam consequatur quo esse excepturi voluptate
            odit.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-[80%] mx-auto">
            <div className="bg-white   overflow-hidden">
              <img
                src="src/assets/glazed1.jpeg"
                alt="glazed Donut"
                className="h-50 w-full object-cover "
              />
              <h6 className="text-lg font-semibold mb-2 text-center">
                Glazed Donuts
              </h6>
              <p className="text-center">$2.00</p>
            </div>

            <div className="bg-white   overflow-hidden">
              <img
                src="src/assets/ToppinsD.jpeg"
                alt="Coconut Donut"
                className="h-50 w-full object-cover"
              />
              <h6 className="text-lg font-semibold mb-2 text-center">
                Coconut Donuts
              </h6>
              <p className="text-center">$3.00</p>
            </div>

            <div className="bg-white   overflow-hidden">
              <img
                src="src/assets/noFiltermilkyD.jpeg"
                alt="milky Donut"
                className="h-50 w-full object-cover"
              />
              <h6 className="text-lg font-semibold mb-2 text-center">
                Milky Donuts
              </h6>
              <p className="text-center">$7.00</p>
            </div>
          </div>

          <div className="flex flex-row justify-center my-5">
            <button className="flex bg-white hover:bg-pink-200 cursor-pointer text-center  border-2 px-3 py-2">
              All Donuts
            </button>
          </div>
        </section>

        <section>
          <div className="bg-pink-200 py-15 my-10 w-[80%] mx-auto">
            <h2 className="text-center text-2xl font-bold">About Us</h2>
            <p className="text-center text-xl w-[50%] mx-auto">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel in
              accusantium veritatis dolor sit facilis excepturi. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Dolore inventore
              cupiditate natus sunt! Molestiae a corporis eaque labore.{" "}
            </p>
            <div className="flex flex-row justify-center my-5">
              <button className="bg-black text-white font-semibold px-3 py-1.5">
                Know More
              </button>
            </div>
          </div>
        </section>

        <section className="my-10">
          <h2 className="text-xl font-bold text-center">Lorem Ipsum</h2>
          <div className="grid grid-cols-3 grid-rows-2 gap-1 w-[80%] mx-auto my-6">
            <img
              src="src\assets\matteD.jpeg"
              alt="1"
              className="h-90 w-full object-cover mb-1 "
            />
            <img
              src="src\assets\oeroD.jpeg"
              alt="2"
              className="h-90 w-full object-cover"
            />
            <img
              src="src\assets\Sprinkles.jpeg"
              alt="3"
              className="h-90 w-full object-cover"
            />
            <img
              src="src\assets\sugar.jpeg"
              alt="4"
              className="h-90 w-full object-cover"
            />
            <img
              src="src\assets\pink.jpg"
              alt="5"
              className="h-90 w-full object-cover"
            />
            <img
              src="src\assets\strawberry.jpg"
              alt="6"
              className="h-90 w-full object-cover"
            />
          </div>
        </section>

       
      
    </>
  );
}
