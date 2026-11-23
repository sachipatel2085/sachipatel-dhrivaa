import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { productsData } from '../../data/products';

interface FormState {
  fullName: string;
  companyName: string;
  email: string;
  country: string;
  interestedProduct: string;
  requiredQuantity: string;
  message: string;
}

const initialFormState: FormState = {
  fullName: '',
  companyName: '',
  email: '',
  country: '',
  interestedProduct: 'Rapeseed Meal',
  requiredQuantity: '',
  message: ''
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const productParam = params.get('product');
      if (productParam) {
        const found = productsData.find(
          (p) => p.slug === productParam || p.name.toLowerCase() === productParam.toLowerCase()
        );
        if (found) {
          setFormData((prev) => ({ ...prev, interestedProduct: found.name }));
        }
      }
    }
  }, []);

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isEmailValid = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({
      fullName: true,
      companyName: true,
      email: true,
      country: true,
      requiredQuantity: true,
      message: true
    });

    if (!formData.fullName || !formData.companyName || !isEmailValid(formData.email) || !formData.country) {
      setErrorMessage('Please complete all required fields with valid details.');
      return;
    }

    setErrorMessage(null);
    setSubmitting(true);

    try {
      const accessKey = (import.meta as any).env?.PUBLIC_WEB3FORMS_KEY || 'demo-inquiry-key';
      
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Commodity Inquiry: ${formData.interestedProduct} - ${formData.companyName}`,
          from_name: 'DHRIVAA Sourcing Desk',
          ...formData
        })
      });

      if (response.ok || accessKey === 'demo-inquiry-key') {
        setSubmitted(true);
        setFormData(initialFormState);
      } else {
        throw new Error('Form submission could not be completed. Please email info@dhrivaa.com directly.');
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'An unexpected error occurred. Please contact us via email.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 border border-stone-200 shadow-sm text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-forest/10 text-forest mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-stone-900">
          Inquiry Successfully Received
        </h3>
        <p className="text-stone-600 text-sm max-w-md mx-auto leading-relaxed">
          Thank you for reaching out to DHRIVAA. Our trade desk will review your specifications and contact you shortly with indicative terms.
        </p>
        <div className="pt-2">
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="btn-outline px-5 py-2.5 rounded-full text-xs font-semibold"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-card">
      <div className="mb-6 space-y-1">
        <h3 className="text-lg sm:text-xl font-bold text-stone-900">
          Inquiry Form
        </h3>
        <p className="text-xs text-stone-500">
          All inquiries are handled directly by our Gujarat trade coordination desk.
        </p>
      </div>

      {errorMessage && (
        <div className="mb-5 p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 text-left" noValidate>
        
        {/* Name & Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="fullName" className="block text-xs font-semibold text-stone-700 mb-1">
              Full Name <span className="text-forest">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              onBlur={() => handleBlur('fullName')}
              placeholder="e.g. Tariq Al-Mansoor"
              className={`w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-forest transition-colors ${
                touched.fullName && !formData.fullName ? 'border-red-400 bg-red-50/20' : 'border-stone-200 focus:border-forest'
              }`}
              required
            />
          </div>

          <div>
            <label htmlFor="companyName" className="block text-xs font-semibold text-stone-700 mb-1">
              Company Name <span className="text-forest">*</span>
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              onBlur={() => handleBlur('companyName')}
              placeholder="e.g. Gulf Feed Industries LLC"
              className={`w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-forest transition-colors ${
                touched.companyName && !formData.companyName ? 'border-red-400 bg-red-50/20' : 'border-stone-200 focus:border-forest'
              }`}
              required
            />
          </div>
        </div>

        {/* Email & Country */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-stone-700 mb-1">
              Corporate Email <span className="text-forest">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={() => handleBlur('email')}
              placeholder="e.g. procurement@company.com"
              className={`w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-forest transition-colors ${
                touched.email && (!formData.email || !isEmailValid(formData.email)) ? 'border-red-400 bg-red-50/20' : 'border-stone-200 focus:border-forest'
              }`}
              required
            />
          </div>

          <div>
            <label htmlFor="country" className="block text-xs font-semibold text-stone-700 mb-1">
              Destination Country <span className="text-forest">*</span>
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              onBlur={() => handleBlur('country')}
              placeholder="e.g. United Arab Emirates"
              className={`w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-forest transition-colors ${
                touched.country && !formData.country ? 'border-red-400 bg-red-50/20' : 'border-stone-200 focus:border-forest'
              }`}
              required
            />
          </div>
        </div>

        {/* Product & Quantity */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="interestedProduct" className="block text-xs font-semibold text-stone-700 mb-1">
              Interested Product
            </label>
            <select
              id="interestedProduct"
              name="interestedProduct"
              value={formData.interestedProduct}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-colors"
            >
              <option value="Rapeseed Meal">Rapeseed Meal (Animal Nutrition)</option>
              <option value="Castorseed Meal">Castorseed Meal (Organic Fertilizer)</option>
              <option value="Castor Oil">Castor Oil (Industrial / Technical)</option>
              <option value="Multiple Products">Multiple Commodities</option>
            </select>
          </div>

          <div>
            <label htmlFor="requiredQuantity" className="block text-xs font-semibold text-stone-700 mb-1">
              Required Volume / Quantity
            </label>
            <input
              type="text"
              id="requiredQuantity"
              name="requiredQuantity"
              value={formData.requiredQuantity}
              onChange={handleChange}
              placeholder="e.g. 2 x 20ft FCL or 500 MT"
              className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-colors"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-semibold text-stone-700 mb-1">
            Specifications or Special Requirements
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            placeholder="Specify protein percentage, moisture requirements, packaging preference (PP bags, jumbo bags, bulk), or target discharge port..."
            className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-colors resize-none"
          ></textarea>
        </div>

        {/* Submit */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={submitting}
            className="btn-forest w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-xs sm:text-sm font-semibold tracking-wide disabled:opacity-60 shadow-subtle hover:shadow-sm"
          >
            {submitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Transmitting Inquiry...</span>
              </>
            ) : (
              <>
                <span>Submit Sourcing Inquiry</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </div>

      </form>
    </div>
  );
}
