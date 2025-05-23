import React from "react";
import { Button } from "../ui/button";
import { Dribbble, Instagram, Twitter, Youtube } from "lucide-react";
import { Input } from "../ui/input";

export default function Footer() {
  return (
    <>
      <div className="bg-secondary">
        <div className="mx-auto max-w-4xl py-10">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-4">
              <img src="/Logo-2.svg" />
              <p className="text-center text-white mt-4">
                © 2023 Nextcent. All rights reserved.
              </p>
              <div className="flex flex-row gap-4">
                <Button variant="secondary" size="icon">
                  <Instagram className="w-8 h-8 text-white" />
                </Button>
                <Button variant="secondary" size="icon">
                  <Dribbble className="w-8 h-8 text-white" />
                </Button>
                <Button variant="secondary" size="icon">
                  <Twitter className="w-8 h-8 text-white" />
                </Button>
                <Button variant="secondary" size="icon">
                  <Youtube className="w-8 h-8 text-white" />
                </Button>
              </div>
            </div>
            <div className="flex flex-row gap-10">
              <div className="flex flex-col gap-4">
                <h2 className="text-lg text-white">Company</h2>
                <div className="flex flex-col gap-2 items-start">
                  <a href="#" className="text-white">
                    About Us
                  </a>
                  <a href="#" className="text-white">
                    Blog
                  </a>
                  <a href="#" className="text-white">
                    Contact Us
                  </a>
                  <a href="#" className="text-white">
                    Pricing
                  </a>
                  <a href="#" className="text-white">
                    Testimonials
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-start-safe">
                <h2 className="text-lg text-white">Support</h2>
                <div className="flex flex-col items-start gap-2">
                  <a href="#" className="text-white">
                    Help Center
                  </a>
                  <a href="#" className="text-white">
                    Terms of Service
                  </a>
                  <a href="#" className="text-white">
                    Legal
                  </a>
                  <a href="#" className="text-white">
                    Privacy policy
                  </a>
                  <a href="#" className="text-white">
                    Status
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="text-lg text-white">Stay up to date</h2>
                <div className="flex flex-col">
                  <Input type="email" placeholder="Your email address" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
