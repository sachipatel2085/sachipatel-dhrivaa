import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X, Download, ArrowRight, MessageSquare } from "lucide-react";
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
    checkIsActive("/products", currentPath)
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
        <div className="max-w-7xl mx-auto pointer-events-auto">
          {/* Main Floating Bar */}
          <div
            className={`bg-white transition-all duration-300 border border-slate-200/90 ${
              mobileMenuOpen
                ? "rounded-t-2xl sm:rounded-t-3xl shadow-xl border-b-0"
                : "rounded-full shadow-lg shadow-navy-950/8"
            } ${isScrolled && !mobileMenuOpen ? "shadow-xl shadow-navy-950/12" : ""}`}
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
                          className={`relative inline-flex items-center gap-1 px-2.5 py-1 text-xs xl:text-sm font-semibold font-heading transition-colors ${
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
                                : "text-slate-400 group-hover:text-navy-950"
                            }`}
                          />
                          {/* Active Underline Indicator */}
                          {isActive && (
                            <span className="absolute -bottom-1 left-2.5 right-2.5 h-[2.5px] bg-navy-900 rounded-full" />
                          )}
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
                      className={`relative inline-flex items-center px-2.5 py-1 text-xs xl:text-sm font-semibold font-heading transition-colors ${
                        isActive
                          ? "text-navy-950"
                          : "text-navy-900/80 hover:text-navy-950"
                      }`}
                    >
                      <span>{item.label}</span>
                      {/* Active Underline Indicator */}
                      {isActive && (
                        <span className="absolute -bottom-1 left-2.5 right-2.5 h-[2.5px] bg-navy-900 rounded-full" />
                      )}
                    </a>
                  );
                })}
              </nav>

              {/* Right CTA Button (Desktop) - Matches "Brochure [icon]" in screenshot */}
              <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
                <a
                  href="/buyer-resources"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-navy-900 hover:bg-navy-800 text-white font-heading font-bold text-xs xl:text-sm tracking-wide transition-all duration-200 shadow-sm hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Brochure</span>
                  <span className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center">
                    <Download className="w-3 h-3 text-white" />
                  </span>
                </a>
              </div>

              {/* Mobile Hamburger Button */}
              <div className="flex lg:hidden items-center">
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen((prev) => !prev)}
                  className="p-2 rounded-lg text-navy-900 hover:bg-slate-100 active:bg-slate-200 focus:outline-none"
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

            {/* Mobile Dropdown Menu (Attached directly beneath top bar, matching screenshot 2) */}
            {mobileMenuOpen && (
              <div className="lg:hidden bg-navy-950 border-t border-navy-800 rounded-b-2xl sm:rounded-b-3xl overflow-hidden shadow-2xl animate-in fade-in slide-in-from-top-1 duration-200">
                <nav className="divide-y divide-navy-800/60" aria-label="Mobile Navigation">
                  {mainNavItems.map((item) => {
                    const isActive = checkIsActive(item.href, path);

                    if (item.children) {
                      return (
                        <div key={item.label} className="bg-navy-950">
                          {/* Parent row with accordion toggle */}
                          <div
                            className={`flex items-center justify-between px-5 py-3.5 transition-colors cursor-pointer ${
                              isActive ? "bg-[#2563eb] text-white" : "text-white hover:bg-navy-900"
                            }`}
                            onClick={() => setMobileProductsOpen((prev) => !prev)}
                          >
                            <span className="font-heading font-medium text-sm flex-1">
                              {item.label}
                            </span>
                            <span className="p-1 text-slate-300">
                              <ChevronDown
                                className={`w-4 h-4 transition-transform duration-200 ${
                                  mobileProductsOpen ? "rotate-180" : ""
                                }`}
                              />
                            </span>
                          </div>

                          {/* Accordion Sub-items */}
                          {mobileProductsOpen && (
                            <div className="bg-navy-900/90 divide-y divide-navy-800/40">
                              {item.children.map((child) => {
                                const isChildActive =
                                  normalizePath(path) ===
                                  normalizePath(child.href);
                                return (
                                  <a
                                    key={child.href}
                                    href={child.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`block px-8 py-3 text-xs transition-colors ${
                                      isChildActive
                                        ? "bg-teal text-white font-bold"
                                        : "text-slate-300 hover:text-white hover:bg-navy-850"
                                    }`}
                                  >
                                    <div className="font-semibold">{child.label}</div>
                                    <div className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">{child.description}</div>
                                  </a>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    }

                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block px-5 py-3.5 font-heading font-medium text-sm transition-colors ${
                          isActive
                            ? "bg-[#2563eb] text-white font-semibold"
                            : "text-white hover:bg-navy-900"
                        }`}
                      >
                        {item.label}
                      </a>
                    );
                  })}
                </nav>

                {/* Mobile Bottom Action: Brochure & WhatsApp */}
                <div className="p-4 bg-navy-900/95 border-t border-navy-800 flex items-center gap-3">
                  <a
                    href="/buyer-resources"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-white text-navy-900 font-heading font-bold text-xs uppercase tracking-wider hover:bg-slate-100 transition-colors shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5 text-navy-900" />
                    <span>Brochure</span>
                  </a>
                  <a
                    href={companyData.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-[#25D366] text-white font-heading font-bold text-xs tracking-wider hover:bg-[#20bd5a] transition-colors shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-white" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Background Dimmer when mobile menu is open */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-navy-950/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
