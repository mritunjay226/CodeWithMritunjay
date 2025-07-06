export default function Section({ id, title, children }) {
  return (
    <section id={id} className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center md:text-left">
        {title}
      </h2>
      {children}
    </section>
  );
}
