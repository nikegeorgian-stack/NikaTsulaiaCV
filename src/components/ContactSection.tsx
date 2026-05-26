"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { AnimatedSection, AnimatedFadeIn } from "./AnimatedSection";
import Image from "next/image";
import { CvDownloadButton } from "./CvDownloadButton";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  WHATSAPP_URL,
  TELEGRAM_URL,
  FACEBOOK_MESSENGER_URL,
} from "@/lib/contactLinks";

export function ContactSection() {
  const { t } = useLanguage();

  const contactItems = [
    { icon: Mail, label: t.contact.emailLabel, value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
    { icon: Phone, label: t.contact.phoneLabel, value: CONTACT_PHONE, href: WHATSAPP_URL },
    { icon: MapPin, label: t.contact.locationLabel, value: t.contact.location, href: null },
  ];

  const messengerButtons = [
    {
      href: WHATSAPP_URL,
      label: t.contact.btnWhatsApp,
      className:
        "gradient-primary text-bg shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40",
      icon: MessageCircle,
    },
    {
      href: TELEGRAM_URL,
      label: t.contact.btnTelegram,
      className:
        "bg-[#229ED9] text-white shadow-lg shadow-[#229ED9]/30 hover:shadow-xl hover:shadow-[#229ED9]/40",
      icon: Send,
    },
    {
      href: FACEBOOK_MESSENGER_URL,
      label: t.contact.btnMessenger,
      className:
        "bg-[#0084FF] text-white shadow-lg shadow-[#0084FF]/30 hover:shadow-xl hover:shadow-[#0084FF]/40",
      icon: MessageCircle,
    },
  ] as const;

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-bg overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-border rounded-full text-primary text-xs uppercase tracking-wider mb-4">
            <MessageCircle size={14} />
            {t.contact.label}
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            {t.contact.title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="gradient-text">{t.contact.title.split(" ").pop()}</span>
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedFadeIn direction="left">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              {t.contact.heading.split(" ").slice(0, -2).join(" ")}{" "}
              <span className="gradient-text">{t.contact.heading.split(" ").slice(-2).join(" ")}</span>
            </h2>
            <p className="text-text-muted text-lg mb-8">{t.contact.desc}</p>

            <div className="space-y-4">
              {contactItems.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-4 py-4 border-b border-border group"
                >
                  <div className="w-12 h-12 bg-primary/10 border border-border rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:border-primary transition-all">
                    <item.icon size={22} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-text-dim text-xs uppercase tracking-wider mb-1">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-text font-medium hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-text font-medium">{item.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedFadeIn>

          <AnimatedFadeIn direction="right" delay={0.2}>
            <div className="bg-bg-card border border-border rounded-3xl p-8 text-center relative overflow-hidden">
              <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-radial-gradient from-primary/5 to-transparent pointer-events-none" />

              <div className="relative z-10">
                <div className="w-32 h-32 rounded-full overflow-hidden border-3 border-primary mx-auto mb-6 shadow-lg shadow-primary/20">
                  <Image
                    src="/photo.jpg"
                    alt={t.contact.cardName}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-1">{t.contact.cardName}</h3>
                <p className="text-primary text-sm mb-4">{t.contact.cardRole}</p>
                <div className="flex items-center justify-center gap-2 text-text-muted text-sm mb-6">
                  <MapPin size={14} className="text-primary" />
                  <span>{t.contact.location}</span>
                </div>
                <div className="flex flex-col gap-3">
                  {messengerButtons.map(({ href, label, className, icon: Icon }) => (
                    <motion.a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className={`inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-xl transition-shadow ${className}`}
                    >
                      <Icon size={18} />
                      {label}
                    </motion.a>
                  ))}
                  <CvDownloadButton variant="outline" className="w-full justify-center" />
                </div>
              </div>
            </div>
          </AnimatedFadeIn>
        </div>
      </div>
    </section>
  );
}
