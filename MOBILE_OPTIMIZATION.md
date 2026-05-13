# Mobile Optimization Guide for farhankabir.me

## ✅ Already Implemented (May 13, 2026)

### 1. Responsive Design Pattern ✓
- **Hook**: `useMediaQuery` in `src/hooks/useMediaQuery.ts`
- **Features**:
  - Native `window.matchMedia` API
  - Automatic resize handling
  - SSR-safe implementation
  - Pre-configured breakpoints
  
### 2. Mobile-Aware Components ✓
- **LazyCharacter**: Uses `useMediaQuery` to skip 3D on mobile (<1024px)
- **PublicationShowcase**: Uses `useMediaQuery` to skip Three.js canvas on mobile
- **Loading**: 8-second fallback timeout for stuck loading

### 3. Layout Improvements ✓
- **MainContainer**: Proper rendering flow for IntersectionObserver
- **rootMargin**: 200px added to Character loading trigger
- **Error Handling**: WebGL failures no longer block page loading

---

## 🎯 Next Steps (Recommended)

### Phase 1: CSS & Critical Path (Medium Priority)

#### 1.1 CSS Architecture
```typescript
// Current: Custom CSS with @media queries
// Target: Utility-first CSS approach (like Tailwind)

Benefits:
- Smaller CSS bundle on mobile
- Faster parsing and rendering
- Built-in responsive utilities
- Better tree-shaking
```

**Action**: Install Tailwind CSS
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

#### 1.2 Critical CSS Inlining
```html
<!-- In index.html <head> -->
<style>
  /* Critical CSS for above-fold content */
  /* Hero section, navbar, loading animation */
  /* Prevents FOUC and layout shifts */
</style>
```

**Impact**: 
- ✓ Faster First Contentful Paint (FCP)
- ✓ Better CLS (Cumulative Layout Shift) score
- ✓ Smoother perceived performance

---

### Phase 2: Animation & Interactions (High Priority for Mobile)

#### 2.1 Conditional Animation Complexity
```typescript
// Current: Same GSAP/Three.js animations everywhere
// Target: Simplified animations on mobile

import { useMediaQuery } from '../hooks/useMediaQuery';
import { useReducedMotion } from '../hooks/useReducedMotion';

const Hero = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const prefersReduced = useReducedMotion();
  
  // Use simpler animations on mobile
  const animationDuration = isMobile ? 0.3 : 0.6;
  const animationDelay = isMobile ? 0 : 0.2;
  
  return <animated.div {...animationProps} />;
};
```

#### 2.2 Disable GSAP ScrollSmoother on Mobile
```typescript
// In MainContainer.tsx
const shouldUseSmoothScroll = useMediaQuery('(min-width: 1025px)');

// Only initialize ScrollSmoother on desktop
if (shouldUseSmoothScroll) {
  smoother = ScrollSmoother.create({...});
}
```

**Impact**:
- ✓ Less CPU usage on mobile
- ✓ Better battery life
- ✓ Smoother scroll performance on low-end devices

---

### Phase 3: Image Optimization (Medium Priority)

#### 3.1 Responsive Images
```typescript
// Current: Same image size for all devices
// Target: Multiple image sizes with srcset

import OptimizedImage from '../components/OptimizedImage';

<OptimizedImage
  src="/image.jpg"
  alt="Description"
  sizes="(max-width: 640px) 320px,
         (max-width: 1024px) 640px,
         1200px"
  breakpoints={[320, 640, 1200]}
/>
```

#### 3.2 Image Loading Strategy
```typescript
// Lazy load below-fold images
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const LazyImage = ({ src, alt }) => {
  const ref = useRef();
  const isVisible = useIntersectionObserver(ref, { 
    rootMargin: '50px' 
  });
  
  return (
    <div ref={ref}>
      {isVisible && <img src={src} alt={alt} />}
    </div>
  );
};
```

---

### Phase 4: Performance Monitoring (Optional)

#### 4.1 Web Vitals Tracking
```typescript
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

getCLS(console.log);  // Layout Shift
getFID(console.log);  // Input Delay
getFCP(console.log);  // First Paint
getLCP(console.log);  // Largest Paint
getTTFB(console.log); // Server Response
```

#### 4.2 Lighthouse Integration
```bash
npm run lighthouse
# Generates performance report
```

---

## 📊 Performance Metrics to Monitor

### Target Scores (Google Core Web Vitals):
| Metric | Target | Current* |
|--------|--------|---------|
| LCP (Largest Contentful Paint) | < 2.5s | TBD |
| FID (First Input Delay) | < 100ms | TBD |
| CLS (Cumulative Layout Shift) | < 0.1 | TBD |
| FCP (First Contentful Paint) | < 1.8s | TBD |
| TTFB (Time to First Byte) | < 600ms | TBD |

*Run `npm run lighthouse` to get current scores

---

## 🔍 Comparison: farhankabir.com vs farhankabir.me

### What farhankabir.com Does Well (Mobile)

1. **Tailwind CSS**
   - Utility-first approach
   - Smaller CSS bundle
   - Built-in responsive utilities
   
2. **Framer Motion instead of GSAP**
   - Lighter for animations
   - Better GPU optimization
   - Mobile-friendly defaults
   
3. **useMediaQuery Hook**
   - ✅ Now implemented in farhankabir.me!
   
4. **Lazy Components**
   - All heavy components use `React.lazy()`
   - Background animations conditional
   
5. **SEO & Meta Tags**
   - Comprehensive OG tags
   - DNS prefetch optimization
   - Font loading optimization

---

## 🛠️ Implementation Priority

### 🔴 High (Do Soon)
1. ~~Implement useMediaQuery~~ ✓ DONE
2. Reduce animation complexity on mobile
3. Add touch device optimization

### 🟡 Medium (Do Next)
1. Install Tailwind CSS
2. Implement responsive images
3. Add critical CSS inlining
4. Optimize font loading

### 🟢 Low (Optional)
1. Web Vitals monitoring
2. Advanced image optimization
3. Service Worker caching
4. WebAssembly optimizations

---

## 📱 Mobile Testing Checklist

Before considering mobile optimization complete:

- [ ] Loads in < 3s on 4G
- [ ] Loads in < 5s on 3G
- [ ] No layout shifts (CLS < 0.1)
- [ ] Touch interactions work smoothly
- [ ] Text is readable (16px+ on mobile)
- [ ] Buttons are tappable (48px+ minimum)
- [ ] No horizontal scrolling
- [ ] Fixed headers don't overlap content
- [ ] Images scale properly
- [ ] Viewport meta tag is correct

---

## 🚀 Current Status

✅ **Deployed**: https://farhankabir133.github.io/farhankabir.me/

✅ **Improvements Applied**:
- useMediaQuery hook implementation
- LazyCharacter mobile detection
- PublicationShowcase mobile detection
- Loading timeout fallback
- Proper error handling

⏳ **Next Phase**: CSS architecture & animation simplification

---

## 📚 References

- [MDN: Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [Web Vitals Guide](https://web.dev/vitals/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion Mobile](https://www.framer.com/motion/)
- [farhankabir.com Source](https://github.com/farhankabir133/farhankabir.com)

