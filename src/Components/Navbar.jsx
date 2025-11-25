import React from "react";
import gsap from "gsap";
import { useEffect, useRef } from "react";

function Navbar() {
    const navRef = useRef(null);
    const navItemsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const navItems = navItemsRef.current.filter(item => item !== null && item !== undefined);
            
            if (navItems.length > 0) {
                gsap.from(navItems, {
                    y: -30,
                    opacity: 0,
                    duration: 1,
                    ease: "expo.out",
                    delay: 0.3,
                    stagger: 0.15,
                    force3D: true,
                })
            }

            if (navRef.current) {
                gsap.from(navRef.current, {
                    y: -30,
                    opacity: 0,
                    duration: 1,
                    ease: "expo.out",
                    delay: 0.3,
                    force3D: true,
                })
            }
        })

        return () => ctx.revert();

    }, [])
    return (
        <>
            <nav className="flex items-center justify-between p-6">
                <div id="Logo" className="flex" ref={navRef}>
                    <h1 className="font-clash font-semibold text-6xl">Orbit</h1>
                </div>
                <div id="full-nav" className="flex gap-15 items-center font-semibold">
                    <h5 ref={(el) => (navItemsRef.current[0] = el)} className="cursor-pointer relative group">
                        About
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-[#efe6d2] transition-all duration-300 ease-out group-hover:w-full"></span>
                    </h5>
                    <h5 ref={(el) => (navItemsRef.current[1] = el)} className="cursor-pointer relative group">
                        Projects
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-[#efe6d2] transition-all duration-300 ease-out group-hover:w-full"></span>
                    </h5>
                    <h5 ref={(el) => (navItemsRef.current[2] = el)} className="cursor-pointer relative group">
                        Capabilities
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-[#efe6d2] transition-all duration-300 ease-out group-hover:w-full"></span>
                    </h5>
                    <button ref={(el) => {
                        if (el) navItemsRef.current[3] = el;
                    }} className="w-full md:w-auto group relative px-7 py-3 rounded-4xl bg-[#efe6d2] text-black text-lg font-semibold overflow-hidden hover:scale-[1.02]">
                        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                        <span className="relative z-10 flex items-center justify-between gap-4">
                            Let's Talk
                            <span className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center text-xs group-hover:bg-[#efe6d2] group-hover:text-black transition-colors">
                                →
                            </span>
                        </span> 
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar;