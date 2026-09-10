"use client";

import { useRef, useState } from "react";

import { type Wig } from "../catalog";

export default function WigCard({ wig }: { wig: Wig }) {
  const [active, setActive] = useState(0);
  const touchStart = useRef(0);
  const images = wig.images ?? [];
  const specs = [wig.lace, wig.length, wig.density, wig.capSize, ...(wig.features ?? [])].filter(Boolean);
  const inquiryHref = `mailto:wigsbymiakelly@gmail.com?subject=${encodeURIComponent(
    `Wig Inquiry - ${wig.name}`,
  )}&body=${encodeURIComponent(
    `Hi Mia,\n\nI'm interested in the ${wig.name} wig. Could you please let me know whether it's available and what the next steps are?\n\nThank you!`,
  )}`;
  const move = (step: number) => {
    if (images.length) setActive((active + step + images.length) % images.length);
  };

  return (
    <article className={`wig-card ${wig.status === "Coming Soon" ? "coming-card" : ""}`}>
      <div
        className="wig-gallery"
        onTouchStart={(event) => {
          touchStart.current = event.touches[0].clientX;
        }}
        onTouchEnd={(event) => {
          const distance = touchStart.current - event.changedTouches[0].clientX;
          if (Math.abs(distance) > 40) move(distance > 0 ? 1 : -1);
        }}
      >
        {wig.status !== "Available" ? <span className="sale-badge">{wig.status}</span> : wig.originalPrice && <span className="sale-badge">Sale</span>}
        {images.length ? (
          <>
            {images.map((image, index) => (
              <div className={`wig-slide ${index === active ? "active" : ""}`} key={image.src}>
                <img src={image.src} alt={`${wig.name} ${image.label}`} loading="lazy" />
              </div>
            ))}
            <span className="view-label">{images[active].label}</span>
            <button className="g-arrow g-prev" aria-label={`Previous ${wig.name} image`} onClick={() => move(-1)}>←</button>
            <button className="g-arrow g-next" aria-label={`Next ${wig.name} image`} onClick={() => move(1)}>→</button>
            <div className="gallery-dots">
              {images.map((image, index) => (
                <button
                  key={image.src}
                  className={`dot ${index === active ? "active" : ""}`}
                  aria-label={`Show ${image.label} view`}
                  aria-current={index === active}
                  onClick={() => setActive(index)}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="placeholder-card">
            <span>✦</span>
            <p>{wig.status === "Coming Soon" ? "Coming Soon" : "Photo Coming Soon"}</p>
          </div>
        )}
      </div>
      <div className="wig-info">
        <h4 className="wig-name">{wig.name}</h4>
        
        {wig.description && <p className="wig-description">{wig.description}</p>}
        <div className="wig-specs">
          {specs.map((spec) => <span className="spec-pill" key={spec}>{spec}</span>)}
        </div>
        <div className="price-row">
          <div className="wig-price">{wig.originalPrice && <del>{wig.originalPrice}</del>}{wig.price || (wig.status === "Coming Soon" ? "Coming Soon" : "Price on inquiry")}</div>
          {wig.price && <div className="price-note">*Insured shipping not included</div>}
        </div>
        {wig.status === "Sold" ? (
          <span className="shop-btn sold-label">Sold</span>
        ) : (
          <a href={inquiryHref} className="shop-btn">Inquire About This Wig</a>
        )}
      </div>
    </article>
  );
}
