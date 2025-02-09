import React, { useEffect, useState } from "react";
import "./styles.css";
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    isVisible && (
        <div 
          className="back-to-top-btn" 
          style={{ color: "var(--blue)", cursor: "pointer" }}
          onClick={scrollToTop}
        >
          <ArrowUpwardRoundedIcon />
        </div>
      )
    )
}
