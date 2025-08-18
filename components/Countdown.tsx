"use client";
import { Open_Sans } from 'next/font/google';
import { CountdownProps } from "@/types";

import React, { useEffect, useState } from 'react';

const openSans = Open_Sans({
  weight: '400',
  subsets: ['latin'],
});

const Countdown : React.FC<CountdownProps> = ({targetDate, onFinish}) => {
    const calculateTimeLeft = (): number => {
        const now = new Date().getTime();
        const target = new Date(targetDate).getTime();
        const diff = Math.max(0, Math.floor((target-now)/1000));
        return diff;
    };
 
    const [timeLeft, setTimeLeft] = useState<number>(calculateTimeLeft());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    onFinish?.();
                    return 0;
                }
                return calculateTimeLeft();
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate, onFinish]);

    const days = Math.floor(timeLeft / 86400)
        .toString()
        .padStart(2, "0");
    const hours = Math.floor((timeLeft % 86400) / 3600)
        .toString()
        .padStart(2, "0");
    const minutes = Math.floor((timeLeft % 3600) / 60)
        .toString()
        .padStart(2, "0");
    const seconds = (timeLeft % 60).toString().padStart(2, "0");
    return (
        <div className={`${openSans.className} flex justify-center gap-6 text-2xl md:text-7xl leading-[35px] rounded-4xl font-normal tracking-[1%] text-center text-white`}>
            <div className="text-center">
                <p>{days}</p>
                <span className="text-lg md:text-xl text-white">Days</span>
            </div>
            <div className="text-center">
                <p>{hours}</p>
                <span className="text-lg md:text-xl text-white">Hours</span>
            </div>
            <div className="text-center">
                <p>{minutes}</p>
                <span className="text-lg md:text-xl text-white">Minutes</span>
            </div>
            <div className="text-center hidden sm:block">
                <p>{seconds}</p>
                <span className="text-lg md:text-xl text-white">Seconds</span>
            </div>
        </div>
    );
};

export default Countdown;