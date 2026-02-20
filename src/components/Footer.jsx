import { motion } from 'framer-motion';
import { Instagram, Linkedin, Youtube, Calendar, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
  ];

  const footerLinks = [
    { name: 'About', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ];

  return (
    <footer id="booking" className="relative text-cream-100">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020&auto=format&fit=crop"
          alt="Paris night view"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-950/95" />
      </div>

      {/* CTA Section */}
      <div className="relative z-10 border-b border-navy-800">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Begin Your French Journey?
            </h3>
            <p className="text-cream-300 mb-8">
              Schedule a free 15-minute consultation to discuss your goals and find the perfect learning path.
            </p>
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gold-500 text-white font-semibold rounded-xl hover:bg-gold-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Calendar className="w-5 h-5" />
              Book Your Free Consultation
            </a>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative z-10 container-max px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand Column */}
          <div>
            <a href="#" className="inline-block mb-4">
              <span className="font-serif text-2xl font-bold text-white">
                French <span className="text-gold-400">Masterclass</span>
              </span>
            </a>
            <p className="text-cream-400 text-sm leading-relaxed mb-6">
              Personalized French coaching for ambitious learners. Master the language of diplomacy, culture, and opportunity.
            </p>
            <a
              href="mailto:contact@frenchmasterclass.com"
              className="inline-flex items-center gap-2 text-cream-300 hover:text-gold-400 transition-colors text-sm"
            >
              <Mail className="w-4 h-4" />
              contact@frenchmasterclass.com
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-cream-400 hover:text-gold-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Connect */}
          <div>
            <h4 className="font-semibold text-white mb-4">Connect With Me</h4>
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="w-10 h-10 rounded-lg bg-navy-800 hover:bg-gold-500 flex items-center justify-center text-cream-300 hover:text-white transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-cream-400 text-sm">
              Follow for daily French tips, cultural insights, and learning motivation.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-navy-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream-500 text-sm">
              © {new Date().getFullYear()} French Masterclass. All rights reserved.
            </p>
            <p className="text-cream-500 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-gold-500 fill-current" /> in Nigeria
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
