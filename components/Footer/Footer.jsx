import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
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
    <footer className="border-t border-border bg-background text-foreground text-sm md:text-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* College Info */}
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold">
              Mohammadpur Mohila College
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Empowering women through quality education since 1991. Excellence
              in academics, character, and leadership.
            </p>
            <div className="flex flex-wrap gap-2 pt-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <Button
                  key={idx}
                  variant="ghost"
                  size="icon"
                  className="hover:bg-accent transition-colors"
                  aria-label={Icon.name}
                >
                  <Icon className="h-5 w-5" />
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              {[
                { label: "About Us", href: "/about" },
                { label: "Academics", href: "/academics" },
                { label: "Admission", href: "/admission" },
                { label: "Notice", href: "/notice" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-primary hover:underline underline-offset-4"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              {["Help Center", "Privacy Policy", "Terms of Service", "FAQ"].map(
                (item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="hover:text-primary hover:underline underline-offset-4"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 text-foreground" />
                <span>mmcdhaka91@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 text-foreground" />
                <span>+01953-007320, +01710-078815</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-foreground" />
                <span>
                  Nurjahan Road, Mohammadpur,
                  <br />
                  Dhaka-1207, Bangladesh
                </span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-10" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs md:text-sm text-muted-foreground gap-4">
          <p>
            &copy; {new Date().getFullYear()} Mohammadpur Mohila College. All
            rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {["Privacy", "Terms", "Cookies"].map((item, idx) => (
              <a
                key={idx}
                href="#"
                className="hover:text-primary hover:underline underline-offset-4"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
