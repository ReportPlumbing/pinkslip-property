import React from 'react';
import Image from '../images/contact.png';

const Contact = () => (
  <section className="bg-pink px-4 py-16 text-white">
    <div className="flex flex-wrap items-start max-w-2xl mx-auto">
      <div className="p-4 w-full md:w-1/2">
        <h2 className="font-condensed mb-4 text-4xl uppercase">Contact</h2>
        <p className="flex font-bold mb-3">
          <span className="mr-2">Phone: </span>
          <a className="text-white" href="tel:0404222244">
            0404 222 244
          </a>
        </p>
        <p className="flex font-bold mb-12 pb-2">
          <span className="mr-2">Email: </span>
          <a className="text-white" href="mailto:pinkslipproperty@icloud.com">
            pinkslipproperty@icloud.com
          </a>
        </p>
        <p>
          <img src={Image} alt="" />
        </p>
      </div>

      <div className="p-4 w-full md:w-1/2">
        <div className="flex flex-wrap mb-6 -mx-3">
          <div className="mb-6 px-3 w-full md:mb-0 md:w-1/2">
            <input
              type="text"
              className="appearance-none bg-grey-lighter block border leading-tight px-4 py-3 rounded-none text-grey-darker w-full focus:bg-white focus:border-indigo focus:outline-none hover:bg-white"
              id="fname"
              name="fname"
              placeholder="First name"
              autoComplete="given-name"
              required
            />
          </div>
          <div className="mb-6 px-3 w-full md:mb-0 md:w-1/2">
            <input
              type="text"
              className="appearance-none bg-grey-lighter block border leading-tight px-4 py-3 rounded-none text-grey-darker w-full focus:bg-white focus:border-indigo focus:outline-none hover:bg-white"
              id="lname"
              name="lname"
              placeholder="Mountbatten-Windsor"
              autoComplete="Last name"
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="mb-6 px-3 w-full md:mb-0 md:w-1/2">
            <input
              type="text"
              className="appearance-none bg-grey-lighter block border leading-tight px-4 py-3 rounded-none text-grey-darker w-full focus:bg-white focus:border-indigo focus:outline-none hover:bg-white"
              id="phone"
              name="phone"
              placeholder="Phone number"
              autoComplete="tel-national"
              required
            />
          </div>
          <div className="mb-6 px-3 w-full md:mb-0 md:w-1/2">
            <input
              type="text"
              className="appearance-none bg-grey-lighter block border leading-tight px-4 py-3 rounded-none text-grey-darker w-full focus:bg-white focus:border-indigo focus:outline-none hover:bg-white"
              id="email"
              name="email"
              placeholder="Email address"
              autoComplete="email"
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap mb-12 md:mb-6">
          <textarea
            className="appearance-none bg-grey-lighter block border h-48 leading-tight px-4 py-3 rounded-none text-grey-darker w-full focus:bg-white focus:border-indigo focus:outline-none hover:bg-white"
            id="message"
            name="message"
            placeholder="Message"
            spellCheck="true"
            required
            defaultValue={''}
          />
        </div>
        <div className="flex items-center justify-end">
          <button
            className="bg-indigo-darker font-bold font-condensed inline-block px-12 py-4 no-underline text-white uppercase"
            id="submit"
            name="submit"
            type="submit"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
