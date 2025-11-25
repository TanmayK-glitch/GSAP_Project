import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function AboutSection() {
    const sectionRef = useRef(null);
    const linesRef = useRef([]);

    const addToRefs = (el) => {
        if (el && !linesRef.current.includes(el)) {
            linesRef.current.push(el);
        }
    };

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            gsap.from(".divider-line", {
                scaleX: 0,
                transformOrigin: "left center",
                duration: 1.5,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 90%",
                }
            });


            gsap.from(linesRef.current, {
                y: 80,
                opacity: 0,
                duration: 1.2,
                stagger: 0.1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 90%",
                }
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="bg-black text-white py-32 px-6 md:px-12 w-full min-h-screen flex flex-col justify-center">
            <div className="max-w-6xl mx-auto w-full">

                <div className="mb-12">
                    <p ref={addToRefs} className="font-mono text-[#efe6d2] text-sm mb-4 tracking-widest uppercase">
                        ( About Me )
                    </p>

                    <h2 ref={addToRefs} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9]">
                        Designing for <br />
                        <span className="text-neutral-500">humans, not users.</span>
                    </h2>
                </div>

                <div className="divider-line w-full h-[1px] bg-neutral-800 mb-12"></div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-4">

                    <div className="md:col-span-7 space-y-8">
                        <div ref={addToRefs} className="text-xl md:text-2xl text-neutral-300 leading-relaxed font-light">
                            <p className="mb-6">
                                I’m a <span className="text-white font-normal">Product & Motion Designer</span> obsessed with making things that don't just look cool, but actually solve real-world annoyances.
                            </p>
                            <p>
                                When I’m not glued to my screen like a factory-reset robot, you’ll find me sketching on my iPad, clicking photos like I’m auditioning for <span className="italic text-[#efe6d2]">National Geographic</span>, or yelling at my TV during football matches.
                            </p>
                        </div>

                        <div ref={addToRefs} className="bg-neutral-900/50 p-6 rounded-xl border border-white/5 mt-8">
                            <p className="text-lg italic text-white/80">
                                “Damn, I wish I had this sooner.”
                            </p>
                            <p className="text-xs text-neutral-500 mt-2 font-mono uppercase tracking-wider">
                                — The Goal
                            </p>
                        </div>
                    </div>

                    <div className="hidden md:block md:col-span-1"></div>

                    <div className="md:col-span-4 flex flex-col justify-between h-full border-l border-neutral-800 md:pl-8">

                        <div className="space-y-8">
                            <div ref={addToRefs}>
                                <h3 className="text-xs text-neutral-500 uppercase tracking-wider mb-2">Philosophy</h3>
                                <p className="text-white font-medium text-lg">Stylish. Functional. Fun.</p>
                            </div>

                            <div ref={addToRefs}>
                                <h3 className="text-xs text-neutral-500 uppercase tracking-wider mb-2">Focus</h3>
                                <p className="text-white font-medium text-lg">Motion, UI/UX, Interaction</p>
                            </div>
                        </div>

                        <div ref={addToRefs} className="mt-12 md:mt-0">
                            <button className="w-full md:w-auto group relative px-8 py-4 bg-[#efe6d2] text-black text-lg font-semibold rounded-full overflow-hidden transition-all hover:scale-[1.02]">
                                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                                <span className="relative z-10 flex items-center justify-between gap-4">
                                    Let's Talk
                                    <span className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center text-xs group-hover:bg-[#efe6d2] group-hover:text-black transition-colors">
                                        →
                                    </span>
                                </span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default AboutSection;