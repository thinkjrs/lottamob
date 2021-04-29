import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className="">
      <section className="relative overflow-x-hidden">
        <div className="hidden md:block absolute top-0 left-0 mt-32 -ml-32 lg:-ml-24">
          <img
            className="h-64 lg:h-80"
            src="metis-assets/illustrations/walk-dog.png"
            alt=""
          />
        </div>
        <div className="hidden md:block absolute top-0 right-0 mt-32 -mr-32 lg:-mr-16">
          <img
            className="h-64 lg:h-80"
            src="metis-assets/illustrations/phone-online-shopping.png"
            alt=""
          />
        </div>
        <div className="container px-4 mx-auto">
          <nav className="flex justify-between items-center py-6">
            <a className="text-3xl font-semibold leading-none" href="#">
              <img
                src="images/bullseye-arrow-regular.svg"
                alt="Lotta Moberg"
                width="49"
              />
            </a>
            <div className="lg:hidden">
              <button className="navbar-burger flex items-center py-2 px-3 text-blue-600 hover:text-blue-700 rounded border border-blue-200 hover:border-blue-300">
                <svg
                  className="fill-current h-4 w-4"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Mobile menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </button>
            </div>
            <ul className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-12">
              <li>
                <a
                  className="text-sm text-blueGray-400 hover:text-blueGray-500"
                  href="#talks"
                >
                  Talks
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-blueGray-400 hover:text-blueGray-500"
                  href="#research"
                >
                  Research
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-blueGray-400 hover:text-blueGray-500"
                  href="#blog"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-blueGray-400 hover:text-blueGray-500"
                  href="#who-is-lotta-moberg"
                >
                  About
                </a>
              </li>
            </ul>
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
          <div className="mt-12 mb-12">
            <div className="max-w-lg mx-auto mb-8 text-center">
              <span className="inline-block px-3 py-2 text-xs font-semibold bg-blue-50 text-blue-500 rounded-full uppercase">
                Critical analysis
              </span>
              <h2 className="text-3xl md:text-4xl mt-4 mb-4 font-bold font-heading">
                <span>Global, in-depth </span>
                <span className="text-blue-600">{` economic analysis `}</span>
                <span>driving thought leadership.</span>
              </h2>
              <p className="text-blueGray-400 leading-relaxed">
                Hi. I'm Lotta Moberg. It's nice to meet you.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center max-w-4xl mx-auto pt-8 pb-4"></div>
        </div>
        <div className="hidden navbar-menu relative z-50">
          <div className="navbar-backdrop fixed inset-0 bg-blueGray-800 opacity-25"></div>
          <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
            <div className="flex items-center mb-8">
              <a
                className="mr-auto text-3xl font-semibold leading-none"
                href="#"
              >
                <img
                  src="images/bullseye-arrow-regular.svg"
                  alt="Lotta Moberg"
                  width="49"
                />
              </a>
              <button className="navbar-close">
                <svg
                  className="h-6 w-6 text-blueGray-400 cursor-pointer hover:text-blueGray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div>
              <ul>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600"
                    href="#"
                  >
                    Talks
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600"
                    href="#"
                  >
                    Research
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600"
                    href="#"
                  >
                    Blog
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600"
                    href="#"
                  >
                    About
                  </a>
                </li>
              </ul>
              <div className="mt-4 pt-6 border-t border-blueGray-100">
                <a
                  className="block px-4 py-3 mb-3 text-xs text-center font-semibold leading-none bg-blue-600 hover:bg-blue-700 text-white rounded"
                  href="#"
                ></a>
                <a
                  className="block px-4 py-3 mb-2 text-xs text-center text-blue-600 hover:text-blue-700 font-semibold leading-none border border-blue-200 hover:border-blue-300 rounded"
                  href="#"
                ></a>
              </div>
            </div>
            <div className="mt-auto">
              <p className="my-4 text-xs text-blueGray-400">
                <span>Get in Touch</span>
                <a
                  className="text-blue-600 hover:text-blue-600 underline"
                  href="#"
                >
                  info@lottamoberg.com
                </a>
              </p>
              <a className="inline-block px-1" href="#">
                <img src="metis-assets/icons/facebook-blue.svg" alt="" />
              </a>
              <a className="inline-block px-1" href="#">
                <img src="metis-assets/icons/twitter-blue.svg" alt="" />
              </a>
              <a className="inline-block px-1" href="#">
                <img src="metis-assets/icons/instagram-blue.svg" alt="" />
              </a>
            </div>
          </nav>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-lg mx-auto mb-16 text-center">
            <span className="inline-block px-3 py-2 text-xs font-semibold bg-blue-100 text-blue-600 rounded-full uppercase">
              an Alternative perspective
            </span>
            <h2 className="mt-4 mb-2 text-3xl lg:text-4xl font-bold font-heading">
              <span>
                I synthesize global economics, politics, and policy. I{' '}
              </span>
              <span className="text-blue-600">{` communicate `}</span>
              <span>to disrupt the intellectual status quo.</span>
            </h2>
            <p className="text-blueGray-400 leading-loose">
              {
                'I am a macroeconomic analyst at the Dynamic Allocations Strategies team at William Blair in Chicago.'
              }
            </p>
            <p classname="text-blueGray-400 leading-loose">
              {
                'On a daily basis, I explore how policies, politics, and institutional developments affect economies of countries around the world. I sit on the Board of Trustees of the CFA Institute Research Foundation and am co-chair of the Education Advisory Group of CFA Society Chicago. '
              }
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
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

      <section className="py-20">
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
      </section>

      <section className="relative">
        <div className="hidden lg:block absolute inset-0 w-1/2 ml-auto bg-blueGray-50"></div>
        <div className="container px-4 mx-auto">
          <div className="relative flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 pt-20 px-4 max-w-lg lg:max-w-full mx-auto lg:mx-0 text-center lg:text-left">
              <a
                className="inline-block mx-auto lg:ml-0 text-3xl font-semibold leading-none"
                href="#"
              >
                <img
                  src="images/bullseye-arrow-regular.svg"
                  alt="Lotta"
                  width="300"
                />
              </a>
              <div className="mt-12 mb-16 lg:my-24">
                <p className="mb-4 text-xs text-blueGray-400 text-center lg:text-left">
                  Subscribe to my newsletter and stay fully informed.
                </p>
              </div>
              <div className="hidden lg:block">
                <p className="text-xs text-blueGray-400">
                  &copy; 2021, Lotta Moberg, PhD, CFA. All rights reserved.
                </p>
                <div className="-mx-2 mt-4">
                  <a className="inline-block px-2" href="#">
                    <img src="metis-assets/icons/facebook-blue.svg" alt="" />
                  </a>
                  <a className="inline-block px-2" href="#">
                    <img src="metis-assets/icons/twitter-blue.svg" alt="" />
                  </a>
                  <a className="inline-block px-2" href="#">
                    <img src="metis-assets/icons/instagram-blue.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="relative w-full lg:w-1/2 px-4 py-8 lg:py-40 lg:pl-12">
              <div className="flex flex-row flex-wrap justify-around mb-12">
                <div className="w-1/2 lg:w-auto mb-12">
                  <h5 className="mb-6 text-lg font-bold font-heading">
                    Talks &amp; Research
                  </h5>
                  <ul className="space-y-3">
                    <li>
                      <a
                        className="text-lg text-blueGray-400 hover:text-blueGray-500"
                        href="#"
                      >
                        First Link
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-lg text-blueGray-400 hover:text-blueGray-500"
                        href="#"
                      >
                        Second Link
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-lg text-blueGray-400 hover:text-blueGray-500"
                        href="#"
                      >
                        Third Link
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-lg text-blueGray-400 hover:text-blueGray-500"
                        href="#"
                      >
                        Fourth Link
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-1/2 lg:w-auto mb-12">
                  <h5 className="mb-6 text-lg font-bold font-heading">Blog</h5>
                  <ul className="space-y-3">
                    <li>
                      <a
                        className="text-lg text-blueGray-400 hover:text-blueGray-500"
                        href="#"
                      >
                        First Link
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-lg text-blueGray-400 hover:text-blueGray-500"
                        href="#"
                      >
                        Second Link
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-lg text-blueGray-400 hover:text-blueGray-500"
                        href="#"
                      >
                        Third Link
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-auto mb-4">
                  <h5 className="mb-6 text-lg font-bold font-heading">
                    whoami
                  </h5>
                  <ul className="space-y-3">
                    <li>
                      <a
                        className="text-lg text-blueGray-400 hover:text-blueGray-500"
                        href="#"
                      >
                        First Link
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-lg text-blueGray-400 hover:text-blueGray-500"
                        href="#"
                      >
                        Second Link
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:hidden text-center">
                <p className="text-xs text-blueGray-400">
                  &copy; 2021, Lotta Moberg, PhD, CFA. All rights reserved.
                </p>
                <div className="-mx-2 mt-4">
                  <a className="inline-block px-2" href="#">
                    <img src="metis-assets/icons/facebook-blue.svg" alt="" />
                  </a>
                  <a className="inline-block px-2" href="#">
                    <img src="metis-assets/icons/twitter-blue.svg" alt="" />
                  </a>
                  <a className="inline-block px-2" href="#">
                    <img src="metis-assets/icons/instagram-blue.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
