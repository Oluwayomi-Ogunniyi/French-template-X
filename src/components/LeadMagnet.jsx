import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Clock, ArrowRight, CheckCircle } from 'lucide-react';

const LeadMagnet = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Here you would typically send the email to your backend
    }
  };

  return (
    <section id="quiz" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1503917988258-f87a78e3c995?q=80&w=2070&auto=format&fit=crop"
          alt="French cafe"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-cream-50/95" />
      </div>

      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Decorative Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gold-100 via-cream-100 to-navy-100 rounded-3xl transform -rotate-1" />
          
          {/* Main Card */}
          <div className="relative bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-cream-200">
            {/* Decorative Corner Element */}
            <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/10 rounded-bl-full" />
            </div>

            <div className="text-center max-w-2xl mx-auto">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 200 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gold-100 rounded-2xl mb-6"
              >
                <Sparkles className="w-8 h-8 text-gold-600" />
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-navy-900 mb-4"
              >
                Not sure where to start?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-navy-600 text-lg mb-2"
              >
                Discover your current French level in just 2 minutes.
              </motion.p>

              {/* Time Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-navy-50 rounded-full text-navy-600 text-sm mb-8"
              >
                <Clock className="w-4 h-4" />
                <span>Quick 10-question assessment</span>
              </motion.div>

              {/* Form or Success State */}
              {!isSubmitted ? (
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                >
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 px-5 py-4 rounded-xl border border-cream-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all text-navy-900 placeholder:text-navy-400"
                  />
                  <button
                    type="submit"
                    className="btn-primary inline-flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    Take the Quiz
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center gap-4 p-6 bg-green-50 rounded-2xl border border-green-200"
                >
                  <CheckCircle className="w-12 h-12 text-green-500" />
                  <div>
                    <p className="font-semibold text-green-700 text-lg">Check your inbox!</p>
                    <p className="text-green-600">Your assessment link is on its way.</p>
                  </div>
                </motion.div>
              )}

              {/* Privacy Note */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-navy-400 text-xs mt-6"
              >
                Your email is safe with us. No spam, ever. Unsubscribe anytime.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadMagnet;
