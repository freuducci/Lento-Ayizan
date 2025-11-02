/**
 * Lento Ayizan - Main JavaScript
 * Performance-optimized animations and interactions
 */

(function() {
  'use strict';

  // ===================================
  // Intersection Observer for Fade-in Animations
  // ===================================
  
  const initFadeInObserver = () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    if (!fadeElements.length) return;
    
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observerCallback = (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Staggered animation delay
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 80);
          
          // Stop observing after animation
          observer.unobserve(entry.target);
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    fadeElements.forEach(element => {
      observer.observe(element);
    });
  };

  // ===================================
  // Smooth Scroll for Anchor Links
  // ===================================
  
  const initSmoothScroll = () => {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Skip empty anchors
        if (href === '#') return;
        
        const target = document.querySelector(href);
        
        if (!target) return;
        
        e.preventDefault();
        
        // Account for fixed header
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      });
    });
  };

  // ===================================
  // Parallax Effect (Subtle & Performance-Optimized)
  // ===================================
  
  const initParallax = () => {
    let ticking = false;
    const heroSection = document.querySelector('#hero');
    
    if (!heroSection) return;
    
    const updateParallax = () => {
      const scrollPosition = window.pageYOffset;
      const parallaxSpeed = 0.3;
      
      heroSection.style.transform = `translateY(${scrollPosition * parallaxSpeed}px)`;
      
      ticking = false;
    };
    
    const requestParallaxUpdate = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };
    
    // Only enable parallax on larger screens
    if (window.innerWidth >= 1024) {
      window.addEventListener('scroll', requestParallaxUpdate, { passive: true });
    }
  };

  // ===================================
  // Navbar Background on Scroll
  // ===================================
  
  const initNavbarScroll = () => {
    const navbar = document.querySelector('custom-navbar');
    
    if (!navbar) return;
    
    let ticking = false;
    
    const updateNavbar = () => {
      const scrollPosition = window.pageYOffset;
      
      if (scrollPosition > 50) {
        navbar.style.backgroundColor = 'rgba(14, 14, 14, 0.95)';
        navbar.style.backdropFilter = 'blur(12px)';
      } else {
        navbar.style.backgroundColor = 'rgba(14, 14, 14, 0.9)';
        navbar.style.backdropFilter = 'blur(8px)';
      }
      
      ticking = false;
    };
    
    const requestNavbarUpdate = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', requestNavbarUpdate, { passive: true });
  };

  // ===================================
  // Lazy Loading Enhancement
  // ===================================
  
  const initLazyLoading = () => {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('loading' in HTMLImageElement.prototype) {
      // Browser supports native lazy loading
      return;
    }
    
    // Fallback for older browsers
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          imageObserver.unobserve(img);
        }
      });
    });
    
    images.forEach(img => imageObserver.observe(img));
  };

  // ===================================
  // Initialize All Features
  // ===================================
  
  const init = () => {
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
      return;
    }
    
    // Initialize all features
    initFadeInObserver();
    initSmoothScroll();
    initParallax();
    initNavbarScroll();
    initLazyLoading();
    
    // Log initialization (remove in production)
    console.log('✨ Lento Ayizan initialized');
  };

  // Start initialization
  init();

  // ===================================
  // Handle Page Visibility Changes
  // ===================================
  
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      // Pause animations when tab is hidden (performance optimization)
      document.body.style.animationPlayState = 'paused';
    } else {
      // Resume animations when tab is visible
      document.body.style.animationPlayState = 'running';
    }
  });

  // ===================================
  // Prevent Layout Shift on Load
  // ===================================
  
  window.addEventListener('load', () => {
    // Remove any preload classes or placeholders
    document.body.classList.add('loaded');
  });

})();
