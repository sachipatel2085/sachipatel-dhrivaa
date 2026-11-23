import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X, ArrowRight, MessageSquare } from "lucide-react";
import { mainNavItems } from "../../data/navigation";
import { companyData } from "../../data/company";

interface NavbarProps {
  currentPath?: string;
}

const normalizePath = (p: string) => {
  if (!p) return "/";
  const clean = p.split("?")[0].split("#")[0];
  return clean.length > 1 && clean.endsWith("/") ? clean.slice(0, -1) : clean;
};

const checkIsActive = (itemHref: string, current: string) => {
  const normCurrent = normalizePath(current);
  const normHref = normalizePath(itemHref);

  if (normHref === "/") {
    return normCurrent === "/" || normCurrent === "";
  }
  return normCurrent === normHref || normCurrent.startsWith(normHref + "/");
};

export default function Navbar({ currentPath = "/" }: NavbarProps) {
  const [path, setPath] = useState(currentPath);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(() =>
    checkIsActive("/products", currentPath),
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const locPath = window.location.pathname;
      setPath(locPath);
      if (checkIsActive("/products", locPath)) {
        setMobileProductsOpen(true);
      }
    }
  }, [currentPath]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setProductsDropdownOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* Floating Island Header Container */}
      <header className="fixed top-3 sm:top-4 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 pointer-events-none">
        <div className="max-w-7xl mx-auto pointer-events-auto relative">
          {/* Main Floating Header Pill — REMAINS 100% STATIC & UNTOUCHED (No border-radius change, no background morph, no white border around menu) */}
          <div
            className={`relative z-20 bg-white rounded-full border border-slate-200/90 shadow-lg shadow-navy-950/8 transition-shadow duration-300 ${
              isScrolled ? "shadow-xl shadow-navy-950/12" : ""
            }`}
          >
            <div className="px-4 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between">
              {/* Brand Logo */}
              <a
                href="/"
                className="inline-flex items-center flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-lg transition-transform duration-200 hover:scale-[1.02]"
                aria-label="DHRIVAA – Global Trade Partner Home"
              >
                <img
                  src="/images/logo.png"
                  alt="DHRIVAA – Global Trade Partner"
                  className="h-8 sm:h-9 md:h-10 w-auto object-contain"
                  width="984"
                  height="305"
                  loading="eager"
                  decoding="async"
                />
              </a>

              {/* Desktop Nav Links (Center) */}
              <nav
                className="hidden lg:flex items-center gap-1 xl:gap-3 2xl:gap-5"
                aria-label="Main Navigation"
              >
                {mainNavItems.map((item) => {
                  const isActive = checkIsActive(item.href, path);

                  if (item.children) {
                    return (
                      <div
                        key={item.label}
                        className="relative"
                        onMouseEnter={() => setProductsDropdownOpen(true)}
                        onMouseLeave={() => setProductsDropdownOpen(false)}
                      >
                        <a
                          href={item.href}
                          aria-current={isActive ? "page" : undefined}
                          className={`group relative inline-flex items-center gap-1 px-2.5 py-1 text-xs xl:text-sm font-semibold font-heading whitespace-nowrap transition-colors ${
                            isActive
                              ? "text-navy-950"
                              : "text-navy-900/80 hover:text-navy-950"
                          }`}
                        >
                          <span>{item.label}</span>
                          <ChevronDown
                            className={`w-3.5 h-3.5 transition-transform duration-200 ${
                              productsDropdownOpen
                                ? "rotate-180 text-navy-950"
                                : "text-slate-500 group-hover:text-navy-950"
                            }`}
                          />
                          {/* Active / Hover Underline Indicator */}
                          <span
                            className={`absolute -bottom-1 left-2.5 right-2.5 h-[2px] rounded-full transition-all duration-200 ${
                              isActive
                                ? "bg-navy-950 opacity-100 scale-x-100"
                                : "bg-navy-900/40 opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                            }`}
                          />
                        </a>

                        {/* Dropdown Menu */}
                        {productsDropdownOpen && (
                          <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-slate-200/90 p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                            <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 px-3 py-1 mb-1">
                              Commodities
                            </div>
                            <div className="space-y-1">
                              {item.children.map((child) => {
                                const isChildActive =
                                  normalizePath(path) ===
                                  normalizePath(child.href);
                                return (
                                  <a
                                    key={child.href}
                                    href={child.href}
                                    className={`block p-2.5 rounded-xl transition-colors ${
                                      isChildActive
                                        ? "bg-slate-100 font-bold text-navy-950 border-l-2 border-teal"
                                        : "hover:bg-slate-50 text-navy-900 font-medium text-xs xl:text-sm"
                                    }`}
                                  >
                                    <div className="font-heading font-semibold text-xs xl:text-sm flex items-center justify-between">
                                      <span>{child.label}</span>
                                      <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                                    </div>
                                    <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1 font-normal">
                                      {child.description}
                                    </p>
                                  </a>
                                );
                              })}
                            </div>
                            <div className="border-t border-slate-100 mt-2 pt-2 px-3">
                              <a
                                href="/products"
                                className="text-xs font-semibold text-teal hover:underline inline-flex items-center gap-1"
                              >
                                View All Products &rarr;
                              </a>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`group relative inline-flex items-center px-2.5 py-1 text-xs xl:text-sm font-semibold font-heading whitespace-nowrap transition-colors ${
                        isActive
                          ? "text-navy-950"
                          : "text-navy-900/80 hover:text-navy-950"
                      }`}
                    >
                      <span>{item.label}</span>
                      {/* Active / Hover Underline Indicator */}
                      <span
                        className={`absolute -bottom-1 left-2.5 right-2.5 h-[2px] rounded-full transition-all duration-200 ${
                          isActive
                            ? "bg-navy-950 opacity-100 scale-x-100"
                            : "bg-navy-900/40 opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                        }`}
                      />
                    </a>
                  );
                })}
              </nav>

              {/* Desktop Action CTA (Right) - Matches Image 1 pill button */}
              <div className="hidden lg:flex items-center flex-shrink-0">
                <a
                  href="/contact"
                  className="btn-navy-interactive group inline-flex items-center gap-2 px-5 py-2 xl:px-6 xl:py-2.5 rounded-full bg-navy-950 text-white text-xs xl:text-sm font-semibold font-heading hover:bg-navy-900 shadow-sm hover:shadow-md"
                >
                  <span>Inquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gold group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>

              {/* Mobile Hamburger Button */}
              <div className="flex lg:hidden items-center">
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen((prev) => !prev)}
                  className="w-10 h-10 flex items-center justify-center rounded-full text-navy-900 hover:bg-slate-100 active:bg-slate-200 focus:outline-none transition-colors"
                  aria-label={
                    mobileMenuOpen
                      ? "Close Navigation Menu"
                      : "Open Navigation Menu"
                  }
                  aria-expanded={mobileMenuOpen}
                >
                  {mobileMenuOpen ? (
                    <X className="w-6 h-6 text-navy-900" />
                  ) : (
                    <Menu className="w-6 h-6 text-navy-900" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Dropdown Menu — SEPARATE CONTAINER THAT SLIDES DOWN FROM HEADER WITH NO WHITE LINE AND NO EFFECT ON THE HEADER */}
          <div
            className={`lg:hidden grid transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              mobileMenuOpen
                ? "grid-rows-[1fr] opacity-100 translate-y-0 mt-2 pointer-events-auto"
                : "grid-rows-[0fr] opacity-0 -translate-y-2 mt-0 pointer-events-none"
            }`}
          >
            <div className="min-h-0 overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl bg-navy-950 border border-navy-800/80">
              <nav
                className="divide-y divide-navy-800/70"
                aria-label="Mobile Navigation"
              >
                {mainNavItems.map((item) => {
                  const isActive = checkIsActive(item.href, path);

                  if (item.children) {
                    return (
                      <div key={item.label} className="bg-navy-950">
                        {/* Parent row with accordion toggle */}
                        <button
                          type="button"
                          className={`w-full flex items-center justify-between px-6 py-3.5 sm:py-4 transition-colors cursor-pointer text-left ${
                            isActive
                              ? "bg-[#2563eb] text-white"
                              : "text-white hover:bg-navy-900 active:bg-navy-850"
                          }`}
                          onClick={() => setMobileProductsOpen((prev) => !prev)}
                          aria-expanded={mobileProductsOpen}
                        >
                          <span className="font-heading font-medium text-sm sm:text-base">
                            {item.label}
                          </span>
                          <ChevronDown
                            className={`w-4 h-4 text-white transition-transform duration-200 flex-shrink-0 ml-2 ${
                              mobileProductsOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {/* Smooth Accordion Sub-items */}
                        <div
                          className={`grid transition-all duration-200 ease-in-out ${
                            mobileProductsOpen
                              ? "grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0 pointer-events-none"
                          }`}
                        >
                          <div className="min-h-0 overflow-hidden bg-navy-900/90 divide-y divide-navy-800/40">
                            {item.children.map((child) => {
                              const isChildActive =
                                normalizePath(path) ===
                                normalizePath(child.href);
                              return (
                                <a
                                  key={child.href}
                                  href={child.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className={`block px-8 py-3 text-xs sm:text-sm transition-colors ${
                                    isChildActive
                                      ? "bg-teal text-white font-bold"
                                      : "text-slate-300 hover:text-white hover:bg-navy-850"
                                  }`}
                                >
                                  <div className="font-semibold">
                                    {child.label}
                                  </div>
                                  <div className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                                    {child.description}
                                  </div>
                                </a>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-6 py-3.5 sm:py-4 font-heading font-medium text-sm sm:text-base transition-colors ${
                        isActive
                          ? "bg-[#2563eb] text-white font-semibold"
                          : "text-white hover:bg-navy-900 active:bg-navy-850"
                      }`}
                    >
                      <span>{item.label}</span>
                    </a>
                  );
                })}
              </nav>

              {/* Mobile Bottom Action: WhatsApp Quick Inquiry */}
              <div className="p-4 bg-navy-900/95 border-t border-navy-800/80 flex flex-col sm:flex-row gap-2.5">
                <a
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-navy-800 hover:bg-navy-700 text-white font-heading font-bold text-xs tracking-wider transition-colors border border-navy-700/80 shadow-sm"
                >
                  <span>Inquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gold" />
                </a>
                <a
                  href={companyData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#25D366] text-white font-heading font-bold text-xs tracking-wider hover:bg-[#20bd5a] transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 text-white" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Background Dimmer when mobile menu is open */}
      <div
        className={`fixed inset-0 bg-navy-950/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ease-in-out ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />
    </>
  );
}
