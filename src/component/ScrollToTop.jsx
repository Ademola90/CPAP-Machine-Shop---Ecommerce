import { useEffect } from "react";

const ScrollToTopAndSection = () => {
  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);

    // Scroll to a specific section if it exists
    const sectionId = "aboutImagesSection";
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return null; // This component doesn't render anything
};

export default ScrollToTopAndSection;
