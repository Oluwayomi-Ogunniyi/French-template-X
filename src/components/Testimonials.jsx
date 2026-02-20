import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote, Star } from 'lucide-react';

const TestimonialCard = ({ testimonial, index, isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
      className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      {/* Quote Icon */}
      <div className="absolute -top-4 left-8">
        <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center shadow-md">
          <Quote className="w-4 h-4 text-white fill-current" />
        </div>
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4 pt-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-gold-500 fill-current" />
        ))}
      </div>

      {/* Quote Text */}
      <blockquote className="text-navy-700 text-lg leading-relaxed mb-6 font-medium">
        "{testimonial.quote}"
      </blockquote>

      {/* Achievement Badge */}
      {testimonial.achievement && (
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gold-100 text-gold-700 rounded-full text-sm font-medium mb-4">
          <span>🎉</span>
          {testimonial.achievement}
        </div>
      )}

      {/* Author */}
      <div className="flex items-center gap-4 pt-4 border-t border-cream-200">
        <img 
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover ring-2 ring-cream-100"
        />
        <div>
          <p className="font-semibold text-navy-900">{testimonial.name}</p>
          <p className="text-navy-500 text-sm">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const testimonials = [
    {
      quote: "Marie's teaching transformed my French in just 3 months. Her patience and clear explanations made complex grammar feel intuitive. I went from struggling with basic conversations to confidently negotiating contracts in Paris!",
      name: "Sarah Mitchell",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
      role: "Marketing Director, London",
      achievement: "B2 to C1 in 4 months",
    },
    {
      quote: "I passed my DELF B2 exam with excellent scores thanks to Marie's structured preparation. Her mock exams and feedback were invaluable. She knew exactly what the examiners were looking for.",
      name: "Thomas Werner",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
      role: "Graduate Student, Berlin",
      achievement: "DELF B2 - Score: 92/100",
    },
    {
      quote: "After years of trying apps and group classes, I finally found success with Marie. Her personalized approach addressed my specific weaknesses. My colleagues in Lyon now compliment my French!",
      name: "Emma Rodriguez",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop",
      role: "Software Engineer, Barcelona",
      achievement: "Now working in French",
    },
  ];

  return (
    <section id="reviews" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1431274172761-fca41d930114?q=80&w=2070&auto=format&fit=crop"
          alt="Paris at night"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/95 to-navy-950/98" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-navy-600/30 rounded-full blur-3xl" />
      </div>

      <div className="container-max relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold-400 font-medium text-sm uppercase tracking-wider">
            Student Success Stories
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-4">
            What My Students Say
          </h2>
          <p className="text-cream-200 max-w-2xl mx-auto">
            Real results from ambitious learners who achieved their French language goals.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
        >
          {[
            { number: '500+', label: 'Students Taught' },
            { number: '98%', label: 'DELF Pass Rate' },
            { number: '4.9', label: 'Average Rating' },
            { number: '10+', label: 'Years Experience' },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-gold-400">{stat.number}</p>
              <p className="text-cream-300 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
