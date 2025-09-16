"use client";
import BackToTopButton from "./ui/BackToTopButton";
import BackgroundBeamsWithCollision from "./hero-components/BackgroundBeams";

export default function PrivacyPolicy() {
    return (
        <>
            <BackgroundBeamsWithCollision>
                <section className="relative w-full mx-auto max-w-3xl px-4 py-16 sm:py-24 md:py-28 text-foreground">
                    <div className="mb-8 text-center">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-2 text-purple-600 dark:text-purple-400">Privacy Policy</h1>
                        <p className="text-base sm:text-lg text-foreground/80">Effective date: September 16, 2025</p>
                    </div>
                    <div className="space-y-8 text-left">
                        <div>
                            <h2 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">Who we are</h2>
                            <p className="text-base text-foreground/90">Coffee Mustache ("we", "our", "us") builds an AI-powered customer experience layer for cafés (QR/NFC menu, personalization, upsell, waiter/bill requests, WhatsApp support). This Privacy Policy explains what we collect, why we collect it, how we use it, and your choices.</p>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">Scope</h2>
                            <p className="text-base text-foreground/90">This policy covers: (a) diners/customers, (b) café owners/admins and staff, and (c) visitors to our website/WhatsApp/links.</p>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">Data we collect</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>
                                    <span className="font-semibold">A. You share with us</span>
                                    <ul className="list-disc pl-6">
                                        <li>Contact: name, phone number, email (e.g., when placing an order, joining loyalty, or chatting with us on WhatsApp).</li>
                                        <li>Profile (optional): preferences, dietary tags, favorite items, birthday/month.</li>
                                        <li>Order & feedback: cart items, order history, ratings, comments.</li>
                                    </ul>
                                </li>
                                <li>
                                    <span className="font-semibold">B. Collected automatically</span>
                                    <ul className="list-disc pl-6">
                                        <li>Usage & device: pages viewed, clicks, time on page, browser/OS, screen size, app version, IP (for security).</li>
                                        <li>Location (only if you allow it): to find nearby cafés or tailor suggestions.</li>
                                        <li>Table/session context: café id, table id (from QR/NFC).</li>
                                    </ul>
                                </li>
                                <li>
                                    <span className="font-semibold">C. Staff (café employees, if enabled by the café)</span>
                                    <ul className="list-disc pl-6">
                                        <li>Attendance & role data.</li>
                                        <li>Biometric vectors (FaceIO) for touchless attendance/anti-spoofing. We never store raw photos/video; FaceIO handles biometric processing.</li>
                                    </ul>
                                </li>
                                <li>
                                    <span className="font-semibold">D. From third parties</span>
                                    <ul className="list-disc pl-6">
                                        <li>Café partners share order/fulfillment status, offers, inventory signals.</li>
                                        <li>WhatsApp Business Solution Provider (BSP) shares delivery/read status.</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">Why we use your data (examples)</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Utility messages on WhatsApp: order confirmations, updates, bill/valet status, support.</li>
                                <li>Personalization: show relevant items, reorder favorites, time-of-day suggestions.</li>
                                <li>Loyalty & receipts: track visits, Mustache points, send receipts.</li>
                                <li>Product safety & analytics: detect fraud/abuse, improve reliability and UX.</li>
                                <li>Marketing (only with opt-in): send café events, offers, new features via WhatsApp/SMS/email. You can opt out anytime.</li>
                            </ul>
                            <div className="mt-2">
                                <span className="font-semibold">WhatsApp-specific:</span>
                                <p className="text-base text-foreground/90 mt-1">We only message users who have opted in (e.g., by tapping "Contact on WhatsApp," scanning a code that clearly states you agree to receive updates, or replying "YES"). You can opt out anytime by sending "STOP" on WhatsApp.</p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">Legal basis (plain English)</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>To provide the service you request (orders, receipts, support).</li>
                                <li>Your consent (e.g., marketing, location, WhatsApp opt-in).</li>
                                <li>Legitimate interests (fraud prevention, service analytics), balanced with your rights.</li>
                                <li>Legal obligations (tax/audit/records).</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">Sharing your data</h2>
                            <p className="text-base text-foreground/90 mb-2">We do not sell personal data. We share only with:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Café partners you interact with (to prepare and serve your order, run loyalty, post-order ads).</li>
                                <li>Vendors/Processors: hosting (e.g., AWS), analytics, FaceIO (biometric vectors only), WhatsApp BSP/Meta for message delivery. All under contracts and access controls.</li>
                                <li>Law enforcement/Regulators: when required by law.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">International transfers</h2>
                            <p className="text-base text-foreground/90">If data is processed outside India, we apply contracts and safeguards (standard contractual clauses or BSP/Meta processor terms).</p>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">Retention (how long we keep data)</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Customer account/consent records: as long as your account/relationship exists + up to 24 months after last activity, unless you ask us to delete sooner.</li>
                                <li>Orders, invoices, tax/finance records: kept as required by law (typically 7 years).</li>
                                <li>WhatsApp event logs (delivery/read): up to 13 months for audit/dispute.</li>
                                <li>Backups: securely retained and then purged on a rolling schedule (see Data Deletion Policy).</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">Security</h2>
                            <p className="text-base text-foreground/90">We use encryption in transit, access controls, and least-privilege practices. No system is 100% secure; we continually improve safeguards.</p>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">Children</h2>
                            <p className="text-base text-foreground/90">Our service is intended for adults. If you are under 18, use the service only with parent/guardian consent.</p>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">Your rights (DPDP, India)</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Access/Portability: ask what we hold.</li>
                                <li>Correction: fix inaccurate data.</li>
                                <li>Deletion: ask us to erase data (see Data Deletion Policy).</li>
                                <li>Withdraw consent: e.g., type "STOP" on WhatsApp or email us.</li>
                                <li>Grievance: coffeemustache369@gmail.com (Subject: "Grievance – Privacy").</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">Changes</h2>
                            <p className="text-base text-foreground/90">If we materially change this policy, we'll notify you in-app or via WhatsApp/email and post the new date above.</p>
                        </div>
                    </div>
                </section>
            </BackgroundBeamsWithCollision>
            <BackToTopButton scrollThreshold={180} />
        </>
    );
}
