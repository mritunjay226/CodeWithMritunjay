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
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-10" />

      {/* Background Image */}
      <img
        src="/mritunjay5.png"
        alt="Mritunjay"
        className="absolute top-0 left-0 w-full h-full object-cover object-center z-0 md:[40px] md:static md:w-1/2 md:h-full md:z-10"
      />

      {/* Text */}
      <div className="z-10 max-w-xl py-12 text-center md:text-left text-white md:text-black dark:text-white">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Hi, I'm Mritunjay</h1>
        <p className="mb-6 text-lg text-gray-200 md:text-gray-700 dark:text-gray-300">
          I build fast, responsive eCommerce and custom websites using React, Next.js, Tailwind, and more.
        </p>
        <a
          href="#contact"
          className="inline-block font-bold bg-white dark:bg-white dark:text-black text-black px-6 py-3 border-2 border-white hover:bg-none rounded-full  transition"
        >
          Let's Work Together
        </a>
      </div>
    </section>
  );
}
