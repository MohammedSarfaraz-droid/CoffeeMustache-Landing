'use client';

import React from 'react';
import { motion } from 'framer-motion';

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <g clipPath="url(#clip0_3131_11034)">
            <path d="M2.5 9L6 12.5L14 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white dark:text-white" />
        </g>
        <defs>
            <clipPath id="clip0_3131_11034">
                <rect width="16" height="16" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

const AIModelIcon1 = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" viewBox="0 0 30 30" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M26.4593 12.6048C26.759 11.7164 26.8628 10.7737 26.7638 9.8414C26.6648 8.90909 26.3653 8.00924 25.8857 7.2036C24.4253 4.6956 21.4913 3.4044 18.6257 4.0116C17.991 3.30888 17.2147 2.74849 16.3479 2.36731C15.4811 1.98613 14.5434 1.79278 13.5965 1.8C10.6673 1.794 8.06813 3.6552 7.16693 6.4056C6.24059 6.59103 5.36427 6.97132 4.5961 7.52122C3.82793 8.07113 3.18547 8.77809 2.71133 9.5952C1.99466 10.8123 1.68837 12.2276 1.83768 13.6322C1.98699 15.0367 2.58399 16.356 3.54053 17.3952C3.24054 18.2837 3.13637 19.2265 3.23518 20.1591C3.33398 21.0916 3.63342 21.9917 4.11293 22.7976C5.57333 25.3056 8.50733 26.5956 11.3729 25.9896C12.0074 26.6922 12.7835 27.2524 13.6501 27.6334C14.5168 28.0144 15.4543 28.2075 16.4009 28.2C19.3325 28.2072 21.9329 26.3448 22.8341 23.592C23.7611 23.4066 24.638 23.0261 25.4066 22.4758C26.1753 21.9254 26.818 21.2178 27.2921 20.4C28.0074 19.183 28.3127 17.7683 28.163 16.3646C28.0133 14.9608 27.4165 13.6424 26.4605 12.6036L26.4593 12.6048ZM16.4021 26.4744C15.2316 26.4772 14.0967 26.0725 13.1921 25.3296C13.2329 25.308 13.3037 25.2696 13.3505 25.2408L18.6785 22.2048C18.8115 22.1306 18.9222 22.0221 18.999 21.8906C19.0758 21.7591 19.116 21.6095 19.1153 21.4572V14.046L21.3677 15.3288C21.3917 15.3408 21.4073 15.3636 21.4109 15.3888V21.5268C21.4073 24.2556 19.1669 26.4684 16.4021 26.4744ZM5.62973 21.936C5.04248 20.9371 4.8306 19.7615 5.03213 18.6204C5.07053 18.6444 5.14013 18.6864 5.18933 18.714L10.5173 21.75C10.7873 21.906 11.1221 21.906 11.3933 21.75L17.8973 18.0444V20.61C17.8979 20.6232 17.8952 20.6363 17.8895 20.6482C17.8839 20.6601 17.8755 20.6705 17.8649 20.6784L12.4793 23.7456C10.0805 25.1088 7.01693 24.2976 5.63093 21.9336L5.62973 21.936ZM4.22693 10.4592C4.81647 9.4536 5.7401 8.68667 6.83693 8.292L6.83453 8.4732V14.5452C6.83379 14.6977 6.87392 14.8475 6.95074 14.9792C7.02756 15.1109 7.13826 15.2196 7.27133 15.294L13.7753 18.9984L11.5241 20.2824C11.513 20.2895 11.5003 20.2938 11.4871 20.2949C11.4739 20.2959 11.4606 20.2937 11.4485 20.2884L6.06173 17.2176C3.66773 15.8496 2.84693 12.828 4.22573 10.4616L4.22693 10.4592ZM22.7273 14.7072L16.2233 11.0016L18.4745 9.72C18.4856 9.71266 18.4982 9.70817 18.5114 9.70691C18.5246 9.70565 18.5379 9.70768 18.5501 9.7128L23.9369 12.7812C26.3345 14.1492 27.1565 17.1756 25.7717 19.5408C25.1817 20.5458 24.2588 21.3128 23.1629 21.7092V15.456C23.1637 15.3038 23.1237 15.1543 23.0471 15.0228C22.9705 14.8913 22.8601 14.7828 22.7273 14.7084V14.7072ZM24.9677 11.3796C24.9153 11.3477 24.8625 11.3165 24.8093 11.286L19.4813 8.25C19.3483 8.17345 19.1974 8.13317 19.0439 8.13317C18.8904 8.13317 18.7396 8.17345 18.6065 8.25L12.1025 11.9556V9.39C12.102 9.37683 12.1047 9.36373 12.1103 9.35182C12.116 9.3399 12.1244 9.32954 12.1349 9.3216L17.5193 6.2556C19.9193 4.8912 22.9853 5.7036 24.3677 8.0712C24.9521 9.0708 25.1657 10.242 24.9677 11.3796ZM10.8785 15.9516L8.62613 14.67C8.61437 14.6642 8.60425 14.6556 8.5967 14.6449C8.58915 14.6342 8.58441 14.6218 8.58293 14.6088V8.4708C8.58413 5.7384 10.8305 3.5244 13.6001 3.5268C14.7713 3.5268 15.9041 3.9324 16.8053 4.6716C16.7645 4.6932 16.6949 4.7316 16.6481 4.7592L11.3201 7.7952C11.1869 7.86925 11.076 7.97767 10.999 8.10916C10.922 8.24066 10.8816 8.3904 10.8821 8.5428L10.8785 15.9504V15.9516ZM12.1025 13.35L14.9993 11.7L17.8961 13.35V16.65L14.9993 18.3L12.1013 16.65V13.35H12.1025Z" fill="currentColor" className="text-foreground dark:text-white" />
    </svg>
);

const AIModelIcon2 = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" viewBox="0 0 30 30" fill="none">
        <g clipPath="url(#clip0_3131_11014)">
            <path d="M14.9996 29.4001C14.4507 25.7772 12.7569 22.4249 10.1658 19.8339C7.57477 17.2428 4.22255 15.549 0.599609 15.0001C4.22255 14.4512 7.57477 12.7573 10.1658 10.1663C12.7569 7.57526 14.4507 4.22304 14.9996 0.600098C15.5487 4.22297 17.2426 7.57509 19.8336 10.1661C22.4246 12.7571 25.7767 14.451 29.3996 15.0001C25.7767 15.5492 22.4246 17.2431 19.8336 19.8341C17.2426 22.4251 15.5487 25.7772 14.9996 29.4001Z" fill="url(#paint0_linear_3131_11014)" />
        </g>
        <defs>
            <linearGradient id="paint0_linear_3131_11014" x1="6.9996" y1="25.0001" x2="22.4996" y2="6.50012" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1C7DFF" />
                <stop offset="0.439313" stopColor="#1C69FF" />
                <stop offset="0.841327" stopColor="#F0DCD6" />
            </linearGradient>
            <clipPath id="clip0_3131_11014">
                <rect width="28.8" height="28.8" fill="white" transform="translate(0.599609 0.600098)" />
            </clipPath>
        </defs>
    </svg>
);

const AIModelBadge = ({ children, className = "" }) => (
    <div className={`h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-lg sm:rounded-xl bg-foreground/10 dark:bg-white/20 border border-foreground/20 dark:border-white/30 backdrop-blur-sm text-foreground dark:text-white flex items-center justify-center ${className}`}>
        {children}
    </div>
);

const CheckPoint = ({ children }) => (
    <div className="flex items-start gap-3">
        <div className="mt-1 shrink-0 text-green-500">
            <CheckIcon />
        </div>
        <p className="text-foreground/80 dark:text-white/80">{children}</p>
    </div>
);

const VideoPlayer = ({ posterUrl, videoSources }) => (
    <div className="relative overflow-hidden rounded-b-xl lg:rounded-b-none lg:rounded-br-xl shadow-2xl border border-foreground/10 dark:border-white/10">
        <video className="w-full h-40 sm:h-48 md:h-auto object-cover" poster={posterUrl} controls playsInline>
            {videoSources.map((src, i) => (
                <source key={i} src={src} type={src.endsWith('.webm') ? 'video/webm' : 'video/mp4'} />
            ))}
            Your browser does not support the video tag.
        </video>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 dark:from-black/20 via-transparent to-transparent" />
    </div>
);

export default function Features() {
    const videoSources = [
        'https://cdn.prod.website-files.com/689597cc2d57ee623f5a24a2%2F689c388a684754bf038d1902_feature1-transcode.mp4',
        'https://cdn.prod.website-files.com/689597cc2d57ee623f5a24a2%2F689c388a684754bf038d1902_feature1-transcode.webm',
    ];
    const posterUrl = 'https://cdn.prod.website-files.com/689597cc2d57ee623f5a24a2%2F689c388a684754bf038d1902_feature1-poster-00001.jpg';

    return (
        <section id="features" className="py-14 sm:py-20 md:py-24 relative overflow-hidden ">
            {/* Background Elements */}
            {/* <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background/80 dark:from-gray-900/50 dark:to-gray-900/80" /> */}
            <div className="absolute inset-0">
                <div className="absolute top-10 left-2 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl" />
                <div className="absolute bottom-10 right-2 w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-purple-400/5 dark:bg-purple-400/10 rounded-full blur-3xl" />
            </div>

            <div className="relative container mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    className="text-center mb-10 sm:mb-14 md:mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-foreground dark:text-white mb-4 sm:mb-6 leading-tight">
                        One Window. Six Perspectives.
                        <br />
                        <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                            Achieve Optimal Efficiency.
                        </span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-foreground/70 dark:text-white/70 max-w-2xl mx-auto">
                        Every feature is designed to amplify your AI-powered productivity
                    </p>
                </motion.div>

                {/* Four stacked cards with smooth staggered reveal */}
                <div className="flex flex-col gap-4 md:gap-6">
                    {[0, 1, 2, 3].map((idx) => (
                        <div className="flex justify-center" key={idx}>
                            <motion.div
                                className="relative overflow-hidden rounded-xl backdrop-blur-md bg-gradient-to-br from-background/80 to-background/60 dark:from-white/10 dark:to-white/5 border border-foreground/10 dark:border-white/20 shadow-xl w-full max-w-none"
                                initial={{ opacity: 0, scale: 0.98, y: 24 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: idx * 0.08 }}
                            >
                                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center h-full px-2 sm:px-4 md:px-8 pt-4 sm:pt-6 md:pt-8 lg:px-10 lg:pt-10 pb-0 lg:pb-10">
                                    <div className="order-1 lg:order-1 text-center lg:text-left">
                                        <div className="mb-4 sm:mb-6">
                                            <div className="flex items-center gap-1 sm:gap-2 lg:gap-3 flex-wrap justify-center lg:justify-start">
                                                <AIModelBadge className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10"><AIModelIcon1 /></AIModelBadge>
                                                <AIModelBadge className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10"><AIModelIcon2 /></AIModelBadge>
                                                <AIModelBadge className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" viewBox="0 0 30 30" fill="none">
                                                        <path d="M29.0971 5.97855C28.7923 5.82975 28.6603 6.11415 28.4827 6.25935C28.4215 6.30615 28.3699 6.36735 28.3183 6.42255C27.872 6.89895 27.3511 7.21095 26.6707 7.17375C25.6759 7.11855 24.8263 7.43055 24.0751 8.19135C23.9155 7.25295 23.3851 6.69375 22.5787 6.33375C22.1563 6.14655 21.7291 5.96055 21.4327 5.55375C21.2263 5.26455 21.1699 4.94175 21.0667 4.62495C21.0007 4.43295 20.9347 4.23735 20.7151 4.20495C20.4751 4.16775 20.3815 4.36815 20.2879 4.53615C19.9123 5.22255 19.7671 5.97855 19.7815 6.74415C19.8139 8.46735 20.5411 9.84015 21.9871 10.8157C22.1515 10.9273 22.1935 11.0401 22.1419 11.2033C22.0435 11.5393 21.9259 11.8657 21.8228 12.2029C21.7568 12.4177 21.6583 12.4633 21.4279 12.3709C20.6495 12.0364 19.9423 11.5557 19.3447 10.9549Z" fill="currentColor" className="text-blue-500" />
                                                    </svg>
                                                </AIModelBadge>
                                                <AIModelBadge className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" viewBox="0 0 30 30" fill="none">
                                                        <path d="M24.3414 0.600098V9.3265H27.5994V21.7441H24.0774V29.4001L15.633 21.9673V29.3413H14.3238V21.9589L5.86981 29.4001V21.6421H2.39941V9.2257H5.86021V0.600098L14.3238 8.3929V0.828098H15.6318V8.6161L24.3414 0.600098Z" fill="currentColor" className="text-cyan-500" />
                                                    </svg>
                                                </AIModelBadge>
                                                <AIModelBadge className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" viewBox="0 0 30 30" fill="none">
                                                        <path d="M6.25041 19.7461L11.9144 16.5697L12.0104 16.2937L11.9144 16.1401H11.6396L10.6916 16.0825L7.45401 15.9949L4.64721 15.8785L1.92801 15.7321L1.24281 15.5869L0.599609 14.7409L0.665609 14.3185L1.24161 13.9333L2.06481 14.0053L3.88881 14.1289L6.62241 14.3185L8.60481 14.4349L11.5436 14.7409H12.0104L12.0764 14.5525L11.9156 14.4349L11.792 14.3185L8.96241 12.4033L5.90001 10.3777L4.29681 9.2113L3.42801 8.6221L2.99121 8.0677L2.80161 6.8581L3.58881 5.9917L4.64601 6.0637L4.91601 6.1369L5.98761 6.9601L8.27721 8.7313L11.2664 10.9309L11.7044 11.2957L11.8784 11.1721L11.9012 11.0845L11.7044 10.7557Z" fill="currentColor" className="text-orange-500" />
                                                    </svg>
                                                </AIModelBadge>
                                                <AIModelBadge className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" viewBox="0 0 30 30" fill="none">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.7236 18.9482L21.2972 11.8718C21.7664 11.5238 22.4372 11.6594 22.6616 12.1982C23.8376 15.041 23.312 18.4562 20.9696 20.801C18.6284 23.1458 15.3692 23.6594 12.3908 22.4882L9.13761 23.9966C13.8044 27.1898 19.4708 26.4002 23.012 22.853C25.8212 20.0402 26.6912 16.2062 25.8776 12.749L25.8848 12.7574C24.7052 7.679 26.1752 5.6486 29.1848 1.4978C29.2568 1.3994 29.3288 1.301 29.3996 1.2002L25.4384 5.1662V5.1542L11.72 18.9506M9.74721 20.6678C6.39681 17.4638 6.97521 12.5066 9.83241 9.647C11.9456 7.5314 15.4088 6.6674 18.4316 7.937L21.6776 6.437C21.0029 5.9407 20.2648 5.5371 19.4828 5.237C17.517 4.43239 15.3571 4.22707 13.2748 4.64685C11.1926 5.06663 9.28096 6.09277 7.78041 7.5962C4.74081 10.6394 3.78441 15.3194 5.42601 19.313C6.65241 22.2974 4.64241 24.4082 2.61801 26.5394C1.89921 27.2954 1.17921 28.0502 0.599609 28.8494L9.74361 20.6714" fill="currentColor" />
                                                    </svg>
                                                </AIModelBadge>
                                            </div>
                                        </div>

                                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground dark:text-white mb-2 sm:mb-4">Compare All Premium AIs at Once</h3>
                                        <p className="text-foreground/70 dark:text-white/70 text-sm sm:text-base md:text-lg mb-4 sm:mb-6 leading-relaxed">
                                            Free AI models often deliver restricted and inferior answers. With Coffee Mustache, you get access to multiple top‑tier premium models, all in one place. Compare their responses side‑by‑side to experience faster, smarter, and most accurate answers.
                                        </p>

                                        <div className="space-y-2 sm:space-y-3">
                                            <CheckPoint>Save hours of manual comparison</CheckPoint>
                                            <CheckPoint>Customize your AI team instantly</CheckPoint>
                                            <CheckPoint>Never miss the most accurate answer again</CheckPoint>
                                        </div>
                                    </div>

                                    <div className="order-2 lg:order-2 -mx-2 sm:-mx-4 md:-mx-8 lg:ml-0 lg:-mr-10 lg:-mb-10 mt-2">
                                        <VideoPlayer posterUrl={posterUrl} videoSources={videoSources} />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


