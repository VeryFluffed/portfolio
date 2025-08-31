import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants/index.js';

const TableOfContents = () => {
    const isSmall = useMediaQuery({ query: '(max-width: 440px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1024px)' });

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];

    return (
        <section className="h-screen w-screen bg-white-600">
            <div className="w-full h-full grid grid-cols-2 divide-x divide-gray-300 border border-gray-300">
                {/* Left Column */}
                <div className="grid grid-rows-7 divide-y divide-gray-300">
                    {romanNumerals.map((numeral, idx) => (
                        <div
                            key={idx}
                            className="flex items-center justify-center h-full px-4"
                        >
                            <p className="text-white text-5xl font-serif">{numeral}</p>
                        </div>
                    ))}
                </div>

                {/* Right Column */}
                <div className="grid grid-rows-7 divide-y divide-gray-300">
                    {romanNumerals.map((_, idx) => (
                        <div key={idx} className="flex items-end justify-center px-4 pb-3">
                            {idx === 0 ? (
                                <p className="text-white text-3xl font-serif font-semibold">
                                    TABLE OF CONTENTS
                                </p>
                            ) : (
                                <p className="text-white text-lg font-serif">Hello</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TableOfContents;
