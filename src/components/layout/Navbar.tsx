import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { mainNavItems } from "../../data/navigation";

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
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
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
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-card border-b border-trade-border/60 py-3"
            : "bg-white/90 backdrop-blur-sm border-b border-trade-border/40 py-3.5 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Official DHRIVAA Logo */}
            <a
              href="/"
              className="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-lg transition-transform duration-200 hover:scale-[1.02] active:scale-[0.99]"
              aria-label="DHRIVAA – Global Trade Partner Home"
            >
              <img
                src="/images/logo.png"
                alt="DHRIVAA – Global Trade Partner"
                className="h-8 sm:h-10 md:h-11 w-auto object-contain"
                width="984"
                height="305"
                loading="eager"
                decoding="async"
              />
            </a>

            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center space-x-0.5 xl:space-x-1.5"
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
                        className={`group relative inline-flex items-center gap-1 px-1.5 xl:px-3.5 py-1 text-xs xl:text-sm font-medium transition-colors ${
                          isActive
                            ? "text-navy-950 font-semibold"
                            : "text-trade-text/80 hover:text-navy-950"
                        }`}
                        aria-expanded={productsDropdownOpen}
                        aria-haspopup="true"
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            productsDropdownOpen
                              ? "rotate-180 text-teal"
                              : isActive
                                ? "text-teal"
                                : "text-slate-400"
                          }`}
                        />
                        {/* Active & Hover Underline Indicator */}
                        {isActive ? (
                          <span className="absolute bottom-0 left-2.5 right-2.5 xl:left-3.5 xl:right-3.5 h-[3px] bg-teal rounded-full shadow-[0_1px_3px_rgba(57,141,137,0.35)]" />
                        ) : (
                          <span className="absolute bottom-0 left-2.5 right-2.5 xl:left-3.5 xl:right-3.5 h-[2px] bg-teal/40 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center" />
                        )}
                      </a>

                      {/* Dropdown Menu */}
                      {productsDropdownOpen && (
                        <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-xl shadow-premium border border-trade-border/80 p-3.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                          <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 px-3 py-1 mb-1">
                            Agricultural Commodities
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
                                  aria-current={
                                    isChildActive ? "page" : undefined
                                  }
                                  className={`group block p-2.5 rounded-lg transition-colors ${
                                    isChildActive
                                      ? "bg-teal/10 border-l-2 border-teal"
                                      : "hover:bg-slate-50"
                                  }`}
                                >
                                  <div
                                    className={`font-heading font-semibold text-sm flex items-center justify-between ${
                                      isChildActive
                                        ? "text-teal font-bold"
                                        : "text-navy-900 group-hover:text-teal"
                                    }`}
                                  >
                                    <span>{child.label}</span>
                                    {isChildActive ? (
                                      <span className="w-1.5 h-1.5 rounded-full bg-teal" />
                                    ) : (
                                      <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-gold group-hover:translate-x-1 transition-all" />
                                    )}
                                  </div>
                                  <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                                    {child.description}
                                  </p>
                                </a>
                              );
                            })}
                          </div>
                          <div className="border-t border-slate-100 mt-2.5 pt-2 px-3">
                            <a
                              href="/products"
                              className="text-xs font-semibold text-teal hover:text-teal-dark inline-flex items-center gap-1"
                            >
                              Explore All Commodities &rarr;
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
                    className={`group relative inline-flex items-center px-1.5 xl:px-1.5 py-2 text-xs xl:text-sm font-medium transition-colors ${
                      isActive
                        ? "text-navy-950 font-semibold"
                        : "text-trade-text/80 hover:text-navy-950"
                    }`}
                  >
                    <span>{item.label}</span>
                    {/* Active & Hover Underline Indicator */}
                    {isActive ? (
                      <span className="absolute bottom-0 left-2.5 right-2.5 xl:left-3.5 xl:right-3.5 h-[3px] bg-teal rounded-full shadow-[0_1px_3px_rgba(57,141,137,0.35)]" />
                    ) : (
                      <span className="absolute bottom-0 left-2.5 right-2.5 xl:left-3.5 xl:right-3.5 h-[2px] bg-teal/40 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right Action Button (Desktop) */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold hover:bg-gold-dark text-navy-950 font-heading font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow-gold-glow hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Send enquiry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Action & Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="p-2 rounded-lg text-navy-900 hover:bg-slate-100 active:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
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
      </header>

      {/* Mobile Backdrop (Rendered outside header to guarantee viewport-fixed coverage) */}
      <div
        className={`fixed inset-0 bg-navy-950/70 backdrop-blur-sm z-[998] lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Navigation Drawer (Rendered outside header, covers 100% viewport height cleanly) */}
      <aside
        className={`fixed top-0 right-0 bottom-0 w-[86vw] max-w-sm bg-white shadow-2xl z-[999] transform transition-transform duration-300 ease-out lg:hidden flex flex-col justify-between h-screen h-[100dvh] overflow-hidden ${
          mobileMenuOpen
            ? "translate-x-0"
            : "translate-x-full pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
      >
        {/* Mobile Drawer Top Bar: Brand Logo + Close Button */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-slate-50/80 flex-shrink-0">
          <a
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-block"
          >
            <img
              src="/images/logo.png"
              alt="DHRIVAA – Global Trade Partner"
              className="h-8 w-auto object-contain"
              width="984"
              height="305"
            />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 rounded-lg text-navy-900 hover:bg-slate-200/60 active:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            aria-label="Close Navigation Menu"
          >
            <X className="w-5 h-5 text-navy-900" />
          </button>
        </div>

        {/* Scrollable Navigation Body */}
        <div className="flex-1 overflow-y-auto px-5 py-5 space-y-4">
          <div className="border-b border-slate-100 pb-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Navigation
            </span>
          </div>

          <nav className="space-y-2" aria-label="Mobile Menu Links">
            {mainNavItems.map((item) => {
              const isActive = checkIsActive(item.href, path);

              if (item.children) {
                return (
                  <div key={item.label} className="py-0.5">
                    {/* Products Drawer Header */}
                    <div
                      className={`flex items-center justify-between rounded-xl transition-all ${
                        isActive
                          ? "bg-navy-900 text-white shadow-sm border-b-2 border-teal"
                          : mobileProductsOpen
                            ? "bg-slate-100 text-navy-900"
                            : "text-navy-900 hover:bg-slate-50"
                      }`}
                    >
                      {/* Direct Page Link */}
                      <a
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        aria-current={isActive ? "page" : undefined}
                        className="flex-1 flex items-center gap-2 px-3.5 py-3 text-base font-semibold"
                      >
                        <span>{item.label}</span>
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                        )}
                      </a>

                      {/* Accordion Open/Close Button */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setMobileProductsOpen(!mobileProductsOpen);
                        }}
                        className={`p-3 rounded-lg transition-colors focus:outline-none ${
                          isActive
                            ? "text-white/80 hover:text-white hover:bg-white/10"
                            : "text-slate-500 hover:text-navy-900 hover:bg-slate-200/60"
                        }`}
                        aria-label={
                          mobileProductsOpen
                            ? "Close Products Menu"
                            : "Open Products Menu"
                        }
                        aria-expanded={mobileProductsOpen}
                      >
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-300 ${
                            mobileProductsOpen ? "rotate-180 text-teal" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {/* Products Submenu Drawer */}
                    {mobileProductsOpen && (
                      <div className="mt-2 ml-2 pl-3 border-l-2 border-teal/40 space-y-1.5 py-1 animate-in fade-in slide-in-from-top-1 duration-200">
                        {/* All Commodities Catalog Link */}
                        <a
                          href="/products"
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex items-center justify-between py-2 px-3 rounded-lg text-sm font-semibold transition-colors ${
                            normalizePath(path) === "/products"
                              ? "text-teal font-bold bg-teal/10"
                              : "text-navy-900 hover:bg-slate-50"
                          }`}
                        >
                          <span>All Commodities Overview</span>
                          <ArrowRight className="w-3.5 h-3.5 text-teal" />
                        </a>

                        {/* Three Specific Commodities */}
                        {item.children.map((child) => {
                          const isChildActive =
                            normalizePath(path) === normalizePath(child.href);
                          return (
                            <a
                              key={child.href}
                              href={child.href}
                              onClick={() => setMobileMenuOpen(false)}
                              aria-current={isChildActive ? "page" : undefined}
                              className={`block py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                                isChildActive
                                  ? "text-teal font-bold bg-teal/10 border-b border-teal/40"
                                  : "text-slate-700 hover:text-navy-900 hover:bg-slate-50 active:bg-slate-100"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span>{child.label}</span>
                                <ArrowRight className="w-3 h-3 text-slate-400" />
                              </div>
                              <p className="text-[11px] text-slate-400 font-normal line-clamp-1 mt-0.5">
                                {child.description}
                              </p>
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <div key={item.label} className="py-0.5">
                  <a
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-base font-semibold transition-colors ${
                      isActive
                        ? "bg-navy-900 text-white shadow-sm border-b-2 border-teal"
                        : "text-navy-900 hover:bg-slate-50 active:bg-slate-100"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                    )}
                  </a>
                </div>
              );
            })}
          </nav>
        </div>

        {/* Mobile Drawer Footer with Focused Action */}
        <div className="p-5 bg-slate-50 border-t border-slate-100 flex-shrink-0">
          <a
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-gold hover:bg-gold-dark text-navy-950 font-heading font-bold text-sm uppercase tracking-wider transition-all shadow-md active:scale-[0.98]"
          >
            <span>Request a Quote</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </aside>
    </>
  );
}
