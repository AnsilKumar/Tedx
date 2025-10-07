// Image optimization utilities
export const getOptimizedImageProps = (src: string, alt: string, priority = false) => ({
  src,
  alt,
  quality: priority ? 90 : 75,
  loading: priority ? 'eager' : 'lazy' as const,
  placeholder: 'blur' as const,
  blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==',
});

// Preload critical images
export const preloadCriticalImages = () => {
  if (typeof window !== 'undefined') {
    const criticalImages = [
      '/logo-white-tedxaiet.png',
      '/speaker/arun.png',
      '/speaker/suyog_shetty.jpg',
      '/speaker/satish_patla.jpg',
      '/speaker/abhishek-mishras.jpeg',
      '/speaker/janki.png',
      '/speaker/achutank.jpeg',
      '/speaker/sufiyan_alam2.jpeg',
      
    ];

    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }
};

// Intersection Observer for lazy loading
export const useIntersectionObserver = (callback: () => void, options = {}) => {
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          callback();
          observer.disconnect();
        }
      });
    }, { threshold: 0.1, ...options });
    
    return observer;
  }
  return null;
};