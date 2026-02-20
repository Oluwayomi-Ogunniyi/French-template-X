import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InstructorBio from './components/InstructorBio';
import CourseOfferings from './components/CourseOfferings';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import LeadMagnet from './components/LeadMagnet';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <InstructorBio />
        <CourseOfferings />
        <Testimonials />
        <FAQ />
        <LeadMagnet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
