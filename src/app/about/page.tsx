import { Metadata } from "next";
import TeamSection from "./TeamSection";

export const metadata: Metadata = {
  title: "About | Ticket Hooks",
  description: "About | Ticket Hooks",
};

const AboutPage = () => {
  return (
    <div className="space-y-20">
      <div className="text-center space-y-4 max-w-screen-xl mx-auto px-5 lg:px-0 pt-20">
        <h1 className="text-5xl font-semibold pb-8">Who We Are?</h1>
        <p className="leading-7 text-justify">
          TicketHooks, born from the innovation of Binary Hooks, redefines how
          you connect with experiences. Since our inception, we've dedicated
          ourselves to simplifying ticketing for events, shows, concerts, and
          travel across Bangladesh. As a technology-driven platform, we combine
          convenience, speed, and trust to provide you with an unmatched
          ticketing experience. At TicketHooks, we empower our users to explore
          and choose from a wide array of options, compare prices, and secure
          the best deals—all within moments, with just a few taps on your
          device. We're not just a platform; we're your gateway to unforgettable
          moments, ensuring every step of your journey is seamless, secure, and
          enjoyable. With TicketHooks, it's not just about tickets—it's about
          creating experiences that resonate, connecting people with their
          passions, and making every moment memorable. Let us take you there,
          the TicketHooks way!
        </p>
      </div>
      <TeamSection />
    </div>
  );
};

export default AboutPage;
