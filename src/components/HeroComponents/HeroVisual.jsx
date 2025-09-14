import React from 'react';
import Image from 'next/image';
import { motion } from "motion/react";

const HeroVisual = ({
    videoSources = {
        mp4: "https://cdn.prod.website-files.com/689597cc2d57ee623f5a24a2/689c3850b8428d2531672b1f_hero-transcode.mp4",
        webm: "https://cdn.prod.website-files.com/689597cc2d57ee623f5a24a2/689c3850b8428d2531672b1f_hero-transcode.webm"
    },
    posterImage = "https://cdn.prod.website-files.com/689597cc2d57ee623f5a24a2/689c3850b8428d2531672b1f_hero-poster-00001.jpg",
    backgroundImage = "/Images/background-glare.avif"
}) => {
    return (
        <motion.div
            initial={{ opacity: 0.2, x: 60, scale: 0.96, boxShadow: "0 0 0 rgba(0,0,0,0)" }}
            animate={{ opacity: 1, x: 0, scale: 1, boxShadow: "0 8px 48px 0 rgba(80,0,120,0.18)" }}
            transition={{
                delay: 0.5,
                duration: 1.2,
                ease: [0.23, 1, 0.32, 1],
            }}
            className="flex-1 order-2 w-full"
        >
            <motion.div
                initial={{ y: 0 }}
                animate={{ y: [0, -12, 0] }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="relative w-full h-[200px] xs:h-[220px] sm:h-[260px] md:h-[320px] lg:h-[350px] xl:h-[400px] rounded-xl xs:rounded-2xl overflow-hidden bg-white/10 dark:bg-black/10 border-4 border-white/40 dark:border-white/20 backdrop-blur-xl mx-auto max-w-full xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl overflow-x-hidden shadow-xl"
            >
                {/* Background glare image inside card, glows through borders */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={backgroundImage}
                        alt="Background Glare"
                        fill
                        className="object-cover"
                        style={{ filter: 'blur(12px)', opacity: 0.9 }}
                        priority
                    />
                </div>
                
                <div className="absolute inset-0 z-10 bg-white/10 dark:bg-black/20 backdrop-blur-2xl rounded-xl border border-white/20" />
                
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={posterImage}
                    className="relative z-20 w-full h-full object-cover rounded-xl"
                    style={{ background: 'transparent', boxShadow: '0 0 40px rgba(0,255,200,0.3)' }}
                >
                    <source src={videoSources.mp4} type="video/mp4" />
                    <source src={videoSources.webm} type="video/webm" />
                </video>
            </motion.div>
        </motion.div>
    );
};

export default HeroVisual;