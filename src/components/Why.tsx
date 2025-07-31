// src/components/WarumWirSection.tsx


import React from 'react';

import FeaturesCards from './UI/FeaturesCards';


export default function WarumWirSection() {
    return (
        <section className="bg-gray-50 py-20 px-4 sm:px-6 md:px-10 text-center text-gray-800">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold mb-10">
                    Warum TJ Objekt Services?
                </h2>
                <FeaturesCards />
            </div>
        </section>
    );
}