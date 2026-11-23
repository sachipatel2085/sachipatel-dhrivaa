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
      {/* Floating Header */}
      <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pointer-events-none">
        <div className="max-w-6xl mx-auto pointer-events-auto relative">
          
          <div
            className={`bg-white/95 backdrop-blur-md rounded-full border border-stone-200 transition-all duration-300 ${
              isScrolled ? "shadow-md shadow-stone-900/5" : "shadow-sm shadow-stone-900/3"
            }`}
          >
            <div className="px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between">
              
              {/* Brand Logo */}
              <a
                href="/"
                className="inline-flex items-center flex-shrink-0 focus:outline-none transition-opacity duration-200 hover:opacity-85"
                aria-label="DHRIVAA – Global Trade Partner"
              >
                <img
                  src="/images/logo.png"
                  alt="DHRIVAA – Global Trade Partner"
                  className="h-8 sm:h-9 w-auto object-contain"
                  width="984"
                  height="305"
                  loading="eager"
                  decoding="async"
                />
              </a>

              {/* Desktop Nav Links (Center) */}
              <nav
                className="hidden md:flex items-center gap-1 lg:gap-6"
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
                          className={`group inline-flex items-center gap-1 px-3 py-1.5 text-xs lg:text-sm font-medium transition-colors ${
                            isActive
                              ? "text-forest font-semibold"
                              : "text-stone-700 hover:text-stone-900"
                          }`}
                        >
                          <span>{item.label}</span>
                          <ChevronDown
                            className={`w-3.5 h-3.5 transition-transform duration-200 ${
                              productsDropdownOpen
                                ? "rotate-180 text-forest"
                                : "text-stone-400 group-hover:text-stone-700"
                            }`}
                          />
                        </a>

                        {/* Minimal Products Dropdown */}
                        {productsDropdownOpen && (
                          <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-card border border-stone-200 p-2 z-50 animate-in fade-in duration-150">
                            <div className="space-y-1">
                              {item.children.map((child) => {
                                const isChildActive =
                                  normalizePath(path) === normalizePath(child.href);
                                return (
                                  <a
                                    key={child.href}
                                    href={child.href}
                                    className={`block p-2.5 rounded-lg transition-colors ${
                                      isChildActive
                                        ? "bg-stone-100 text-forest font-semibold"
                                        : "hover:bg-stone-50 text-stone-800"
                                    }`}
                                  >
                                    <div className="text-xs lg:text-sm font-medium flex items-center justify-between">
                                      <span>{child.label}</span>
                                      <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
                                    </div>
                                    <p className="text-[11px] text-stone-500 mt-0.5 line-clamp-1">
                                      {child.description}
                                    </p>
                                  </a>
                                );
                              })}
                            </div>
                            <div className="border-t border-stone-100 mt-1.5 pt-1.5 px-2">
                              <a
                                href="/products"
                                className="text-xs font-medium text-forest hover:underline inline-flex items-center gap-1"
                              >
                                View All Commodities &rarr;
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
                      className={`inline-flex items-center px-3 py-1.5 text-xs lg:text-sm font-medium transition-colors ${
                        isActive
                          ? "text-forest font-semibold"
                          : "text-stone-700 hover:text-stone-900"
                      }`}
                    >
                      <span>{item.label}</span>
                    </a>
                  );
                })}
              </nav>

              {/* Desktop Action CTA (Right): Request a Quote Button */}
              <div className="hidden md:flex items-center flex-shrink-0">
                <a
                  href="/contact"
                  className="btn-forest inline-flex items-center gap-2 px-5 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs font-semibold tracking-wide shadow-subtle hover:shadow-sm"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Mobile Hamburger Button */}
              <div className="flex md:hidden items-center">
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen((prev) => !prev)}
                  className="w-9 h-9 flex items-center justify-center rounded-full text-stone-800 hover:bg-stone-100 focus:outline-none transition-colors"
                  aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
                  aria-expanded={mobileMenuOpen}
                >
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>

            </div>
          </div>

          {/* Mobile Navigation Drawer */}
          <div
            className={`md:hidden transition-all duration-300 ease-out ${
              mobileMenuOpen
                ? "opacity-100 translate-y-0 mt-2 pointer-events-auto"
                : "opacity-0 -translate-y-2 mt-0 pointer-events-none hidden"
            }`}
          >
            <div className="bg-white rounded-2xl shadow-card border border-stone-200 p-4 space-y-3">
              <nav className="space-y-1">
                {mainNavItems.map((item) => {
                  const isActive = checkIsActive(item.href, path);

                  if (item.children) {
                    return (
                      <div key={item.label} className="space-y-1">
                        <button
                          type="button"
                          onClick={() => setMobileProductsOpen((prev) => !prev)}
                          className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                            isActive ? "bg-stone-100 text-forest font-semibold" : "text-stone-800 hover:bg-stone-50"
                          }`}
                        >
                          <span>{item.label}</span>
                          <ChevronDown
                            className={`w-4 h-4 text-stone-400 transition-transform duration-200 ${
                              mobileProductsOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {mobileProductsOpen && (
                          <div className="pl-4 space-y-1">
                            {item.children.map((child) => (
                              <a
                                key={child.href}
                                href={child.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block px-3 py-2 rounded-lg text-xs font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-50"
                              >
                                {child.label}
                              </a>
                            ))}
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
                      className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        isActive ? "bg-stone-100 text-forest font-semibold" : "text-stone-800 hover:bg-stone-50"
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </nav>

              <div className="pt-2 border-t border-stone-100">
                <a
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-forest w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold text-center"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </header>
    </>
  );
}
