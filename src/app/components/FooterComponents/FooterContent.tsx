"use client";
import React, { useEffect } from "react";

interface FooterContentProps {
  fatherTop: number;
}

export const FooterContent: React.FC<FooterContentProps> = ({ fatherTop }) => {
  useEffect(() => {}, [fatherTop]);

  return (
    <div
      className="w-full h-full bg-neutral-900/50 backdrop-blur-sm flex flex-col justify-start items-start p-10 sm:p-16 lg:p-20"
      style={{ borderRadius: "1.4rem 1.4rem 0 0" }}
    >
      <h2 className="text-lg sm:text-xl font-bold text-white mb-6">
        All rights reserved by ScalarBee®.
      </h2>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: "Company",
            links: ["About Us", "Careers", "Blog", "Press"],
          },
          {
            title: "Support",
            links: ["Help Center", "FAQs", "Documentation", "Community"],
          },
          {
            title: "Legal",
            links: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
          },
          {
            title: "Resources",
            links: [
              "API Documentation",
              "Developer Portal",
              "Pricing",
              "Affiliate Program",
            ],
          },
        ].map((section, index) => (
          <div key={index}>
            <h3 className="text-base sm:text-lg font-semibold text-white">
              {section.title}
            </h3>
            <ul className="text-sm text-neutral-200">
              {section.links.map((link, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-neutral-100">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="text-sm text-neutral-200 mt-8">
        ScalarBee® is committed to providing exceptional services with
        transparency and integrity.
      </p>
    </div>
  );
};