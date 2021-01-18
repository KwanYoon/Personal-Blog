import React from 'react';
import banner from "../uwaterloo.jpg";
import image from "../Mai_Sakurajima_img01.jpg";

export default function About() {

    return (
        <main className="relative">
            <img src={banner} alt="Banner" className="absolute w-full" />
            <div className="p-10 lg:pt-48 container mx-auto relative">
                <section className="bg-blue-300 rounded-lg shadow-2xl lg:flex p-20">
                    <img src={image} className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"  alt="self-portrait" />
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="font text-6xl text-black mb-4">
                            Hey there! I'm Kwan
                        </h1>
                        <div className="prose lg:prose-xl text-black">
                            I'm a first year computer science student at the University of Waterloo. This is my personal
                            blog-type site where you will see some things I'm passionate about!
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}