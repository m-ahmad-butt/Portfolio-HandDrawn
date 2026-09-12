import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import SkillsPlayground from '../components/SkillsPlayground';
import PortfolioSections from '../components/PortfolioSections';
import './LandingPage.css';

const LandingPage = () => {
  const trackRef = useRef(null);
  const stickyRef = useRef(null);
  const mouthRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [mouthOrigin, setMouthOrigin] = useState({ x: 50, y: 78 });

  const updateMouthOrigin = () => {
    const sticky = stickyRef.current;
    const mouth = mouthRef.current;
    if (!sticky || !mouth) return;
    const s = sticky.getBoundingClientRect();
    const m = mouth.getBoundingClientRect();
    setMouthOrigin({
      x: ((m.left + m.width / 2 - s.left) / s.width) * 100,
      y: ((m.top + m.height / 2 - s.top) / s.height) * 100,
    });
  };

  useLayoutEffect(() => {
    updateMouthOrigin();
  }, [progress]);

  useEffect(() => {
    const onScroll = () => {
      const el = trackRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      setProgress(total > 0 ? scrolled / total : 0);
      updateMouthOrigin();
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  // Hide the extra portal dot at rest; expand from mouth on scroll
  const mouthRadius =
    progress < 0.001 ? 0 : 0.85 + progress * progress * 150;
  const faceOpacity = Math.max(0, 1 - progress * 2.2);
  const faceScale = 1 + progress * 0.28;
  const labelOpacity = Math.max(0, 1 - progress * 1.8);
  const contentOpacity = Math.min(1, Math.max(0, (progress - 0.28) / 0.35));
  const contentY = (1 - contentOpacity) * 28;

  return (
    <>
      <section className="hero-track" ref={trackRef}>
      <div className="hero-sticky" ref={stickyRef}>
        <div className="hero-bg" />

        <p className="hero-name" style={{ opacity: labelOpacity }}>
          <span>MUHA</span>
          <span>MMAD</span>
          <span>AHMAD</span>
          <span>BUTT</span>
        </p>
        <p className="hero-tag" style={{ opacity: labelOpacity }}>
          <span>PORT</span>
          <span>FOLIO</span>
        </p>

        <div
          className="avatar-wrap"
          style={{
            opacity: faceOpacity,
            transform: `translate(-50%, -50%) scale(${faceScale})`,
          }}
          aria-hidden={progress > 0.55}
        >
          <div
            className="avatar"
            role="img"
            aria-label="Avatar of Muhammad Ahmad Butt"
          >
            <img
              className="avatar-img"
              src="/avatar.png"
              alt=""
              draggable={false}
              onLoad={updateMouthOrigin}
            />
            <span className="mouth-anchor" ref={mouthRef} aria-hidden="true" />
          </div>
        </div>

        <div
          className="mouth-portal"
          style={{
            clipPath: `circle(${mouthRadius}% at ${mouthOrigin.x}% ${mouthOrigin.y}%)`,
          }}
        >
          <div className="portal-inner">
            <div
              className="portal-content"
              style={{
                opacity: contentOpacity,
                transform: `translateY(${contentY}px)`,
              }}
            >
              <p className="portal-lead">
                Software engineer specializing in{' '}
                <span className="accent accent-ai">AI</span>,{' '}
                <span className="accent accent-nlp">NLP</span>,{' '}
                <span className="accent accent-xr">XR</span> &{' '}
                <span className="accent accent-web">Full-Stack</span>.
              </p>
            </div>
            <div
              className="portal-skills"
              style={{ opacity: contentOpacity }}
            >
              <SkillsPlayground active={progress > 0.45} />
            </div>
          </div>
        </div>

        <div
          className="scroll-hint"
          style={{ opacity: Math.max(0, 1 - progress * 4) }}
        >
          <span>Scroll</span>
          <span className="scroll-hint-line" />
        </div>
      </div>
    </section>
      <PortfolioSections />
    </>
  );
};

export default LandingPage;
