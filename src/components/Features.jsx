'use client';

import { motion } from 'framer-motion';

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <g clipPath="url(#clip0_3131_11034)">
            <path d="M2.5 9L6 12.5L14 4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_3131_11034">
                <rect width="16" height="16" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

const AIModelIcon1 = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M26.4593 12.6048C26.759 11.7164 26.8628 10.7737 26.7638 9.8414C26.6648 8.90909 26.3653 8.00924 25.8857 7.2036C24.4253 4.6956 21.4913 3.4044 18.6257 4.0116C17.991 3.30888 17.2147 2.74849 16.3479 2.36731C15.4811 1.98613 14.5434 1.79278 13.5965 1.8C10.6673 1.794 8.06813 3.6552 7.16693 6.4056C6.24059 6.59103 5.36427 6.97132 4.5961 7.52122C3.82793 8.07113 3.18547 8.77809 2.71133 9.5952C1.99466 10.8123 1.68837 12.2276 1.83768 13.6322C1.98699 15.0367 2.58399 16.356 3.54053 17.3952C3.24054 18.2837 3.13637 19.2265 3.23518 20.1591C3.33398 21.0916 3.63342 21.9917 4.11293 22.7976C5.57333 25.3056 8.50733 26.5956 11.3729 25.9896C12.0074 26.6922 12.7835 27.2524 13.6501 27.6334C14.5168 28.0144 15.4543 28.2075 16.4009 28.2C19.3325 28.2072 21.9329 26.3448 22.8341 23.592C23.7611 23.4066 24.638 23.0261 25.4066 22.4758C26.1753 21.9254 26.818 21.2178 27.2921 20.4C28.0074 19.183 28.3127 17.7683 28.163 16.3646C28.0133 14.9608 27.4165 13.6424 26.4605 12.6036L26.4593 12.6048ZM16.4021 26.4744C15.2316 26.4772 14.0967 26.0725 13.1921 25.3296C13.2329 25.308 13.3037 25.2696 13.3505 25.2408L18.6785 22.2048C18.8115 22.1306 18.9222 22.0221 18.999 21.8906C19.0758 21.7591 19.116 21.6095 19.1153 21.4572V14.046L21.3677 15.3288C21.3917 15.3408 21.4073 15.3636 21.4109 15.3888V21.5268C21.4073 24.2556 19.1669 26.4684 16.4021 26.4744ZM5.62973 21.936C5.04248 20.9371 4.8306 19.7615 5.03213 18.6204C5.07053 18.6444 5.14013 18.6864 5.18933 18.714L10.5173 21.75C10.7873 21.906 11.1221 21.906 11.3933 21.75L17.8973 18.0444V20.61C17.8979 20.6232 17.8952 20.6363 17.8895 20.6482C17.8839 20.6601 17.8755 20.6705 17.8649 20.6784L12.4793 23.7456C10.0805 25.1088 7.01693 24.2976 5.63093 21.9336L5.62973 21.936ZM4.22693 10.4592C4.81647 9.4536 5.7401 8.68667 6.83693 8.292L6.83453 8.4732V14.5452C6.83379 14.6977 6.87392 14.8475 6.95074 14.9792C7.02756 15.1109 7.13826 15.2196 7.27133 15.294L13.7753 18.9984L11.5241 20.2824C11.513 20.2895 11.5003 20.2938 11.4871 20.2949C11.4739 20.2959 11.4606 20.2937 11.4485 20.2884L6.06173 17.2176C3.66773 15.8496 2.84693 12.828 4.22573 10.4616L4.22693 10.4592ZM22.7273 14.7072L16.2233 11.0016L18.4745 9.72C18.4856 9.71266 18.4982 9.70817 18.5114 9.70691C18.5246 9.70565 18.5379 9.70768 18.5501 9.7128L23.9369 12.7812C26.3345 14.1492 27.1565 17.1756 25.7717 19.5408C25.1817 20.5458 24.2588 21.3128 23.1629 21.7092V15.456C23.1637 15.3038 23.1237 15.1543 23.0471 15.0228C22.9705 14.8913 22.8601 14.7828 22.7273 14.7084V14.7072ZM24.9677 11.3796C24.9153 11.3477 24.8625 11.3165 24.8093 11.286L19.4813 8.25C19.3483 8.17345 19.1974 8.13317 19.0439 8.13317C18.8904 8.13317 18.7396 8.17345 18.6065 8.25L12.1025 11.9556V9.39C12.102 9.37683 12.1047 9.36373 12.1103 9.35182C12.116 9.3399 12.1244 9.32954 12.1349 9.3216L17.5193 6.2556C19.9193 4.8912 22.9853 5.7036 24.3677 8.0712C24.9521 9.0708 25.1657 10.242 24.9677 11.3796ZM10.8785 15.9516L8.62613 14.67C8.61437 14.6642 8.60425 14.6556 8.5967 14.6449C8.58915 14.6342 8.58441 14.6218 8.58293 14.6088V8.4708C8.58413 5.7384 10.8305 3.5244 13.6001 3.5268C14.7713 3.5268 15.9041 3.9324 16.8053 4.6716C16.7645 4.6932 16.6949 4.7316 16.6481 4.7592L11.3201 7.7952C11.1869 7.86925 11.076 7.97767 10.999 8.10916C10.922 8.24066 10.8816 8.3904 10.8821 8.5428L10.8785 15.9504V15.9516ZM12.1025 13.35L14.9993 11.7L17.8961 13.35V16.65L14.9993 18.3L12.1013 16.65V13.35H12.1025Z" fill="white" />
    </svg>
);

const AIModelIcon2 = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
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

const PromptBoostIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <g clipPath="url(#clip0_3148_520)">
            <path d="M28.5001 17.7002C28.5001 17.9389 28.4053 18.1678 28.2365 18.3366C28.0677 18.5054 27.8388 18.6002 27.6001 18.6002H25.8001V20.4002C25.8001 20.6389 25.7053 20.8678 25.5365 21.0366C25.3677 21.2054 25.1388 21.3002 24.9001 21.3002C24.6614 21.3002 24.4325 21.2054 24.2637 21.0366C24.0949 20.8678 24.0001 20.6389 24.0001 20.4002V18.6002H22.2001C21.9614 18.6002 21.7325 18.5054 21.5637 18.3366C21.3949 18.1678 21.3001 17.9389 21.3001 17.7002C21.3001 17.4615 21.3949 17.2326 21.5637 17.0638C21.7325 16.895 21.9614 16.8002 22.2001 16.8002H24.0001V15.0002C24.0001 14.7615 24.0949 14.5326 24.2637 14.3638C24.4325 14.195 24.6614 14.1002 24.9001 14.1002C25.1388 14.1002 25.3677 14.195 25.5365 14.3638C25.7053 14.5326 25.8001 14.7615 25.8001 15.0002V16.8002H27.6001C27.8388 16.8002 28.0677 16.895 28.2365 17.0638C28.4053 17.2326 28.5001 17.4615 28.5001 17.7002Z" fill="white" />
        </g>
        <defs>
            <clipPath id="clip0_3148_520">
                <rect width="28.8" height="28.8" fill="white" transform="translate(0.599609 0.600098)" />
            </clipPath>
        </defs>
    </svg>
);

const ImageTranscribeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path d="M26.6995 13.7999V20.9999C26.7699 21.6079 26.702 22.224 26.5008 22.802C26.2995 23.38 25.9702 23.9051 25.5374 24.3379C25.1046 24.7707 24.5796 25.1 24.0015 25.3012C23.4235 25.5025 22.8074 25.5704 22.1995 25.4999H7.79946C7.19147 25.5704 6.57541 25.5025 5.99737 25.3012C5.41934 25.1 4.89428 24.7707 4.46149 24.3379C4.0287 23.9051 3.69937 23.38 3.49814 22.802C3.29691 22.224 3.22899 21.6079 3.29946 20.9999V8.99993C3.22899 8.39193 3.29691 7.77588 3.49814 7.19784C3.69937 6.61981 4.0287 6.09475 4.46149 5.66196C4.89428 5.22917 5.41934 4.89984 5.99737 4.69861C6.57541 4.49738 7.19147 4.42946 7.79946 4.49993H16.1995C16.4382 4.49993 16.6671 4.59475 16.8359 4.76353C17.0046 4.93231 17.0995 5.16123 17.0995 5.39993C17.0995 5.63862 17.0046 5.86754 16.8359 6.03632C16.6671 6.20511 16.4382 6.29993 16.1995 6.29993H7.79946C5.90706 6.29993 5.09946 7.10753 5.09946 8.99993V20.0999L8.14746 17.0519C8.37403 16.8271 8.68027 16.7009 8.99946 16.7009C9.31864 16.7009 9.62489 16.8271 9.85146 17.0519L10.9795 18.1799C11.0916 18.2899 11.2424 18.3514 11.3995 18.3514C11.5565 18.3514 11.7073 18.2899 11.8195 18.1799L17.7475 12.2519C17.974 12.0271 18.2803 11.9009 18.5995 11.9009C18.9186 11.9009 19.2249 12.0271 19.4515 12.2519L24.8995 17.6999V13.7999C24.8995 13.5612 24.9943 13.3323 25.1631 13.1635C25.3318 12.9947 25.5608 12.8999 25.7995 12.8999C26.0382 12.8999 26.2671 12.9947 26.4359 13.1635C26.6046 13.3323 26.6995 13.5612 26.6995 13.7999Z" fill="white" />
    </svg>
);

const SystemInstructionsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <g clipPath="url(#clip0_3148_559)">
            <path d="M20.4 6.90015H9.6C7.45175 6.90015 5.39148 7.75354 3.87244 9.27258C2.35339 10.7916 1.5 12.8519 1.5 15.0001C1.5 17.1484 2.35339 19.2087 3.87244 20.7277C5.39148 22.2468 7.45175 23.1001 9.6 23.1001H20.4C22.5483 23.1001 24.6085 22.2468 26.1276 20.7277C27.6466 19.2087 28.5 17.1484 28.5 15.0001C28.5 12.8519 27.6466 10.7916 26.1276 9.27258C24.6085 7.75354 22.5483 6.90015 20.4 6.90015ZM20.4 19.5001C19.51 19.5001 18.64 19.2362 17.8999 18.7418C17.1599 18.2473 16.5831 17.5445 16.2425 16.7222C15.9019 15.9 15.8128 14.9952 15.9865 14.1222C16.1601 13.2493 16.5887 12.4475 17.218 11.8182C17.8474 11.1888 18.6492 10.7602 19.5221 10.5866C20.395 10.413 21.2998 10.5021 22.1221 10.8427C22.9443 11.1833 23.6471 11.7601 24.1416 12.5001C24.6361 13.2401 24.9 14.1101 24.9 15.0001C24.9 16.1936 24.4259 17.3382 23.582 18.1821C22.7381 19.026 21.5935 19.5001 20.4 19.5001Z" fill="white" />
        </g>
        <defs>
            <clipPath id="clip0_3148_559">
                <rect width="28.8" height="28.8" fill="white" transform="translate(0.599609 0.600098)" />
            </clipPath>
        </defs>
    </svg>
);

const FeatureCard = ({ children, className = "", isLarge = false }) => (
    <motion.div
        className={`relative overflow-hidden rounded-3xl backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 border border-white/20 shadow-xl ${isLarge ? 'lg:col-span-2' : ''} ${className}`}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        whileHover={{ scale: 1.02 }}
    >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-700/5" />
        {children}
    </motion.div>
);

const AIModelBadge = ({ children, className = "" }) => (
    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl backdrop-blur-md bg-gradient-to-br from-white/20 to-white/10 border border-white/30 shadow-lg ${className}`}>
        {children}
    </div>
);

const CheckPoint = ({ children }) => (
    <div className="flex items-start gap-3 group">
        <div className="flex-shrink-0 w-6 h-6 rounded-full backdrop-blur-md bg-gradient-to-br from-white/20 to-white/10 border border-white/30 flex items-center justify-center mt-0.5">
            <CheckIcon />
        </div>
        <p className="text-white/80 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
            {children}
        </p>
    </div>
);

const VideoPlayer = ({ posterUrl, videoSources }) => (
    <div className="relative w-full h-48 rounded-2xl overflow-hidden backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 border border-white/20">
        <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster={posterUrl}
        >
            {videoSources.map((src, idx) => (
                <source key={idx} src={src} />
            ))}
        </video>
    </div>
);

export default function Features() {
    return (
        <section id="Features" className="py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900/80" />
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        One Window. Six Perspectives.
                        <br />
                        <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                            Achieve Optimal Efficiency.
                        </span>
                    </h2>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        Every feature is designed to amplify your AI-powered productivity
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Feature 1: Compare All Premium AIs */}
                    <FeatureCard isLarge>
                        <div className="p-8 h-full flex flex-col">
                            {/* AI Model Icons Row */}
                            <div className="flex items-center gap-3 mb-8 flex-wrap">
                                <AIModelBadge><AIModelIcon1 /></AIModelBadge>
                                <AIModelBadge className="ml-2"><AIModelIcon2 /></AIModelBadge>
                                <AIModelBadge className="ml-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                        <path d="M29.0971 5.97855C28.7923 5.82975 28.6603 6.11415 28.4827 6.25935C28.4215 6.30615 28.3699 6.36735 28.3183 6.42255C27.872 6.89895 27.3511 7.21095 26.6707 7.17375C25.6759 7.11855 24.8263 7.43055 24.0751 8.19135C23.9155 7.25295 23.3851 6.69375 22.5787 6.33375C22.1563 6.14655 21.7291 5.96055 21.4327 5.55375C21.2263 5.26455 21.1699 4.94175 21.0667 4.62495C21.0007 4.43295 20.9347 4.23735 20.7151 4.20495C20.4751 4.16775 20.3815 4.36815 20.2879 4.53615C19.9123 5.22255 19.7671 5.97855 19.7815 6.74415C19.8139 8.46735 20.5411 9.84015 21.9871 10.8157C22.1515 10.9273 22.1935 11.0401 22.1419 11.2033C22.0435 11.5393 21.9259 11.8657 21.8228 12.2029C21.7568 12.4177 21.6583 12.4633 21.4279 12.3709C20.6495 12.0364 19.9423 11.5557 19.3447 10.9549C18.3163 9.96135 17.3875 8.86455 16.2283 8.00535C15.9598 7.80689 15.684 7.61836 15.4015 7.44015C14.2195 6.29175 15.5575 5.34855 15.8671 5.23695C16.1911 5.11935 15.9787 4.71855 14.9323 4.72335C13.8859 4.72815 12.9283 5.07735 11.7079 5.54415C11.5266 5.61364 11.34 5.66861 11.1499 5.70855C10.0095 5.49367 8.84313 5.4524 7.69035 5.58615C5.42835 5.83815 3.62235 6.90855 2.29395 8.73375C0.697949 10.9273 0.322349 13.4209 0.781949 16.0201C1.26555 18.7609 2.66475 21.0301 4.81395 22.8037C7.04355 24.6433 9.61035 25.5445 12.5395 25.3717C14.3179 25.2697 16.2991 25.0309 18.5323 23.1397C19.0963 23.4205 19.6868 23.5321 20.6684 23.6161C21.4243 23.6869 22.1516 23.5801 22.7143 23.4625C23.5963 23.2753 23.5351 22.4581 23.2171 22.3093C20.6311 21.1045 21.1987 21.5953 20.6815 21.1981C21.9967 19.6429 23.9767 18.0277 24.7519 12.7945C24.8119 12.3781 24.7603 12.1165 24.7519 11.7805C24.7471 11.5765 24.7939 11.4961 25.0279 11.4733C25.6772 11.406 26.307 11.2124 26.8819 10.9033C28.5571 9.98775 29.2339 8.48535 29.3935 6.68295C29.4175 6.40695 29.3887 6.12375 29.0971 5.97855Z" fill="#4D6BFE" />
                                    </svg>
                                </AIModelBadge>
                                <AIModelBadge className="ml-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                        <path d="M24.3414 0.600098V9.3265H27.5994V21.7441H24.0774V29.4001L15.633 21.9673V29.3413H14.3238V21.9589L5.86981 29.4001V21.6421H2.39941V9.2257H5.86021V0.600098L14.3238 8.3929V0.828098H15.6318V8.6161L24.3414 0.600098Z" fill="#22B8CD" />
                                    </svg>
                                </AIModelBadge>
                                <AIModelBadge className="ml-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                        <path d="M6.25041 19.7461L11.9144 16.5697L12.0104 16.2937L11.9144 16.1401H11.6396L10.6916 16.0825L7.45401 15.9949L4.64721 15.8785L1.92801 15.7321L1.24281 15.5869L0.599609 14.7409L0.665609 14.3185L1.24161 13.9333L2.06481 14.0053L3.88881 14.1289L6.62241 14.3185L8.60481 14.4349L11.5436 14.7409H12.0104L12.0764 14.5525L11.9156 14.4349L11.792 14.3185L8.96241 12.4033L5.90001 10.3777L4.29681 9.2113L3.42801 8.6221L2.99121 8.0677L2.80161 6.8581L3.58881 5.9917L4.64601 6.0637L4.91601 6.1369L5.98761 6.9601L8.27721 8.7313L11.2664 10.9309L11.7044 11.2957L11.8784 11.1721L11.9012 11.0845L11.7044 10.7557L10.0784 7.8205L8.34321 4.8325L7.57041 3.5941L7.36641 2.8513C7.28868 2.566 7.24676 2.27215 7.24161 1.9765L8.13921 0.760898L8.63481 0.600098L9.83001 0.760898L10.334 1.1977L11.078 2.8945L12.2804 5.5693L14.1464 9.2053L14.6936 10.2829L14.9852 11.2813L15.0944 11.5873H15.284V11.4121L15.4376 9.3649L15.722 6.8509L15.998 3.6169L16.094 2.7049L16.5452 1.6129L17.4416 1.0225L18.1424 1.3585L18.7184 2.1805L18.638 2.7133L18.2948 4.9345L17.624 8.4181L17.1872 10.7485H17.4416L17.7332 10.4581L18.9152 8.8909L20.8976 6.4141L21.7736 5.4301L22.7936 4.3453L23.45 3.8281H24.6896L25.6016 5.1829L25.1936 6.5821L23.9168 8.1985L22.8596 9.5689L21.3428 11.6089L20.3948 13.2409L20.4824 13.3729L20.708 13.3489L24.1352 12.6217L25.9868 12.2857L28.196 11.9077L29.1956 12.3733L29.3048 12.8473L28.9112 13.8157L26.5484 14.3989L23.7776 14.9533L19.6508 15.9289L19.6004 15.9649L19.6592 16.0381L21.518 16.2133L22.3124 16.2565H24.2588L27.8828 16.5265L28.8308 17.1529L29.3996 17.9185L29.3048 18.5005L27.8468 19.2445L25.8788 18.7777L21.284 17.6857L19.7096 17.2909H19.4912V17.4229L20.8028 18.7045L23.21 20.8765L26.2208 23.6725L26.3732 24.3661L25.9868 24.9121L25.5788 24.8533L22.9328 22.8649L21.9116 21.9685L19.6004 20.0245H19.4468V20.2285L19.9796 21.0073L22.7936 25.2325L22.94 26.5285L22.736 26.9521L22.0064 27.2077L21.2048 27.0613L19.556 24.7513L17.858 22.1509L16.4864 19.8193L16.3184 19.9153L15.5096 28.6201L15.1304 29.0641L14.2556 29.4001L13.5272 28.8469L13.1408 27.9505L13.5272 26.1793L13.994 23.8705L14.372 22.0345L14.7152 19.7545L14.9192 18.9961L14.9048 18.9457L14.7368 18.9673L13.016 21.3277L10.4 24.8617L8.32881 27.0757L7.83201 27.2725L6.97161 26.8285L7.05201 26.0341L7.53321 25.3273L10.3988 21.6841L12.1268 19.4257L13.2428 18.1225L13.2356 17.9329H13.1696L5.55801 22.8721L4.20201 23.0473L3.61761 22.5001L3.69081 21.6049L3.96801 21.3133L6.25761 19.7389L6.25041 19.7461Z" fill="#D97757" />
                                    </svg>
                                </AIModelBadge>
                                <AIModelBadge className="ml-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.7236 18.9482L21.2972 11.8718C21.7664 11.5238 22.4372 11.6594 22.6616 12.1982C23.8376 15.041 23.312 18.4562 20.9696 20.801C18.6284 23.1458 15.3692 23.6594 12.3908 22.4882L9.13761 23.9966C13.8044 27.1898 19.4708 26.4002 23.012 22.853C25.8212 20.0402 26.6912 16.2062 25.8776 12.749L25.8848 12.7574C24.7052 7.679 26.1752 5.6486 29.1848 1.4978C29.2568 1.3994 29.3288 1.301 29.3996 1.2002L25.4384 5.1662V5.1542L11.72 18.9506M9.74721 20.6678C6.39681 17.4638 6.97521 12.5066 9.83241 9.647C11.9456 7.5314 15.4088 6.6674 18.4316 7.937L21.6776 6.437C21.0029 5.9407 20.2648 5.5371 19.4828 5.237C17.517 4.43239 15.3571 4.22707 13.2748 4.64685C11.1926 5.06663 9.28096 6.09277 7.78041 7.5962C4.74081 10.6394 3.78441 15.3194 5.42601 19.313C6.65241 22.2974 4.64241 24.4082 2.61801 26.5394C1.89921 27.2954 1.17921 28.0502 0.599609 28.8494L9.74361 20.6714" fill="white" />
                                    </svg>
                                </AIModelBadge>
                            </div>

                            <div className="flex-grow">
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    Compare All Premium AIs at Once
                                </h3>
                                <p className="text-white/70 text-base mb-8 leading-relaxed">
                                    Free AI models often deliver restricted and inferior answers. With Coffee Mustache, you get access to multiple top‑tier premium models, all in one place. Compare their responses side‑by‑side to experience faster, smarter, and most accurate answers.
                                </p>

                                <div className="space-y-4 mb-8">
                                    <CheckPoint>Save hours of manual comparison</CheckPoint>
                                    <CheckPoint>Customize your AI team instantly</CheckPoint>
                                    <CheckPoint>Never miss the most accurate answer again</CheckPoint>
                                </div>
                            </div>

                            <VideoPlayer
                                posterUrl="https://cdn.prod.website-files.com/689597cc2d57ee623f5a24a2%2F689c388a684754bf038d1902_feature1-poster-00001.jpg"
                                videoSources={[
                                    "https://cdn.prod.website-files.com/689597cc2d57ee623f5a24a2%2F689c388a684754bf038d1902_feature1-transcode.mp4",
                                    "https://cdn.prod.website-files.com/689597cc2d57ee623f5a24a2%2F689c388a684754bf038d1902_feature1-transcode.webm"
                                ]}
                            />
                        </div>
                    </FeatureCard>

                    {/* Feature 2: Prompt Boost */}
                    <FeatureCard>
                        <div className="p-8 h-full flex flex-col">
                            <div className="mb-8">
                                <AIModelBadge><PromptBoostIcon /></AIModelBadge>
                            </div>

                            <div className="flex-grow">
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    Prompt Boost – Instant Enhancement
                                </h3>
                                <p className="text-white/70 text-base mb-8 leading-relaxed">
                                    No need to craft the perfect question. Just write what you want, hit Enhance Prompt, and watch every AI respond with smarter, richer answers.
                                </p>

                                <div className="space-y-4 mb-8">
                                    <CheckPoint>Turn rough ideas into perfect prompts</CheckPoint>
                                    <CheckPoint>Get 10x better responses instantly</CheckPoint>
                                    <CheckPoint>No prompt engineering skills needed</CheckPoint>
                                </div>
                            </div>

                            <VideoPlayer
                                posterUrl="https://cdn.prod.website-files.com/689597cc2d57ee623f5a24a2%2F689c38b11bc78f1de5791ce1_feature2-poster-00001.jpg"
                                videoSources={[
                                    "https://cdn.prod.website-files.com/689597cc2d57ee623f5a24a2%2F689c38b11bc78f1de5791ce1_feature2-transcode.mp4",
                                    "https://cdn.prod.website-files.com/689597cc2d57ee623f5a24a2%2F689c38b11bc78f1de5791ce1_feature2-transcode.webm"
                                ]}
                            />
                        </div>
                    </FeatureCard>

                    {/* Feature 3: Generate Images & Transcribe Audio */}
                    <FeatureCard>
                        <div className="p-8 h-full flex flex-col">
                            <div className="mb-8">
                                <AIModelBadge><ImageTranscribeIcon /></AIModelBadge>
                            </div>

                            <div className="flex-grow">
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    Generate Images & Transcribe Audio
                                </h3>
                                <p className="text-white/70 text-base mb-8 leading-relaxed">
                                    Bring your creative and content ideas to life instantly with AI-powered image generation and fast, accurate audio transcription — no extra tools needed.
                                </p>

                                <div className="space-y-4 mb-8">
                                    <CheckPoint>Generate high-quality images for any purpose.</CheckPoint>
                                    <CheckPoint>Get instant, clear transcripts from your recorded audio.</CheckPoint>
                                    <CheckPoint>Effortlessly edit outputs to meet specific project needs.</CheckPoint>
                                </div>
                            </div>

                            <VideoPlayer
                                posterUrl="https://cdn.prod.website-files.com/689597cc2d57ee623f5a24a2%2F689c38d4ba5efda8b7d1b99f_feature3-poster-00001.jpg"
                                videoSources={[
                                    "https://cdn.prod.website-files.com/689597cc2d57ee623f5a24a2%2F689c38d4ba5efda8b7d1b99f_feature3-transcode.mp4",
                                    "https://cdn.prod.website-files.com/689597cc2d57ee623f5a24a2%2F689c38d4ba5efda8b7d1b99f_feature3-transcode.webm"
                                ]}
                            />
                        </div>
                    </FeatureCard>

                    {/* Feature 4: Custom Projects with System Instructions */}
                    <FeatureCard>
                        <div className="p-8 h-full flex flex-col">
                            <div className="mb-8">
                                <AIModelBadge><SystemInstructionsIcon /></AIModelBadge>
                            </div>

                            <div className="flex-grow">
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    Custom Projects with System Instructions
                                </h3>
                                <p className="text-white/70 text-base mb-8 leading-relaxed">
                                    Create unique projects with tailored system guidelines. Set 'Marketing Mode' or 'Code Review Mode' once, ensuring every AI model follows your project's direction throughout.
                                </p>

                                <div className="space-y-4 mb-8">
                                    <CheckPoint>One-time setup keeps all AI replies on-brand and on-task.</CheckPoint>
                                    <CheckPoint>Instantly switch modes across chats</CheckPoint>
                                    <CheckPoint>Maintain consistent tone and rules without repetition.</CheckPoint>
                                </div>
                            </div>

                            <VideoPlayer
                                posterUrl="https://cdn.prod.website-files.com/689597cc2d57ee623f5a24a2%2F689c38e5d88c62041f8e95e2_feature4-poster-00001.jpg"
                                videoSources={[
                                    "https://cdn.prod.website-files.com/689597cc2d57ee623f5a24a2%2F689c38e5d88c62041f8e95e2_feature4-transcode.mp4",
                                    "https://cdn.prod.website-files.com/689597cc2d57ee623f5a24a2%2F689c38e5d88c62041f8e95e2_feature4-transcode.webm"
                                ]}
                            />
                        </div>
                    </FeatureCard>
                </div>
            </div>
        </section>
    );
}
