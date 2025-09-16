"use client";
import BackToTopButton from "./ui/BackToTopButton";
import BackgroundBeamsWithCollision from "./hero-components/BackgroundBeams";

export default function DataDeletion() {
    return (
        <>
            <BackgroundBeamsWithCollision>
                <section className="relative w-full mx-auto max-w-3xl px-4 py-16 sm:py-24 md:py-28 text-foreground">
                    <div className="mb-8 text-center">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-2 text-purple-600 dark:text-purple-400">Data Deletion & Retention Policy</h1>
                        <p className="text-base sm:text-lg text-foreground/80">Effective date: September 16, 2025</p>
                    </div>
                    <div className="space-y-8 text-left">
                        <div>
                            <h2 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">How you can request deletion (choose any)</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>WhatsApp: message "DELETE" in our chat.</li>
                                <li>Email: subject "Data Deletion Request" → coffeemustache369@gmail.com from your registered email/phone.</li>
                                <li>In-app/web form: (when enabled) submit from the same phone/email.</li>
                            </ul>
                            <p className="text-base text-foreground/90 mt-2">We will acknowledge your request within 72 hours and complete deletion within 30 days (often sooner), unless retention is required by law (e.g., tax records).</p>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">What we delete</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Customer profile: name, phone, email, saved preferences.</li>
                                <li>Personalization & session history: favorites, visit streaks, local recommendations.</li>
                                <li>Marketing consents: we set marketing to opt-out and suppress future campaigns.</li>
                                <li>WhatsApp marketing data: lists, tags, segments tied to your number.</li>
                                <li>Support/chat content: we remove user-identifiable messages from our CRM where feasible.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">What we retain (and why)</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Order, invoice, and transaction records: retained for legal/financial purposes (typically 7 years).</li>
                                <li>Security/fraud logs: minimal elements kept up to 13 months.</li>
                                <li>Backups: encrypted backups may retain data up to 90 days after deletion, then are purged on a rolling basis.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">WhatsApp-specific</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Opt-out: send "STOP" anytime to stop all marketing on WhatsApp.</li>
                                <li>Utility messages: if you place an order, we may still send essential updates required to deliver the service you requested.</li>
                                <li>Deletion via WhatsApp: sending "DELETE" triggers our standard identity verification and deletion workflow.</li>
                                <li>BSP/Meta logs: delivery/read receipts may persist for audit for up to 13 months.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">Staff (biometric) deletion</h2>
                            <p className="text-base text-foreground/90">On request from the café/admin or the staff member, we will stop processing and delete biometric vectors (via FaceIO) and remove attendance mappings, except where required for payroll disputes or legal obligations.</p>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">Café owners/admins</h2>
                            <p className="text-base text-foreground/90">When a café terminates service, we delete their dashboard users and café-level configurations within 30 days, after required invoice/records retention.</p>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">Identity verification</h2>
                            <p className="text-base text-foreground/90">To protect you, we may ask you to verify access to the registered phone/email (or provide a nominal OTP) before actioning deletion.</p>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">Confirmation</h2>
                            <p className="text-base text-foreground/90">We will send a confirmation message on WhatsApp or email when deletion is complete (or explain any lawful retention).</p>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">Contact (Grievance/Privacy)</h2>
                            <p className="text-base text-foreground/90">coffeemustache369@gmail.com</p>
                        </div>
                    </div>
                </section>
            </BackgroundBeamsWithCollision>
            <BackToTopButton scrollThreshold={180} />
        </>
    );
}
