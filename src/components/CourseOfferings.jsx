import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Star, MessageCircle, BookOpen, Briefcase } from 'lucide-react';

const PricingCard = ({ course, index, isPopular, isInView }) => {
  const Icon = course.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
      className={`relative rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl ${
        isPopular
          ? 'bg-navy-900 text-white shadow-2xl scale-105 lg:scale-110'
          : 'bg-white text-navy-900 shadow-lg hover:-translate-y-1'
      }`}
    >
      {/* Course Image */}
      <div className="relative h-40 overflow-hidden">
        <img 
          src={course.image}
          alt={course.name}
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 ${isPopular ? 'bg-navy-900/60' : 'bg-navy-900/40'}`} />
        
        {/* Popular Badge */}
        {isPopular && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-1.5 px-4 py-1.5 bg-gold-500 text-white text-sm font-semibold rounded-full shadow-lg">
              <Star className="w-4 h-4 fill-current" />
              Most Popular
            </div>
          </div>
        )}

        {/* Icon overlay */}
        <div className={`absolute bottom-4 left-6 w-12 h-12 rounded-xl flex items-center justify-center ${
          isPopular ? 'bg-gold-500' : 'bg-white'
        }`}>
          <Icon className={`w-6 h-6 ${isPopular ? 'text-white' : 'text-gold-600'}`} />
        </div>
      </div>

      <div className="p-6">
        {/* Course Name */}
        <h3 className={`font-serif text-xl md:text-2xl font-bold mb-2 ${
          isPopular ? 'text-white' : 'text-navy-900'
        }`}>
          {course.name}
        </h3>

        {/* Description */}
        <p className={`text-sm mb-6 ${isPopular ? 'text-cream-200' : 'text-navy-500'}`}>
          {course.description}
        </p>

        {/* Price */}
        <div className="mb-6">
          <span className={`text-4xl font-bold ${isPopular ? 'text-white' : 'text-navy-900'}`}>
            {course.price}
          </span>
          <span className={`text-sm ${isPopular ? 'text-cream-300' : 'text-navy-500'}`}>
            {' '}{course.duration}
          </span>
        </div>

        {/* Features */}
        <ul className="space-y-3 mb-8">
          {course.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className={`p-1 rounded-full flex-shrink-0 mt-0.5 ${
                isPopular ? 'bg-gold-500/20' : 'bg-gold-100'
              }`}>
                <Check className={`w-3 h-3 ${isPopular ? 'text-gold-400' : 'text-gold-600'}`} />
              </div>
              <span className={`text-sm ${isPopular ? 'text-cream-100' : 'text-navy-600'}`}>
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button
          className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
            isPopular
              ? 'bg-gold-500 text-white hover:bg-gold-600 shadow-lg hover:shadow-xl'
              : 'bg-navy-900 text-white hover:bg-navy-800'
          }`}
        >
          Select Plan
        </button>
      </div>
    </motion.div>
  );
};

const CourseOfferings = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const courses = [
    {
      name: 'Conversational French',
      description: 'Perfect for everyday communication and travel',
      price: '€45',
      duration: '/session',
      icon: MessageCircle,
      image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop',
      features: [
        '60-minute private sessions',
        'Real-world conversation practice',
        'Pronunciation & accent coaching',
        'Cultural insights & expressions',
      ],
    },
    {
      name: 'Intensive DELF Prep',
      description: 'Comprehensive exam preparation with proven results',
      price: '€65',
      duration: '/session',
      icon: BookOpen,
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2073&auto=format&fit=crop',
      features: [
        '90-minute intensive sessions',
        'Mock exams & detailed feedback',
        'All four skills: reading, writing, listening, speaking',
        'Exam strategies & time management',
        'Progress tracking dashboard',
      ],
      isPopular: true,
    },
    {
      name: 'Business French',
      description: 'Elevate your professional communication',
      price: '€55',
      duration: '/session',
      icon: Briefcase,
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop',
      features: [
        '75-minute focused sessions',
        'Industry-specific vocabulary',
        'Email & presentation skills',
        'Negotiation & meeting etiquette',
      ],
    },
  ];

  return (
    <section id="courses" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop&blur=10"
          alt="Background"
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-cream-100/98" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gold-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-navy-200/20 rounded-full blur-3xl" />

      <div className="container-max relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold-600 font-medium text-sm uppercase tracking-wider">
            Course Offerings
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mt-4 mb-4">
            Choose Your Path to Fluency
          </h2>
          <p className="text-navy-600 max-w-2xl mx-auto">
            Flexible learning plans designed to match your goals, schedule, and learning pace.
          </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 items-start">
          {courses.map((course, index) => (
            <PricingCard
              key={course.name}
              course={course}
              index={index}
              isPopular={course.isPopular}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-navy-500 text-sm mb-4">
            All plans include free learning materials and 24/7 support
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-navy-600">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-gold-600" />
              <span>Flexible scheduling</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-gold-600" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-gold-600" />
              <span>Package discounts available</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseOfferings;
