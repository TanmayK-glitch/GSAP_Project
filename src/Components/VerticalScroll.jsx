import React, { useEffect, useRef } from "react";
import gsap from "gsap"; // FIX: Don't import from /src
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function VerticalScroll() {
    const sectionRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // Dist on how much to scroll
            const distance = -(textRef.current.scrollWidth - window.innerWidth);

            gsap.to(textRef.current, {
                x: distance,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=2000",
                    scrub: 2,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                }
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="h-screen bg-black text-[#efe6d2] overflow-hidden flex items-center"
        >
            <div ref={textRef} className="w-max px-4">
                <h1 className="font-clash font-semibold text-[40vw] whitespace-nowrap leading-none">
                    Designing products that feel effortless.
                </h1>
            </div>
        </section>
    );
}

export default VerticalScroll;