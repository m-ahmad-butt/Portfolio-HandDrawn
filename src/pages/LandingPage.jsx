import { useEffect, useRef, useState } from 'react';
import SkillsPlayground from '../components/SkillsPlayground';
import PortfolioSections from '../components/PortfolioSections';
import Footer from '../components/Footer';
import './LandingPage.css';

const LITE_QUERY =
  '(max-width: 768px), ((pointer: coarse) and (max-width: 1024px)), (prefers-reduced-motion: reduce)';

const LandingPage = ({ onViewWork }) => {
  const trackRef = useRef(null);
  const stickyRef = useRef(null);
  const mouthRef = useRef(null);
  const coverRef = useRef(null);
  const portalRef = useRef(null);
  const nameRef = useRef(null);
  const tagRef = useRef(null);
  const avatarRef = useRef(null);
  const leadRef = useRef(null);
  const skillsWrapRef = useRef(null);
  const hintRef = useRef(null);
  const liteRef = useRef(false);
  const skillsOnRef = useRef(false);

  const [lite, setLite] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia(LITE_QUERY).matches
      : false
  );
  const [skillsOn, setSkillsOn] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(LITE_QUERY);
    const apply = () => {
      const next = mq.matches;
      liteRef.current = next;
      setLite(next);
    };
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  useEffect(() => {
    const mobile = window.matchMedia('(max-width: 768px)');
    const setVh = () => {
      if (!mobile.matches) {
        document.documentElement.style.removeProperty('--vvh');
        return;
      }
      const h = window.visualViewport?.height ?? window.innerHeight;
      document.documentElement.style.setProperty('--vvh', `${Math.round(h)}px`);
    };
    setVh();
    mobile.addEventListener('change', setVh);
    window.visualViewport?.addEventListener('resize', setVh);
    window.addEventListener('resize', setVh);
    window.addEventListener('orientationchange', setVh);
    return () => {
      mobile.removeEventListener('change', setVh);
      window.visualViewport?.removeEventListener('resize', setVh);
      window.removeEventListener('resize', setVh);
      window.removeEventListener('orientationchange', setVh);
      document.documentElement.style.removeProperty('--vvh');
    };
  }, []);

  useEffect(() => {
    const sticky = stickyRef.current;
    const track = trackRef.current;
    const mouth = mouthRef.current;
    if (!sticky || !track) return;

    const measureMouth = () => {
      if (!mouth) return;
      const s = sticky.getBoundingClientRect();
      const m = mouth.getBoundingClientRect();
      if (!s.width || !s.height) return;
      sticky.style.setProperty(
        '--mouth-x',
        `${((m.left + m.width / 2 - s.left) / s.width) * 100}%`
      );
      sticky.style.setProperty(
        '--mouth-y',
        `${((m.top + m.height / 2 - s.top) / s.height) * 100}%`
      );
    };

    let ticking = false;
    const apply = () => {
      ticking = false;
      const rect = track.getBoundingClientRect();
      const total = track.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const progress = total > 0 ? scrolled / total : 0;
      const liteNow = liteRef.current;

      const mouthRadius =
        progress < 0.001 ? 0 : 0.85 + progress * progress * 150;
      const faceOpacity = Math.max(0, 1 - progress * 2.2);
      const faceScale = 1 + progress * 0.28;
      const labelOpacity = Math.max(0, 1 - progress * 1.8);
      const contentOpacity = Math.min(1, Math.max(0, (progress - 0.28) / 0.35));
      const contentY = (1 - contentOpacity) * 28;
      const portalFull = liteNow ? progress > 0.62 : mouthRadius >= 78;

      sticky.style.setProperty('--mouth-r', `${mouthRadius}%`);
      if (nameRef.current) nameRef.current.style.opacity = String(labelOpacity);
      if (tagRef.current) tagRef.current.style.opacity = String(labelOpacity);
      if (avatarRef.current) {
        avatarRef.current.style.opacity = String(faceOpacity);
        avatarRef.current.style.transform = `translate(-50%, -50%) scale(${faceScale})`;
        avatarRef.current.setAttribute('aria-hidden', progress > 0.55 ? 'true' : 'false');
      }
      if (leadRef.current) {
        leadRef.current.style.opacity = String(contentOpacity);
        leadRef.current.style.transform = `translateY(${contentY}px)`;
      }
      if (skillsWrapRef.current) {
        skillsWrapRef.current.style.opacity = String(contentOpacity);
      }
      if (hintRef.current) {
        hintRef.current.style.opacity = String(Math.max(0, 1 - progress * 4));
      }
      if (portalRef.current) {
        portalRef.current.classList.toggle('is-full', portalFull);
        portalRef.current.classList.toggle(
          'is-open',
          liteNow ? portalFull : contentOpacity > 0.55
        );
      }
      if (coverRef.current) {
        const diag = Math.hypot(sticky.clientWidth, sticky.clientHeight);
        const scale = progress < 0.001 ? 0 : (progress * progress * diag) / 9;
        coverRef.current.style.transform = `translate(-50%, -50%) scale(${scale})`;
        coverRef.current.style.opacity = portalFull ? '0' : '1';
      }

      if (progress < 0.78) measureMouth();

      const nextSkills = progress > (liteNow ? 0.62 : 0.48);
      if (nextSkills !== skillsOnRef.current) {
        skillsOnRef.current = nextSkills;
        setSkillsOn(nextSkills);
      }
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <>
      <section className="hero-track" ref={trackRef}>
        <div
          className={`hero-sticky${lite ? ' hero-sticky--lite' : ''}`}
          ref={stickyRef}
        >
          <div className="hero-bg" />

          <p className="hero-name" ref={nameRef}>
            <span>MUHA</span>
            <span>MMAD</span>
            <span>AHMAD</span>
            <span>BUTT</span>
          </p>
          <p className="hero-tag" ref={tagRef}>
            <span>PORT</span>
            <span>FOLIO</span>
          </p>

          <div className="avatar-wrap" ref={avatarRef}>
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
              />
              <span className="mouth-anchor" ref={mouthRef} aria-hidden="true" />
            </div>
          </div>

          <div className="mouth-cover" ref={coverRef} aria-hidden="true" />

          <div className="mouth-portal" ref={portalRef}>
            <div className="portal-inner">
              <div className="portal-content" ref={leadRef}>
                <p className="portal-lead">
                  Software engineer specializing in{' '}
                  <span className="accent accent-ai">AI</span>,{' '}
                  <span className="accent accent-nlp">NLP</span>,{' '}
                  <span className="accent accent-xr">XR</span> &{' '}
                  <span className="accent accent-web">Full Stack</span>.
                </p>
              </div>
              <div className="portal-skills" ref={skillsWrapRef}>
                {(!lite || skillsOn) && (
                  <SkillsPlayground active={skillsOn} lite={lite} />
                )}
              </div>
            </div>
          </div>

          <div className="scroll-hint" ref={hintRef}>
            <span>Scroll</span>
            <span className="scroll-hint-line" />
          </div>
        </div>
      </section>
      <PortfolioSections onViewWork={onViewWork} />
      <Footer />
    </>
  );
};

export default LandingPage;
