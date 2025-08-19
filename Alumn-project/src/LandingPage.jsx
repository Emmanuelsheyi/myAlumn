import alumnPic from "./assets/Alumn logo.png";
import vectorPic from "./assets/vector.png";
import purePic from "./assets/pure background.png";
import contactPic from "./assets/contact.png";
import connectPic from "./assets/connect.png";
import frindsPic from "./assets/friends.png";
import planePic from "./assets/plane.png";
import shieldPic from "./assets/shield.png";
import appPic from "./assets/app.png";
import bulletPic from "./assets/bullet.png";
import capPic from "./assets/cap.png";
import searchPic from "./assets/search.png";
import connectionPic from "./assets/connection.png";
import "./landingPage .css"; // Assuming you have a CSS file for styles
import { useState, useEffect } from "react";

function LandingPage() {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Talent", "Project", "Collaboration"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div>
      {/* Navigation Header */}
      <div
        className="bg-white shadow-sm p-4 m-0"
        style={{ borderRadius: "14px" }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src={alumnPic} alt="Alumn Logo" />
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="text-gray-600 hover:text-purple-600 font-medium"
            >
              About
            </a>
            <a
              href="#works "
              className=" text-gray-600 hover:text-purple-600 font-medium"
            >
              How it Works
            </a>
            <a
              href="#features"
              className="text-gray-600 hover:text-purple-600 font-medium"
            >
              Features
            </a>
            <a
              href="#community"
              className="text-gray-600 hover:text-purple-600 font-medium"
            >
              Community
            </a>
          </div>
          <div className="flex items-center space-x-4">
            {/* <img src={vectorPic} alt="vector pic image" /> */}

            <a
              href="#join-waitlist"
              className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 font-medium transition-colors"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      </div>
      {/* end of the navigation header */}

      {/* image section */}
      <div className="pure">
        <img src={purePic} alt="image section" />
        <div className="image-overlay">
          <h1 className="overlay-text">
            Verified Builders, Real <span>{words[currentWord]}</span>
          </h1>
          <p>
             Find teammates, share ideas, and
            build real-world experience. 
          </p>
          <button>Join Waitlist</button>
        </div>
      </div>
      {/* end of image section */}

      {/* Hero Section */}
      <div id="about" className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            The Network to Build, Connect, and Grow
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Alumn is a platform that helps verified alumni and builders from
            learning communities showcase what they're working on, find
            teammates and build together. It's designed to make collaboration
            easy and real.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {/* For Alumni & Builders */}
          <div className="bg-white p-8 rounded-2xl ">
            <h2 className="text-2xl font-bold text-purple-600 mb-6">
              For Alumni & Builders
            </h2>
            <p className="text-gray-600 mb-6">
              Show what you're building, connect with others, and find useful
              projects to be part of.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-700">Verified alumni network</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-700">
                  Tools to list or join live projects
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-700">
                  Connect with others working on similar ideas
                </span>
              </div>
            </div>
          </div>

          {/* For Institutions & Employers */}
          <div className="bg-white p-8 rounded-2xl ">
            <h2 className="text-2xl font-bold text-purple-600 mb-6">
              For Institutions & Employers
            </h2>
            <p className="text-gray-600 mb-6">
              Discover builders working on real projects and follow their
              progress.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-700">
                  Access to verified talent pool
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-700">
                  Project-based hiring insights
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-700">
                  Partner with us to track and support alumni growth
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div
        id="works"
        className="bg-gradient-to-r from-blue-50 to-purple-50 py-16 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-gray-600">
              Simple steps to connect, collaborate, and get discovered
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Step 1: Sign Up */}
            <div className="text-center">
              <div className="  flex items-center justify-center mx-auto mb-4">
                <img
                  src={contactPic}
                  alt="contact image"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">1. Sign Up</h3>
              <p className="text-sm text-gray-600">
                Create your profile and get verified with your learning
                community
              </p>
            </div>

            {/* Step 2: Build Projects */}
            <div className="text-center">
              <div className=" flex items-center justify-center mx-auto mb-4">
                <img
                  src={connectPic}
                  alt=" connect image"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                2. Build Projects
              </h3>
              <p className="text-sm text-gray-600">
                Showcase your current builds and collaborate with other talented
                alumni
              </p>
            </div>

            {/* Step 3: Connect & Collaborate */}
            <div className="text-center">
              <div className=" flex items-center justify-center mx-auto mb-4">
                <img
                  src={frindsPic}
                  alt="friends image"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                3. Connect & Collaborate
              </h3>
              <p className="text-sm text-gray-600">
                Join teams, find partners, and build meaningful projects with
                like-minded peers
              </p>
            </div>

            {/* Step 4: Get Discovered */}
            <div className="text-center">
              <div className=" flex items-center justify-center mx-auto mb-4">
                <img
                  src={planePic}
                  alt="plane image"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                4. Get Discovered
              </h3>
              <p className="text-sm text-gray-600">
                Let employers and institutions find you based on your expertise
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* end of How It Works Section */}

      {/* Platform Features Section */}
      <div id="features" className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Platform Features
            </h2>
            <p className="text-gray-600">
              Everything you need to connect and collaborate
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Verified Profiles */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <img src={shieldPic} alt="shield logo" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Verified Profiles
              </h3>
              <p className="text-gray-600">
                Connect with authenticated builders and alumni from top
                institutions worldwide
              </p>
            </div>

            {/* Project Showcase */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <img src={connectionPic} alt="connection logo" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Project Showcase
              </h3>
              <p className="text-gray-600">
                Showcase what you're building or find existing projects based on
                skills, interests, or needs
              </p>
            </div>

            {/* Smart Matching */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <img src={searchPic} alt="search logo" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Smart Matching
              </h3>
              <p className="text-gray-600">
                Advanced search and filtering tools to connect with the right
                teammate based on skills and availability
              </p>
            </div>

            {/* Direct Messaging */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <img src={appPic} alt="app logo" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Direct Messaging
              </h3>
              <p className="text-gray-600">
                Seamless communication between alumni, companies, and
                institutions
              </p>
            </div>

            {/* Analytics Dashboard */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <img src={bulletPic} alt="bullet logo" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Analytics Dashboard
              </h3>
              <p className="text-gray-600">
                Track project involvement, collaboration trends, and community
                engagement
              </p>
            </div>

            {/* Alumni Network */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <img src={capPic} alt="cap logo" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Alumni Network
              </h3>
              <p className="text-gray-600">
                Connect with fellow alumni from your institution and beyond
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Join Waitlist Section */}
      <div id="join-waitlist" className="backgroundColor  py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="firstText">
            Join Verified Builders Ready to Connect and Create Together
          </h2>
          <p className="secondText">
            Be among the first to experience Alumn when we launch. Get early
            access and exclusive benefits.
          </p>

          <div className="max-w-lg mx-auto space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-purple-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-purple-500"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-purple-500"
            />
            <input
              type="text"
              placeholder="Institution/University"
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-purple-500"
            />
            <select className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-purple-500">
              <option value="">I'm an Alumni/Builder/Talent/Institution/Employer</option>
              <option value="alumni">Alumni</option>
              <option value="builder">Builder</option>
              <option value="talent">Talent</option>
              <option value="institution">Institution</option>
              <option value="employer">Employer</option>
            </select>
            <button className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors font-medium">
              Join the Waitlist
            </button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="footerColor py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src={alumnPic} alt="Alumn Logo" className="h-8" />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Built to help you find your <br /> people and get things done.
              </p>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#features"
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#works"
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    Community
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 text-sm text-center">
              © 2025 Alumn. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
