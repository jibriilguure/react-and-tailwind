import Laptop from "../assets/laptop.jpg";
const Intro = () => {
  return (
    <div className="w-full bg-white py-6">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="" srcset="" />
        <div className="flex flex-col justify-center px-4">
          <h1 className="text-p md:text-4xl font-bold sm:text-xl py-4">
            A Modran websits And Great UX Desing
          </h1>
          <p className="py-4  text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus ducimus officia voluptatem labore, ullam iusto!
            Explicabo quidem blanditiis perspiciatis totam dolorum error natus,
            deserunt adipisci ratione dolorem sint, exercitationem facilis.
          </p>
          <button className="bg-p rounded-md  w-[200px] py-4 md: mx-0 my-8 ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
