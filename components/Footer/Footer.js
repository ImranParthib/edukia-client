import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background text-foreground border-t border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-10 sm:py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* College Info */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold tracking-tight">
              Mohammadpur Mohila College
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empowering women through quality education since 1960. Excellence
              in academics, character, and leadership.
            </p>
            <div className="flex gap-2 mt-2">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Facebook"
                className="hover:bg-accent"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Twitter"
                className="hover:bg-accent"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Instagram"
                className="hover:bg-accent"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Linkedin"
                className="hover:bg-accent"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/about"
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/academics"
                  className="hover:text-primary transition-colors"
                >
                  Academics
                </a>
              </li>
              <li>
                <a
                  href="/admission"
                  className="hover:text-primary transition-colors"
                >
                  Admission
                </a>
              </li>
              <li>
                <a
                  href="/notice"
                  className="hover:text-primary transition-colors"
                >
                  Notice
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-3">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="break-all">
                  mohammadpurmohilacollege@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+880 2-9119941, +880 2-9111124</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>Mohammadpur, Dhaka-1207, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-6 bg-border" />

        {/* Bottom Footer */}
        <div className="py-4 flex flex-col sm:flex-row justify-between items-center text-xs text-muted-foreground gap-4">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} Mohammadpur Mohila College. All
            rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
