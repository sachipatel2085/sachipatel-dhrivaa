import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowRight, Phone, Mail, Globe } from 'lucide-react';
import { mainNavItems } from '../../data/navigation';
import { companyData } from '../../data/company';

interface NavbarProps {
  currentPath?: string;
}

const normalizePath = (p: string) => {
  if (!p) return '/';
  const clean = p.split('?')[0].split('#')[0];
  return clean.length > 1 && clean.endsWith('/') ? clean.slice(0, -1) : clean;
};

const checkIsActive = (itemHref: string, current: string) => {
  const normCurrent = normalizePath(current);
  const normHref = normalizePath(itemHref);

  if (normHref === '/') {
    return normCurrent === '/' || normCurrent === '';
  }
  return normCurrent === normHref || normCurrent.startsWith(normHref + '/');
};

export default function Navbar({ currentPath = '/' }: NavbarProps) {
  const [path, setPath] = useState(currentPath);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPath(window.location.pathname);
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

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setProductsDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-card border-b border-trade-border/60 py-3.5'
          : 'bg-white/90 backdrop-blur-sm border-b border-trade-border/40 py-5'
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
              className="h-9 sm:h-10 md:h-11 w-auto object-contain"
              width="984"
              height="305"
              loading="eager"
              decoding="async"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
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
                      aria-current={isActive ? 'page' : undefined}
                      className={`group relative inline-flex items-center gap-1.5 px-3.5 py-2.5 text-sm font-medium transition-colors ${
                        isActive
                          ? 'text-navy-950 font-semibold'
                          : 'text-trade-text/80 hover:text-navy-950'
                      }`}
                      aria-expanded={productsDropdownOpen}
                      aria-haspopup="true"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          productsDropdownOpen ? 'rotate-180 text-teal' : isActive ? 'text-teal' : 'text-slate-400'
                        }`}
                      />
                      {/* Active & Hover Underline Indicator */}
                      {isActive ? (
                        <span className="absolute bottom-0 left-3.5 right-3.5 h-[3px] bg-teal rounded-full shadow-[0_1px_3px_rgba(57,141,137,0.35)]" />
                      ) : (
                        <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-teal/40 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center" />
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
                            const isChildActive = normalizePath(path) === normalizePath(child.href);
                            return (
                              <a
                                key={child.href}
                                href={child.href}
                                aria-current={isChildActive ? 'page' : undefined}
                                className={`group block p-2.5 rounded-lg transition-colors ${
                                  isChildActive ? 'bg-teal/10 border-l-2 border-teal' : 'hover:bg-slate-50'
                                }`}
                              >
                                <div className={`font-heading font-semibold text-sm flex items-center justify-between ${
                                  isChildActive ? 'text-teal font-bold' : 'text-navy-900 group-hover:text-teal'
                                }`}>
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
                  aria-current={isActive ? 'page' : undefined}
                  className={`group relative inline-flex items-center px-3.5 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-navy-950 font-semibold'
                      : 'text-trade-text/80 hover:text-navy-950'
                  }`}
                >
                  <span>{item.label}</span>
                  {/* Active & Hover Underline Indicator */}
                  {isActive ? (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-[3px] bg-teal rounded-full shadow-[0_1px_3px_rgba(57,141,137,0.35)]" />
                  ) : (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-teal/40 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold hover:bg-gold-dark text-navy-950 font-heading font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow-gold-glow hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="/contact"
              className="px-3.5 py-1.5 rounded-full bg-gold hover:bg-gold-dark text-navy-950 font-heading font-bold text-xs uppercase tracking-wider transition-colors"
            >
              Quote
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-navy-900 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[73px] bg-navy-950/40 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer Content */}
      <div
        className={`fixed top-[73px] right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col justify-between overflow-y-auto ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Navigation</span>
          </div>

          <nav className="space-y-1">
            {mainNavItems.map((item) => {
              const isActive = checkIsActive(item.href, path);
              return (
                <div key={item.label} className="py-1">
                  <a
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-base font-semibold transition-colors ${
                      isActive 
                        ? 'bg-navy-900 text-white shadow-sm border-b-2 border-teal' 
                        : 'text-navy-900 hover:bg-slate-50'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-teal" />
                    )}
                  </a>

                  {item.children && (
                    <div className="ml-4 mt-1 pl-3 border-l-2 border-slate-100 space-y-1">
                      {item.children.map((child) => {
                        const isChildActive = normalizePath(path) === normalizePath(child.href);
                        return (
                          <a
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileMenuOpen(false)}
                            aria-current={isChildActive ? 'page' : undefined}
                            className={`block py-1.5 px-2 text-sm font-medium rounded transition-colors ${
                              isChildActive
                                ? 'text-teal font-bold border-b border-teal/40'
                                : 'text-slate-600 hover:text-navy-900'
                            }`}
                          >
                            {child.label}
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        {/* Mobile Drawer Footer */}
        <div className="p-6 bg-slate-50 border-t border-slate-100 space-y-4">
          <a
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gold hover:bg-gold-dark text-navy-950 font-heading font-bold text-sm uppercase tracking-wider transition-colors shadow-md"
          >
            <span>Request a Quote</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <div className="text-xs text-slate-500 space-y-2 pt-2">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-teal" />
              <span>{companyData.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-teal" />
              <span>{companyData.phoneDisplay}</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-teal" />
              <span>Gujarat, India &bull; UAE & Gulf Trade</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
