import bg from "../assets/bg2.jpg";

export default function Hero({ dark }) {
  return (
    <section
      id="home"
      className="relative min-h-[100vh] w-full flex flex-col md:flex-row items-center justify-center px-6 overflow-hidden"
      style={{
        backgroundImage: dark ? `url(${bg})` : undefined,
        backgroundColor: dark ? "black" : "white",
      }}
    >
      {/* Overlay */}
{/*       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-10" /> */}

      {/* Background Image */}
      <img
  src="/mritunjay3.png"
  alt="Mritunjay"
{/*   className="absolute md:static top-0 left-[-40px] w-[115vw] md:left-0 md:w-1/2 h-full object-cover object-center z-0 md:z-10" */}
  className="absolute md:static top-0 w-[115vw] md:left-0 md:w-1/2 h-full object-cover object-center z-0 md:z-10"
        
/>


      {/* Text */}
      <div className="z-10 max-w-xl py-12 text-center md:text-left text-white md:text-black dark:text-white">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Hi, I'm Mritunjay</h1>
        <p className="mb-6 text-lg text-gray-200 md:text-gray-700 dark:text-gray-300">
          I build fast, responsive eCommerce and custom websites using React, Next.js, Tailwind, and more.
        </p>
        <a
          href="#contact"
          className="inline-block bg-black dark:bg-white dark:text-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
        >
          Let's Work Together
        </a>
      </div>
    </section>
  );
}
