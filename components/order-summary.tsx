import Image from "next/image";
import React from "react";

const OrderSummary = () => {
  return (
    <div className="container">
      <div className="">
        <Image
          src="/images/illustration-hero.svg"
          alt=" illustration"
          width={384}
          height={400}
          className="rounded-t-2xl"
        />
      </div>
      <div className=" bg-white rounded-b-2xl p-5 w-96 text-center">
        <h1 className="text-2xl font-semibold mb-6 text-zinc-700">
          Order Summary
        </h1>
        <p className="text-zinc-500">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <div className=" mt-6 flex justify-around items-center ">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
            <g fill="none" fill-rule="evenodd">
              <circle cx="24" cy="24" r="24" fill="#DFE6FB" />
              <path
                fill="#717FA6"
                fill-rule="nonzero"
                d="M32.574 15.198a.81.81 0 00-.646-.19L20.581 16.63a.81.81 0 00-.696.803V26.934a3.232 3.232 0 00-1.632-.44A3.257 3.257 0 0015 29.747 3.257 3.257 0 0018.253 33a3.257 3.257 0 003.253-3.253v-8.37l9.726-1.39v5.327a3.232 3.232 0 00-1.631-.441 3.257 3.257 0 00-3.254 3.253 3.257 3.257 0 003.254 3.253 3.257 3.257 0 003.253-3.253V15.81a.81.81 0 00-.28-.613z"
              />
            </g>
          </svg>
          <div className="flex flex-col">
            <span>
              <strong className="">Annual Plan</strong>
            </span>
            <span>$59.99/year</span>
          </div>
          <button className="text-blue-700 underline hover:text-blue-400">
            Change
          </button>
        </div>
        <div className="flex flex-col items-center">
          <button className="bg-blue-700 rounded-lg mt-10 px-10 py-2 text-white hover:bg-blue-500">
            Proceed to payment
          </button>
          <button className="mt-6 font-semibold text-zinc-400 hover:text-zinc-800">
            Cancel Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
