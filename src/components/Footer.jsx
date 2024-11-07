import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/thestartupdeveloper10"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/cliffe-ibande-2973b2261/"
    },
    {
      name: "Email",
      icon: <Mail className="w-5 h-5" />,
      url: "mailto:owinocliffe10@gmail.com"
    }
  ];

  const navigationLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-black">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white" id="home">Cliffe Ibande</h3>
            <p className="text-gray-400 text-sm max-w-md">
              Full-stack developer specializing in creating innovative web solutions 
              and intelligent applications.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="text-gray-400 hover:text-white hover:bg-gray-800"
                >
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Latest Projects */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Latest Projects</h3>
            <div className="space-y-2">
              <a 
                href="https://labalsafike.onrender.com/" 
                className="group flex items-center text-sm text-gray-400 hover:text-white transition-colors"
              >
                <span>Labal Safi</span>
                <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a 
                href="https://royalwatcheske.onrender.com/" 
                className="group flex items-center text-sm text-gray-400 hover:text-white transition-colors"
              >
                <span>Royal Watches</span>
                <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a 
                href="https://osasuna-fc.onrender.com/" 
                className="group flex items-center text-sm text-gray-400 hover:text-white transition-colors"
              >
                <span>Osasuna FC</span>
                <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} Cliffe ibande. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <button className="hover:text-white transition-colors">
                Privacy Policy
              </button>
              <span className="text-gray-600">•</span>
              <button className="hover:text-white transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}