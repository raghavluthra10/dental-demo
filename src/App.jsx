import React, { useEffect, useRef } from 'react';

function App() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
            }
        });
    }, observerOptions);

    sectionsRef.current.forEach(section => {
        if (section) {
            section.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
            observer.observe(section);
        }
    });

    return () => {
        observer.disconnect();
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
        sectionsRef.current.push(el);
    }
  };

  return (
    <>
      {/* TopNavBar */}
      <header className="bg-surface/80 backdrop-blur-md dark:bg-surface-dim/80 shadow-sm docked full-width top-0 sticky z-50">
        <div className="flex justify-between items-center w-full px-margin-desktop py-4 max-w-container-max-width mx-auto">
          <div className="font-headline-sm text-headline-sm font-bold text-primary dark:text-primary-fixed cursor-pointer">
            Dr. Supriya's Dental Clinic
          </div>
          <nav className="hidden md:flex items-center gap-gutter">
            <a className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors font-body-md text-body-md" href="#services">Services</a>
            <a className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors font-body-md text-body-md" href="#about">About</a>
            <a className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors font-body-md text-body-md" href="#reviews">Reviews</a>
            <a className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors font-body-md text-body-md" href="#contact">Contact</a>
            <button className="bg-primary text-on-primary px-stack-lg py-2.5 rounded-full font-label-md text-label-md hover:shadow-lg transition-all active:scale-95 duration-200">
              Book Appointment
            </button>
          </nav>
          <button className="md:hidden text-primary">
            <span className="material-symbols-outlined text-4xl" data-icon="menu">menu</span>
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section ref={addToRefs} className="relative min-h-[90vh] flex items-center pt-stack-lg overflow-hidden px-margin-mobile md:px-margin-desktop">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-surface-container-low -skew-x-12 translate-x-1/4 -z-10 rounded-l-[100px] hidden md:block"></div>
          <div className="max-w-container-max-width mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter items-center w-full">
            <div className="md:col-span-7 flex flex-col items-start gap-stack-lg py-stack-lg">
              <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full font-label-md text-label-md tracking-wider">
                TRUSTED BY 5,000+ PATIENTS
              </span>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg leading-tight text-on-surface">
                Experience <span className="text-gradient">Painless &amp; Expert</span> Dental Care with Dr. Supriya Jadon
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                Indore's trusted expert for Root Canals, Implants, and Smile Transformations. We combine clinical precision with gentle care.
              </p>
              <div className="flex flex-col sm:flex-row gap-stack-md w-full sm:w-auto">
                <button className="bg-primary text-on-primary px-10 py-4 rounded-xl font-label-md text-label-md shadow-xl hover:shadow-2xl transition-all active:scale-95">
                  Book an Appointment
                </button>
                <button className="border-2 border-secondary text-secondary px-10 py-4 rounded-xl font-label-md text-label-md hover:bg-secondary/5 transition-all active:scale-95 flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined" data-icon="call">call</span> Call 093011 71770
                </button>
              </div>
              <div className="flex items-center gap-4 pt-stack-sm">
                <div className="flex text-yellow-500">
                  <span className="material-symbols-outlined" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" data-icon="star_half" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
                </div>
                <span className="font-label-md text-label-md text-on-surface-variant">4.9/5 Rating on Google</span>
              </div>
            </div>
            <div className="md:col-span-5 relative">
              <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl relative border-8 border-surface">
                <img alt="Dr. Supriya Jadon" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAf0bim05H61rw8qecWORkwookDnYOyA8Pgjlcl-qJbdvtPSwbVvuAk-hWCRrAsHRFkyDxx6k1Z_Tzbs4rwmHSJxL_Lq0mDxVUvwlsnBS850AdlZYmo4lzlBmmXxRkEvgnFsDP8HzY21_81Dat-ToSTFY39vPa_Ht2_eMd2TV8RbDlycbLJmqODtK4MTaY2wvYYUYMLxDonoUPMZ4AN-XelcBx6DxZtYdip2QW6VG03yfOJuOT_Pi4T6qGK7juShEJuRVe1FZrx7SY"/>
              </div>
              <div className="absolute -bottom-8 -left-8 glass-card p-6 rounded-3xl shadow-xl hidden lg:block">
                <div className="flex items-center gap-4">
                  <div className="bg-primary-container text-on-primary-container p-3 rounded-full">
                    <span className="material-symbols-outlined" data-icon="health_and_safety">health_and_safety</span>
                  </div>
                  <div>
                    <p className="font-label-md text-label-md text-on-surface">Modern Equipment</p>
                    <p className="text-caption text-on-surface-variant">100% Sterilized Environment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section ref={addToRefs} className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-lowest" id="services">
          <div className="max-w-container-max-width mx-auto">
            <div className="text-center mb-stack-lg max-w-2xl mx-auto">
              <h2 className="font-headline-md text-headline-md text-on-surface mb-stack-sm">Comprehensive Dental Services</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">Advanced dental solutions tailored to your unique smile and comfort levels.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
              {/* Card 1 */}
              <div className="glass-card p-stack-lg rounded-3xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined text-3xl" data-icon="dentistry">dentistry</span>
                </div>
                <h3 className="font-headline-sm text-[20px] mb-3 text-on-surface">Root Canal Treatment</h3>
                <p className="font-body-md text-on-surface-variant text-sm mb-6 leading-relaxed">Painless single-sitting procedures using rotary endodontics for maximum comfort.</p>
                <a className="text-primary font-label-md text-sm flex items-center gap-2 group-hover:gap-4 transition-all" href="#">
                  Learn More <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
                </a>
              </div>
              {/* Card 2 */}
              <div className="glass-card p-stack-lg rounded-3xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
                <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                  <span className="material-symbols-outlined text-3xl" data-icon="medical_services">medical_services</span>
                </div>
                <h3 className="font-headline-sm text-[20px] mb-3 text-on-surface">Dental Implants</h3>
                <p className="font-body-md text-on-surface-variant text-sm mb-6 leading-relaxed">Restore your natural bite and confidence with precision-placed titanium implants.</p>
                <a className="text-secondary font-label-md text-sm flex items-center gap-2 group-hover:gap-4 transition-all" href="#">
                  Learn More <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
                </a>
              </div>
              {/* Card 3 */}
              <div className="glass-card p-stack-lg rounded-3xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined text-3xl" data-icon="clinical_notes">clinical_notes</span>
                </div>
                <h3 className="font-headline-sm text-[20px] mb-3 text-on-surface">Aligners &amp; Braces</h3>
                <p className="font-body-md text-on-surface-variant text-sm mb-6 leading-relaxed">Invisible aligners and modern braces for perfect alignment without social discomfort.</p>
                <a className="text-primary font-label-md text-sm flex items-center gap-2 group-hover:gap-4 transition-all" href="#">
                  Learn More <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
                </a>
              </div>
              {/* Card 4 */}
              <div className="glass-card p-stack-lg rounded-3xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
                <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                  <span className="material-symbols-outlined text-3xl" data-icon="auto_awesome">auto_awesome</span>
                </div>
                <h3 className="font-headline-sm text-[20px] mb-3 text-on-surface">Teeth Whitening</h3>
                <p className="font-body-md text-on-surface-variant text-sm mb-6 leading-relaxed">Professional clinical cleaning and whitening for a bright, hygienic, and pearly smile.</p>
                <a className="text-secondary font-label-md text-sm flex items-center gap-2 group-hover:gap-4 transition-all" href="#">
                  Learn More <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Dr. Supriya */}
        <section ref={addToRefs} className="py-section-gap px-margin-mobile md:px-margin-desktop overflow-hidden" id="about">
          <div className="max-w-container-max-width mx-auto">
            <div className="flex flex-col lg:flex-row gap-gutter items-center">
              <div className="lg:w-1/2 relative">
                <div className="relative z-10 rounded-[60px] overflow-hidden border-[12px] border-surface shadow-2xl">
                  <img alt="Dr. Supriya at work" className="w-full h-auto grayscale-[0.2] hover:grayscale-0 transition-all duration-500" data-alt="A professional high-resolution photograph of Dr. Supriya Jadon, a dental surgeon, smiling warmly in her modern clinical setting in Indore. She is wearing light purple scrubs and her hair is styled professionally. The background is a brightly lit, clean, and minimalist dental clinic with soft white and light blue tones, creating a welcoming and sterile atmosphere. The lighting is soft and flattering, highlighting her friendly and expert demeanor in a world-class dental facility." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAf0bim05H61rw8qecWORkwookDnYOyA8Pgjlcl-qJbdvtPSwbVvuAk-hWCRrAsHRFkyDxx6k1Z_Tzbs4rwmHSJxL_Lq0mDxVUvwlsnBS850AdlZYmo4lzlBmmXxRkEvgnFsDP8HzY21_81Dat-ToSTFY39vPa_Ht2_eMd2TV8RbDlycbLJmqODtK4MTaY2wvYYUYMLxDonoUPMZ4AN-XelcBx6DxZtYdip2QW6VG03yfOJuOT_Pi4T6qGK7juShEJuRVe1FZrx7SY"/>
                </div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full -z-10 animate-pulse"></div>
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary/5 rounded-full -z-10 animate-bounce" style={{ animationDuration: '10s' }}></div>
              </div>
              <div className="lg:w-1/2 flex flex-col gap-stack-md">
                <div className="flex items-center gap-3">
                  <span className="h-[2px] w-12 bg-primary"></span>
                  <span className="font-label-md text-label-md text-primary tracking-widest">MEET YOUR DOCTOR</span>
                </div>
                <h2 className="font-headline-md text-headline-md text-on-surface leading-snug">Compassionate Care with Medical Expertise</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  Dr. Supriya Jadon is renowned in Vijay Nagar for her gentle touch and clinical precision. Her approach prioritizes patient comfort, ensuring that even the most complex dental procedures feel stress-free.
                </p>
                <div className="grid grid-cols-2 gap-stack-lg py-stack-md border-y border-outline-variant/30">
                  <div className="flex flex-col gap-1">
                    <span className="font-display-lg text-headline-md text-primary">4.9 ★</span>
                    <span className="font-caption text-caption text-on-surface-variant uppercase tracking-widest">Google Rating</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-display-lg text-headline-md text-secondary">Expert</span>
                    <span className="font-caption text-caption text-on-surface-variant uppercase tracking-widest">Oral Surgeon</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 pt-stack-sm">
                  <span className="bg-surface-container-high px-4 py-2 rounded-full font-label-md text-xs text-on-surface-variant flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm" data-icon="female">female</span> Woman-Owned
                  </span>
                  <span className="bg-surface-container-high px-4 py-2 rounded-full font-label-md text-xs text-on-surface-variant flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm" data-icon="diversity_3">diversity_3</span> LGBTQ+ Friendly
                  </span>
                  <span className="bg-surface-container-high px-4 py-2 rounded-full font-label-md text-xs text-on-surface-variant flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm" data-icon="check_circle">check_circle</span> Modern Technology
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Patient Reviews */}
        <section ref={addToRefs} className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-low" id="reviews">
          <div className="max-w-container-max-width mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-stack-lg gap-gutter">
              <div className="max-w-xl">
                <h2 className="font-headline-md text-headline-md text-on-surface mb-stack-sm">What Our Patients Say</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">Join thousands of happy patients who found their perfect smile at our clinic.</p>
              </div>
              <div className="flex gap-4">
                <button className="w-12 h-12 rounded-full border border-outline flex items-center justify-center hover:bg-surface-container transition-colors">
                  <span className="material-symbols-outlined" data-icon="arrow_back">arrow_back</span>
                </button>
                <button className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center hover:shadow-lg transition-colors">
                  <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
              {/* Review 1 */}
              <div className="bg-surface-container-lowest p-stack-lg rounded-3xl shadow-sm flex flex-col justify-between">
                <div>
                  <div className="text-primary mb-4">
                    <span className="material-symbols-outlined" data-icon="format_quote" style={{ fontSize: '48px', opacity: 0.2 }}>format_quote</span>
                  </div>
                  <p className="font-body-md text-on-surface italic mb-stack-lg leading-relaxed">"Best dental clinic in Indore for professional teeth whitening. The results were immediate and the procedure was effortless."</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center font-bold text-primary">SL</div>
                  <div>
                    <p className="font-label-md text-label-md">Shikha Lowanshi</p>
                    <p className="text-caption text-on-surface-variant">Patient</p>
                  </div>
                </div>
              </div>
              {/* Review 2 */}
              <div className="bg-surface-container-lowest p-stack-lg rounded-3xl shadow-sm flex flex-col justify-between">
                <div>
                  <div className="text-secondary mb-4">
                    <span className="material-symbols-outlined" data-icon="format_quote" style={{ fontSize: '48px', opacity: 0.2 }}>format_quote</span>
                  </div>
                  <p className="font-body-md text-on-surface italic mb-stack-lg leading-relaxed">"Expert in root canal procedures... great experience. Dr. Supriya makes sure you're comfortable throughout the process."</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center font-bold text-secondary">VP</div>
                  <div>
                    <p className="font-label-md text-label-md">Vineet Patel</p>
                    <p className="text-caption text-on-surface-variant">Patient</p>
                  </div>
                </div>
              </div>
              {/* Review 3 */}
              <div className="bg-surface-container-lowest p-stack-lg rounded-3xl shadow-sm flex flex-col justify-between">
                <div>
                  <div className="text-primary mb-4">
                    <span className="material-symbols-outlined" data-icon="format_quote" style={{ fontSize: '48px', opacity: 0.2 }}>format_quote</span>
                  </div>
                  <p className="font-body-md text-on-surface italic mb-stack-lg leading-relaxed">"Treatment was completely painless and very smooth. Highly recommend for anyone afraid of dentists!"</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center font-bold text-primary">MC</div>
                  <div>
                    <p className="font-label-md text-label-md">Madhur Choudhary</p>
                    <p className="text-caption text-on-surface-variant">Patient</p>
                  </div>
                </div>
              </div>
              {/* Review 4 */}
              <div className="bg-surface-container-lowest p-stack-lg rounded-3xl shadow-sm flex flex-col justify-between">
                <div>
                  <div className="text-secondary mb-4">
                    <span className="material-symbols-outlined" data-icon="format_quote" style={{ fontSize: '48px', opacity: 0.2 }}>format_quote</span>
                  </div>
                  <p className="font-body-md text-on-surface italic mb-stack-lg leading-relaxed">"Felt welcomed and at ease... immaculate space. The clinic is very hygienic and follows all protocols."</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center font-bold text-secondary">VN</div>
                  <div>
                    <p className="font-label-md text-label-md">Vrateen Nuwal</p>
                    <p className="text-caption text-on-surface-variant">Patient</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section ref={addToRefs} className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-lowest" id="contact">
          <div className="max-w-container-max-width mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="font-headline-md text-headline-md text-on-surface mb-stack-md">Visit Us in Vijay Nagar</h2>
                <div className="flex flex-col gap-stack-lg mt-stack-lg">
                  <div className="flex gap-gutter">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                      <span className="material-symbols-outlined" data-icon="location_on">location_on</span>
                    </div>
                    <div>
                      <p className="font-label-md text-label-md text-on-surface">Our Location</p>
                      <p className="font-body-md text-on-surface-variant">A-101 Bliss Avenue, Main Rd,<br/>Vijay Nagar, Indore, MP 452010</p>
                    </div>
                  </div>
                  <div className="flex gap-gutter">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary shrink-0">
                      <span className="material-symbols-outlined" data-icon="call">call</span>
                    </div>
                    <div>
                      <p className="font-label-md text-label-md text-on-surface">Phone Number</p>
                      <p className="font-body-md text-on-surface-variant">093011 71770</p>
                    </div>
                  </div>
                  <div className="flex gap-gutter">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                      <span className="material-symbols-outlined" data-icon="schedule">schedule</span>
                    </div>
                    <div>
                      <p className="font-label-md text-label-md text-on-surface">Working Hours</p>
                      <p className="font-body-md text-on-surface-variant">Mon - Sat: 10:00 AM - 07:00 PM<br/>Sunday: By Appointment</p>
                    </div>
                  </div>
                </div>
                <button className="mt-stack-lg w-full md:w-auto bg-primary text-on-primary px-10 py-4 rounded-xl font-label-md text-label-md shadow-lg hover:shadow-xl transition-all">
                  Get Directions
                </button>
              </div>
              <div className="h-[450px] rounded-[40px] overflow-hidden shadow-2xl relative border-4 border-surface-container">
                <img alt="Clinic Location Map" className="w-full h-full object-cover grayscale opacity-80" data-alt="A stylized and clean digital map representation of the Vijay Nagar area in Indore, highlighting the location of a premium dental clinic. The map uses a minimalist color palette of soft blues, purples, and greys to match the clinic's brand identity. Key landmarks are depicted with simple, elegant icons, and the overall mood is modern, professional, and easy to navigate for patients seeking clinical care." data-location="Indore" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0a1hWZAelhXzEsLnz3e5vaENLtEQVSl051cPEgEH2DIxlQWAqMnGB2blxwtL7kx3gfxd9jdSwbWhg07Co4JiMhfVIFdY6BnL_4oy2bRedZhTZXgeTcpDd0TPNsLJlIOuslENaFYdStSNvhex9N8ripVy70uLbO0ypJmkuzu73uBPLhmOKqY_xjR1Uhz2FE655OMkMe0lhuUpXr4uXJ_odMb9kznPlY3eezT8AbLqhaNLAIYqcZiYtSqjsQ2ek_oVRpQ04WtNYMmM"/>
                <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-2xl animate-bounce">
                    <span className="material-symbols-outlined text-on-primary text-3xl" data-icon="dentistry">dentistry</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-lowest dark:bg-inverse-surface border-t border-outline-variant/10">
        <div className="w-full px-margin-desktop py-stack-lg flex flex-col md:flex-row justify-between items-center max-w-container-max-width mx-auto gap-stack-md">
          <div className="flex flex-col items-center md:items-start gap-stack-sm">
            <div className="font-headline-sm text-headline-sm font-bold text-on-surface dark:text-inverse-on-surface">
              Dr. Supriya's Dental Clinic
            </div>
            <p className="font-caption text-caption text-on-surface-variant dark:text-on-surface-variant max-w-xs text-center md:text-left">
              Professional dentistry with a gentle touch. Dedicated to creating healthy, beautiful smiles in Indore.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-stack-sm">
            <div className="flex gap-gutter">
              <a className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md" href="#">Privacy Policy</a>
              <a className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md" href="#">Terms of Service</a>
              <a className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md" href="#">FAQ</a>
            </div>
            <p className="font-caption text-caption text-on-surface-variant dark:text-on-surface-variant text-center md:text-right">
              © 2024 Dr. Supriya's Dental Clinic. All rights reserved. Indore, Vijay Nagar.
            </p>
          </div>
        </div>
      </footer>

      {/* FAB (Contextual for Home) */}
      <div className="fixed bottom-8 right-8 z-40">
        <button className="bg-primary-container text-on-primary-container h-16 w-16 rounded-2xl shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group">
          <span className="material-symbols-outlined text-3xl" data-icon="add_comment">add_comment</span>
          <span className="absolute right-20 bg-primary-container text-on-primary-container px-4 py-2 rounded-lg font-label-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">Chat with us</span>
        </button>
      </div>
    </>
  );
}

export default App;
