import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, GraduationCap, Heart, Globe } from 'lucide-react';

const InstructorBio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const credentials = [
    {
      icon: GraduationCap,
      title: 'Masters in French Literature',
      description: 'Sorbonne University, Paris',
    },
    {
      icon: Award,
      title: 'Certified DELF/DALF Examiner',
      description: '10+ years experience',
    },
    {
      icon: Globe,
      title: 'Native French Speaker',
      description: 'Born and raised in Lyon',
    },
    {
      icon: Heart,
      title: 'Personalized Approach',
      description: 'Tailored to your goals',
    },
  ];

  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden" ref={ref}>
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-navy-400 rounded-full blur-3xl" />
      </div>

      {/* Decorative Image Elements */}
      <div className="absolute top-10 right-10 hidden lg:block">
        <img 
          src="https://images.unsplash.com/photo-1549877452-9c387954fbc2?q=80&w=200&auto=format&fit=crop"
          alt="French croissant"
          className="w-24 h-24 rounded-full object-cover opacity-30 shadow-lg"
        />
      </div>
      <div className="absolute bottom-10 left-10 hidden lg:block">
        <img 
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=200&auto=format&fit=crop"
          alt="Eiffel tower"
          className="w-20 h-20 rounded-full object-cover opacity-30 shadow-lg"
        />
      </div>

      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold-600 font-medium text-sm uppercase tracking-wider">
            Meet Your Instructor
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mt-4">
            Your Guide to French Excellence
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image/Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              {/* Instructor image */}
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
                alt="Marie Dubois - French Instructor"
                className="w-full h-full object-cover"
              />
              
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 via-transparent to-transparent" />
              
              {/* Decorative frame */}
              <div className="absolute inset-0 border-4 border-gold-500/20 rounded-2xl pointer-events-none" />
            </div>

            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-cream-200"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center">
                  <span className="text-gold-600 font-bold">10+</span>
                </div>
                <div>
                  <p className="text-navy-900 font-semibold">Years</p>
                  <p className="text-navy-500 text-sm">Teaching</p>
                </div>
              </div>
            </motion.div>

            {/* Another floating card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -top-4 -left-4 bg-gold-500 text-white rounded-xl shadow-xl px-4 py-3"
            >
              <p className="font-serif text-lg italic">"Bonjour!"</p>
            </motion.div>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-navy-900 mb-4">
              Marie Dubois
            </h3>
            <p className="text-gold-600 font-medium mb-6">
              Native French Instructor & Language Coach
            </p>

            <div className="prose prose-lg text-navy-600 mb-8">
              <p className="mb-4">
                With over a decade of teaching experience and a deep passion for 
                French language and culture, I've helped hundreds of students 
                achieve their language goals—from passing DELF exams with flying 
                colors to confidently leading business meetings in Paris.
              </p>
              <p>
                My approach combines rigorous academic methodology with engaging, 
                conversational practice. I believe that learning French should be 
                both enriching and enjoyable. Whether you're a complete beginner 
                or preparing for advanced certification, I tailor each lesson to 
                your unique needs and learning style.
              </p>
            </div>

            {/* Credentials Grid */}
            <div className="grid grid-cols-2 gap-4">
              {credentials.map((cred, index) => (
                <motion.div
                  key={cred.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-cream-50 hover:bg-cream-100 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-gold-100 text-gold-600 flex-shrink-0">
                    <cred.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900 text-sm">{cred.title}</p>
                    <p className="text-navy-500 text-xs">{cred.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InstructorBio;
