import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ChevronDown, HelpCircle, MessageCircle, CreditCard, Calendar, GraduationCap } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick, index, isInView, icon: Icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
      className={`rounded-xl transition-all duration-300 ${
        isOpen 
          ? 'bg-gradient-to-br from-gold-50 to-cream-50 shadow-lg shadow-gold-100/50 border-2 border-gold-200' 
          : 'bg-white hover:bg-cream-50 border-2 border-transparent hover:border-cream-200'
      }`}
    >
      <button
        onClick={onClick}
        className="w-full p-5 flex items-start gap-4 text-left"
      >
        <div className={`p-2.5 rounded-xl flex-shrink-0 transition-all duration-300 ${
          isOpen ? 'bg-gold-500 text-white' : 'bg-cream-100 text-navy-600'
        }`}>
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-4">
            <span className={`font-semibold text-base transition-colors ${
              isOpen ? 'text-gold-700' : 'text-navy-900'
            }`}>
              {question}
            </span>
            <div className={`p-1.5 rounded-full flex-shrink-0 transition-all duration-300 ${
              isOpen ? 'bg-gold-200 rotate-180' : 'bg-cream-200'
            }`}>
              <ChevronDown className={`w-4 h-4 transition-colors ${
                isOpen ? 'text-gold-700' : 'text-navy-500'
              }`} />
            </div>
          </div>
          <motion.div
            initial={false}
            animate={{ 
              height: isOpen ? 'auto' : 0,
              opacity: isOpen ? 1 : 0,
              marginTop: isOpen ? 12 : 0
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-navy-600 leading-relaxed text-sm">
              {answer}
            </p>
          </motion.div>
        </div>
      </button>
    </motion.div>
  );
};

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How do the online lessons work?",
      answer: "Lessons are conducted via Zoom or Google Meet at a time that suits your schedule. You'll receive a personalized link before each session. All you need is a stable internet connection, a computer with a webcam, and enthusiasm to learn! I provide all learning materials digitally before and after each class.",
      icon: MessageCircle,
    },
    {
      question: "What level of French do I need to start?",
      answer: "I welcome students of all levels, from complete beginners (A1) to advanced learners (C1/C2). During our free consultation, I'll assess your current level and create a customized learning plan. Not sure where you stand? Take my free 2-minute placement quiz!",
      icon: GraduationCap,
    },
    {
      question: "How quickly will I see progress?",
      answer: "Most students notice significant improvement within 4-6 weeks of regular lessons (2-3 sessions per week). However, progress depends on factors like consistency, practice between sessions, and your learning goals. DELF exam students typically need 3-6 months of intensive preparation.",
      icon: GraduationCap,
    },
    {
      question: "What's included in each session?",
      answer: "Each session includes personalized instruction, conversation practice, grammar explanations, cultural insights, and homework assignments. You'll also receive detailed session notes, vocabulary lists, and access to supplementary resources. DELF prep students get mock exams and detailed feedback.",
      icon: MessageCircle,
    },
    {
      question: "Can I reschedule or cancel a lesson?",
      answer: "Yes! I understand life can be unpredictable. You can reschedule or cancel a lesson with at least 24 hours notice at no charge. Cancellations with less than 24 hours notice will be charged at 50% of the session rate.",
      icon: Calendar,
    },
    {
      question: "Do you offer package discounts?",
      answer: "Absolutely! I offer discounted rates for lesson packages: 10% off for 10 sessions, 15% off for 20 sessions, and 20% off for 30+ sessions. Package lessons never expire, so you can use them at your own pace. Contact me for corporate rates.",
      icon: CreditCard,
    },
    {
      question: "What payment methods do you accept?",
      answer: "I accept all major credit/debit cards, PayPal, and bank transfers. Payment is processed securely through Stripe. For packages, you can pay in full upfront or arrange a payment plan for larger packages.",
      icon: CreditCard,
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes! I offer a free 15-minute consultation where we discuss your goals, assess your level, and determine if we're a good fit. This isn't a sales call—it's genuinely about understanding your needs and seeing how I can help you succeed.",
      icon: Calendar,
    },
  ];

  return (
    <section id="faq" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream-100 via-cream-50 to-white" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-navy-200/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-100/20 rounded-full blur-3xl" />

      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23102a43' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container-max relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl mb-6 shadow-lg shadow-gold-200"
          >
            <HelpCircle className="w-8 h-8 text-white" />
          </motion.div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
            Frequently Asked{' '}
            <span className="text-gold-600">Questions</span>
          </h2>
          <p className="text-navy-600 max-w-2xl mx-auto text-lg">
            Everything you need to know about learning French with me. 
            Can't find your answer? Feel free to reach out!
          </p>
        </motion.div>

        {/* FAQ Grid - Two Columns on Desktop */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                icon={faq.icon}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </div>

        {/* Contact CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-white rounded-2xl shadow-xl p-8 border border-cream-100">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-gold-600" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-navy-900">Still have questions?</p>
                <p className="text-sm text-navy-500">I'm here to help!</p>
              </div>
            </div>
            <a
              href="mailto:contact@frenchmasterclass.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold rounded-xl hover:from-gold-600 hover:to-gold-700 transition-all duration-300 shadow-lg shadow-gold-200 hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>Get in Touch</span>
              <span>→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
