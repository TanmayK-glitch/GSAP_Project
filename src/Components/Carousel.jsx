import React, { useEffect } from "react";

import AmazonLogo from "../assets/BrandLogos/Amazon.png";
import DribbleLogo from "../assets/BrandLogos/Dribble.png";
import HubspotLogo from "../assets/BrandLogos/Hubspot.png";
import NetflixLogo from "../assets/BrandLogos/Netflix.png";
import PaypalLogo from "../assets/BrandLogos/Paypal.png";
import ZoomLogo from "../assets/BrandLogos/Zoom.png";

const brandLogos = [
    { src: AmazonLogo, alt: "Amazon" },
    { src: DribbleLogo, alt: "Dribbble" },
    { src: HubspotLogo, alt: "Hubspot" },
    { src: NetflixLogo, alt: "Netflix" },
    { src: PaypalLogo, alt: "Paypal" },
    { src: ZoomLogo, alt: "Zoom" }
];

const duplicatedLogos = [...brandLogos, ...brandLogos];

function Carousel() {
    useEffect(() => {
        const styleId = "carousel-scroll-keyframes";
        if (!document.getElementById(styleId)) {
            const style = document.createElement("style");
            style.id = styleId;
            style.innerHTML = `
                @keyframes carousel-scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `;
            document.head.appendChild(style);
        }
    }, []);

    return (
        <section className="mt-32 space-y-8">
            <hr className="w-full border-t border-white/40" />
            <div className="overflow-hidden px-10 py-8">
                <div
                    className="flex w-max items-center gap-24"
                    style={{ animation: "carousel-scroll 18s linear infinite" }}
                >
                    {duplicatedLogos.map((logo, index) => (
                        <img
                            key={`${logo.alt}-${index}`}
                            src={logo.src}
                            alt={`${logo.alt} logo`}
                            className="h-8 w-auto sm:h-10 opacity-80 hover:opacity-100 transition"
                            draggable="false"
                            style={{ filter: "grayscale(1) brightness(1.8)" }}
                        />
                    ))}
                </div>
            </div>
            <hr className="w-full border-t border-white/40" />
        </section>
    );
}

export default Carousel;