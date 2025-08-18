"use client";

import React from 'react';
import { PrizepoolData, PrizeItem } from "@/types"; 

export default function Prizepool({data, gradientClass}: PrizeItem){
  return (
     <div className="mt-5 flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center items-center">
        <p
        className={`md:text-lg lg:text-xl font-bold px-5 md:px-9 py-2 md:py-3 rounded-full shadow-[inset_0px_10px_18.8px_0px_rgba(166,143,194,1)] ${gradientClass}`}
        >
            {data.position}
        </p>
        <p className= "sm-text-lg md:text-xl lg:text-2xl font-bold text-shadow-lg text-center">
            {data.prize}
        </p>
    </div>
  );
}
