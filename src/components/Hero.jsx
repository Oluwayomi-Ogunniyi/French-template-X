import { motion } from 'framer-motion';
import { Sparkles, ChevronRight } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop"
          alt="Paris cityscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-cream-50/80 via-cream-100/70 to-cream-200/60" />
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-navy-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-100/40 rounded-full blur-3xl" />
      </div>

      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23102a43' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container-max px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gold-200 shadow-sm">
            <Sparkles className="w-4 h-4 text-gold-600" />
            <span className="text-sm font-medium text-navy-700">Native French Expert</span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-navy-900 leading-tight mb-6"
        >
          Master French with{' '}
          <span className="relative">
            <span className="relative z-10 text-gold-600">Elegance</span>
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 10C50 2 150 2 198 10" stroke="#d4a417" strokeWidth="3" strokeLinecap="round" opacity="0.4"/>
            </svg>
          </span>
          <br />
          and{' '}
          <span className="text-navy-800">Confidence</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-navy-600 mb-10 leading-relaxed"
        >
          Personalized coaching for DELF preparation, business fluency, and 
          conversational mastery by a native expert.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#booking"
            className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
          >
            Book Your Free Trial
            <ChevronRight className="w-5 h-5" />
          </a>
          <a
            href="#quiz"
            className="btn-secondary inline-flex items-center gap-2 text-lg px-8 py-4"
          >
            Test Your Level
          </a>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex flex-wrap justify-center gap-8 items-center text-navy-500"
        >
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
                'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop',
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Student ${i + 1}`}
                  className="w-8 h-8 rounded-full border-2 border-cream-50 object-cover"
                />
              ))}
            </div>
            <span className="text-sm font-medium">500+ Students Taught</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-navy-200" />
          <div className="flex items-center gap-2">
            <div className="flex text-gold-500">
              {'★★★★★'.split('').map((star, i) => (
                <span key={i}>{star}</span>
              ))}
            </div>
            <span className="text-sm font-medium">4.9 Average Rating</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-navy-200" />
          <div className="text-sm font-medium">
            <span className="text-gold-600 font-bold">98%</span> Pass Rate
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-navy-300 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-navy-400"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
