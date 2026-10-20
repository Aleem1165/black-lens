"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [leistungenOpen, setLeistungenOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close menus on page change
  useEffect(() => {
    setLeistungenOpen(false);
    setSupportOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setLeistungenOpen(false);
        setSupportOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="nav" ref={navRef}>
      <div
        data-duration="400"
        data-animation="default"
        data-easing2="ease"
        data-easing="ease"
        data-collapse="medium"
        role="banner"
        data-no-scroll="1"
        className="nav_container w-nav"
      >
        <div className="nav_left">
          <Link href="/" className="nav_logo w-inline-block" aria-label="BlackLens Home">
            <img
              src="/images/LogoW.png"
              loading="lazy"
              width={213}
              sizes="213px"
              alt="BlackLens"
              srcSet="/images/LogoW-p-500.png 500w, /images/LogoW-p-800.png 800w, /images/LogoW.png 900w"
              className="image-2"
            />
          </Link>
        </div>

        <div className="nav_center">
          <nav
            role="navigation"
            className={`nav_menu w-nav-menu ${mobileMenuOpen ? "w--open" : ""}`}
            style={
              mobileMenuOpen
                ? {
                    display: "block",
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    right: 0,
                    backgroundColor: "var(--_colors---background-color--bg-primary, #050505)",
                    padding: "1.5rem",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                    zIndex: 999,
                  }
                : undefined
            }
          >
            <ul role="list" className="nav_menu-list w-list-unstyled">
              {/* Dropdown: Leistungen */}
              <li className="nav_menu-list-item">
                <div
                  data-delay="0"
                  data-hover="false"
                  className={`nav_dropdown-menu w-dropdown ${leistungenOpen ? "w--open" : ""}`}
                >
                  <div
                    className={`nav_link w-dropdown-toggle ${leistungenOpen ? "w--open" : ""}`}
                    onClick={() => {
                      setLeistungenOpen(!leistungenOpen);
                      setSupportOpen(false);
                    }}
                    role="button"
                    tabIndex={0}
                    aria-expanded={leistungenOpen}
                  >
                    <div>Leistungen</div>
                    <div
                      className="nav_caret w-icon-dropdown-toggle"
                      style={{
                        transform: leistungenOpen ? "rotate(180deg)" : "none",
                        transition: "transform 0.2s ease",
                      }}
                    ></div>
                  </div>

                  <nav
                    className={`mega-nav_dropdown-list w-dropdown-list ${leistungenOpen ? "w--open" : ""}`}
                    style={
                      leistungenOpen
                        ? {
                            display: "block",
                            opacity: 1,
                            visibility: "visible",
                            pointerEvents: "auto",
                          }
                        : undefined
                    }
                  >
                    <div className="mega-nav_dropdown-list-wrapper">
                      <ul
                        role="list"
                        className="grid_3-col tablet-1-col-1 gap-medium margin-bottom_none w-list-unstyled"
                      >
                        <li
                          id="w-node-_61be48fd-08da-7879-1198-67c4146a0181-d66a6ef8"
                          className="w-node-_24f8fdf9-0ac4-54f1-be20-19c44d9f4e92-4457854d"
                        >
                          <div className="w-layout-grid grid_3-col tablet-1-col-1 gap-small">
                            <div>
                              <div className="eyebrow">Filmproduktion</div>
                              <ul role="list" className="mega-nav_list w-list-unstyled">
                                <li className="margin-bottom_none">
                                  <Link
                                    href="/kontakt"
                                    className="mega-nav_link-item w-inline-block"
                                    onClick={() => setLeistungenOpen(false)}
                                  >
                                    <div className="icon is-medium">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <path
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          strokeLinejoin="round"
                                        ></path>
                                      </svg>
                                    </div>
                                    <div
                                      id="w-node-_61be48fd-08da-7879-1198-67c4146a018c-d66a6ef8"
                                      className="w-node-_24f8fdf9-0ac4-54f1-be20-19c44d9f4e1c-4457854d"
                                    >
                                      <div>
                                        <strong>Imagefilm</strong>
                                      </div>
                                      <div className="paragraph_small text-color_secondary">
                                        Moderne, cineastische Videoproduktion.
                                      </div>
                                    </div>
                                  </Link>
                                </li>
                                <li className="margin-bottom_none">
                                  <Link
                                    href="/kontakt"
                                    className="mega-nav_link-item w-inline-block"
                                    onClick={() => setLeistungenOpen(false)}
                                  >
                                    <div className="icon is-medium">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <path
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          strokeLinejoin="round"
                                        ></path>
                                      </svg>
                                    </div>
                                    <div
                                      id="w-node-_61be48fd-08da-7879-1198-67c4146a0197-d66a6ef8"
                                      className="w-node-_24f8fdf9-0ac4-54f1-be20-19c44d9f4e2b-4457854d"
                                    >
                                      <div>
                                        <strong>Drohnenaufnahmen</strong>
                                      </div>
                                      <div className="paragraph_small text-color_secondary">
                                        Luftaufnahmen in höchster Qualität.
                                      </div>
                                    </div>
                                  </Link>
                                </li>
                                <li className="margin-bottom_none">
                                  <Link
                                    href="/kontakt"
                                    className="mega-nav_link-item w-inline-block"
                                    onClick={() => setLeistungenOpen(false)}
                                  >
                                    <div className="icon is-medium">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <path
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          strokeLinejoin="round"
                                        ></path>
                                      </svg>
                                    </div>
                                    <div
                                      id="w-node-_61be48fd-08da-7879-1198-67c4146a01a2-d66a6ef8"
                                      className="w-node-_24f8fdf9-0ac4-54f1-be20-19c44d9f4e38-4457854d"
                                    >
                                      <div>
                                        <strong>Schnitt &amp; Color</strong>
                                      </div>
                                      <div className="paragraph_small text-color_secondary">
                                        Professioneller Schnitt und Colorgrading.
                                      </div>
                                    </div>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div>
                              <div className="eyebrow">Showreel</div>
                              <ul role="list" className="mega-nav_list w-list-unstyled">
                                <li className="margin-bottom_none">
                                  <Link
                                    href="/about"
                                    className="mega-nav_link-item w-inline-block"
                                    onClick={() => setLeistungenOpen(false)}
                                  >
                                    <div className="icon is-medium">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <path
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          strokeLinejoin="round"
                                        ></path>
                                      </svg>
                                    </div>
                                    <div
                                      id="w-node-_61be48fd-08da-7879-1198-67c4146a01b1-d66a6ef8"
                                      className="w-node-_24f8fdf9-0ac4-54f1-be20-19c44d9f4e49-4457854d"
                                    >
                                      <div>
                                        <strong>Showreel ansehen</strong>
                                      </div>
                                      <div className="paragraph_small text-color_secondary">
                                        Unsere besten Projekte im Überblick.
                                      </div>
                                    </div>
                                  </Link>
                                </li>
                                <li className="margin-bottom_none">
                                  <Link
                                    href="/"
                                    className="mega-nav_link-item w-inline-block"
                                    onClick={() => setLeistungenOpen(false)}
                                  >
                                    <div className="icon is-medium">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <path
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          strokeLinejoin="round"
                                        ></path>
                                      </svg>
                                    </div>
                                    <div
                                      id="w-node-_61be48fd-08da-7879-1198-67c4146a01bc-d66a6ef8"
                                      className="w-node-_24f8fdf9-0ac4-54f1-be20-19c44d9f4e56-4457854d"
                                    >
                                      <div>
                                        <strong>Featured Shots</strong>
                                      </div>
                                      <div className="paragraph_small text-color_secondary">
                                        Ausgewählte Szenen und Bilder.
                                      </div>
                                    </div>
                                  </Link>
                                </li>
                                <li className="margin-bottom_none">
                                  <Link
                                    href="/about"
                                    className="mega-nav_link-item w-inline-block"
                                    onClick={() => setLeistungenOpen(false)}
                                  >
                                    <div className="icon is-medium">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <path
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          strokeLinejoin="round"
                                        ></path>
                                      </svg>
                                    </div>
                                    <div
                                      id="w-node-_61be48fd-08da-7879-1198-67c4146a01c7-d66a6ef8"
                                      className="w-node-_24f8fdf9-0ac4-54f1-be20-19c44d9f4e63-4457854d"
                                    >
                                      <div>
                                        <strong>Kunden</strong>
                                      </div>
                                      <div className="paragraph_small text-color_secondary">
                                        Auswahl unserer Partner &amp; Kunden.
                                      </div>
                                    </div>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div>
                              <div className="eyebrow">Kontakt</div>
                              <ul role="list" className="mega-nav_list w-list-unstyled">
                                <li className="margin-bottom_none">
                                  <Link
                                    href="/kontakt"
                                    className="mega-nav_link-item w-inline-block"
                                    onClick={() => setLeistungenOpen(false)}
                                  >
                                    <div className="icon is-medium">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <path
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          strokeLinejoin="round"
                                        ></path>
                                      </svg>
                                    </div>
                                    <div
                                      id="w-node-_61be48fd-08da-7879-1198-67c4146a01d6-d66a6ef8"
                                      className="w-node-_24f8fdf9-0ac4-54f1-be20-19c44d9f4e74-4457854d"
                                    >
                                      <div>
                                        <strong>Kontakt aufnehmen</strong>
                                      </div>
                                      <div className="paragraph_small text-color_secondary">
                                        Direkter Draht für Anfragen.
                                      </div>
                                    </div>
                                  </Link>
                                </li>
                                <li className="margin-bottom_none">
                                  <Link
                                    href="/kontakt"
                                    className="mega-nav_link-item w-inline-block"
                                    onClick={() => setLeistungenOpen(false)}
                                  >
                                    <div className="icon is-medium">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <path
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          strokeLinejoin="round"
                                        ></path>
                                      </svg>
                                    </div>
                                    <div
                                      id="w-node-_61be48fd-08da-7879-1198-67c4146a01e1-d66a6ef8"
                                      className="w-node-_24f8fdf9-0ac4-54f1-be20-19c44d9f4e7f-4457854d"
                                    >
                                      <div>
                                        <strong>Standort</strong>
                                      </div>
                                      <div className="paragraph_small text-color_secondary">
                                        Basierend in der Schweiz.
                                      </div>
                                    </div>
                                  </Link>
                                </li>
                                <li className="margin-bottom_none">
                                  <a
                                    href="https://www.instagram.com/blacklens.ch/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mega-nav_link-item w-inline-block"
                                  >
                                    <div className="icon is-medium">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <path
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          strokeLinejoin="round"
                                        ></path>
                                      </svg>
                                    </div>
                                    <div
                                      id="w-node-_61be48fd-08da-7879-1198-67c4146a01ec-d66a6ef8"
                                      className="w-node-_24f8fdf9-0ac4-54f1-be20-19c44d9f4e8c-4457854d"
                                    >
                                      <div>
                                        <strong>Social</strong>
                                      </div>
                                      <div className="paragraph_small text-color_secondary">
                                        Folge uns für Updates.
                                      </div>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>

                        <li
                          id="w-node-_61be48fd-08da-7879-1198-67c4146a01f2-d66a6ef8"
                          className="flex_horizontal w-node-_24f8fdf9-0ac4-54f1-be20-19c44d9f4ea1-4457854d"
                        >
                          <Link
                            href="/"
                            className="card-link is-inverse flex-child_expand w-inline-block"
                            onClick={() => setLeistungenOpen(false)}
                          >
                            <div className="card_body">
                              <div className="heading_tertiary">Cinematic. Minimal. Premium.</div>
                              <p className="paragraph_small text-color_inverse-secondary">
                                Filmische Produktionen. Drohnen. Schnitt. Alles aus einer Hand.
                              </p>
                              <div className="margin_top-auto">
                                <div className="button-group">
                                  <div className="text-button is-secondary">
                                    <div>Projekte</div>
                                    <div className="button_icon">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                      >
                                        <path
                                          d="M2 8H14.5M14.5 8L8.5 2M14.5 8L8.5 14"
                                          stroke="currentColor"
                                          strokeWidth="2"
                                          strokeLinejoin="round"
                                        ></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </li>

              {/* Link: Über uns */}
              <li className="nav_menu-list-item">
                <Link
                  href="/about"
                  className={`nav_link w-inline-block ${pathname === "/about" ? "w--current" : ""}`}
                >
                  <div>Über uns</div>
                </Link>
              </li>


              {/* Dropdown: Support */}
              <li className="nav_menu-list-item">
                <div
                  data-delay="0"
                  data-hover="false"
                  className={`nav_dropdown-menu w-dropdown ${supportOpen ? "w--open" : ""}`}
                >
                  <div
                    className={`nav_link w-dropdown-toggle ${supportOpen ? "w--open" : ""}`}
                    onClick={() => {
                      setSupportOpen(!supportOpen);
                      setLeistungenOpen(false);
                    }}
                    role="button"
                    tabIndex={0}
                    aria-expanded={supportOpen}
                  >
                    <div>Support</div>
                    <div
                      className="nav_caret w-icon-dropdown-toggle"
                      style={{
                        transform: supportOpen ? "rotate(180deg)" : "none",
                        transition: "transform 0.2s ease",
                      }}
                    ></div>
                  </div>

                  <div
                    className={`nav_dropdown-list-1 w-dropdown-list ${supportOpen ? "w--open" : ""}`}
                    style={
                      supportOpen
                        ? {
                            display: "block",
                            opacity: 1,
                            visibility: "visible",
                            pointerEvents: "auto",
                          }
                        : undefined
                    }
                  >
                    <div className="nav-menu_dropdown-list-wrapper">
                      <ul role="list" className="flex_vertical margin-bottom_none w-list-unstyled">
                        <li className="margin-bottom_none">
                          <Link
                            href="/about"
                            className="nav_dropdown-link w-inline-block"
                            onClick={() => setSupportOpen(false)}
                          >
                            <div className="button_label">FAQ &amp; Hilfe</div>
                          </Link>
                        </li>
                        <li className="margin-bottom_none">
                          <Link
                            href="/kontakt"
                            className="nav_dropdown-link w-inline-block"
                            onClick={() => setSupportOpen(false)}
                          >
                            <div className="button_label">Kontakt</div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile menu hamburger button */}
        <div
          className={`nav_mobile-menu-button w-nav-button ${mobileMenuOpen ? "w--open" : ""}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          role="button"
          tabIndex={0}
          aria-label="Toggle navigation menu"
        >
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <g
                strokeLinecap="square"
                strokeLinejoin="miter"
                strokeWidth="1.5"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                className="nc-icon-wrapper"
              >
                {mobileMenuOpen ? (
                  <>
                    <line x1="4" y1="4" x2="20" y2="20" stroke="currentColor"></line>
                    <line x1="4" y1="20" x2="20" y2="4" stroke="currentColor"></line>
                  </>
                ) : (
                  <>
                    <line x1="1" y1="12" x2="23" y2="12" stroke="currentColor"></line>
                    <line x1="1" y1="5" x2="23" y2="5"></line>
                    <line x1="1" y1="19" x2="23" y2="19"></line>
                  </>
                )}
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
