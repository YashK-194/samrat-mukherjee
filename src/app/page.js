import Image from "next/image";
import ParallaxHero from "../components/ParallaxHero";
import AnimatedSection from "../components/AnimatedSection";
import TestimonialsCarousel from "../components/TestimonialsCarousel";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/90 backdrop-blur-xl border-b border-slate-700/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-4">
            <div className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent">
              Samrat Mukherjee
            </div>
            <div className="hidden md:flex space-x-4 lg:space-x-8">
              <a
                href="#about"
                className="text-sm lg:text-base text-slate-300 hover:text-indigo-400 transition-colors py-2"
              >
                About
              </a>
              <a
                href="#courses"
                className="text-sm lg:text-base text-slate-300 hover:text-indigo-400 transition-colors py-2"
              >
                Courses
              </a>
              <a
                href="#testimonials"
                className="text-sm lg:text-base text-slate-300 hover:text-indigo-400 transition-colors py-2"
              >
                Success Stories
              </a>
              <a
                href="#start"
                className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-4 lg:px-6 py-2 rounded-full hover:from-indigo-600 hover:to-blue-700 transition-all text-sm lg:text-base"
              >
                Start Now
              </a>
            </div>
            {/* Mobile menu button */}
            <button className="md:hidden p-2 text-slate-300 hover:text-indigo-400 transition-colors">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section replaced */}
      <ParallaxHero />

      <AnimatedSection
        className="py-20 bg-slate-800 section-divider"
        delay={0.1}
      >
        {/* What I Can Do For You Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              What I Can Do
              <span className="bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent">
                For You
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Whether you're starting fresh or looking to advance, I'll guide
              you through every step of your data journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Career Transition",
                description:
                  "Switch to data analytics from any background with my proven roadmap",
              },
              {
                icon: "📊",
                title: "Skill Mastery",
                description:
                  "Master Python, SQL, Machine Learning, and visualization tools",
              },
              {
                icon: "💼",
                title: "Job Placement",
                description:
                  "Get industry-ready with portfolio projects and interview prep",
              },
              {
                icon: "🚀",
                title: "Career Growth",
                description:
                  "Advance to senior roles with advanced analytics and leadership skills",
              },
              {
                icon: "🤖",
                title: "AI & ML Expertise",
                description:
                  "Stay ahead with cutting-edge machine learning and AI techniques",
              },
              {
                icon: "💡",
                title: "Business Intelligence",
                description:
                  "Learn to drive business decisions with data-driven insights",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-slate-700 border border-slate-600 p-8 rounded-2xl hover:shadow-xl hover:border-indigo-500 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-indigo-400">
                  {service.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="about" className="py-20 bg-slate-900" delay={0.1}>
        {/* About Me Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                About
                <span className="bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent">
                  Samrat
                </span>
              </h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                As a Lead Data Analyst and passionate educator, I've dedicated
                my career to making data analytics accessible and transformative
                for professionals worldwide.
              </p>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                With years of hands-on industry experience and a proven teaching
                methodology, I've helped thousands transition into successful
                data careers and advance to leadership positions.
              </p>

              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-indigo-400 mb-2">
                    2000+
                  </div>
                  <div className="text-slate-400">Students Taught</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-indigo-400 mb-2">
                    15+
                  </div>
                  <div className="text-slate-400">Institutes Partnered</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-indigo-400 mb-2">
                    500+
                  </div>
                  <div className="text-slate-400">Success Stories</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-indigo-400 mb-2">
                    8+
                  </div>
                  <div className="text-slate-400">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-indigo-600 to-blue-700 p-8 rounded-2xl shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 text-white">
                  My Expertise
                </h3>
                <div className="space-y-4">
                  {[
                    "Advanced Data Analytics & Visualization",
                    "Machine Learning & AI Implementation",
                    "Python, R, SQL & Statistical Analysis",
                    "Business Intelligence & Dashboard Creation",
                    "Big Data Technologies & Cloud Platforms",
                    "Data Strategy & Leadership",
                  ].map((skill, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
                      <span className="text-white">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        id="courses"
        className="py-20 bg-slate-800 section-divider"
        delay={0.1}
      >
        {/* Courses Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Transform Your Career with
              <span className="bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent">
                My Courses
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive programs designed to take you from beginner to
              expert
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Data Analytics Fundamentals",
                level: "Beginner",
                duration: "8 weeks",
                price: "₹12,999",
                features: [
                  "Python & SQL from scratch",
                  "Excel advanced techniques",
                  "Statistical analysis basics",
                  "Data visualization with Tableau",
                  "Real-world projects",
                  "Job placement assistance",
                ],
              },
              {
                title: "Machine Learning Mastery",
                level: "Intermediate",
                duration: "12 weeks",
                price: "₹19,999",
                features: [
                  "Supervised & unsupervised learning",
                  "Deep learning with TensorFlow",
                  "Feature engineering",
                  "Model deployment",
                  "MLOps fundamentals",
                  "Capstone project",
                ],
                popular: true,
              },
              {
                title: "Advanced Analytics & AI",
                level: "Advanced",
                duration: "16 weeks",
                price: "₹29,999",
                features: [
                  "Advanced ML algorithms",
                  "Natural Language Processing",
                  "Computer Vision",
                  "Big Data with Spark",
                  "Cloud deployment (AWS/Azure)",
                  "Leadership & strategy",
                ],
              },
            ].map((course, index) => (
              <div
                key={index}
                className={`relative bg-slate-700 border-2 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 ${
                  course.popular
                    ? "border-indigo-500 shadow-lg"
                    : "border-slate-600 hover:border-indigo-400"
                }`}
              >
                {course.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-indigo-400">
                    {course.title}
                  </h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="bg-indigo-900 text-indigo-300 px-3 py-1 rounded-full text-sm">
                      {course.level}
                    </span>
                    <span className="text-slate-400">{course.duration}</span>
                  </div>
                  <div className="text-3xl font-bold text-white mb-6">
                    {course.price}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <svg
                        className="w-5 h-5 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-full font-semibold transition-all ${
                    course.popular
                      ? "bg-gradient-to-r from-indigo-500 to-blue-600 text-white hover:from-indigo-600 hover:to-blue-700"
                      : "border-2 border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white"
                  }`}
                >
                  Enroll Now
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-slate-300 mb-6">
              🎯 100% Job Placement Assistance | 💰 EMI Options Available | 🔄
              Lifetime Access to Updates
            </p>
            <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all">
              Book Free Consultation Call
            </button>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        id="testimonials"
        className="py-20 relative overflow-hidden"
        delay={0.1}
      >
        {/* Video Background */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden mx-4 sm:mx-6 lg:mx-8">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover rounded-3xl"
          >
            <source src="/videos/video.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>
        </div>

        {/* Testimonials Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
              Success
              <span className="bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent">
                Stories
              </span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
              Real transformations from real students who took the leap
            </p>
          </div>

          {/* Testimonials Carousel */}
          <TestimonialsCarousel />
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 relative overflow-hidden" delay={0.1}>
        {/* Background Image with Blur and Dark Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/bluecamo.png"
            alt="Background"
            fill
            className="object-cover blur-sm"
            priority={false}
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Where I Have Taught Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            Where I've
            <span className="bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent">
              Taught & Worked
            </span>
          </h2>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-indigo-400 mb-8">
              Teaching Experience
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                "IIT Delhi",
                "BITS Pilani",
                "Manipal University",
                "VIT University",
                "Coursera",
                "Udemy",
                "Great Learning",
                "Simplilearn",
              ].map((institute, index) => (
                <div
                  key={index}
                  className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-xl hover:bg-white/15 hover:border-white/30 transition-all duration-300 shadow-lg"
                >
                  <div className="text-lg font-semibold text-white drop-shadow-md">
                    {institute}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-indigo-400 mb-8">
              Industry Experience
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {[
                "Microsoft",
                "Amazon",
                "Google",
                "Accenture",
                "Deloitte",
                "IBM",
              ].map((company, index) => (
                <div
                  key={index}
                  className="backdrop-blur-md bg-white/10 border-2 border-white/20 p-8 rounded-xl hover:bg-white/15 hover:border-white/30 hover:shadow-xl transition-all duration-300 shadow-lg"
                >
                  <div className="text-xl font-bold text-white drop-shadow-md">
                    {company}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        className="py-20 bg-slate-900 section-divider"
        delay={0.1}
      >
        {/* Samrat Equals Success Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
              <span className="bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent">
                Samrat equals Success
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              My students don't just learn data analytics—they transform their
              entire careers and lives. Here's the science behind the success.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-8">
                <div className="bg-slate-700 border-l-4 border-indigo-500 p-6 rounded-r-xl">
                  <h3 className="text-2xl font-bold text-indigo-400 mb-4">
                    Proven Methodology
                  </h3>
                  <p className="text-slate-300">
                    My LEARN-PRACTICE-APPLY framework ensures 90% knowledge
                    retention compared to traditional methods.
                  </p>
                </div>

                <div className="bg-slate-700 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                  <h3 className="text-2xl font-bold text-emerald-400 mb-4">
                    Industry Connection
                  </h3>
                  <p className="text-slate-300">
                    Direct partnerships with 50+ companies for immediate job
                    placement opportunities.
                  </p>
                </div>

                <div className="bg-slate-700 border-l-4 border-purple-500 p-6 rounded-r-xl">
                  <h3 className="text-2xl font-bold text-purple-400 mb-4">
                    Personalized Mentoring
                  </h3>
                  <p className="text-slate-300">
                    1-on-1 guidance tailored to your background, goals, and
                    learning pace.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-indigo-600 to-blue-700 p-8 rounded-2xl shadow-2xl">
                <h3 className="text-3xl font-bold mb-6 text-white">
                  Success Metrics
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-4xl font-bold text-white mb-2">
                      95%
                    </div>
                    <div className="text-blue-200">Job Placement Rate</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-white mb-2">
                      4.9/5
                    </div>
                    <div className="text-blue-200">Student Rating</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-white mb-2">
                      ₹8L
                    </div>
                    <div className="text-blue-200">Average Salary</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-white mb-2">
                      2000+
                    </div>
                    <div className="text-blue-200">Success Stories</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Success Images Gallery */}
          <div className="mt-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
              {[1, 2, 3, 4, 5].map((num) => (
                <div
                  key={num}
                  className="group relative overflow-hidden rounded-3xl bg-slate-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <Image
                    src={`/images/ex-img${num}.png`}
                    alt={`Success story ${num}`}
                    width={400}
                    height={600}
                    className="w-full h-auto object-cover rounded-3xl group-hover:brightness-110 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-3">
                      <p className="text-white text-sm font-semibold">
                        Success Story #{num}
                      </p>
                      <p className="text-white/80 text-xs">
                        Career Transformation
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-slate-800" delay={0.1}>
        {/* Results Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            Results You'll See After Taking
            <span className="bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent">
              My Courses
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {[
              {
                icon: "💰",
                result: "3x-5x",
                description: "Salary Increase",
              },
              {
                icon: "⏱️",
                result: "90 Days",
                description: "Average Job Placement",
              },
              {
                icon: "🏆",
                result: "95%",
                description: "Success Rate",
              },
              {
                icon: "🚀",
                result: "500+",
                description: "Career Transitions",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-slate-700 border border-slate-600 p-8 rounded-2xl hover:shadow-xl hover:border-indigo-500 transition-all"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-indigo-400 mb-2">
                  {stat.result}
                </div>
                <div className="text-slate-300">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        id="start"
        className="py-20 bg-gradient-to-br from-indigo-700 to-blue-900 section-angled-top"
        delay={0.1}
      >
        {/* Start Now Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
            Will You Be The Next
            <span className="block text-indigo-200">Success Story?</span>
          </h2>

          <p className="text-xl text-indigo-100 mb-12 leading-relaxed">
            Every data expert was once a beginner. Every success story started
            with a single decision. Your transformation begins with clicking the
            button below.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button className="bg-white text-indigo-700 px-10 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl">
              Start Your Journey Today
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-full text-xl font-bold hover:bg-white hover:text-indigo-700 transition-all">
              Schedule Free Call
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              🎁 Limited Time Bonus
            </h3>
            <p className="text-indigo-100 mb-4">
              Enroll in the next 48 hours and get:
            </p>
            <ul className="text-left text-indigo-100 space-y-2 max-w-md mx-auto">
              <li>✅ Free 1-on-1 career consultation (₹5,000 value)</li>
              <li>✅ Exclusive industry insider job board access</li>
              <li>✅ Lifetime access to course updates</li>
              <li>✅ Certificate recognized by top companies</li>
            </ul>
          </div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent mb-4">
                Samrat Mukherjee
              </h3>
              <p className="text-slate-400 mb-4">
                Lead Data Analyst & Educator helping professionals transform
                their careers through data analytics and machine learning.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-slate-400 hover:text-indigo-400 transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-indigo-400 transition-colors"
                >
                  YouTube
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-indigo-400 transition-colors"
                >
                  Twitter
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a
                    href="#about"
                    className="hover:text-indigo-400 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#courses"
                    className="hover:text-indigo-400 transition-colors"
                  >
                    Courses
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="hover:text-indigo-400 transition-colors"
                  >
                    Success Stories
                  </a>
                </li>
                <li>
                  <a
                    href="#start"
                    className="hover:text-indigo-400 transition-colors"
                  >
                    Start Now
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-2 text-slate-400">
                <p>📧 samrat@dataanalytics.com</p>
                <p>📱 +91 98765 43210</p>
                <p>🌐 Available for corporate training</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400">
            <p>
              &copy; 2025 Samrat Mukherjee. All rights reserved. Transform your
              career with data.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
