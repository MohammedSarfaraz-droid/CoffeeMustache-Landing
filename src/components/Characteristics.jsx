"use client";

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from "motion/react";

// Characteristics section matching the provided screenshot with
// stacked left/right cards, a glowing central hub, and CSS pseudo-element connectors.
const AIModels = () => {
    const aiModels = [
        {
            id: 1,
            name: "ChatGPT 5",
            tag: "All Rounder Explainer",
            description: "Great for questions, brainstorming, and clear step-by-step explanations",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M28.7324 13.3373C29.0653 12.3502 29.1807 11.3028 29.0707 10.2669C28.9607 9.231 28.6278 8.23116 28.095 7.336C26.4724 4.54934 23.2124 3.11467 20.0284 3.78934C19.3231 3.00853 18.4606 2.38588 17.4975 1.96235C16.5344 1.53881 15.4925 1.32399 14.4404 1.332C11.1857 1.32534 8.2977 3.39334 7.29637 6.44934C6.26711 6.65537 5.29342 7.07791 4.4399 7.68892C3.58637 8.29992 2.87252 9.08543 2.3457 9.99334C1.54941 11.3457 1.20908 12.9183 1.37499 14.4788C1.54089 16.0394 2.20422 17.5053 3.26703 18.66C2.93371 19.6472 2.81797 20.6948 2.92776 21.731C3.03754 22.7671 3.37025 23.7672 3.90303 24.6627C5.5257 27.4493 8.7857 28.8827 11.9697 28.2093C12.6747 28.99 13.537 29.6125 14.4999 30.0358C15.4629 30.4591 16.5045 30.6737 17.5564 30.6653C20.8137 30.6733 23.703 28.604 24.7044 25.5453C25.7343 25.3393 26.7087 24.9166 27.5627 24.3051C28.4167 23.6936 29.1309 22.9074 29.6577 21.9987C30.4525 20.6464 30.7917 19.0745 30.6253 17.5148C30.459 15.9552 29.7958 14.4902 28.7337 13.336L28.7324 13.3373ZM17.5577 28.748C16.2572 28.7511 14.9961 28.3014 13.991 27.476C14.0364 27.452 14.115 27.4093 14.167 27.3773L20.087 24.004C20.2348 23.9216 20.3577 23.801 20.4431 23.6549C20.5284 23.5088 20.5731 23.3425 20.5724 23.1733V14.9387L23.075 16.364C23.1017 16.3773 23.119 16.4027 23.123 16.4307V23.2507C23.119 26.2827 20.6297 28.7413 17.5577 28.748ZM5.58837 23.7053C4.93587 22.5954 4.70045 21.2892 4.92437 20.0213C4.96703 20.048 5.04437 20.0947 5.09904 20.1253L11.019 23.4987C11.319 23.672 11.691 23.672 11.9924 23.4987L19.219 19.3813V22.232C19.2196 22.2466 19.2166 22.2612 19.2104 22.2744C19.2041 22.2877 19.1947 22.2992 19.183 22.308L13.199 25.716C10.5337 27.2307 7.1297 26.3293 5.5897 23.7027L5.58837 23.7053ZM4.0297 10.9533C4.68475 9.836 5.711 8.98386 6.9297 8.54534L6.92704 8.74667V15.4933C6.92622 15.6627 6.97081 15.8292 7.05616 15.9756C7.14151 16.1219 7.26452 16.2427 7.41237 16.3253L14.639 20.4413L12.1377 21.868C12.1253 21.8759 12.1112 21.8807 12.0965 21.8819C12.0819 21.883 12.0672 21.8806 12.0537 21.8747L6.06837 18.4627C3.40837 16.9427 2.49637 13.5853 4.02837 10.956L4.0297 10.9533ZM24.5857 15.6733L17.359 11.556L19.8604 10.132C19.8726 10.1239 19.8867 10.1189 19.9014 10.1175C19.916 10.1161 19.9308 10.1183 19.9444 10.124L25.9297 13.5333C28.5937 15.0533 29.507 18.416 27.9684 21.044C27.3127 22.1606 26.2874 23.0129 25.0697 23.4533V16.5053C25.0705 16.3363 25.0261 16.1701 24.941 16.024C24.8559 15.8779 24.7332 15.7573 24.5857 15.6747V15.6733ZM27.075 11.976C27.0168 11.9406 26.9581 11.9059 26.899 11.872L20.979 8.49867C20.8312 8.41362 20.6636 8.36886 20.493 8.36886C20.3225 8.36886 20.1549 8.41362 20.007 8.49867L12.7804 12.616V9.76534C12.7798 9.7507 12.7828 9.73615 12.789 9.72291C12.7953 9.70968 12.8047 9.69816 12.8164 9.68934L18.799 6.28267C21.4657 4.76667 24.8724 5.66934 26.4084 8.3C27.0577 9.41067 27.295 10.712 27.075 11.976ZM11.4204 17.056L8.9177 15.632C8.90464 15.6256 8.89339 15.616 8.885 15.6041C8.87662 15.5923 8.87135 15.5785 8.8697 15.564V8.744C8.87103 5.708 11.367 3.248 14.4444 3.25067C15.7457 3.25067 17.0044 3.70134 18.0057 4.52267C17.9604 4.54667 17.883 4.58934 17.831 4.62L11.911 7.99334C11.763 8.07562 11.6398 8.19609 11.5542 8.34219C11.4686 8.48829 11.4238 8.65468 11.4244 8.824L11.4204 17.0547V17.056ZM12.7804 14.1653L15.999 12.332L19.2177 14.1653V17.832L15.999 19.6653L12.779 17.832V14.1653H12.7804Z" fill="white" />
                </svg>
            ),
            position: "top-left"
        },
        {
            id: 2,
            name: "Claude Sonnet 4",
            tag: "Co-Writing Master",
            description: "Refines polished emails, essays, and scripts while keeping your style.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <g clipPath="url(#clip0_3265_11668)">
                        <path d="M6.27867 21.2733L12.572 17.744L12.6787 17.4373L12.572 17.2667H12.2667L11.2133 17.2027L7.616 17.1053L4.49733 16.976L1.476 16.8133L0.714667 16.652L0 15.712L0.0733333 15.2427L0.713333 14.8147L1.628 14.8947L3.65467 15.032L6.692 15.2427L8.89467 15.372L12.16 15.712H12.6787L12.752 15.5027L12.5733 15.372L12.436 15.2427L9.292 13.1147L5.88933 10.864L4.108 9.568L3.14267 8.91333L2.65733 8.29733L2.44667 6.95333L3.32133 5.99067L4.496 6.07067L4.796 6.152L5.98667 7.06667L8.53067 9.03467L11.852 11.4787L12.3387 11.884L12.532 11.7467L12.5573 11.6493L12.3387 11.284L10.532 8.02267L8.604 4.70267L7.74533 3.32667L7.51867 2.50133C7.4323 2.18434 7.38572 1.85783 7.38 1.52933L8.37733 0.178667L8.928 0L10.256 0.178667L10.816 0.664L11.6427 2.54933L12.9787 5.52133L15.052 9.56133L15.66 10.7587L15.984 11.868L16.1053 12.208H16.316V12.0133L16.4867 9.73867L16.8027 6.94533L17.1093 3.352L17.216 2.33867L17.7173 1.12533L18.7133 0.469333L19.492 0.842667L20.132 1.756L20.0427 2.348L19.6613 4.816L18.916 8.68667L18.4307 11.276H18.7133L19.0373 10.9533L20.3507 9.212L22.5533 6.46L23.5267 5.36667L24.66 4.16133L25.3893 3.58667H26.7667L27.78 5.092L27.3267 6.64667L25.908 8.44267L24.7333 9.96533L23.048 12.232L21.9947 14.0453L22.092 14.192L22.3427 14.1653L26.1507 13.3573L28.208 12.984L30.6627 12.564L31.7733 13.0813L31.8947 13.608L31.4573 14.684L28.832 15.332L25.7533 15.948L21.168 17.032L21.112 17.072L21.1773 17.1533L23.2427 17.348L24.1253 17.396H26.288L30.3147 17.696L31.368 18.392L32 19.2427L31.8947 19.8893L30.2747 20.716L28.088 20.1973L22.9827 18.984L21.2333 18.5453H20.9907V18.692L22.448 20.116L25.1227 22.5293L28.468 25.636L28.6373 26.4067L28.208 27.0133L27.7547 26.948L24.8147 24.7387L23.68 23.7427L21.112 21.5827H20.9413V21.8093L21.5333 22.6747L24.66 27.3693L24.8227 28.8093L24.596 29.28L23.7853 29.564L22.8947 29.4013L21.0627 26.8347L19.176 23.9453L17.652 21.3547L17.4653 21.4613L16.5667 31.1333L16.1453 31.6267L15.1733 32L14.364 31.3853L13.9347 30.3893L14.364 28.4213L14.8827 25.856L15.3027 23.816L15.684 21.2827L15.9107 20.44L15.8947 20.384L15.708 20.408L13.796 23.0307L10.8893 26.9573L8.588 29.4173L8.036 29.636L7.08 29.1427L7.16933 28.26L7.704 27.4747L10.888 23.4267L12.808 20.9173L14.048 19.4693L14.04 19.2587H13.9667L5.50933 24.7467L4.00267 24.9413L3.35333 24.3333L3.43467 23.3387L3.74267 23.0147L6.28667 21.2653L6.27867 21.2733Z" fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_3265_11668">
                            <rect width="32" height="32" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            ),
            position: "middle-left"
        },
        {
            id: 3,
            name: "Gemini 2.5 Pro",
            tag: "Long Context Master",
            description: "Handles long documents and images, tracking full context and details.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <g clipPath="url(#clip0_3265_11680)">
                        <path d="M16 32C15.3901 27.9745 13.5081 24.2498 10.6291 21.3709C7.75018 18.4919 4.0255 16.6099 0 16C4.0255 15.3901 7.75018 13.5081 10.6291 10.6291C13.5081 7.75018 15.3901 4.0255 16 0C16.6101 4.02541 18.4922 7.74999 21.3711 10.6289C24.25 13.5078 27.9746 15.3899 32 16C27.9746 16.6101 24.25 18.4922 21.3711 21.3711C18.4922 24.25 16.6101 27.9746 16 32Z" fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_3265_11680">
                            <rect width="32" height="32" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            ),
            position: "bottom-left"
        },
        {
            id: 4,
            name: "Perplexity Sonar Pro",
            tag: "Live Web Researcher",
            description: "Delivers fresh answers and news from credible, real-time sources.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                    <path d="M26.714 0V9.696H30.334V23.4933H26.4207V32L17.038 23.7413V31.9347H15.5833V23.732L6.18999 32V23.38H2.33398V9.584H6.17932V0L15.5833 8.65867V0.253333H17.0367V8.90667L26.714 0ZM17.038 12.0587V21.8173L24.966 28.796V19.2533L17.038 12.0587ZM15.5727 11.952L7.64465 19.1493V28.796L15.5727 21.8173V11.9533V11.952ZM26.4207 22.0587H28.8793V11.132H18.2807L26.4207 18.5187V22.0587ZM14.4447 11.0187H3.78732V21.9453H6.18732V18.5107L14.4433 11.0173L14.4447 11.0187ZM7.63398 3.30133V9.58133H14.454L7.63398 3.30133ZM25.2593 3.30133L18.4393 9.58133H25.2593V3.30133Z" fill="white" />
                </svg>
            ),
            position: "top-right"
        },
        {
            id: 5,
            name: "DeepSeek",
            tag: "Reasoning Specialist",
            description: "Excels at logic, math, and coding with clear, detailed solutions.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                    <g clipPath="url(#clip0_3265_11725)">
                        <path d="M31.9979 5.97567C31.6593 5.81034 31.5126 6.12634 31.3153 6.28767C31.2473 6.33967 31.1899 6.40768 31.1326 6.46901C30.6366 6.99834 30.0579 7.34501 29.3019 7.30368C28.1966 7.24234 27.2526 7.58901 26.4179 8.43434C26.2406 7.39168 25.6513 6.77034 24.7553 6.37034C24.2859 6.16234 23.8113 5.95567 23.4819 5.50367C23.2526 5.18234 23.1899 4.82367 23.0753 4.47167C23.0019 4.25834 22.9286 4.04101 22.6846 4.00501C22.4179 3.96367 22.3139 4.18634 22.2099 4.37301C21.7926 5.13567 21.6313 5.97567 21.6473 6.82634C21.6833 8.74101 22.4913 10.2663 24.0979 11.3503C24.2806 11.4743 24.3273 11.5997 24.2699 11.781C24.1606 12.1543 24.0299 12.517 23.9153 12.8917C23.8419 13.1303 23.7326 13.181 23.4766 13.0783C22.6116 12.7066 21.8259 12.1725 21.1619 11.505C20.0193 10.401 18.9873 9.18234 17.6993 8.22767C17.4008 8.00716 17.0944 7.79769 16.7806 7.59967C15.4673 6.32367 16.9539 5.27567 17.2979 5.15167C17.6579 5.02101 17.4219 4.57567 16.2593 4.58101C15.0966 4.58634 14.0326 4.97434 12.6766 5.49301C12.4751 5.57022 12.2678 5.6313 12.0566 5.67567C10.7894 5.43692 9.49345 5.39107 8.21258 5.53968C5.69925 5.81968 3.69258 7.00901 2.21658 9.03701C0.443251 11.4743 0.0259173 14.245 0.536584 17.133C1.07392 20.1783 2.62858 22.6997 5.01658 24.6703C7.49392 26.7143 10.3459 27.7157 13.6006 27.5237C15.5766 27.4103 17.7779 27.145 20.2593 25.0437C20.8859 25.3557 21.5419 25.4797 22.6326 25.573C23.4726 25.6517 24.2806 25.533 24.9059 25.4023C25.8859 25.1943 25.8179 24.2863 25.4646 24.121C22.5913 22.7823 23.2219 23.3277 22.6473 22.8863C24.1086 21.1583 26.3086 19.3637 27.1699 13.549C27.2366 13.0863 27.1793 12.7957 27.1699 12.4223C27.1646 12.1957 27.2166 12.1063 27.4766 12.081C28.198 12.0062 28.8978 11.791 29.5366 11.4477C31.3979 10.4303 32.1499 8.76101 32.3273 6.75834C32.3539 6.45167 32.3219 6.13701 31.9979 5.97567ZM15.7753 23.9997C12.9899 21.8103 11.6393 21.089 11.0819 21.1197C10.5593 21.1517 10.6539 21.7477 10.7686 22.137C10.8886 22.521 11.0446 22.785 11.2633 23.1223C11.4153 23.345 11.5193 23.677 11.1126 23.9263C10.2153 24.481 8.65658 23.7397 8.58325 23.7037C6.76858 22.6343 5.24992 21.2237 4.18192 19.2943C3.14992 17.437 2.54992 15.445 2.45125 13.3183C2.42458 12.8037 2.57525 12.6223 3.08725 12.529C3.7594 12.4004 4.44809 12.3828 5.12592 12.477C7.96858 12.893 10.3873 14.1637 12.4166 16.1757C13.5739 17.3223 14.4499 18.6917 15.3526 20.0303C16.3126 21.4517 17.3446 22.8063 18.6593 23.9157C19.1233 24.305 19.4926 24.601 19.8473 24.8183C18.7779 24.9383 16.9939 24.965 15.7753 23.9997ZM17.1086 15.413C17.1084 15.3468 17.1242 15.2815 17.1549 15.2228C17.1856 15.1641 17.23 15.1137 17.2845 15.076C17.339 15.0383 17.4018 15.0145 17.4676 15.0065C17.5333 14.9986 17.6 15.0067 17.6619 15.0303C17.7408 15.0586 17.8089 15.1108 17.8567 15.1797C17.9045 15.2485 17.9296 15.3305 17.9286 15.4143C17.9288 15.4685 17.9182 15.5221 17.8974 15.5721C17.8767 15.6221 17.8462 15.6675 17.8077 15.7056C17.7692 15.7437 17.7235 15.7738 17.6733 15.794C17.6231 15.8143 17.5694 15.8244 17.5153 15.8237C17.4615 15.8239 17.4083 15.8133 17.3587 15.7927C17.3091 15.772 17.2641 15.7417 17.2263 15.7035C17.1886 15.6652 17.1588 15.6198 17.1389 15.57C17.1189 15.5201 17.1077 15.4667 17.1086 15.413ZM21.2553 17.541C20.9886 17.649 20.7233 17.7423 20.4686 17.7543C20.0855 17.7677 19.7095 17.648 19.4046 17.4157C19.0393 17.109 18.7779 16.9383 18.6686 16.405C18.6309 16.1444 18.6381 15.8792 18.6899 15.621C18.7833 15.185 18.6793 14.905 18.3713 14.6517C18.1219 14.4437 17.8033 14.3863 17.4539 14.3863C17.3343 14.3794 17.2181 14.3437 17.1153 14.2823C16.9686 14.2103 16.8486 14.029 16.9633 13.805C17.0006 13.733 17.1766 13.557 17.2193 13.525C17.6939 13.2557 18.2419 13.3437 18.7473 13.5463C19.2166 13.7383 19.5713 14.0903 20.0819 14.589C20.6033 15.1903 20.6979 15.357 20.9953 15.8077C21.2299 16.161 21.4433 16.5237 21.5886 16.9383C21.6779 17.1983 21.5633 17.4103 21.2553 17.541Z" fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_3265_11725">
                            <rect width="32" height="32" fill="white" transform="translate(0.333984)" />
                        </clipPath>
                    </defs>
                </svg>
            ),
            position: "middle-right"
        },
        {
            id: 6,
            name: "Grok 4",
            tag: "Creative Powerhouse",
            description: "Bold, unconventional ideas and punchy copy for trend-focused content.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                    <g clipPath="url(#clip0_3265_11737)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.694 20.3872L23.3313 12.5246C23.8527 12.1379 24.598 12.2886 24.8473 12.8872C26.154 16.0459 25.57 19.8406 22.9673 22.4459C20.366 25.0512 16.7447 25.6219 13.4353 24.3206L9.82065 25.9966C15.006 29.5446 21.302 28.6672 25.2367 24.7259C28.358 21.6006 29.3247 17.3406 28.4207 13.4992L28.4287 13.5086C27.118 7.8659 28.7513 5.6099 32.0953 0.997903C32.1753 0.88857 32.2553 0.779236 32.334 0.667236L27.9327 5.0739V5.06057L12.69 20.3899M10.498 22.2979C6.77532 18.7379 7.41798 13.2299 10.5927 10.0526C12.9407 7.7019 16.7887 6.7419 20.1473 8.15257L23.754 6.4859C23.0043 5.93446 22.1841 5.48602 21.3153 5.15257C19.131 4.25857 16.7312 4.03043 14.4176 4.49685C12.104 4.96327 9.97993 6.10343 8.31265 7.7739C4.93532 11.1552 3.87265 16.3552 5.69665 20.7926C7.05932 24.1086 4.82598 26.4539 2.57665 28.8219C1.77798 29.6619 0.977984 30.5006 0.333984 31.3886L10.494 22.3019" fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_3265_11737">
                            <rect width="32" height="32" fill="white" transform="translate(0.333984)" />
                        </clipPath>
                    </defs>
                </svg>
            ),
            position: "bottom-right"
        }
    ];

    const centerLogo = (
        // Extracted mark from provided ai.svg (only the left logo group)
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="104" viewBox="0 0 46.3 40" fill="none" aria-label="AI Logo">
            <g clipPath="url(#clip0_ai_mark)">
                <path d="M25.3476 32.9657C25.2934 32.7371 25.3843 32.7312 25.5044 32.6111C25.6949 32.4206 27.355 31.0756 27.4795 31.058C30.1418 31.9371 35.9982 33.5855 36.3352 29.2279C36.6517 25.1312 31.3198 18.4016 28.2795 15.8946C27.3564 15.1342 27.1542 14.9012 25.9366 15.3144C23.3535 16.1906 17.9586 20.5759 22.4026 22.7239C22.637 23.0668 21.5088 23.7715 21.1997 23.9093C18.8773 24.9393 17.9938 21.4389 18.1843 19.7217C18.5725 16.2272 25.3623 11.1181 28.7953 13.0345C31.396 14.4866 36.0202 20.5129 37.3447 23.2397C42.1271 33.0946 35.2949 36.8485 26.3733 33.332C26.0334 33.1986 25.8033 32.8602 25.3476 32.9657Z" fill="url(#g0)" />
                <path d="M21.0979 7.47378L18.9499 9.34045C17.7352 8.98001 16.5631 8.52579 15.2927 8.37048C13.366 8.13312 10.5367 8.30162 10.2554 10.769C9.76305 15.1075 14.6246 21.2188 17.7264 23.9588C18.6217 24.75 19.0803 25.4078 20.3755 25.1368C21.8773 24.8218 25.5521 21.9705 25.7748 20.4276C25.9696 19.0782 25.4656 17.9939 24.1235 17.5793C23.9374 17.5602 24.0121 17.3961 24.1015 17.2877C24.2026 17.1661 25.3352 16.3778 25.4891 16.3309C27.6883 15.6701 28.5821 18.7529 28.4092 20.4247C28.0283 24.117 20.9044 29.5851 17.448 27.1632C16.4107 26.4364 14.418 24.3895 13.533 23.3932C10.5543 20.0393 6.20115 13.5544 8.13521 8.94045C10.2275 3.94997 17.2927 5.79173 21.0993 7.47524L21.0979 7.47378Z" fill="url(#g1)" />
                <path d="M10.255 21.9778C10.3005 22.0423 10.5232 22.1258 10.6243 22.262C11.1239 22.9404 11.6968 23.5573 12.1657 24.2576C11.8345 25.6877 11.1444 27.0371 11.0067 28.5155C10.2521 36.5668 18.9935 32.1785 22.4631 29.7155C25.7789 27.3639 28.5159 24.1478 30.9891 20.9536C33.1005 23.128 31.3642 24.8027 29.8184 26.5214C26.1583 30.5917 18.4338 36.8569 12.6228 35.5075C8.17006 34.473 7.98691 29.9456 8.79131 26.2254C8.8719 25.8503 9.11219 25.0445 9.23087 24.6137C9.34955 24.1829 9.52684 23.5895 9.67043 23.1485C9.77739 22.8217 10.0338 22.2518 10.2565 21.9763L10.255 21.9778Z" fill="url(#g2)" />
                <path d="M37.3608 14.2123C37.2744 14.5434 37.0282 15.3727 36.9213 15.6775C36.8685 15.8255 36.5843 16.4643 36.4817 16.7031C36.3498 17.0123 35.9733 17.6584 35.7491 17.8753C35.3813 17.3947 34.1901 16.2826 34.1374 15.7361C34.7938 13.572 36.3645 9.20716 34.1271 7.55441C31.5586 5.65697 26.3909 8.56247 24.1271 10.1361C20.6839 12.5302 17.7081 15.7713 15.3096 19.191C12.9286 16.9918 15.1528 14.9405 16.7733 13.1837C19.9132 9.78005 25.4048 5.46064 30.0275 4.60642C36.8187 3.35221 38.8905 8.35734 37.3608 14.2108V14.2123Z" fill="url(#g3)" />
                {/* soft extras kept minimal */}
            </g>
            <defs>
                <linearGradient id="g0" x1="38.9175" y1="34.6246" x2="16.9475" y2="13.9017" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#39D47A" />
                    <stop offset="1" stopColor="#009CD0" />
                </linearGradient>
                <linearGradient id="g1" x1="28.4301" y1="27.7618" x2="6.41106" y2="7.02533" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#39D47A" />
                    <stop offset="1" stopColor="#009CD0" />
                </linearGradient>
                <linearGradient id="g2" x1="31.9675" y1="35.6943" x2="18.7082" y2="14.5132" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#39D47A" />
                    <stop offset="1" stopColor="#009CD0" />
                </linearGradient>
                <linearGradient id="g3" x1="37.8379" y1="19.191" x2="24.5348" y2="-2.02558" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#39D47A" />
                    <stop offset="1" stopColor="#009CD0" />
                </linearGradient>
                <clipPath id="clip0_ai_mark">
                    <rect width="46.2989" height="40" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );

    // Refs and state for dynamic connector paths
    const containerRef = useRef(null);
    const hubRef = useRef(null);
    const cardRefs = useRef({});
    const [containerSize, setContainerSize] = useState({ width: 1200, height: 800 });
    const [paths, setPaths] = useState([]);

    // Connection helpers: map card position -> line width to central hub (used for spacing only)
    const getConnectionConfig = (position) => {
        // Tuned to the container/ring sizes below so the lines meet the hub neatly.
        switch (position) {
            case "top-left":
                return { side: "left", lineW: "360px", offsetY: "-12px" };
            case "middle-left":
                return { side: "left", lineW: "330px", offsetY: "0px" };
            case "bottom-left":
                return { side: "left", lineW: "360px", offsetY: "12px" };
            case "top-right":
                return { side: "right", lineW: "360px", offsetY: "-12px" };
            case "middle-right":
                return { side: "right", lineW: "330px", offsetY: "0px" };
            case "bottom-right":
                return { side: "right", lineW: "360px", offsetY: "12px" };
            default:
                return { side: "left", lineW: "320px", offsetY: "0px" };
        }
    };

    // Build curved-then-straight connector path between a card and the hub boundary
    const buildPath = (side, sx, sy, ex, ey) => {
        const elbow = 80; // how long the straight sections feel
        const cp1x = side === 'left' ? sx + elbow : sx - elbow;
        const cp1y = sy;
        const cp2x = side === 'left' ? ex - elbow : ex + elbow;
        const cp2y = ey; // ensures final approach is horizontal/straight into hub
        return `M ${sx} ${sy} C ${cp1x} ${cp1y} ${cp2x} ${cp2y} ${ex} ${ey}`;
    };
    const buildStraight = (sx, sy, ex, ey) => `M ${sx} ${sy} L ${ex} ${ey}`;

    // Measure and compute paths on layout changes
    useEffect(() => {
        const measure = () => {
            const c = containerRef.current;
            const hub = hubRef.current;
            if (!c || !hub) return;
            const crect = c.getBoundingClientRect();
            const hrect = hub.getBoundingClientRect();
            const width = Math.max(1, Math.round(crect.width));
            const height = Math.max(1, Math.round(crect.height));
            setContainerSize({ width, height });

            // Replace the section starting from line ~108 in the useEffect where paths are calculated:

            const hx = hrect.left - crect.left + hrect.width / 2;
            const hy = hrect.top - crect.top + hrect.height / 2;
            const r = Math.min(hrect.width, hrect.height) / 2;
            const endLeftX = hx - r + 2;   // tangent contact with hub (left) - closer to hub
            const endRightX = hx + r - 2;  // tangent contact with hub (right) - closer to hub

            // Join points where side paths converge - also brought closer
            const joinOffset = 25; // reduced from 60
            const joinLeftX = hx - r - joinOffset;
            const joinRightX = hx + r + joinOffset;

            const nextPaths = [];

            const leftModels = aiModels.filter(m => m.position.includes('left'));
            for (const model of leftModels) {
                const el = cardRefs.current[model.id];
                if (!el) continue;
                const rect = el.getBoundingClientRect();
                const sx = rect.right - crect.left;
                const sy = rect.top - crect.top + rect.height / 2;
                // Middle-left (Claude) goes straight to join; others curve into the join
                if (model.position === 'middle-left') {
                    nextPaths.push({ id: `${model.id}-to-join`, side: 'left', d: buildStraight(sx, sy, joinLeftX, hy) });
                } else {
                    nextPaths.push({ id: `${model.id}-to-join`, side: 'left', d: buildPath('left', sx, sy, joinLeftX, hy) });
                }
            }
            // Single segment from join to hub on left
            if (leftModels.length) {
                nextPaths.push({ id: `left-join-to-hub`, side: 'left', d: buildStraight(joinLeftX, hy, endLeftX, hy) });
            }

            // Right side (kept consistent): top/bottom curve to join; middle goes straight
            const rightModels = aiModels.filter(m => m.position.includes('right'));
            for (const model of rightModels) {
                const el = cardRefs.current[model.id];
                if (!el) continue;
                const rect = el.getBoundingClientRect();
                const sx = rect.left - crect.left;
                const sy = rect.top - crect.top + rect.height / 2;
                if (model.position === 'middle-right') {
                    nextPaths.push({ id: `${model.id}-to-join`, side: 'right', d: buildStraight(sx, sy, joinRightX, hy) });
                } else {
                    nextPaths.push({ id: `${model.id}-to-join`, side: 'right', d: buildPath('right', sx, sy, joinRightX, hy) });
                }
            }
            if (rightModels.length) {
                nextPaths.push({ id: `right-join-to-hub`, side: 'right', d: buildStraight(joinRightX, hy, endRightX, hy) });
            }
            setPaths(nextPaths);
        };

        // Observe size changes
        const ro = new ResizeObserver(() => measure());
        if (containerRef.current) ro.observe(containerRef.current);
        if (hubRef.current) ro.observe(hubRef.current);
        Object.values(cardRefs.current).forEach((el) => el && ro.observe(el));

        window.addEventListener('resize', measure);
        const id = requestAnimationFrame(measure);
        return () => {
            window.removeEventListener('resize', measure);
            cancelAnimationFrame(id);
            ro.disconnect();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section id="workflow" className="relative py-10 text-foreground overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="text-[24px] sm:text-3xl md:text-4xl lg:text-[60px] font-bold mb-4">
                        Pick the best <span className="text-violet-600 dark:text-violet-400">characteristics</span>
                        <br />
                        of each <span className="text-violet-600 dark:text-violet-400">AI model</span>
                    </h2>
                </motion.div>

                {/* Responsive layout: stacked cards for md and below, original for lg+ */}
                <div className="relative mx-auto w-full">
                    {/* Large screens: show logo, connectors, left/right stacks */}
                    <div className="hidden lg:block">
                        <div ref={containerRef} className="relative mx-auto max-w-7xl h-[760px]">
                            {/* Connector overlay (SVG) */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox={`0 0 ${containerSize.width} ${containerSize.height}`} preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="connGradientL" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.75" />
                                        <stop offset="100%" stopColor="#D946EF" stopOpacity="0.75" />
                                    </linearGradient>
                                    <linearGradient id="connGradientR" x1="100%" y1="0%" x2="0%" y2="0%">
                                        <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.75" />
                                        <stop offset="100%" stopColor="#D946EF" stopOpacity="0.75" />
                                    </linearGradient>
                                </defs>
                                {paths.map((p) => (
                                    <motion.path
                                        key={p.id}
                                        d={p.d}
                                        stroke={p.side === 'left' ? 'url(#connGradientL)' : 'url(#connGradientR)'}
                                        strokeWidth={2}
                                        fill="none"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        whileInView={{ pathLength: 1, opacity: 0.7 }}
                                        viewport={{ once: false }}
                                        transition={{ duration: 1.2, ease: 'easeOut' }}
                                    />
                                ))}
                            </svg>
                            {/* Central Hub with layered glow/rings */}
                            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                                <div className="relative">
                                    {/* Big radial glow (purple) */}
                                    <div className="absolute -inset-[180px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.10)_0%,rgba(217,70,239,0.06)_35%,transparent_70%)] blur-2xl" />

                                    {/* Outer glow (border removed) - purple */}
                                    <div className="relative w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.08)_0%,rgba(217,70,239,0.05)_45%,transparent_60%)]" />

                                    {/* Logo chip (theme-aware) */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8 }}
                                        ref={hubRef}
                                        className="absolute inset-0 m-[140px] rounded-full bg-white/80 dark:bg-background/80 backdrop-blur-sm border border-neutral-200/70 dark:border-white/10 flex items-center justify-center shadow-2xl"
                                    >
                                        {centerLogo}
                                    </motion.div>
                                </div>
                            </div>

                            {/* Left stack */}
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-6 md:gap-8">
                                {aiModels.filter(m => m.position.includes('left')).map((model, idx) => {
                                    const { lineW, offsetY } = getConnectionConfig(model.position);
                                    return (
                                        <motion.div
                                            key={model.id}
                                            initial={{ opacity: 0, x: -30 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: idx * 0.08 }}
                                            style={{ ['--line-w']: lineW, ['--offset-y']: offsetY }}
                                            className="relative group w-[420px] md:w-[460px]"
                                            ref={(el) => {
                                                if (el) cardRefs.current[model.id] = el;
                                            }}
                                        >
                                            <div>
                                                <div className="relative bg-white/80 dark:bg-[#0C0F10]/90 backdrop-blur-md border border-neutral-200/70 dark:border-white/10 border-r-4 border-b-4 border-r-violet-500 border-b-violet-500 dark:border-r-violet-400 dark:border-b-violet-400 rounded-2xl p-6 shadow-xl">
                                                    <div className="flex items-start gap-3">
                                                        <div className="relative p-3 bg-gradient-to-br from-violet-600/10 to-fuchsia-600/10 dark:from-violet-500/15 dark:to-fuchsia-500/15 rounded-xl border border-violet-600/20 dark:border-violet-400/25">{model.icon}</div>
                                                        <div className="flex-1">
                                                            <h3 className="text-lg md:text-xl font-semibold">{model.name}</h3>
                                                            <div className="mt-1 inline-block px-3 py-1 bg-violet-500/10 dark:bg-violet-500/15 text-violet-700 dark:text-violet-300 text-xs md:text-sm rounded-full border border-violet-600/20 dark:border-violet-400/25">{model.tag}</div>
                                                            <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{model.description}</p>
                                                        </div>
                                                    </div>
                                                    {/* hover glow */}
                                                    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-400/10 to-fuchsia-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            {/* Right stack */}
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-6 md:gap-8 items-end">
                                {aiModels.filter(m => m.position.includes('right')).map((model, idx) => {
                                    const { lineW, offsetY } = getConnectionConfig(model.position);
                                    return (
                                        <motion.div
                                            key={model.id}
                                            initial={{ opacity: 0, x: 30 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: idx * 0.08 }}
                                            style={{ ['--line-w']: lineW, ['--offset-y']: offsetY }}
                                            className="relative group w-[420px] md:w-[460px]"
                                            ref={(el) => {
                                                if (el) cardRefs.current[model.id] = el;
                                            }}
                                        >
                                            <div>
                                                <div className="relative bg-white/80 dark:bg-[#0C0F10]/90 backdrop-blur-md border border-neutral-200/70 dark:border-white/10 border-r-4 border-b-4 border-r-violet-500 border-b-violet-500 dark:border-r-violet-400 dark:border-b-violet-400 rounded-2xl p-6 shadow-xl">
                                                    <div className="flex items-start gap-3">
                                                        <div className="relative p-3 bg-gradient-to-br from-violet-600/10 to-fuchsia-600/10 dark:from-violet-500/15 dark:to-fuchsia-500/15 rounded-xl border border-violet-600/20 dark:border-violet-400/25">{model.icon}</div>
                                                        <div className="flex-1">
                                                            <h3 className="text-lg md:text-xl font-semibold">{model.name}</h3>
                                                            <div className="mt-1 inline-block px-3 py-1 bg-violet-500/10 dark:bg-violet-500/15 text-violet-700 dark:text-violet-300 text-xs md:text-sm rounded-full border border-violet-600/20 dark:border-violet-400/25">{model.tag}</div>
                                                            <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{model.description}</p>
                                                        </div>
                                                    </div>
                                                    {/* hover glow */}
                                                    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-l from-violet-400/10 to-fuchsia-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            {/* Subtle floating particles */}
                            <div className="absolute inset-0 pointer-events-none">
                                {[...Array(18)].map((_, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: [0, 1, 0] }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 3.2, delay: (i % 6) * 0.3, repeat: Infinity, repeatDelay: 1.2 }}
                                        className="absolute w-1 h-1 rounded-full bg-fuchsia-500/30 dark:bg-fuchsia-400/40"
                                        style={{ left: `${(i * 53) % 100}%`, top: `${(i * 37) % 100}%` }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Medium and small screens: stacked cards, no logo or connectors */}
                    <div className="block lg:hidden">
                        <div className="flex flex-col items-center gap-4 sm:gap-6 w-full max-w-2xl mx-auto mt-8">
                            {aiModels.map((model, idx) => (
                                <motion.div
                                    key={model.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                                    className="w-full"
                                >
                                    <div className="relative bg-white/80 dark:bg-[#0C0F10]/90 backdrop-blur-md border border-neutral-200/70 dark:border-white/10 border-r-4 border-b-4 border-r-violet-500 border-b-violet-500 dark:border-r-violet-400 dark:border-b-violet-400 rounded-2xl p-3 sm:p-4 shadow-xl min-h-[110px]">
                                        <div className="flex items-start gap-2 sm:gap-3">
                                            <div className="relative p-2 sm:p-3 bg-gradient-to-br from-violet-600/10 to-fuchsia-600/10 dark:from-violet-500/15 dark:to-fuchsia-500/15 rounded-xl border border-violet-600/20 dark:border-violet-400/25">{model.icon}</div>
                                            <div className="flex-1">
                                                <h3 className="text-base sm:text-lg md:text-xl font-semibold">{model.name}</h3>
                                                <div className="mt-1 inline-block px-2 sm:px-3 py-1 bg-violet-500/10 dark:bg-violet-500/15 text-violet-700 dark:text-violet-300 text-xs sm:text-sm rounded-full border border-violet-600/20 dark:border-violet-400/25">{model.tag}</div>
                                                <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-foreground/70 leading-relaxed">{model.description}</p>
                                            </div>
                                        </div>
                                        {/* hover glow */}
                                        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-400/10 to-fuchsia-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AIModels;