export default function Intro() {
  const blogTitle = 'Writings from Lotta Moberg, PhD, CFA';
  const blogDescription =
    'Economic analysis, research and synthesis ';
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        {blogTitle}
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        {blogDescription}, by{' Lotta Moberg, PhD, CFA'}
        .
      </h4>
    </section>
  );
}
