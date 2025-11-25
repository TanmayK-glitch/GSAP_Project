import React from "react"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { TextPlugin } from "gsap/TextPlugin"

// Register the TextPlugin
gsap.registerPlugin(TextPlugin);

function HomePage() {
    const textRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (textRef.current) {
                const texts = [
                    "Crafted, Beautifully",
                    "Built With Intent",
                    "Designed to Inspire"
                ];

                gsap.set(textRef.current, { y: 0, opacity: 1 });

                const tl = gsap.timeline({ repeat: -1 });

                tl.to({}, { duration: 3 });

                const cycleTexts = () => {
                    texts.forEach((text, index) => {

                        if (index === 0) return;

                        tl.to(textRef.current, {
                            y: 100,
                            opacity: 0,
                            duration: 0.6,
                            ease: "power2.in"
                        })

                            .to(textRef.current, {
                                text: text,
                                y: 100,
                                duration: 0,
                            })

                            .to(textRef.current, {
                                y: 0,
                                opacity: 1,
                                duration: 0.6,
                                ease: "power2.out"
                            })

                            .to({}, { duration: 3 });
                    });

                    tl.to(textRef.current, {
                        y: 100,
                        opacity: 0,
                        duration: 0.6,
                        ease: "power2.in"
                    })
                        .to(textRef.current, {
                            text: texts[0],
                            y: 100,
                            duration: 0,
                        })
                        .to(textRef.current, {
                            y: 0,
                            opacity: 1,
                            duration: 0.6,
                            ease: "power2.out"
                        })
                        .to({}, { duration: 3 });
                };

                cycleTexts();
            }
        })

        return () => ctx.revert();

    }, [])
    return (
        <>
            <section>
                <div id="mainText" className="mt-10 p-4">
                    <h1 ref={textRef} className="font-clash font-semibold text-[17rem] leading-[85%]">Crafted, <br /> Beautifully</h1>
                    <div id="downArrow" className="absolute bottom-10 left-1/2 -translate-x-1/2 w-fit">
                        <i className="ri-arrow-down-line text-2xl"></i>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage