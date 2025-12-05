import React from 'react';
import { 
  Mail, Phone, MapPin, Code, Globe, Instagram, Linkedin, 
  FileText, Briefcase, Zap, TrendingUp, Printer, Server, MessageCircle 
} from 'lucide-react';

// Main App Component
const App = () => {
  const profile = {
    ceo: 'THARSAN S',
    email: 'nexora.crew@gmail.com',
    phone: '9597646460',
    location: 'Palakkarai, Tiruchirappalli, Tamil Nadu',
    tagline: 'Where Ideas Meet Innovation',
    about: "NEXORA CREW is an emerging IT service and cybersecurity startup founded by engineering students with a passion for innovation, digital transformation, and secure technology solutions. We aim to bring modern, affordable, and growth-focused digital solutions to students, startups, and small businesses.",
    
    links: [
      { name: 'Official Website', url: 'https://nexoracrew.com/', icon: Globe },
      { name: 'Instagram Profile', url: 'https://www.instagram.com/nexoracrew?igsh=MXZhd2YybzZpd24yZg==', icon: Instagram },
      { name: 'LinkedIn Page', url: 'https://www.linkedin.com/in/nexora-crew-01842a396', icon: Linkedin },
      { name: 'Join / Contact Form', url: 'https://docs.google.com/forms/d/e/1FAIpQLSfM--T6W9dannACA0nEugNDNwaIrZBjwFvG3218Ft7H5_f67A/viewform', icon: FileText },
    ],

    services: [
      { name: 'Enterprise Networking & Server Architecture', description: 'Professional setup for networks, servers, and IT infrastructure.', icon: Server },
      { name: 'Bold Branding & Immersive Visual Design', description: 'Creative logos, brand identity, and digital design solutions.', icon: Briefcase },
      { name: 'Growth-Driven SEO & Digital Domination', description: 'Performance-oriented SEO and online reach improvement.', icon: TrendingUp },
      { name: 'Next-Gen Web & Mobile Experience', description: 'Modern website development, mobile-friendly platforms & web apps.', icon: Code },
      { name: 'Printing and Branding Solutions', description: 'Business cards, ID cards, banners, stickers, and promotional material.', icon: Printer },
      { name: 'Hosting & Support', description: 'Website hosting, maintenance, and technical support.', icon: Globe },
      { name: 'AI & Automation', description: 'Smart automation tools and AI-focused integrations.', icon: Zap },
    ]
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4 md:p-8 flex justify-center items-start font-inter">

      {/* Main Profile Card */}
      <div className="w-full max-w-4xl bg-gray-800 shadow-2xl rounded-3xl overflow-hidden transform transition duration-500 hover:shadow-cyan-500/30">

        {/* Header Section */}
        <div className="p-6 md:p-10 bg-gradient-to-r from-gray-900 to-cyan-900/50">
          <div className="flex items-center space-x-4">

            {/* Logo */}
            <div className="p-3 rounded-xl bg-cyan-500/21 shadow-lg flex items-center justify-center">
              <img
                src="/logo.png"
                alt="NEXORA Logo"
                className="w-20 h-20 object-cover rounded-xl"
              />
            </div>

            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">NEXORA CREW</h1>
              <p className="text-lg font-medium text-cyan-400 mt-1">{profile.tagline}</p>
            </div>
          </div>

          <div className="mt-6 border-t border-gray-700 pt-4">
            <p className="text-xl font-bold text-white">{profile.ceo}</p>
<p className="text-sm font-semibold text-gray-400">FOUNDER & CEO</p>

          </div>
        </div>

        {/* Body Content */}
        <div className="p-6 md:p-10 space-y-12">

          {/* Contact Info */}
          <div className="bg-gray-700/50 p-6 rounded-xl shadow-inner border border-gray-700 w-full">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
               Contact Info
            </h2>

            <ul className="space-y-4">
              <li className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-cyan-500" />
                <a href={`mailto:${profile.email}`} className="hover:text-cyan-400 transition">
                  {profile.email}
                </a>
              </li>

              <li className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3 text-cyan-500" />
                <a href={`tel:${profile.phone}`} className="hover:text-cyan-400 transition">
                  {profile.phone}
                </a>
              </li>

              <li className="flex items-start text-gray-300">
  <MapPin className="w-5 h-5 mr-3 mt-1 text-cyan-500" />
  <a 
    href="https://maps.app.goo.gl/VUpAHD6bsMJE9kzw8" 
    target="_blank"
    className="hover:text-cyan-400 transition"
  >
    Palakkarai, Tiruchirappalli, Tamil Nadu
  </a>
</li>

            </ul>
          </div>

          {/* About Section */}
          <div className="bg-gray-700/50 p-6 rounded-xl shadow-lg border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-4 border-b border-cyan-600 pb-2">About NEXORA CREW</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              {profile.about}
            </p>
          </div>

          {/* Services */}
          <div className="bg-gray-700/50 p-6 rounded-xl shadow-lg border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-6 border-b border-cyan-600 pb-2">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {profile.services.map((service, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-600/70 transition duration-300 hover:shadow-xl">
                  <service.icon className="w-6 h-6 text-cyan-400 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                    <p className="text-sm text-gray-400 mt-1">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Official Links */}
          <div className="bg-gray-700/50 p-6 rounded-xl shadow-lg border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-6 border-b border-cyan-600 pb-2">Official Links</h2>

            {/* Top Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {profile.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  className="flex flex-col items-center justify-center p-4 bg-gray-700 rounded-xl hover:bg-cyan-700/50 transition text-gray-300"
                >
                  <link.icon className="w-8 h-8 mb-2 text-cyan-500" />
                  <span className="text-xs font-medium text-center">{link.name}</span>
                </a>
              ))}
            </div>

            {/* Bottom Row – WhatsApp + Internship */}
            <div className="flex justify-center gap-6 mt-6">

              {/* WhatsApp Channel */}
              <a
                href="https://whatsapp.com/channel/0029Vb6uR5u7dmeVhtkLSo2c"
                target="_blank"
                className="flex flex-col items-center justify-center p-4 bg-gray-700 rounded-xl hover:bg-gray-600/70 transition text-gray-300 shadow-md"
              >
                <MessageCircle className="w-8 h-8 mb-2 text-cyan-500" />
                <span className="text-xs font-medium">WhatsApp Channel</span>
              </a>

              {/* Student Internship Form */}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSflR-eG2DJXiHOThlXgeToIivo95GKEyZa0dhJDJFD2WbrWlA/viewform"
                target="_blank"
                className="flex flex-col items-center justify-center p-4 bg-gray-700 rounded-xl hover:bg-cyan-700/50 transition text-gray-300 shadow-md"
              >
                <FileText className="w-8 h-8 mb-2 text-cyan-500" />
                <span className="text-xs font-medium text-center">Student Internship Form</span>
              </a>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
