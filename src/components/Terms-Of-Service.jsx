"use client";
import BackToTopButton from "./ui/BackToTopButton";
import BackgroundBeamsWithCollision from "./hero-components/BackgroundBeams";

export default function TermsOfService() {
    return (
        <>
            <BackgroundBeamsWithCollision>
                <section className="relative w-full mx-auto max-w-3xl px-4 py-16 sm:py-24 md:py-28 text-foreground">
                    <div className="mb-8 text-center">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-2 text-purple-600 dark:text-purple-400">Terms Of Service</h1>
                        <p className="text-base sm:text-lg text-foreground/80">Effective date: September 16, 2025</p>
                    </div>
                    <div className="space-y-8 text-left">
                        <div>
                            <h2 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">Welcome</h2>
                            <p className="text-base text-foreground/90">Thanks for using Coffee Mustache. By accessing our website, QR/NFC menus, or WhatsApp Concierge, you agree to these Terms.</p>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">Who can use it</h2>
                            <p className="text-base text-foreground/90">Adults 18+ (or under a guardian's supervision). Café owners/admins represent they're authorized to act for their business.</p>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">What we offer (high level)</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>QR/NFC menu, personalization, upsell, waiter/bill/valet requests, and WhatsApp Concierge.</li>
                                <li>Works alongside any POS; cafés can add premium modules separately.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">Platform/Convenience fee for diners</h2>
                            <p className="text-base text-foreground/90">If you place an order through our digital flow, a small platform fee may apply.</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>The fee (₹-slab) is clearly shown before checkout.</li>
                                <li>If you prefer, you can order directly through the waiter and avoid this fee.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">Your account & conduct</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Keep your login and WhatsApp secure; you're responsible for activity.</li>
                                <li>Don't misuse the platform (spam, scrape, hack, illegal content). We may suspend accounts that violate these Terms.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">Content you share</h2>
                            <p className="text-base text-foreground/90">Reviews/feedback you submit can be shown to cafés or used to improve our services. You grant us a non-exclusive license to use such content for operations and promotion, with attribution kept anonymous unless you consent otherwise.</p>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">Communications & consent (WhatsApp)</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>We'll send utility updates (orders, receipts, valet/waiter updates) as part of the service.</li>
                                <li>Marketing on WhatsApp happens only if you opt in; you can opt out anytime by sending "STOP".</li>
                                <li>Message frequency is modest and context-based; standard data charges may apply.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">IP & licenses</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>We own all platform IP (software, design, trademarks). You agree not to copy, reverse engineer, or resell without permission.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">Third-party services</h2>
                            <p className="text-base text-foreground/90">Some features rely on third-party providers (e.g., FaceIO, hosting, WhatsApp). Their terms apply in addition to ours.</p>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">Warranties & liability (plain English)</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>We provide the service "as is." We aim for reliability but don't promise no interruptions.</li>
                                <li>To the extent allowed by law, we are not liable for indirect or incidental damages. For direct damages, our total liability is limited to the amount you paid to us in the last 12 months (if any).</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">Termination</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>You can stop using the service anytime. We may suspend or terminate access for misuse or legal reasons.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">Governing law & disputes</h2>
                            <p className="text-base text-foreground/90">Indian law applies; courts/arbitration in Hyderabad, Telangana.</p>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">Changes to Terms</h2>
                            <p className="text-base text-foreground/90">We may update these Terms. If material, we'll notify you; continued use means acceptance.</p>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">Contact</h2>
                            <p className="text-base text-foreground/90">coffeemustache369@gmail.com</p>
                        </div>
                    </div>
                </section>
            </BackgroundBeamsWithCollision>
            <BackToTopButton scrollThreshold={180} />
        </>
    );
}
