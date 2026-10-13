"use client";

import { useState } from "react";
import { Footer, Nav } from "./SiteChrome";
import WigCard from "./WigCard";
import { wigs } from "../catalog";

function InstagramIcon() {
  return (
    <span className="ig-icon" aria-hidden="true">
      <span className="ig-icon-lens" />
      <span className="ig-icon-dot" />
    </span>
  );
}

const faqGroups = [
  {
    number: "01",
    title: "Wig Care",
    tone: "fc-1",
    items: [
      ["How long will my wig last?", "With proper care and maintenance, your wig can last 1–2 years or longer. Longevity depends on how often it is worn and how well it is maintained. All wigs are made with Brazilian Remy hair."],
      ["How should I care for my wig?", "Use sulfate-free shampoo and conditioner, avoid excessive heat styling, detangle gently, store it on a wig stand or in your Mia Kelly wig box, and schedule professional maintenance when needed."],
      ["Can I wash my wig?", "Yes. We recommend washing your wig every 4–6 weeks if worn regularly. Use lukewarm water with a gentle, sulfate-free shampoo and allow the wig to air dry completely."],
    ],
  },
  {
    number: "02",
    title: "Install Preparation",
    tone: "fc-2",
    items: [
      ["How do I prepare for my install?", "Hair must be clean and completely dry. Arrive with no oils, grease, or heavy products. Hair should be properly braided down unless a braid service is included, and bring your wig fully ready if it was not purchased from Mia Kelly."],
      ["What if I don't follow the guidelines?", "Failure to follow preparation guidelines may result in additional service fees or appointment cancellation. Please arrive prepared to ensure the best possible results."],
    ],
  },
  {
    number: "03",
    title: "Shipping & Processing",
    tone: "fc-3",
    items: [
      ["How long does shipping take?", "Wigs currently in stock typically ship within 3–5 business days after purchase. Tracking information will be sent once your order has shipped."],
      ["How long do pre-order wigs take?", "Pre-order wigs require 4–6 weeks for processing, depending on the level of customization. You will receive tracking information once your order has shipped."],
      ["Will I see my wig before it ships?", "Yes. Photos and videos will be sent prior to shipping to ensure customer satisfaction."],
    ],
  },
  {
    number: "04",
    title: "Refund & Exchange Policy",
    tone: "fc-4",
    items: [
      ["Can I return or exchange my wig?", "Due to the nature of hair products, all wig sales are final. We do not offer refunds or exchanges once a wig has been purchased or shipped. Each wig is fully inspected by Mia Kelly before shipment."],
    ],
  },
];

const testimonials = [
  ["TR", "Tiffany Richey", "Mia Kelly does an amazing job with color blends and cuts! I am a repeat customer. Her work on wigs and hair is immaculate. Her blonde blends are amazing. I would highly recommend her!"],
  ["AA", "Alexis Anzaldua", "I am obsessed! A huge thank you to my girl Mia for literally working magic on my hair. I've never had a wig look or feel this realistic—the hairline is seamless!"],
  ["KD", "Katie Davenport", "I have alopecia and Mia sold me a human hair wig. The quality was well above the price! The wig is extremely natural and beautifully colored. Mia went above and beyond."],
  ["ET", "Em T.", "I'm so happy with my cut and color that Mia Kelly did for me! She nailed both my cut and a color that was hard to explain. I am now a regular!"],
  ["TH", "Tori Harris", "Mia is absolutely incredible! She installed my wig and it looks so natural, you would never know it wasn't my real hair. Her attention to detail is amazing."],
  ["KB", "Katie Buchanan", "I purchased the Naomi wig and I am beyond obsessed. The hair is so soft, the color is gorgeous, and the lace is practically invisible. 100% worth every penny!"],
  ["NP", "Noell Peterson", "I was nervous buying a wig online for the first time but Mia made the whole process so easy. The craftsmanship is something else. I feel like a whole new woman!"],
  ["RJ", "Rijirirahi", "This wig changed my life. I have been wearing wigs for years and nothing compares to the quality and the way Mia styles them. She is a true artist."],
];

function FAQ() {
  const [open, setOpen] = useState("0-0");
  return (
    <div className="faq-grid">
      {faqGroups.map((group, groupIndex) => (
        <div className={`faq-cat ${group.tone}`} key={group.number}>
          <p className="faq-cat-label">Category {group.number}</p>
          <h3 className="faq-cat-h">{group.title}</h3>
          {group.items.map(([question, answer], itemIndex) => {
            const id = `${groupIndex}-${itemIndex}`;
            return (
              <div className={`faq-item ${open === id ? "open" : ""}`} key={question}>
                <button className="faq-q" aria-expanded={open === id} onClick={() => setOpen(open === id ? "" : id)}>
                  {question}<span className="faq-chevron">▼</span>
                </button>
                <div className="faq-a">{answer}</div>
              </div>
            );
          })}
        </div>
      ))}
      <div className="faq-cat fc-full">
        <p className="faq-cat-label">Still Have Questions?</p>
        <h3 className="faq-cat-h">We&apos;re Here to Help</h3>
        <p className="faq-help">If you have additional questions regarding wigs, installs, or custom orders, please reach out through our contact page.</p>
        <div className="faq-cta-row">
          <a href="/contact" className="btn-gold">Contact Us</a>
          <a href="mailto:wigsbymiakelly@gmail.com?subject=Appointment%20Inquiry" target="_blank" rel="noopener noreferrer" className="btn-book">Book an Appointment</a>
          </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <section className="hero" id="hero">
          <p className="monthly-arrivals">NEW CUSTOM COLORED WIGS ADDED EVERY MONTH</p>
          <img src="/images/hero-v2.png" className="hero-img" alt="Mia Kelly wearing a highlighted luxury wig" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="hero-kicker">Wigs by Mia Kelly</p>
            <h1 className="hero-tagline">Confidence,<br /><em>Redefined.</em></h1>
            <p className="hero-desc">Premium handcrafted wigs designed to look as natural as they feel.</p>
            <div className="hero-ctas">
              <a href="#collections" className="btn-gold">Shop Now</a>
              <a href="#about" className="btn-outline">Discover Mia</a>
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Why shop Wigs by Mia">
          {[
            ["✦", "Premium Quality", "Brazilian Remy human hair"],
            ["◇", "Natural Look", "Realistic and undetectable"],
            ["⌁", "Secure Fit", "Comfortable all-day wear"],
            ["→", "Made with Care", "Styled and inspected by Mia"],
          ].map(([icon, title, copy]) => (
            <div className="trust-item" key={title}>
              <span className="trust-icon" aria-hidden="true">{icon}</span>
              <span><strong>{title}</strong><small>{copy}</small></span>
            </div>
          ))}
        </section>

        <section className="reels-section suede-dark2" id="instagram">
          <div className="reels-header">
            <p className="reels-eyebrow">Real Clients · Real Confidence</p>
            <h2 className="reels-title">See Our <em>Happy Customers</em></h2>
            <p className="reels-handle">@wigsbymiakelly</p>
          </div>
          <div className="reels-grid">
            {["DU7JPeLDLeW"].map((id) => (
              <div className="ig-embed-wrap" key={id}>
                <blockquote className="instagram-media" data-instgrm-permalink={`https://www.instagram.com/reel/${id}/`} data-instgrm-version="14" />
                <div className="ig-embed-footer">
                  <InstagramIcon />
                  <a href={`https://www.instagram.com/reel/${id}/`} target="_blank" rel="noopener noreferrer" className="reel-cta">Watch on Instagram</a>
                </div>
              </div>
            ))}
            <div className="ig-embed-wrap">
              <blockquote
                className="tiktok-embed"
                cite="https://www.tiktok.com/@katelynfager/video/7627855928590601485"
                data-video-id="7627855928590601485"
              >
                <section>
                  <a href="https://www.tiktok.com/@katelynfager/video/7627855928590601485" target="_blank" rel="noopener noreferrer">@katelynfager</a>
                </section>
              </blockquote>
              <div className="ig-embed-footer">
                <a href="https://www.tiktok.com/@katelynfager/video/7627855928590601485" target="_blank" rel="noopener noreferrer" className="reel-cta">Watch on TikTok</a>
              </div>
            </div>
            {["client-video-1.mp4", "client-video-2.mp4", "client-video-3.mp4", "client-video-4.mp4"].map((filename) => (
              <div className="ig-embed-wrap" key={filename}>
                <video
                  className="client-video"
                  controls
                  playsInline
                  preload="metadata"
                  poster={`/videos/${filename.replace(".mp4", "-poster.jpg")}`}
                  aria-label="Wigs by Mia customer video"
                >
                  <source src={`/videos/${filename}`} type="video/mp4" />
                  Your browser does not support embedded video.
                </video>
                <div className="ig-embed-footer">
                  <span className="reel-cta">Customer Video</span>
                </div>
              </div>
            ))}
          </div>
          <a href="https://www.instagram.com/wigsbymiakelly/" target="_blank" rel="noopener noreferrer" className="ig-follow-btn">Follow @wigsbymiakelly</a>
        </section>

        <section className="about-section suede-dark" id="about">
          <div className="about-story">
            <p className="about-eyebrow">My Story</p>
            <h2 className="about-h2">Wigs by <em>Mia Kelly</em></h2>
            <p className="about-tagline">Affordable Luxury. Unapologetic Confidence.</p>
            <p className="about-body">My name is Mia Kelly, and I&apos;ve been a professional stylist since 2009. I created Wigs by Mia Kelly for women who want effortless glam, confidence, and salon quality hair without compromise. Every wig is professionally colored, carefully handled, and personally inspected by me to ensure the highest level of quality and luxury.</p>
            <p className="about-body">My caps are designed for a comfortable fit, and every wig is completely glueless and beginner friendly, making it easy to achieve a flawless, salon quality look with confidence. All wigs are made with Brazilian Remy hair and should be treated with care just like natural hair. My standard wig style is 26 inches with 200% density for a full, luxurious look.</p>
            <p className="about-body">My goal is to give every woman beautiful, confidence boosting hair that feels as amazing as it looks.</p>
            <div className="about-divider" />
            <p className="mission-label">My Mission</p>
            <p className="mission-text">To provide high-quality luxury wigs at an affordable price while helping women feel confident, beautiful, and empowered every day.</p>
          </div>
          <div className="about-luxury">
            <img className="about-luxury-photo" src="/images/mia-kelly-brand-photo.jpeg" alt="Mia Kelly wearing a burgundy luxury wig" />
            <div className="about-luxury-copy">
              <p className="sec-eyebrow">The Mia Kelly Difference</p>
              <h2 className="sec-title">Luxury Crafted<br />with <em>Intention</em></h2>
              <p className="sec-body">Each wig is individually styled, fitted, and finished by hand. We source only the finest materials to create pieces that move, feel, and look like your own hair—because confidence should never be compromised.</p>
              <a href="#faq" className="btn-gold dark-button">How to Care for your Wig</a>
            </div>
          </div>
        </section>

        <section className="collections-section suede-bg" id="collections">
          <div className="sec-header">
            <p className="sec-eyebrow">Curated for You</p>
            <h2 className="sec-title-lg">Shop <em>Our Wigs</em></h2>
            <a className="policy-notice" href="#policy">
              <span>All wig sales are final</span>
              <strong>View Purchase Policy <span aria-hidden="true">→</span></strong>
            </a>
            <ul className="sec-specs-list">
              <li>✦ Brazilian Remy Hair</li>
              <li>✦ Full &amp; Voluminous</li>
              <li>✦ 26 Inches</li>
              <li>✦ Luxury Color &amp; Custom Styling</li>
              <li>✦ Master Stylist Since 2009</li>
              <li>✦ All wigs custom made—4–6 weeks shipping</li>
            </ul>
            <p className="collection-details">Mia Kelly&apos;s wigs are all standard 26 inches measured from the crown to the nape, lightweight 200% density. Fitted cap, petite friendly, adjustable from 19–22 inches. If you need a shorter length or style it can be cut as an add-on option—prices start at $70.</p>
            <p className="collection-shipping"><em>All wigs come with a slight curl after shipping—hair may need to be restyled upon arrival.</em></p>
          </div>
          <div className="cap-feature">
            <div className="cap-feature-title">
              <span>Mia Kelly&apos;s Signature</span>
              <strong>Fitted Elastic Caps</strong>
            </div>
            <img src="/images/mia-signature-caps-dark.jpeg" alt="Mia Signature and Diamond wig cap construction styles" />
          </div>
          <div className="coll-group last-group">
            <div className="wigs-row product-grid">{wigs.map((wig) => <WigCard wig={wig} key={wig.id} />)}</div>
          </div>
        </section>

        <section className="policy-section" id="policy" aria-labelledby="policy-title">
          <div className="policy-inner">
            <p className="policy-eyebrow">Please Review Before Purchasing</p>
            <h2 id="policy-title">The Mia Kelly <em>Policy</em></h2>
            <div className="policy-rule" aria-hidden="true"><span>◇</span></div>
            <div className="policy-grid">
              <article className="policy-card">
                <span className="policy-number">01</span>
                <p>All Mia Kelly wigs are professionally colored and styled before shipping.</p>
              </article>
              <article className="policy-card">
                <span className="policy-number">02</span>
                <p>Human hair wigs should be treated like your natural hair. Shipping may slightly alter the hairstyle, so you may need to restyle it to your preference after unboxing.</p>
              </article>
              <article className="policy-card policy-final">
                <span className="policy-number">03</span>
                <p><strong>All Mia Kelly wig sales are final.</strong> No refunds, returns, or exchanges.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="services-section suede-bg" id="services">
          <div className="sec-head"><p className="eyebrow">Professional Expertise</p><h2>Our <em>Services</em></h2><p>Expert hairstyling and luxury wig care—every service tailored to you with the precision of a professional and the care of an artist.</p></div>
          <div className="svc-grid">
            <div className="svc-card svc-champ">
              <p className="svc-label">Salon Services</p>
              <h3 className="svc-title">Hair <em>Services</em></h3>
              {[
                ["Wig Install", "Professional wig installation with finishing style for a natural look. Includes styling.", "$120"],
                ["Wig Cut", "Custom cut to your desired length and shape. Perfect for personalizing your wig.", "$70+"],
                ["Face Framing", "Delicate layers cut around the face to create a soft, flattering frame.", "$30"],
                ["Long Layers", "Seamless long layers added for movement and a natural, blended look.", "$60"],
                ["Short Layers", "Structured short layers for volume, texture, and a polished finish.", "$60"],
              ].map(([name, description, price]) => <div className="svc-item" key={name}><div><div className="svc-name">{name}</div><div className="svc-desc">{description}</div></div><div className="svc-price">{price}</div></div>)}
              <p className="service-disclaimer">Pricing may vary depending on the length, density, and condition of the hair.</p>
              <div className="book-strip"><p className="book-strip-text">Ready to book your appointment?</p><a href="mailto:wigsbymiakelly@gmail.com?subject=Appointment%20Inquiry" target="_blank" rel="noopener noreferrer" className="btn-book">Book Now</a></div>
            </div>
            <div className="svc-card svc-dark">
              <p className="svc-label">Signature Treatment</p>
              <h3 className="svc-title">Luxury Wig <em>Revamp</em></h3>
              <div className="svc-item"><div><div className="svc-name">Complete Wig Revamp</div><div className="svc-desc">Restore the beauty and longevity of your wig with this comprehensive treatment.</div></div><div className="svc-price">From $325</div></div>
              <div className="revamp-includes"><p className="revamp-title">Service Includes</p>{["Deep cleanse and detox to remove buildup", "Intensive conditioning treatment", "Precision restyling", "Hairline refinement", "Tightening of loose tracks", "Minor repairs", "Color refresh or toning if needed"].map((item) => <div className="revamp-item" key={item}><div className="revamp-dot" /><span>{item}</span></div>)}</div>
              <p className="svc-note">All revamps require a consultation prior to booking. Final pricing may vary depending on length, density, and overall condition of the hair.</p>
            </div>
          </div>
          <p className="pricing-note">All services are performed by Mia Kelly—master stylist since 2009.</p>
        </section>

        <section className="faq-section suede-dark" id="faq">
          <div className="faq-head"><p className="eyebrow">Got Questions?</p><h2>Frequently Asked <em>Questions</em></h2><p>Everything you need to know about your Wigs by Mia Kelly purchase, care, and services.</p></div>
          <div className="faq-intro"><p>Your <strong>Wigs by Mia Kelly box</strong> is specially designed to protect and safely store your wig, helping preserve its quality, shape, and longevity.</p></div>
          <FAQ />
        </section>

        <section className="testimonials suede-dark" id="reviews">
          <div className="t-header"><p className="t-eyebrow">Client Stories</p><h2 className="t-title">Worn with <em>Confidence</em></h2></div>
          <div className="t-grid">
            {testimonials.map(([initials, author, quote], index) => (
              <article className={`t-card tc${(index % 5) + 1}`} key={author}>
                <div className="t-row"><div className="t-init">{initials}</div><div><span className="stars">★★★★★</span><p className="t-text">{quote}</p><p className="t-author">— {author}</p></div></div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
