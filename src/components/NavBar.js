import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

export default function NavBar() {
    return (
        <header className="bg-blue-300">
            <div className="container mx-auto flex justify-between px-20">
                <nav className="flex">
                    <NavLink to='/' exact
                    className="inflex-flex items-center py-7 px-3 mr-4 text-blue-700 hover:text-black text-4xl font-bold font tracking-widest">
                        Kwan
                    </NavLink>
                    <NavLink to='/post' activeClassName="bg-blue-200"
                    className="inline-flex items-center py-3 px-3 my-6 text-blue-700 rounded hover:text-black">
                        Blog Posts
                    </NavLink>
                    <NavLink to='/project' activeClassName="bg-blue-200" 
                    className="inline-flex items-center py-3 px-3 my-6 text-blue-700 rounded hover:text-black">
                        Projects
                    </NavLink>
                    <NavLink to='/about' activeClassName="bg-blue-200"
                    className="inline-flex items-center py-3 px-3 my-6 text-blue-700 rounded hover:text-black">
                        About me!
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://www.linkedin.com/in/kwan-yoon-990431195/" className="mr-4" target="_blank" fgColor='#fff' style={{ height: 35, width: 35 }} />
                    <SocialIcon url="https://github.com/KwanYoon" className="mr-4" target="_blank" fgColor='#fff' style={{ height: 35, width: 35 }} />
                </div>
            </div>
        </header>
    );
}