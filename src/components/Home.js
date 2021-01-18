import React from 'react';
import image from '../uwaterloo.jpg';

export default function Home() {
    return (
        <main>
            <img src={image} alt="uwaterloo" className="absolute object-cover w-full h-full opacity-75" />
            <section className="relative flex justify-center lg:pt-64">
                <h1 className="text-8xl text-blue-700 font lg:leading-snug">Hello! I'm Kwan.</h1>
            </section>
        </main>
    );
}