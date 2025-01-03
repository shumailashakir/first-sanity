import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
export default function About()  {
  return (
    <div id='about'>
      <section className="text-black body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src="/pic-1.png"
              width="350"
              height="400"

            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
              About Me

            </h1>
            <p className="mb-5 leading-relaxed">
              My name is Shumaila Shakir, a graduate with a deep passion for coding and a current student in the Artificial Intelligence program under the Governor of Sindh initiative. This program has opened doors for me to pursue my long-term goal of becoming a skilled full-stack developer. I am committed to mastering the art of creating user-friendly, responsive, and efficient websites that provide meaningful experiences for users.

            </p>
            <div className="mt-6 flex flex-wrap justify-center sm:justify-start space-x-3">
        <Link
          href="#"
          className="px-4 py-2 text-white bg-black rounded-md hover:bg-slate-700 transition"
        >
          Twitter
        </Link>
        <Link
          href=" https://www.linkedin.com/in/shumaila-shakir"
          className="px-4 py-2 text-white bg-black rounded-md hover:bg-slate-700 transition"
        >
          LinkedIn
        </Link>
        <Link
          href="https://github.com/shumailashakir"
          className="px-4 py-2 text-white bg-black rounded-md hover:bg-slate-700 transition"
        >
          GitHub
        </Link>
      </div>
          </div>
        </div>
      </section>
    </div>
  )
}

