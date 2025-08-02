import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 sm:px-8 lg:px-10"
    >
      <div className="container max-w-4xl mx-auto text-center z-10 text-foreground">
        <div className="space-y-6 sm:space-y-8">
          {/* Profile Image */}
          <div className="flex justify-center">
            <img
              src="public/icons/Molika Profile.png"
              alt="Molika Taing"
              className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 object-cover object-top rounded-full border-4 border-foreground"
            />
          </div>

          {/* Headline */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span>Hi, I'm </span>
            <span className="text-brand text-primary">Molika</span>
            <span className="text-gradient ml-2">Taing</span>
          </h1>

          {/* Description */}
          <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            With a background in Computer Science, I’ve grown a strong interest in everything data—how it moves, how it tells stories, and how it powers AI. 
            I’m always learning, experimenting, and building. If you're into tech, data, or just curious what I'm up to, take a look around.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Icon */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce text-foreground">
        <span className="text-xs sm:text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
      </div>
    </section>
  );
};
