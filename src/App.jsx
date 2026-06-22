import React, { useState, useEffect, useRef } from 'react';
import heroVideo from '../assets/12091498_3840_2160_50fps.mp4';
import brideImg from '../assets/bride.jpg';
import masterImg from '../assets/master.jpg';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [formSuccess, setFormSuccess] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', date: '', guests: '', city: '', budget: '', source: '', message: ''
  });

  const sectionRefs = useRef({});

  // Handle Scroll for Navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll animations and active nav
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          entry.target.classList.add('fade-in-up');
        }
      });
    }, observerOptions);

    Object.values(sectionRefs.current).forEach(section => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const setRef = (id) => (el) => {
    sectionRefs.current[id] = el;
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSuccess(true);
    setTimeout(() => {
      setFormSuccess(false);
      setFormData({ name: '', email: '', phone: '', date: '', guests: '', city: '', budget: '', source: '', message: '' });
    }, 5000);
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'story', label: 'Our Story' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' }
  ];

  const faqs = [
    { q: "How far in advance should we book your services?", a: "We recommend booking 8 to 12 months in advance, especially for destination weddings and prime dates during the Indian wedding season (November to February)." },
    { q: "Do you handle destination weddings outside India?", a: "Yes, we specialize in destination weddings globally, with strong vendor networks in the UAE, Thailand, Bali, and Europe." },
    { q: "Can we hire you just for decor or day-of coordination?", a: "While our core expertise is full-service planning, we do offer partial planning and decor-only services depending on our availability." },
    { q: "Do you take a commission from vendors?", a: "No. We charge a flat professional fee for our services. Any vendor discounts we negotiate are passed directly to you, ensuring complete transparency." },
    { q: "How many weddings do you take on per year?", a: "To ensure every couple gets our undivided attention and the true luxury experience, we limit ourselves to 15 full-service weddings per year." },
    { q: "Do you help with guest hospitality and logistics?", a: "Absolutely. We have a dedicated hospitality team that manages everything from airport transfers and room allocations to personalized welcome hampers." },
    { q: "What is your pricing structure?", a: "Our full-planning services start at INR 5 Lakhs, scaling based on the complexity, destination, and guest count of the wedding." },
    { q: "How do we get started?", a: "Simply fill out our inquiry form below. We will schedule a complimentary discovery call to understand your vision and see if we are a good fit." }
  ];

  return (
    <div className="relative overflow-x-hidden w-full">
      {/* Sticky Navbar */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-ivory/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div 
            className="cursor-pointer flex flex-col items-start" 
            onClick={() => scrollTo('home')}
          >
            <h1 className={`font-serif font-bold text-2xl tracking-widest uppercase transition-colors ${isScrolled ? 'text-burgundy' : 'text-ivory'}`}>
              Vogue Vows
            </h1>
            <span className={`text-[10px] tracking-[0.2em] uppercase font-semibold ${isScrolled ? 'text-charcoal' : 'text-ivory/80'}`}>
              Luxury Wedding Planners
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`text-sm font-semibold tracking-wide transition-colors uppercase ${
                  activeSection === link.id 
                    ? (isScrolled ? 'text-marigold' : 'text-gold') 
                    : (isScrolled ? 'text-charcoal hover:text-burgundy' : 'text-ivory hover:text-gold')
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <button 
            onClick={() => scrollTo('contact')}
            className={`hidden md:block px-6 py-2.5 border-2 text-sm font-bold uppercase tracking-wider transition-all ${
              isScrolled 
                ? 'border-burgundy text-burgundy hover:bg-burgundy hover:text-ivory' 
                : 'border-ivory text-ivory hover:bg-ivory hover:text-burgundy'
            }`}
          >
            Inquire Now
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-current z-50 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className={`material-symbols-outlined text-3xl ${isMobileMenuOpen ? 'text-charcoal' : (isScrolled ? 'text-charcoal' : 'text-ivory')}`}>
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <div className={`fixed inset-0 bg-ivory z-40 flex flex-col items-center justify-center transition-transform duration-300 lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <nav className="flex flex-col items-center gap-8 text-charcoal">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  scrollTo(link.id);
                }}
                className={`text-2xl font-serif tracking-widest uppercase ${activeSection === link.id ? 'text-burgundy font-bold' : 'hover:text-gold'}`}
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                scrollTo('contact');
              }}
              className="mt-8 px-8 py-4 border-2 border-burgundy text-burgundy text-sm font-bold uppercase tracking-wider hover:bg-burgundy hover:text-ivory transition-all"
            >
              Inquire Now
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        id="home" 
        ref={setRef('home')}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy/60 via-charcoal/40 to-charcoal/90 z-0"></div>
        <div className="absolute inset-0 bg-hero-gradient opacity-40 mix-blend-multiply z-0"></div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
          <span className="inline-block text-gold font-bold tracking-[0.3em] uppercase text-sm mb-6 border-b border-gold pb-2">
            Bespoke Indian Weddings
          </span>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-ivory leading-tight mb-6">
            Your Dream Wedding, Planned Flawlessly
          </h2>
          <p className="font-sans text-xl md:text-2xl text-ivory/90 mb-10 max-w-3xl mx-auto font-light">
            So You Only Have to Feel the Joy. <br className="hidden md:block"/>
            <span className="text-lg md:text-xl opacity-80 mt-4 block">
              Stop juggling 40 vendors, endless calls, and family drama — let us handle every detail while you soak in every moment.
            </span>
          </p>
          <button 
            onClick={() => scrollTo('contact')}
            className="bg-marigold hover:bg-burgundy text-ivory px-10 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Start Planning Your Wedding
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-ivory/70 text-xs tracking-widest uppercase mb-2">Scroll</span>
          <span className="material-symbols-outlined text-ivory/70">south</span>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-burgundy text-ivory py-8 border-b-4 border-gold">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:flex lg:flex-wrap lg:justify-between items-center gap-8 text-center">
          <div>
            <p className="font-serif text-3xl font-bold text-gold">200+</p>
            <p className="text-xs uppercase tracking-widest mt-1">Weddings Planned</p>
          </div>
          <div className="hidden lg:block w-px h-12 bg-ivory/20"></div>
          <div>
            <p className="font-serif text-3xl font-bold text-gold">15+</p>
            <p className="text-xs uppercase tracking-widest mt-1">Cities Worldwide</p>
          </div>
          <div className="hidden lg:block w-px h-12 bg-ivory/20"></div>
          <div>
            <p className="font-serif text-3xl font-bold text-gold">Vogue</p>
            <p className="text-xs uppercase tracking-widest mt-1">Featured In India Weddings</p>
          </div>
          <div className="hidden lg:block w-px h-12 bg-ivory/20"></div>
          <div>
            <p className="font-serif text-3xl font-bold text-gold">4.9★</p>
            <p className="text-xs uppercase tracking-widest mt-1">Average Rating</p>
          </div>
        </div>
      </div>

      {/* Problem -> Solution Block */}
      <section className="py-24 px-6 bg-ivory relative" id="problem-solution">
        <div className="absolute top-0 left-0 w-full h-full divider-pattern pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-burgundy mb-4">The Journey to "I Do"</h2>
            <div className="w-24 h-1 bg-marigold mx-auto mb-6"></div>
            <p className="text-charcoal/70 max-w-2xl mx-auto">Planning a multi-day Indian wedding is equivalent to producing a theatrical masterpiece. You shouldn't have to be the director on your own big day.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 shadow-lg border-t-4 border-charcoal/20">
              <span className="material-symbols-outlined text-4xl text-charcoal/40 mb-4">mood_bad</span>
              <h3 className="font-serif text-2xl text-charcoal mb-4">The Stress</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Managing budgets, coordinating flights for 300 guests, negotiating with florists, and mediating family expectations while trying to enjoy your engagement.
              </p>
            </div>
            <div className="bg-white p-10 shadow-lg border-t-4 border-marigold">
              <span className="material-symbols-outlined text-4xl text-marigold mb-4">published_with_changes</span>
              <h3 className="font-serif text-2xl text-charcoal mb-4">What Couples Try</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Relying on spreadsheets, spending hours on Instagram, assigning tasks to relatives, and ultimately ending up exhausted before the Sangeet even begins.
              </p>
            </div>
            <div className="bg-burgundy text-ivory p-10 shadow-xl border-t-4 border-gold transform md:-translate-y-4">
              <span className="material-symbols-outlined text-4xl text-gold mb-4">auto_awesome</span>
              <h3 className="font-serif text-2xl text-gold mb-4">The Vogue Vows Way</h3>
              <p className="text-ivory/90 leading-relaxed">
                You make the fun decisions (tasting cake, picking colors). We handle the logistics, contracts, timelines, and crises. You arrive as a guest to your own masterpiece.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section id="story" ref={setRef('story')} className="py-24 px-6 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="aspect-[4/5] relative overflow-hidden shadow-2xl border-8 border-burgundy">
              <img 
                src={brideImg} 
                alt="Bride" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gold text-charcoal p-6 shadow-xl max-w-xs">
              <p className="font-serif italic text-xl">"A wedding is not just an event; it's the beginning of a legacy."</p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <span className="text-gold uppercase tracking-[0.2em] text-sm font-bold">Our Story</span>
            <h2 className="font-serif text-4xl md:text-5xl text-ivory mt-4 mb-6">Crafting Royal Experiences</h2>
            <p className="text-ivory/80 leading-relaxed mb-6">
              Founded by Ananya Rajput, Vogue Vows was born out of a desire to bring structured elegance to the beautiful chaos of Indian weddings. With a background in luxury hospitality and fashion event management, Ananya recognized that couples needed more than just a decorator—they needed an executive producer.
            </p>
            <p className="text-ivory/80 leading-relaxed mb-8">
              Today, our team of 25 passionate planners, designers, and logistics experts work tirelessly behind the scenes. We believe that true luxury lies in peace of mind. When you hire us, you're not just buying a beautifully designed mandap; you're buying the ability to be completely present with your loved ones.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-4">
                <span className="material-symbols-outlined text-gold">verified</span>
                <span>Certified by the International Wedding Planning Association</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="material-symbols-outlined text-gold">verified</span>
                <span>Exclusive partnerships with Taj, Oberoi, and Marriott groups</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="material-symbols-outlined text-gold">verified</span>
                <span>Dedicated in-house hospitality & RSVP management team</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" ref={setRef('services')} className="py-24 px-6 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-burgundy mb-4">Our Bespoke Services</h2>
            <div className="w-24 h-1 bg-marigold mx-auto mb-6"></div>
            <p className="text-charcoal/70 max-w-2xl mx-auto">Tailored solutions for every scale and style. From intimate palace weddings in Rajasthan to grand celebrations in Dubai.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service 1 */}
            <div className="glass-card p-8 group hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-burgundy/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-burgundy transition-colors">
                <span className="material-symbols-outlined text-burgundy group-hover:text-ivory text-3xl">all_inclusive</span>
              </div>
              <h3 className="font-serif text-2xl text-charcoal mb-3">Full Planning</h3>
              <p className="text-charcoal/70 text-sm mb-6 leading-relaxed">
                The ultimate luxury experience. We handle venue scouting, vendor curation, design conceptualization, and execution from day one.
              </p>
              <p className="text-sm font-bold text-burgundy border-t border-gold/30 pt-4">Starting at ₹5 Lakhs</p>
            </div>

            {/* Service 2 */}
            <div className="glass-card p-8 group hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-marigold/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-marigold transition-colors">
                <span className="material-symbols-outlined text-marigold group-hover:text-ivory text-3xl">edit_calendar</span>
              </div>
              <h3 className="font-serif text-2xl text-charcoal mb-3">Partial Planning</h3>
              <p className="text-charcoal/70 text-sm mb-6 leading-relaxed">
                For the couple who has booked the venue but needs an expert to design the decor, manage vendors, and pull the vision together.
              </p>
              <p className="text-sm font-bold text-marigold border-t border-gold/30 pt-4">Starting at ₹3 Lakhs</p>
            </div>

            {/* Service 3 */}
            <div className="glass-card p-8 group hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-gold/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold transition-colors">
                <span className="material-symbols-outlined text-gold group-hover:text-charcoal text-3xl">flight_takeoff</span>
              </div>
              <h3 className="font-serif text-2xl text-charcoal mb-3">Destination Weddings</h3>
              <p className="text-charcoal/70 text-sm mb-6 leading-relaxed">
                Specialized logistics for remote locations. We manage international flights, visas, local vendors, and multi-hotel room blocking.
              </p>
              <p className="text-sm font-bold text-gold border-t border-gold/30 pt-4">Custom Quote</p>
            </div>

            {/* Service 4 */}
            <div className="glass-card p-8 group hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-charcoal/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-charcoal transition-colors">
                <span className="material-symbols-outlined text-charcoal group-hover:text-ivory text-3xl">timer</span>
              </div>
              <h3 className="font-serif text-2xl text-charcoal mb-3">Day-of Coordination</h3>
              <p className="text-charcoal/70 text-sm mb-6 leading-relaxed">
                You planned it, we execute it. We step in 30 days prior to manage the timeline, direct vendors, and ensure flawless execution.
              </p>
              <p className="text-sm font-bold text-charcoal border-t border-gold/30 pt-4">Starting at ₹1.5 Lakhs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio / Featured Wedding */}
      <section id="portfolio" ref={setRef('portfolio')} className="py-24 px-6 bg-charcoal text-ivory relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-gold mb-4">Our Masterpieces</h2>
              <p className="text-ivory/70 max-w-xl">Glimpses into the unforgettable celebrations we've orchestrated across the globe.</p>
            </div>
            <button className="hidden md:block border-b border-marigold text-marigold pb-1 hover:text-gold transition-colors uppercase tracking-wider text-sm font-bold">
              View Full Gallery
            </button>
          </div>

          {/* Featured Wedding Showcase */}
          <div className="grid lg:grid-cols-2 gap-0 overflow-hidden shadow-2xl">
            <div className="aspect-square lg:aspect-auto">
              <img 
                src={masterImg} 
                alt="Royal Rajasthan Wedding" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-burgundy p-12 flex flex-col justify-center">
              <span className="text-gold text-xs uppercase tracking-[0.2em] mb-4">Udaipur, Rajasthan</span>
              <h3 className="font-serif text-4xl text-ivory mb-6">Rohan & Aisha's Royal Affair</h3>
              <p className="text-ivory/80 leading-relaxed mb-8">
                A three-day extravaganza at the Taj Lake Palace. We transformed the venue with over 50,000 fresh marigolds, orchestrated a boat arrival for the Baraat, and managed logistics for 400 international guests flying in from London and New York.
              </p>
              <blockquote className="border-l-2 border-marigold pl-6 italic font-serif text-xl text-ivory/90 mb-8">
                "Vogue Vows didn't just plan our wedding; they gave us a fairy tale. I didn't worry about a single thing for three days."
              </blockquote>
              <div className="flex gap-4">
                <span className="bg-charcoal/40 px-4 py-2 text-xs uppercase tracking-wider rounded">Full Planning</span>
                <span className="bg-charcoal/40 px-4 py-2 text-xs uppercase tracking-wider rounded">Destination</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" ref={setRef('testimonials')} className="py-24 px-6 bg-ivory relative">
        <div className="max-w-7xl mx-auto text-center">
          <span className="material-symbols-outlined text-gold text-5xl mb-6">format_quote</span>
          <h2 className="font-serif text-4xl md:text-5xl text-burgundy mb-16">Love Letters from Our Couples</h2>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                name: "Priyanka & Rahul", location: "Goa Wedding",
                text: "Ananya and her team are miracle workers. When our outdoor Sangeet got rained out, they moved the entire setup indoors in 45 minutes without anyone noticing. Absolute professionals."
              },
              {
                name: "Neha & Vikram", location: "Jaipur Wedding",
                text: "Being NRIs, we were terrified of planning a wedding in India from the US. Vogue Vows handled time zones, vendor meetings, and our parents' demands flawlessly. Worth every penny."
              },
              {
                name: "Sneha & Arjun", location: "Delhi Wedding",
                text: "Their attention to detail is unmatched. From custom monogrammed coconuts for the welcome lunch to ensuring my grandmother had her specific tea at exactly 4 PM. We felt truly cared for."
              }
            ].map((review, idx) => (
              <div key={idx} className="bg-white p-8 shadow-lg border border-gold/20 relative mt-8">
                <div className="absolute -top-6 left-8 w-12 h-12 bg-burgundy rounded-full flex items-center justify-center text-ivory">
                  <span className="material-symbols-outlined text-xl">favorite</span>
                </div>
                <div className="flex text-marigold mb-4 mt-2">
                  {[...Array(5)].map((_, i) => <span key={i} className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span>)}
                </div>
                <p className="font-serif italic text-lg text-charcoal mb-6 leading-relaxed">"{review.text}"</p>
                <div>
                  <p className="font-bold text-charcoal uppercase tracking-wider text-sm">{review.name}</p>
                  <p className="text-charcoal/50 text-xs uppercase">{review.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" ref={setRef('faq')} className="py-24 px-6 bg-surface border-t border-charcoal/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-burgundy mb-4">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-marigold mx-auto"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-charcoal/10 shadow-sm rounded-lg overflow-hidden">
                <button 
                  className="w-full text-left px-6 py-5 font-bold text-charcoal flex justify-between items-center focus:outline-none hover:bg-ivory transition-colors"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span>{faq.q}</span>
                  <span className={`material-symbols-outlined transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-marigold' : 'text-charcoal/50'}`}>
                    expand_more
                  </span>
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === idx ? 'max-h-48 py-4 border-t border-charcoal/5' : 'max-h-0'
                  }`}
                >
                  <p className="text-charcoal/70 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="contact" ref={setRef('contact')} className="py-24 px-6 bg-charcoal relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-marigold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-burgundy/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-5xl mx-auto relative z-10 grid md:grid-cols-5 gap-12 bg-ivory rounded-xl overflow-hidden shadow-2xl">
          
          <div className="md:col-span-2 bg-burgundy text-ivory p-10 flex flex-col justify-between">
            <div>
              <h2 className="font-serif text-4xl mb-4">Let's Start Planning Your Forever</h2>
              <p className="text-ivory/80 leading-relaxed mb-8 text-sm">
                Fill out the form to check our availability. We take on a limited number of weddings to ensure impeccable service.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-gold">mail</span>
                  <span>hello@voguevows.in</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-gold">call</span>
                  <span>+91 99999 99999</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-gold">location_on</span>
                  <span>Delhi NCR | Mumbai | Global</span>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-ivory/20">
              <p className="text-xs uppercase tracking-widest text-gold mb-4">Follow our work</p>
              <div className="flex gap-4">
                {/* Social icons placeholder */}
                <div className="w-10 h-10 border border-ivory/30 rounded-full flex items-center justify-center hover:bg-gold hover:text-charcoal transition-colors cursor-pointer">IG</div>
                <div className="w-10 h-10 border border-ivory/30 rounded-full flex items-center justify-center hover:bg-gold hover:text-charcoal transition-colors cursor-pointer">FB</div>
                <div className="w-10 h-10 border border-ivory/30 rounded-full flex items-center justify-center hover:bg-gold hover:text-charcoal transition-colors cursor-pointer">YT</div>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 p-10 bg-white">
            {formSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-4xl text-green-600">check_circle</span>
                </div>
                <h3 className="font-serif text-3xl text-charcoal mb-4">Inquiry Sent Successfully</h3>
                <p className="text-charcoal/70">
                  Thank you for reaching out! We are thrilled to hear about your upcoming wedding. Our lead planner will review your details and respond within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-bold text-charcoal mb-2">Full Name *</label>
                    <input required type="text" value={formData.name} onChange={e=>setFormData({...formData, name: e.target.value})} className="w-full border-b-2 border-charcoal/10 focus:border-marigold bg-transparent py-2 outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-bold text-charcoal mb-2">Phone Number *</label>
                    <input required type="tel" value={formData.phone} onChange={e=>setFormData({...formData, phone: e.target.value})} className="w-full border-b-2 border-charcoal/10 focus:border-marigold bg-transparent py-2 outline-none transition-colors" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold text-charcoal mb-2">Email Address *</label>
                  <input required type="email" value={formData.email} onChange={e=>setFormData({...formData, email: e.target.value})} className="w-full border-b-2 border-charcoal/10 focus:border-marigold bg-transparent py-2 outline-none transition-colors" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-bold text-charcoal mb-2">Wedding Date *</label>
                    <input required type="date" value={formData.date} onChange={e=>setFormData({...formData, date: e.target.value})} className="w-full border-b-2 border-charcoal/10 focus:border-marigold bg-transparent py-2 outline-none transition-colors text-charcoal" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-bold text-charcoal mb-2">Est. Guests *</label>
                    <input required type="number" placeholder="e.g. 300" value={formData.guests} onChange={e=>setFormData({...formData, guests: e.target.value})} className="w-full border-b-2 border-charcoal/10 focus:border-marigold bg-transparent py-2 outline-none transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-bold text-charcoal mb-2">City / Venue</label>
                    <input type="text" placeholder="If known" value={formData.city} onChange={e=>setFormData({...formData, city: e.target.value})} className="w-full border-b-2 border-charcoal/10 focus:border-marigold bg-transparent py-2 outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-bold text-charcoal mb-2">Budget Range *</label>
                    <select required value={formData.budget} onChange={e=>setFormData({...formData, budget: e.target.value})} className="w-full border-b-2 border-charcoal/10 focus:border-marigold bg-transparent py-2 outline-none transition-colors text-charcoal">
                      <option value="" disabled>Select a range</option>
                      <option value="5-10L">₹5 Lakhs - ₹10 Lakhs</option>
                      <option value="10-25L">₹10 Lakhs - ₹25 Lakhs</option>
                      <option value="25-50L">₹25 Lakhs - ₹50 Lakhs</option>
                      <option value="50L+">₹50 Lakhs +</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold text-charcoal mb-2">Tell Us About Your Vision</label>
                  <textarea rows="3" value={formData.message} onChange={e=>setFormData({...formData, message: e.target.value})} className="w-full border-b-2 border-charcoal/10 focus:border-marigold bg-transparent py-2 outline-none transition-colors resize-none"></textarea>
                </div>

                <div className="pt-4">
                  <button type="submit" className="w-full bg-charcoal text-ivory font-bold uppercase tracking-widest py-4 hover:bg-marigold transition-colors shadow-lg">
                    Send My Inquiry
                  </button>
                  <p className="text-center text-xs text-charcoal/50 mt-4">We respond within 24 hours. No spam, ever.</p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-ivory py-16 border-t border-gold/20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-serif text-2xl text-gold mb-4">Vogue Vows</h3>
            <p className="text-ivory/70 text-sm leading-relaxed mb-6">
              Crafting bespoke luxury weddings across the globe. Let us turn your dream celebration into a flawless reality.
            </p>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-marigold">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => scrollTo(link.id)}
                    className="text-ivory/70 hover:text-gold transition-colors text-sm uppercase tracking-wide"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-marigold">Contact Us</h4>
            <div className="space-y-4 text-ivory/70 text-sm">
              <p className="flex items-center gap-3">
                <span className="material-symbols-outlined text-gold text-lg">mail</span>
                <a href="mailto:demo@voguevows.in" className="hover:text-gold transition-colors">demo@voguevows.in</a>
              </p>
              <p className="flex items-center gap-3">
                <span className="material-symbols-outlined text-gold text-lg">call</span>
                <a href="tel:+919999999999" className="hover:text-gold transition-colors">+91 99999 99999</a>
              </p>
              <p className="flex items-center gap-3">
                <span className="material-symbols-outlined text-gold text-lg">location_on</span>
                Delhi NCR | Mumbai | Global
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-ivory/10 text-center text-sm text-ivory/50">
          <p>&copy; {new Date().getFullYear()} Vogue Vows Luxury Wedding Planners. All Rights Reserved.</p>
        </div>
      </footer>

      {/* Floating WhatsApp CTA */}
      <a 
        href="https://wa.me/919999999999" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 bg-[#25D366] text-white p-3.5 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center group"
      >
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
          <path d="M12.031 0C5.385 0 0 5.384 0 12.03c0 2.12.553 4.195 1.603 6.012L.268 23.407l5.522-1.448A11.96 11.96 0 0 0 12.031 24c6.645 0 12.03-5.384 12.03-12.03S18.676 0 12.031 0zm0 22.002c-1.802 0-3.567-.483-5.116-1.401l-.367-.217-3.801.996.996-3.8-.217-.366A9.97 9.97 0 0 1 2.031 12.03c0-5.542 4.488-10.03 10.03-10.03 5.54 0 10.029 4.488 10.029 10.03 0 5.54-4.489 10.028-10.029 10.028zm5.5-7.525c-.302-.15-1.785-.882-2.062-.983-.277-.101-.479-.15-.681.15-.202.302-.782.983-.958 1.185-.177.201-.354.226-.656.075-1.32-.638-2.39-1.36-3.266-2.883-.177-.302-.018-.465.132-.616.135-.136.302-.353.453-.53.151-.176.202-.301.302-.503.1-.201.05-.377-.025-.528-.075-.15-.681-1.642-.933-2.251-.246-.595-.497-.514-.681-.523-.176-.008-.378-.008-.579-.008-.202 0-.528.075-.805.377-.277.302-1.057 1.032-1.057 2.516s1.082 2.915 1.233 3.117c.15.201 2.126 3.245 5.15 4.549.719.309 1.28.494 1.718.632.721.229 1.378.197 1.895.12.577-.086 1.785-.73 2.036-1.436.252-.705.252-1.31.177-1.436-.076-.126-.277-.202-.579-.353z" />
        </svg>
        {/* Tooltip */}
        <span className="absolute left-full ml-4 bg-charcoal text-ivory text-xs px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with us!
        </span>
      </a>
    </div>
  );
}
