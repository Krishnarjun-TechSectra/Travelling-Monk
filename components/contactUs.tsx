"use client";
import React from "react";
import Lottie from "react-lottie-player";


import animationData from "@/public/assets/walking-traveller.json";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { MainHeading } from "./ui/textAniamtions";

const ContactUs = () => {
  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 section-margin" id="contact">
      <div className="w-full max-h-96">
        <Lottie
          loop
          animationData={animationData}
          play
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Right: Contact Form */}
      <div className="space-y-4">
       <MainHeading text="Contact Us" />
        <p className="text-muted-foreground">
          We'd love to hear from you! Drop your name and message below.
        </p>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" required className="rounded-md" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Type your message..."
              rows={5}
              required
            />
          </div>

          <Button type="submit" className="w-full">
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
