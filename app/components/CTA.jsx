'use client';

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Toast } from "sonner";   

export const ContactCTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message Sent! Thank you for contacting us.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-spice-gold/5 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? Want to book a table? Or simply want to share your 
            biriyani experience? We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-white border-2 hover:border-primary/20 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Call Us</p>
                      <p className="text-muted-foreground">+91 98765 43210</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Email Us</p>
                      <p className="text-muted-foreground">hello@biryanitherapy.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Head Office</p>
                      <p className="text-muted-foreground">MG Road, Bangalore - 560001</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Business Hours</p>
                      <p className="text-muted-foreground">Mon-Sun: 11:00 AM - 11:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-muted">
                  <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
                  <div className="flex gap-4">
                    <a href="#" className="bg-primary/10 p-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300">
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a href="#" className="bg-primary/10 p-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300">
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a href="#" className="bg-primary/10 p-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300">
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="bg-gradient-to-br from-[#FF7A18] to-[#FF3F1A] text-white border-0">
                <CardContent className="p-6 text-center">
                  <h4 className="text-xl font-bold mb-2">Order Online</h4>
                  <p className="text-white/90 mb-4">Quick delivery to your doorstep</p>
                  <Button variant="hero" size="sm">Order Now</Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-secondary to-accent text-white border-0">
                <CardContent className="p-6 text-center">
                  <h4 className="text-xl font-bold mb-2">Book a Table</h4>
                  <p className="text-white/90 mb-4">Reserve your dining experience</p>
                  <Button variant="hero" size="sm">Book Now</Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-white border-2 hover:border-primary/20 transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Your Name *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    required
                  />
                </div>

                <Button variant="cta" size="lg" type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
