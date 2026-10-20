import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer is-inverse">
      <div className="container">
        <h2 className="heading_hero">
          Filmisch. Minimal. Kontakt aufnehmen.
          <br />
        </h2>
        <Link href="/" aria-label="BlackLens Home">
          <img
            src="/images/LogoS.png"
            loading="lazy"
            width={575}
            sizes="(max-width: 767px) 100vw, 575px"
            alt="BlackLens"
            srcSet="/images/LogoS-p-500.png 500w, /images/LogoS-p-800.png 800w, /images/LogoS.png 1024w"
            className="image-3"
          />
        </Link>
        <div className="flex_horizontal is-space-between tablet-vertical tablet-x-center gap-small margin-top_medium">
          <a
            href="https://blacklabs.ch"
            target="_blank"
            rel="noopener noreferrer"
            className="footer_link on-inverse w-inline-block"
          >
            <div className="paragraph_xlarge">A BlackLabs Company</div>
          </a>
          <ul
            role="list"
            className="flex_horizontal is-y-center is-x-center gap-xsmall is-wrap margin-bottom_none padding_none w-list-unstyled"
          >
            <li className="margin-bottom_none">
              <a
                href="https://www.tiktok.com/@blacklens.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="footer_link on-inverse w-inline-block"
              >
                <div>Tiktok</div>
              </a>
            </li>
            <li className="margin-bottom_none">
              <a
                href="https://www.instagram.com/blacklens.ch/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer_link on-inverse w-inline-block"
              >
                <div>Instagram</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
