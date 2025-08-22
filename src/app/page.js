import Image from "next/image";
import ParallaxHero from "../components/ParallaxHero";
import AnimatedSection from "../components/AnimatedSection";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import Navigation from "../components/Navigation";
import ClientFeedbackCarousel from "../components/ClientFeedbackCarousel";
import CollegeFeedbackCarousel from "../components/CollegeFeedbackCarousel";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-900 via-red-900 to-red-950 text-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section replaced */}
      <ParallaxHero />

      <AnimatedSection id="about" className="py-20 bg-red-950" delay={0.1}>
        {/* About Me Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                About
                <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
                  Samrat
                </span>
              </h2>
              <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                As a Lead Data Analyst and passionate educator, I've dedicated
                my career to making data analytics accessible and transformative
                for professionals worldwide.
              </p>
              <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                With years of hands-on industry experience and a proven teaching
                methodology, I've helped thousands transition into successful
                data careers and advance to leadership positions.
              </p>

              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">
                    2000+
                  </div>
                  <div className="text-gray-300">Students Taught</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">
                    15+
                  </div>
                  <div className="text-gray-300">Institutes Partnered</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">
                    500+
                  </div>
                  <div className="text-gray-300">Success Stories</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">
                    8+
                  </div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* <div className="bg-gradient-to-br from-indigo-600 to-blue-700 p-8 rounded-2xl shadow-2xl"> */}
              <div className="bg-gradient-to-br from-red-600 to-red-800 p-8 rounded-2xl shadow-2xl">
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
                      {/* <div className="w-2 h-2 bg-blue-200 rounded-full"></div> */}
                      <div className="w-2 h-2 bg-red-200 rounded-full"></div>
                      <span className="text-red-50">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Corporate Training Section */}
      <AnimatedSection
        id="corporate-training"
        className="py-20 relative overflow-hidden"
        delay={0.1}
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/ex-img1.png"
            alt="Corporate Training Background"
            fill
            className="object-cover opacity-20"
            priority={false}
          />
          {/* <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-indigo-900/85"></div> */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-950/95 via-red-900/90 to-red-800/85"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Corporate
              {/* <span className="bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent"> */}
              <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                {" "}
                Training
              </span>
            </h2>
            <p className="text-xl text-red-200 max-w-3xl mx-auto leading-relaxed">
              Empower your workforce with industry-leading data analytics and AI
              training programs
            </p>
          </div>

          {/* Main bordered container */}
          {/* <div className="border-2 border-indigo-500/50 rounded-3xl p-8 bg-slate-800/60 backdrop-blur-lg shadow-2xl"> */}
          <div className="border-2 border-red-500/50 rounded-3xl p-8 bg-red-900/60 backdrop-blur-lg shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
              {/* Left side - Corporate Training Card */}
              {/* <div className="bg-gradient-to-br from-slate-700/80 to-slate-800/80 border border-slate-600/50 rounded-2xl p-8 hover:shadow-2xl hover:border-indigo-400/70 transition-all duration-500 backdrop-blur-sm"> */}
              <div className="bg-gradient-to-br from-red-800/80 to-red-900/80 border border-red-700/50 rounded-2xl p-8 hover:shadow-2xl hover:border-red-400/70 transition-all duration-500 backdrop-blur-sm">
                <div className="flex items-center mb-6">
                  {/* <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center mr-4"> */}
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-700 rounded-xl flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Enterprise Solutions
                    </h3>
                    {/* <p className="text-indigo-400 font-medium"> */}
                    <p className="text-red-400 font-medium">
                      Fortune 500 Approved
                    </p>
                  </div>
                </div>

                <p className="text-red-200 mb-8 leading-relaxed text-lg">
                  Transform your organization with comprehensive data analytics
                  and machine learning training programs. Our expert-led
                  workshops are designed to upskill your teams and drive
                  data-driven decision making across your enterprise.
                </p>

                {/* Key Features */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-red-800/30 rounded-lg p-3">
                    {/* <div className="text-2xl font-bold text-indigo-400"> */}
                    <div className="text-2xl font-bold text-red-400">500+</div>
                    <div className="text-sm text-red-200">
                      Professionals Trained
                    </div>
                  </div>
                  <div className="bg-red-800/30 rounded-lg p-3">
                    {/* <div className="text-2xl font-bold text-indigo-400"> */}
                    <div className="text-2xl font-bold text-red-400">95%</div>
                    <div className="text-sm text-red-200">
                      Satisfaction Rate
                    </div>
                  </div>
                  <div className="bg-red-800/30 rounded-lg p-3">
                    {/* <div className="text-2xl font-bold text-indigo-400"> */}
                    <div className="text-2xl font-bold text-red-400">24/7</div>
                    <div className="text-sm text-red-200">Support Access</div>
                  </div>
                  <div className="bg-red-800/30 rounded-lg p-3">
                    {/* <div className="text-2xl font-bold text-indigo-400"> */}
                    <div className="text-2xl font-bold text-red-400">
                      Custom
                    </div>
                    <div className="text-sm text-red-200">Curriculum</div>
                  </div>
                </div>

                {/* <button className="w-full bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-indigo-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"> */}
                <button className="w-full bg-gradient-to-r from-red-500 to-red-700 text-white px-8 py-4 rounded-full font-semibold hover:from-red-600 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg">
                  Schedule Corporate Consultation
                </button>
              </div>

              {/* Right side - Enhanced subsections */}
              <div className="space-y-8">
                {/* Trusted Companies subsection */}
                <div className="bg-red-800/40 rounded-2xl p-6 backdrop-blur-sm border border-red-700/30">
                  <div className="flex items-center mb-6">
                    {/* <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center mr-3"> */}
                    <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center mr-3">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    {/* <h3 className="text-xl font-bold text-indigo-400"> */}
                    <h3 className="text-xl font-bold text-red-400">
                      Trusted by Industry Leaders
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {[
                      "TCS",
                      "Infosys",
                      "Wipro",
                      "Accenture",
                      "HCL Tech",
                      "Cognizant",
                    ].map((company, index) => (
                      <div
                        key={index}
                        className="bg-red-900/40 rounded-lg p-3 text-center hover:bg-red-900/60 transition-all duration-300"
                      >
                        <span className="text-red-50 font-semibold text-sm">
                          {company}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-red-200">15+ Organizations</span>
                    {/* <span className="text-indigo-400 font-medium"> */}
                    <span className="text-red-400 font-medium">
                      Global Reach
                    </span>
                  </div>
                </div>

                {/* Client Feedback subsection */}
                <div className="bg-red-800/40 rounded-2xl p-6 backdrop-blur-sm border border-red-700/30">
                  <div className="flex items-center mb-6">
                    <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center mr-3">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    {/* <h3 className="text-xl font-bold text-indigo-400"> */}
                    <h3 className="text-xl font-bold text-red-400">
                      Client Success Stories
                    </h3>
                  </div>
                  <ClientFeedbackCarousel />
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* College Training Section */}
      <AnimatedSection
        id="college-training"
        className="py-20 relative overflow-hidden"
        delay={0.1}
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/ex-img2.png"
            alt="College Training Background"
            fill
            className="object-cover opacity-20"
            priority={false}
          />
          {/* <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-indigo-900/90 to-slate-800/85"></div> */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-950/95 via-red-900/90 to-red-800/85"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              College
              {/* <span className="bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent"> */}
              <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                {" "}
                Training
              </span>
            </h2>
            <p className="text-xl text-red-200 max-w-3xl mx-auto leading-relaxed">
              Preparing the next generation of data scientists and analysts for
              tomorrow's challenges
            </p>
          </div>

          {/* Main bordered container */}
          <div className="border-2 border-red-700/50 rounded-3xl p-8 bg-red-950/60 backdrop-blur-lg shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
              {/* Left side - Enhanced subsections */}
              <div className="space-y-8">
                {/* Trusted Colleges subsection */}
                <div className="bg-red-900/40 rounded-2xl p-6 backdrop-blur-sm border border-red-800/30">
                  <div className="flex items-center mb-6">
                    <div className="w-8 h-8 bg-red-700 rounded-lg flex items-center justify-center mr-3">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-red-400">
                      Premier Academic Partners
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 gap-3 mb-4">
                    {[
                      { name: "IIT Delhi", rank: "#1 in Engineering" },
                      { name: "IIT Bombay", rank: "#2 in Technology" },
                      { name: "BITS Pilani", rank: "Top Private University" },
                      {
                        name: "NIT Warangal",
                        rank: "Premier Technical Institute",
                      },
                      { name: "VIT Vellore", rank: "Innovation Leader" },
                      { name: "IIIT Hyderabad", rank: "Research Excellence" },
                    ].map((college, index) => (
                      <div
                        key={index}
                        className="bg-red-900/40 rounded-lg p-3 hover:bg-red-900/60 transition-all duration-300"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-red-50 font-semibold text-sm">
                            {college.name}
                          </span>
                          <span className="text-red-300 text-xs">
                            {college.rank}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-red-200">20+ Institutions</span>
                    <span className="text-red-400 font-medium">
                      National Coverage
                    </span>
                  </div>
                </div>

                {/* College Feedback subsection */}
                <div className="bg-red-900/40 rounded-2xl p-6 backdrop-blur-sm border border-red-800/30">
                  <div className="flex items-center mb-6">
                    <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center mr-3">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-red-400">
                      Academic Excellence
                    </h3>
                  </div>
                  <CollegeFeedbackCarousel />
                </div>
              </div>

              {/* Right side - College Training Card */}
              <div className="bg-gradient-to-br from-red-800/80 to-red-900/80 border border-red-700/50 rounded-2xl p-8 hover:shadow-2xl hover:border-red-400/70 transition-all duration-500 backdrop-blur-sm">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-700 to-red-800 rounded-xl flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-red-100"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-red-50">
                      Academic Excellence
                    </h3>
                    <p className="text-red-400 font-medium">
                      Industry-Ready Curriculum
                    </p>
                  </div>
                </div>

                <p className="text-red-200 mb-8 leading-relaxed text-lg">
                  Elevate your institution's curriculum with cutting-edge data
                  science and analytics programs. Our comprehensive training
                  modules are designed to prepare students for the modern
                  data-driven industry landscape.
                </p>

                {/* Key Features */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-red-800/30 rounded-lg p-3">
                    <div className="text-2xl font-bold text-red-400">2000+</div>
                    <div className="text-sm text-red-300">Students Trained</div>
                  </div>
                  <div className="bg-red-800/30 rounded-lg p-3">
                    <div className="text-2xl font-bold text-red-400">98%</div>
                    <div className="text-sm text-red-300">Placement Rate</div>
                  </div>
                  <div className="bg-red-800/30 rounded-lg p-3">
                    <div className="text-2xl font-bold text-red-400">50+</div>
                    <div className="text-sm text-red-300">
                      Projects Completed
                    </div>
                  </div>
                  <div className="bg-red-800/30 rounded-lg p-3">
                    <div className="text-2xl font-bold text-red-400">Live</div>
                    <div className="text-sm text-red-300">
                      Industry Projects
                    </div>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-8 py-4 rounded-full font-semibold hover:from-yellow-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg">
                  Contract now
                </button>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        id="courses"
        className="py-20 bg-red-950 section-divider"
        delay={0.1}
      >
        {/* Popular Courses Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Popular
              <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
                {" "}
                Courses
              </span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
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
                className={`relative bg-red-900 border-2 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 ${
                  course.popular
                    ? "border-red-500 shadow-lg"
                    : "border-red-800 hover:border-red-400"
                }`}
              >
                {course.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-yellow-400">
                    {course.title}
                  </h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm border border-yellow-500/30">
                      {course.level}
                    </span>
                    <span className="text-gray-300">{course.duration}</span>
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
                      <span className="text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-full font-semibold transition-all ${
                    course.popular
                      ? "bg-gradient-to-r from-yellow-500 to-amber-600 text-white hover:from-yellow-600 hover:to-amber-700"
                      : "border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white"
                  }`}
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-200 mb-6">
              🎯 100% Job Placement Assistance | 🔄 Lifetime Access to Updates |
              📚 Comprehensive Curriculum
            </p>
            <a
              href="/courses"
              className="inline-block bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-yellow-600 hover:to-amber-700 transition-all transform hover:scale-105"
            >
              View All Courses →
            </a>
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

      <AnimatedSection className="py-20 bg-black section-divider" delay={0.1}>
        {/* Samrat Equals Success Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-red-50">
              <span className="bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent">
                Samrat equals Success
              </span>
            </h2>
            <p className="text-xl text-red-200 max-w-4xl mx-auto leading-relaxed">
              My students don't just learn data analytics—they transform their
              entire careers and lives. Here's the science behind the success.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-8">
                <div className="bg-red-900 border-l-4 border-red-500 p-6 rounded-r-xl">
                  <h3 className="text-2xl font-bold text-red-400 mb-4">
                    Proven Methodology
                  </h3>
                  <p className="text-red-200">
                    My LEARN-PRACTICE-APPLY framework ensures 90% knowledge
                    retention compared to traditional methods.
                  </p>
                </div>

                <div className="bg-red-900 border-l-4 border-red-500 p-6 rounded-r-xl">
                  <h3 className="text-2xl font-bold text-red-400 mb-4">
                    Industry Connection
                  </h3>
                  <p className="text-red-200">
                    Direct partnerships with 50+ companies for immediate job
                    placement opportunities.
                  </p>
                </div>

                <div className="bg-red-900 border-l-4 border-red-500 p-6 rounded-r-xl">
                  <h3 className="text-2xl font-bold text-red-400 mb-4">
                    Personalized Mentoring
                  </h3>
                  <p className="text-red-200">
                    1-on-1 guidance tailored to your background, goals, and
                    learning pace.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-red-800 to-red-900 p-8 rounded-2xl shadow-2xl">
                <h3 className="text-3xl font-bold mb-6 text-red-50">
                  Success Metrics
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-4xl font-bold text-red-50 mb-2">
                      95%
                    </div>
                    <div className="text-red-200">Job Placement Rate</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-red-50 mb-2">
                      4.9/5
                    </div>
                    <div className="text-red-200">Student Rating</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-red-50 mb-2">
                      ₹8L
                    </div>
                    <div className="text-red-200">Average Salary</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-red-50 mb-2">
                      2000+
                    </div>
                    <div className="text-red-200">Success Stories</div>
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
                  className="group relative overflow-hidden rounded-3xl bg-red-900 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
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

      <AnimatedSection className="py-20 bg-black" delay={0.1}>
        {/* Results Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-red-50">
            Results You'll See After Taking
            <span className="bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent">
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
                className="bg-red-900 border border-red-800 p-8 rounded-2xl hover:shadow-xl hover:border-red-500 transition-all"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-red-400 mb-2">
                  {stat.result}
                </div>
                <div className="text-red-200">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        id="start"
        className="py-20 bg-gradient-to-br from-red-800 to-red-950 section-angled-top"
        delay={0.1}
      >
        {/* Start Now Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-red-50">
            Will You Be The Next
            <span className="block text-red-200">Success Story?</span>
          </h2>

          <p className="text-xl text-red-100 mb-12 leading-relaxed">
            Every data expert was once a beginner. Every success story started
            with a single decision. Your transformation begins with clicking the
            button below.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button className="bg-white text-red-700 px-10 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl">
              Start Your Journey Today
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-full text-xl font-bold hover:bg-white hover:text-red-700 transition-all">
              Schedule Free Call
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              🎁 Limited Time Bonus
            </h3>
            <p className="text-red-100 mb-4">
              Enroll in the next 48 hours and get:
            </p>
            <ul className="text-left text-red-100 space-y-2 max-w-md mx-auto">
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
              <h3 className="text-2xl font-bold bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent mb-4">
                Samrat Mukherjee
              </h3>
              <p className="text-red-400 mb-4">
                Lead Data Analyst & Educator helping professionals transform
                their careers through data analytics and machine learning.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-red-400 hover:text-red-300 transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="text-red-400 hover:text-red-300 transition-colors"
                >
                  YouTube
                </a>
                <a
                  href="#"
                  className="text-red-400 hover:text-red-300 transition-colors"
                >
                  Twitter
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-red-50 mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2 text-red-400">
                <li>
                  <a
                    href="#about"
                    className="hover:text-red-300 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#courses"
                    className="hover:text-red-300 transition-colors"
                  >
                    Courses
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="hover:text-red-300 transition-colors"
                  >
                    Success Stories
                  </a>
                </li>
                <li>
                  <a
                    href="#start"
                    className="hover:text-red-300 transition-colors"
                  >
                    Start Now
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-red-50 mb-4">
                Contact
              </h4>
              <div className="space-y-2 text-red-400">
                <p>📧 samrat@dataanalytics.com</p>
                <p>📱 +91 98765 43210</p>
                <p>🌐 Available for corporate training</p>
              </div>
            </div>
          </div>

          <div className="border-t border-red-800 mt-12 pt-8 text-center text-red-400">
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
