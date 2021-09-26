import Link from 'next/link';
import Image from 'next/image';
import FooterLinks from '../components/Layout/FooterLinks';
import { NextSeo } from 'next-seo';

function NavLinks() {
  return (
    <ul className="flex items-center w-auto m-auto space-x-12">
      <li>
        <a
          className="text-sm text-blueGray-400 hover:text-blueGray-500"
          href="/research"
        >
          Research
        </a>
      </li>
      <li>
        <a
          className="text-sm text-blueGray-400 hover:text-blueGray-500"
          href="/blog"
        >
          Blog
        </a>
      </li>
      <li>
        <a
          className="text-sm text-blueGray-400 hover:text-blueGray-500"
          href="/articles"
        >
          Articles
        </a>
      </li>
    </ul>
  );
}
export default function Home() {
  return (
    <>
      <div className="">
        <section className="relative overflow-x-hidden">
          <div className="hidden md:block absolute top-0 left-0 mt-32 -ml-32 lg:-ml-24">
            {/*<img
            className="h-64 lg:h-80"
            src="metis-assets/illustrations/walk-dog.png"
            alt=""
          />*/}
          </div>
          <div className="hidden md:block absolute top-0 right-0 mt-32 -mr-32 lg:-mr-16">
            {/*
          <img
            className="h-64 lg:h-80"
            src="metis-assets/illustrations/phone-online-shopping.png"
            alt=""
          />
          */}
          </div>
          <div className="container px-4 mx-auto">
            <nav className="flex justify-between items-center py-6">
              <Link href="/">
                <a className="text-3xl font-semibold leading-none" href="/">
                  <Image
                    className="rounded-full"
                    src="/images/bullseye-arrow-regular.svg"
                    alt="Lottamob target icon for Lotta Moberg, PhD, CFA"
                    width="50"
                    height="50"
                  />
                </a>
              </Link>
              <NavLinks />
              <div className="hidden lg:block">
                <a
                  className="hidden mr-2 inline-block px-4 py-3 text-xs text-blue-600 hover:text-blue-700 font-semibold leading-none border border-blue-200 hover:border-blue-300 rounded"
                  href="#"
                ></a>
                <a
                  className="hidden inline-block px-4 py-3 text-xs font-semibold leading-none bg-blue-600 hover:bg-blue-700 text-white rounded"
                  href="#"
                ></a>
              </div>
            </nav>
            <div className="mt-12">
              <div className="max-w-lg mx-auto mb-8 text-center">
                <h2 className="text-3xl md:text-4xl mt-4 mb-4 font-bold font-heading">
                  <span>
                    Financial analysis through an Austrian economists'{' '}
                  </span>
                  <span className="text-blue-600">{` perspective.`}</span>
                </h2>
                <p className="text-blueGray-400 leading-relaxed">
                  I'm Lotta Moberg, PhD, CFA.
                </p>
                <div className="transform inline-block mx-auto mt-12 mb-0 hover:scale-110 duration-500">
                  <Image
                    className="rounded-full "
                    src="/images/headshot.jpg"
                    alt="Lotta Moberg, PhD, CFA"
                    width="400"
                    height="400"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center max-w-4xl mx-auto pt-8 pb-4"></div>
          </div>
        </section>

        <section className="py-4 lg:py-12" id="about">
          <div className="container px-4 mx-auto">
            <div className="max-w-lg mx-auto mb-16 text-center">
              <h2 className="-mt-8 mb-2 text-3xl lg:text-4xl font-bold font-heading">
                <span>
                  I synthesize global economics, politics, and policy. My{' '}
                </span>
                <span className="text-blue-600">{` research `}</span>
                <span>aims to disrupt the intellectual status quo.</span>
              </h2>
              <p className="text-blueGray-400 leading-loose">
                {
                  'I am a macroeconomic analyst at the Dynamic Allocations Strategies team at William Blair.'
                }
              </p>
              <br />

              <p className="text-blueGray-400 leading-loose">
                {
                  'I study how policies, politics, and institutional developments affect economies of countries around the world. I sit on the Board of Trustees of the CFA Institute Research Foundation and am co-chair of the Education Advisory Group of CFA Society Chicago. '
                }
              </p>
              <p className="mt-4 text-blueGray-400 leading-loose">
                {
                  'And as an angel investor and advisor to emerging, high-growth technology companies, I help craft our future. As a philanthropist, I invest my time and expertise to help organizations such as '
                }
                <a
                  className="font-bold leading-tight hover:underline"
                  href="https://refugeecities.org"
                  target="_blank"
                  rel="noopener  noreferrer"
                >
                  refugeecities.org
                </a>{' '}
                build a better world.
              </p>
            </div>
          </div>
        </section>

        {/*<section className="py-12 md:py-20" id="research">
        <div className="container px-4 mx-auto">
          <div className="max-w-lg mx-auto mb-12 text-center">
            <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl">
              My work
            </span>
            <h2 className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading">
              {' '}
            </h2>
            <p className="text-blueGray-400 leading-loose">
              My research cleverly investigates and breaks down the geopolitical
              wasteland that is the world.{' '}
            </p>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap lg:items-center max-w-lg lg:max-w-full mx-auto">
            <div className="w-full lg:w-1/4 p-3">
              <img
                className="rounded object-cover mx-auto"
                src="https://images.unsplash.com/photo-1464655646192-3cb2ace7a67e?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
                alt=""
              />
            </div>
            <div className="w-full lg:w-2/4 flex flex-col">
              <div className="flex items-end">
                <div className="w-2/3 p-3">
                  <img
                    className="rounded object-cover"
                    src="https://images.unsplash.com/photo-1529513342590-3b342bb7dd67?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
                    alt=""
                  />
                </div>
                <div className="w-1/3 p-3">
                  <img
                    className="h-48 lg:h-32 rounded object-cover"
                    src="https://images.unsplash.com/photo-1489058535093-8f530d789c3b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-1/3 p-3">
                  <img
                    className="h-48 lg:h-32 rounded object-cover"
                    src="https://images.unsplash.com/photo-1602883440931-c268da6122b0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
                    alt=""
                  />
                </div>
                <div className="w-2/3 p-3">
                  <img
                    className="rounded object-cover"
                    src="https://images.unsplash.com/photo-1464655646192-3cb2ace7a67e?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/4 p-3">
              <img
                className="rounded object-cover mx-auto"
                src="https://images.unsplash.com/photo-1596003428876-436e282a94cd?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" id="blog">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl lg:text-4xl font-bold font-heading text-center">
            Blog posts
          </h2>
          <div className="flex flex-wrap -mx-3 mb-12">
            <div className="w-full lg:w-1/2 px-3 mb-6">
              <a href="#">
                <div className="py-12 px-8 md:p-20 text-center bg-blue-600 rounded">
                  <span className="inline-block py-2 px-3 text-xs font-semibold text-white bg-blue-800 rounded-full uppercase">
                    Economic development
                  </span>
                  <h3 className="mt-5 mb-2 text-2xl font-bold font-heading text-white">
                    Curabitur vestibulum odio maximus.
                  </h3>
                  <p className="mb-8 leading-loose text-blueGray-50">
                    Aenean tempus orci eu est ultrices hendrerit. Fusce
                    suscipit, leo a semper venenatis, felis urna pulvinar nibh,
                    vitae porta erat risus sed mauris. Vestibulum vehicula leo
                    eget libero eleifend, quis dictum eros bibendum. Maecenas
                    convallis tempor varius.
                  </p>
                  <span className="text-white">
                    <svg
                      className="inline-block w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      ></path>
                    </svg>
                  </span>
                </div>
              </a>
            </div>
            <div className="w-full lg:w-1/2 px-3 mb-6">
              <a href="#">
                <div className="py-12 px-8 md:p-20 text-center bg-blueGray-50 rounded">
                  <span className="inline-block py-2 px-3 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full uppercase">
                    interest rates
                  </span>
                  <h3 className="mt-5 mb-2 text-2xl font-bold font-heading">
                    Curabitur vestibulum odio maximus.
                  </h3>
                  <p className="mb-8 leading-loose text-blueGray-400">
                    Aenean tempus orci eu est ultrices hendrerit. Fusce
                    suscipit, leo a semper venenatis, felis urna pulvinar nibh,
                    vitae porta erat risus sed mauris. Vestibulum vehicula leo
                    eget libero eleifend, quis dictum eros bibendum. Maecenas
                    convallis tempor varius.
                  </p>
                  <span className="text-blue-600">
                    <svg
                      className="inline-block w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      ></path>
                    </svg>
                  </span>
                </div>
              </a>
            </div>
            <div className="w-full lg:w-1/2 px-3 mb-6">
              <a href="#">
                <div className="py-12 px-8 md:p-20 text-center bg-blueGray-50 rounded">
                  <span className="inline-block py-2 px-3 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full uppercase">
                    Fama-French
                  </span>
                  <h3 className="mt-5 mb-2 text-2xl font-bold font-heading">
                    Curabitur vestibulum odio maximus.
                  </h3>
                  <p className="mb-8 leading-loose text-blueGray-400">
                    Aenean tempus orci eu est ultrices hendrerit. Fusce
                    suscipit, leo a semper venenatis, felis urna pulvinar nibh,
                    vitae porta erat risus sed mauris. Vestibulum vehicula leo
                    eget libero eleifend, quis dictum eros bibendum. Maecenas
                    convallis tempor varius.
                  </p>
                  <span className="text-blue-600">
                    <svg
                      className="inline-block w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      ></path>
                    </svg>
                  </span>
                </div>
              </a>
            </div>
            <div className="w-full lg:w-1/2 px-3 mb-6">
              <a href="#">
                <div className="py-12 px-8 md:p-20 text-center bg-blueGray-50 rounded">
                  <span className="inline-block py-2 px-3 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full uppercase">
                    FX Derivatives
                  </span>
                  <h3 className="mt-5 mb-2 text-2xl font-bold font-heading">
                    Curabitur vestibulum odio maximus.
                  </h3>
                  <p className="mb-8 leading-loose text-blueGray-400">
                    Aenean tempus orci eu est ultrices hendrerit. Fusce
                    suscipit, leo a semper venenatis, felis urna pulvinar nibh,
                    vitae porta erat risus sed mauris. Vestibulum vehicula leo
                    eget libero eleifend, quis dictum eros bibendum. Maecenas
                    convallis tempor varius.
                  </p>
                  <span className="text-blue-600">
                    <svg
                      className="inline-block w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      ></path>
                    </svg>
                  </span>
                </div>
              </a>
            </div>
            <div className="w-full lg:w-1/2 px-3 mb-6">
              <a href="#">
                <div className="py-12 px-8 md:p-20 text-center bg-blueGray-50 rounded">
                  <span className="inline-block py-2 px-3 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full uppercase">
                    Angel investing
                  </span>
                  <h3 className="mt-5 mb-2 text-2xl font-bold font-heading">
                    Curabitur vestibulum odio maximus.
                  </h3>
                  <p className="mb-8 leading-loose text-blueGray-400">
                    Aenean tempus orci eu est ultrices hendrerit. Fusce
                    suscipit, leo a semper venenatis, felis urna pulvinar nibh,
                    vitae porta erat risus sed mauris. Vestibulum vehicula leo
                    eget libero eleifend, quis dictum eros bibendum. Maecenas
                    convallis tempor varius.
                  </p>
                  <span className="text-blue-600">
                    <svg
                      className="inline-block w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      ></path>
                    </svg>
                  </span>
                </div>
              </a>
            </div>
            <div className="w-full lg:w-1/2 px-3 mb-6">
              <a href="#">
                <div className="py-12 px-8 md:p-20 text-center bg-blueGray-50 rounded">
                  <span className="inline-block py-2 px-3 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full uppercase">
                    Currency-hedged ETFs
                  </span>
                  <h3 className="mt-5 mb-2 text-2xl font-bold font-heading">
                    Curabitur vestibulum odio maximus.
                  </h3>
                  <p className="mb-8 leading-loose text-blueGray-400">
                    Aenean tempus orci eu est ultrices hendrerit. Fusce
                    suscipit, leo a semper venenatis, felis urna pulvinar nibh,
                    vitae porta erat risus sed mauris. Vestibulum vehicula leo
                    eget libero eleifend, quis dictum eros bibendum. Maecenas
                    convallis tempor varius.
                  </p>
                  <span className="text-blue-600">
                    <svg
                      className="inline-block w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      ></path>
                    </svg>
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div className="text-center">
            <a
              className="text-2xl font-bold font-heading text-blue-600 hover:text-blue-700"
              href="#"
            >
              <span>See all Articles</span>
              <svg
                className="inline-block w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>*/}

        <section className="relative">
          <div className="hidden lg:block absolute inset-0 w-1/2 ml-auto bg-blueGray-50"></div>
          <div className="container px-4 mx-auto">
            <div className="relative flex flex-wrap -mx-4">
              <div className="w-full lg:w-1/2 pt-20 px-4 max-w-lg lg:max-w-full mx-auto lg:mx-0 text-center lg:text-left">
                <Link href="/">
                  <a
                    className="inline-block mx-auto lg:ml-0 text-3xl font-semibold leading-none"
                    href="/"
                  >
                    <Image
                      src="/images/bullseye-arrow-regular.svg"
                      alt="Lottamob target icon enlarged for Lotta Moberg, Phd, CFA"
                      width="300"
                      height="300"
                    />
                  </a>
                </Link>
                <div className="mt-12 mb-16 lg:my-24">
                  <p className="mb-4 text-xs text-blueGray-400 text-center lg:text-left">
                    Return regularly to stay fully informed!
                  </p>
                </div>
                <div className="hidden lg:block">
                  <p className="text-xs text-blueGray-400">
                    &copy; 2021, Lotta Moberg, PhD, CFA. All rights reserved.
                  </p>
                  <FooterLinks />
                </div>
              </div>
              <div className="relative w-full lg:w-1/2 px-4 py-8 lg:py-40 lg:pl-12">
                <div className="flex flex-row flex-wrap justify-around mb-12">
                  <div className="w-1/2 lg:w-auto mb-12">
                    <h5 className="mb-6 text-lg font-bold font-heading">
                      Academic research
                    </h5>
                    <ul className="space-y-3">
                      <li>
                        <a
                          className="text-lg text-blueGray-400 hover:text-blueGray-500"
                          href="/research"
                        >
                          Research
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-1/2 lg:w-auto mb-12">
                    <h5 className="mb-6 text-lg font-bold font-heading">
                      Informal blog
                    </h5>
                    <ul className="space-y-3">
                      <li>
                        <a
                          className="text-lg text-blueGray-400 hover:text-blueGray-500"
                          href="/blog"
                        >
                          Opinion, short and sweet
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full lg:w-auto mb-4">
                    <h5 className="mb-6 text-lg font-bold font-heading">
                      News and other articles
                    </h5>
                    <ul className="space-y-3">
                      <li>
                        <a
                          className="text-lg text-blueGray-400 hover:text-blueGray-500"
                          href="/articles"
                        >
                          Longer pieces
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="lg:hidden text-center">
                  <p className="text-xs text-blueGray-400">
                    &copy; 2021, Lotta Moberg, PhD, CFA. All rights reserved.
                  </p>
                  <FooterLinks />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
