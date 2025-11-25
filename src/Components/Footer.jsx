import gsap from "gsap"
import { useEffect, useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

function Footer() {
    const footerRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(footerRef.current, {
                y: -30,
                duration: 1,
                opacity: 0,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top 90%",
                }
            });
        });

        return () => ctx.revert();

    }, [])
    return (
        <>
            <footer className="mt-40 px-10 mb-10">
                <hr className="mb-10 border-t border-white/40" /><div id="box" className="flex items-center justify-between">
                    <div id="text1" ref={(el) => (footerRef.current[0] = el)}>
                        <p className="font-medium text-xl">© 2025</p>
                    </div>
                    <div id="text2" className="flex items-center gap-25">
                        <h5 ref={(el) => (footerRef.current[1] = el)} className="text-xl font-semibold cursor-pointer relative group">
                            Youtube
                            <span className="absolute bottom-0 left-0 w-0 h-px bg-[#efe6d2] transition-all duration-300 ease-out group-hover:w-full"></span>
                        </h5>
                        <h5 ref={(el) => (footerRef.current[2] = el)} className="text-xl font-semibold cursor-pointer relative group">
                            Twitter
                            <span className="absolute bottom-0 left-0 w-0 h-px bg-[#efe6d2] transition-all duration-300 ease-out group-hover:w-full"></span>
                        </h5>
                        <h5 ref={(el) => (footerRef.current[3] = el)} className="text-xl font-semibold cursor-pointer relative group">
                            Linkedin
                            <span className="absolute bottom-0 left-0 w-0 h-px bg-[#efe6d2] transition-all duration-300 ease-out group-hover:w-full"></span>
                        </h5>
                        <h5 ref={(el) => (footerRef.current[4] = el)} className="text-xl font-semibold cursor-pointer relative group">
                            Instagram
                            <span className="absolute bottom-0 left-0 w-0 h-px bg-[#efe6d2] transition-all duration-300 ease-out group-hover:w-full"></span>
                        </h5>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer