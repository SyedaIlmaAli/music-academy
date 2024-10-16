"use client"

import Link from "next/link";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import featuredWebinars from "@/data/featuredWebinars";

const UpcomingWebiners = () => {

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect
          items={featuredWebinars.map(webinar => (
            {
              title: webinar.title,
              description: webinar.description,
              link: "/"
            }
          ))}/>
        </div>
        <div className="mt-10 text-center">
          <Link
            href={"/courses"}
            className="px-4 py-2 rounded border border-white text-black bg-gradient-to-r from-[#00ccb1] via-[#ad9dfd] to-[#e4a8f3] hover:from-[#8cfced] hover:via-[#937eff] hover:to-[#e374ff] transition duration-300"
          >
            View All Webinars
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpcomingWebiners;
