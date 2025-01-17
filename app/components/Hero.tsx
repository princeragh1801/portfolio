'use client'
import { Button } from "@/components/ui/button"
import { Download } from 'lucide-react'
import Typewriter from 'typewriter-effect'

export default function Hero() {
  const handleDownload = () => {
    const fileId = '1Fxjx9Ks6FFnfdLY0Vd3W78FammWtoqaJ';
    const resumeUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Prince_Resume.pdf"; // Name for the downloaded file
    link.click();
  };

  return (
    <section id="hero" className="py-24 sm:py-32">
      <div className="flex flex-col items-center gap-8 text-center">
        {/* Typewriter Effect for Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter gradient-text">
          <Typewriter
            options={{
              strings: ['Prince Raghuwanshi', 'Full Stack Developer'],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 75,
            }}
          />
        </h1>
        {/* Static Subtitle */}
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Full Stack Developer specializing in .NET and modern web technologies.
          Building robust and scalable applications with a focus on clean code and performance.
        </p>
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button onClick={handleDownload} className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  )
}
