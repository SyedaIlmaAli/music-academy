import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicSchoolTestimonial from "@/components/MusicSchoolTestimonials";
import UpcomingWebiners from "@/components/UpcomingWebiners";
import WhyChooseUs from "@/components/WhyChooseUs";



export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <MusicSchoolTestimonial/>
      <UpcomingWebiners/>
      <Instructors/>
    </main>
  );
}
