"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Data Analyst at TCS",
    prevRole: "From HR Executive",
    image: "👩‍💼",
    testimonial:
      "Samrat's course completely transformed my career. In just 4 months, I went from HR to landing my dream job as a Data Analyst with 150% salary increase!",
  },
  {
    name: "Raj Patel",
    role: "ML Engineer at Flipkart",
    prevRole: "From Mechanical Engineer",
    image: "👨‍💻",
    testimonial:
      "The hands-on projects and industry insights were game-changers. Now I'm building ML models at Flipkart, earning 3x my previous salary!",
  },
  {
    name: "Sneha Gupta",
    role: "Senior Data Scientist",
    prevRole: "From Finance Background",
    image: "👩‍🔬",
    testimonial:
      "Samrat's mentorship and practical approach helped me transition smoothly. Within 6 months, I became a Senior Data Scientist!",
  },
  {
    name: "Arjun Singh",
    role: "Business Intelligence Analyst",
    prevRole: "From Marketing Background",
    image: "👨‍💼",
    testimonial:
      "The real-world projects and mentorship helped me transition from marketing to BI. Now I'm creating dashboards that drive million-dollar decisions!",
  },
  {
    name: "Kavya Reddy",
    role: "AI Research Engineer",
    prevRole: "From Software Testing",
    image: "👩‍💻",
    testimonial:
      "From manual testing to AI research! Samrat's course opened doors I never thought possible. The hands-on ML projects were incredible!",
  },
  {
    name: "Rohit Kumar",
    role: "Data Engineering Manager",
    prevRole: "From Civil Engineering",
    image: "👨‍🔧",
    testimonial:
      "Complete career pivot from civil to data engineering. The structured approach and industry insights helped me become a manager in just 2 years!",
  },
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Get testimonials to display (3 at a time on larger screens, 1 on mobile)
  const getVisibleTestimonials = () => {
    const isLargeScreen =
      typeof window !== "undefined" && window.innerWidth >= 1024;
    const testimonialsToShow = isLargeScreen ? 3 : 1;
    const visible = [];

    for (let i = 0; i < testimonialsToShow; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push({ ...testimonials[index], slideIndex: i });
    }

    return visible;
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {getVisibleTestimonials().map((testimonial, index) => (
              <motion.div
                key={`${currentIndex}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 rounded-2xl transition-all duration-300 shadow-xl"
              >
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{testimonial.image}</div>
                  <div>
                    <h3 className="font-bold text-white text-lg drop-shadow-sm">
                      {testimonial.name}
                    </h3>
                    <p className="text-indigo-300 font-semibold drop-shadow-sm">
                      {testimonial.role}
                    </p>
                    <p className="text-white/70 text-sm drop-shadow-sm">
                      {testimonial.prevRole}
                    </p>
                  </div>
                </div>
                <p className="text-white/90 leading-relaxed italic drop-shadow-sm">
                  "{testimonial.testimonial}"
                </p>
                <div className="flex text-yellow-300 mt-4 drop-shadow-sm">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 glass-card p-3 rounded-full hover:bg-white/20 transition-all duration-300 group"
        aria-label="Previous testimonial"
      >
        <svg
          className="w-6 h-6 text-white group-hover:text-indigo-300 transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 glass-card p-3 rounded-full hover:bg-white/20 transition-all duration-300 group"
        aria-label="Next testimonial"
      >
        <svg
          className="w-6 h-6 text-white group-hover:text-indigo-300 transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-indigo-400 w-8"
                : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="mt-4 w-full bg-white/20 rounded-full h-1">
        <motion.div
          className="bg-gradient-to-r from-indigo-400 to-blue-500 h-full rounded-full"
          initial={{ width: "0%" }}
          animate={{
            width: `${((currentIndex + 1) / testimonials.length) * 100}%`,
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
}
