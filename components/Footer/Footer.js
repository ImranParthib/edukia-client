import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Edukia</h3>
                        <p className="text-gray-400 text-sm">
                            Empowering learners worldwide with quality education and innovative learning solutions.
                        </p>
                        <div className="flex space-x-4">
                            <Button variant="ghost" size="sm" className="p-2 hover:bg-gray-800">
                                <Facebook className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="p-2 hover:bg-gray-800">
                                <Twitter className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="p-2 hover:bg-gray-800">
                                <Instagram className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="p-2 hover:bg-gray-800">
                                <Linkedin className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Courses</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Instructors</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Support</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Stay Updated</h3>
                        <p className="text-gray-400 text-sm">Subscribe to our newsletter for the latest updates.</p>
                        <div className="flex space-x-2">
                            <Input 
                                type="email" 
                                placeholder="Enter your email" 
                                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                            />
                            <Button variant="default" size="sm">
                                Subscribe
                            </Button>
                        </div>
                        <div className="space-y-2 text-sm text-gray-400">
                            <div className="flex items-center space-x-2">
                                <Mail className="h-4 w-4" />
                                <span>info@edukia.com</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Phone className="h-4 w-4" />
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <MapPin className="h-4 w-4" />
                                <span>123 Education St, Learning City</span>
                            </div>
                        </div>
                    </div>
                </div>

                <Separator className="bg-gray-800" />

                {/* Bottom Footer */}
                <div className="py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p>&copy; 2024 Edukia. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer