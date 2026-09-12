import { useEffect, useRef, useState } from 'react';
import './Footer.css';

const EMAIL = 'm.ahmad.software.engineer@gmail.com';

const socials = [
  {
    href: 'https://github.com/m-ahmad-butt',
    label: 'GitHub',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2C6.477 2 2 6.486 2 12.021c0 4.424 2.865 8.18 6.839 9.504.5.093.682-.217.682-.483 0-.237-.009-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.071 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.943.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.481A10.019 10.019 0 0 0 22 12.021C22 6.486 17.523 2 12 2Z"
        />
      </svg>
    ),
  },
  {
    href: 'https://gitlab.com/m-ahmad-butt',
    label: 'GitLab',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M22.65 14.39 12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 5.5 2a.42.42 0 0 1 .4.27l2.44 7.49h7.32l2.44-7.51A.42.42 0 0 1 18.5 2a.42.42 0 0 1 .4.27l2.44 7.51 1.22 3.78a.84.84 0 0 1-.31.94Z"
        />
      </svg>
    ),
  },
  {
    href: 'https://huggingface.co/m-ahmad-butt',
    label: 'Hugging Face',
    icon: <img src="/huggingface.svg" alt="" />,
  },
  {
    href: 'https://www.linkedin.com/in/m-ahmad-butt',
    label: 'LinkedIn',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0Z"
        />
      </svg>
    ),
  },
];

function Footer() {
  const nameWrapRef = useRef(null);
  const buttonRef = useRef(null);
  const eyesRef = useRef([]);
  const following = useRef(false);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const [copied, setCopied] = useState(false);

  const centerButton = () => {
    const wrap = nameWrapRef.current;
    const btn = buttonRef.current;
    if (!wrap || !btn) return { x: 0, y: 0 };
    return {
      x: (wrap.offsetWidth - btn.offsetWidth) / 2,
      y: (wrap.offsetHeight - btn.offsetHeight) / 2,
    };
  };

  useEffect(() => {
    const start = centerButton();
    target.current = start;
    current.current = start;
    if (buttonRef.current) {
      buttonRef.current.style.transform = `translate3d(${start.x}px, ${start.y}px, 0)`;
    }

    let raf = 0;
    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * 0.22;
      current.current.y += (target.current.y - current.current.y) * 0.22;
      if (buttonRef.current) {
        buttonRef.current.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onResize = () => {
      if (!following.current) {
        const next = centerButton();
        target.current = next;
      }
    };

    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  useEffect(() => {
    const lookAt = (clientX, clientY) => {
      eyesRef.current.forEach((eye) => {
        if (!eye) return;
        const pupil = eye.querySelector('.eye__pupil');
        if (!pupil) return;
        const rect = eye.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = clientX - cx;
        const dy = clientY - cy;
        const dist = Math.hypot(dx, dy) || 1;
        const maxX = rect.width * 0.2;
        const maxY = rect.height * 0.18;
        const pull = Math.min(dist / 140, 1);
        pupil.style.transform = `translate(${(dx / dist) * pull * maxX}px, ${(dy / dist) * pull * maxY}px)`;
      });
    };

    const onMove = (event) => {
      lookAt(event.clientX, event.clientY);

      const wrap = nameWrapRef.current;
      const btn = buttonRef.current;
      if (!wrap || !btn || !following.current) return;

      const rect = wrap.getBoundingClientRect();
      const x = event.clientX - rect.left - btn.offsetWidth / 2;
      const y = event.clientY - rect.top - btn.offsetHeight / 2;
      target.current = {
        x: Math.min(Math.max(-8, x), rect.width - btn.offsetWidth + 8),
        y: Math.min(Math.max(-8, y), rect.height - btn.offsetHeight + 8),
      };
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      const field = document.createElement('textarea');
      field.value = EMAIL;
      document.body.appendChild(field);
      field.select();
      document.execCommand('copy');
      document.body.removeChild(field);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  };

  return (
    <footer className="site-footer" id="contact">
      <div className="site-footer__inner">
        <div className="site-footer__top">
          <div className="site-footer__intro">
            <div className="site-footer__eyes" aria-hidden="true">
              {['left', 'right'].map((side, index) => (
                <span
                  key={side}
                  className={`eye eye--${side}`}
                  ref={(node) => {
                    eyesRef.current[index] = node;
                  }}
                >
                  <span className="eye__pupil" />
                </span>
              ))}
            </div>
            <p>
              Let’s connect.
              <br />
              I’m always down for a chat.
            </p>
          </div>

          <div className="site-footer__socials">
            <a
              className="site-footer__icon"
              href={`mailto:${EMAIL}`}
              title="Email"
              aria-label="Email Muhammad Ahmad Butt"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"
                />
              </svg>
            </a>
            {socials.map((social) => (
              <a
                key={social.href}
                className="site-footer__icon"
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                title={social.label}
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div
          className="site-footer__name-wrap"
          ref={nameWrapRef}
          onMouseEnter={() => {
            following.current = true;
          }}
          onMouseLeave={() => {
            following.current = false;
            target.current = centerButton();
          }}
        >
          <h2 className="site-footer__name">
            <span className="site-footer__name-left">Muhammad</span>
            <span className="site-footer__name-right">Ahmad Butt</span>
          </h2>
          <button
            type="button"
            ref={buttonRef}
            className={`site-footer__copy${copied ? ' is-copied' : ''}`}
            onClick={copyEmail}
          >
            {copied ? 'Copied to clipboard' : 'Click to copy email'}
            <svg viewBox="0 0 24 24" aria-hidden="true">
              {copied ? (
                <path
                  fill="currentColor"
                  d="M9.15 16.6 4.9 12.35l1.4-1.4 2.85 2.85 8.55-8.55 1.4 1.4Z"
                />
              ) : (
                <path
                  fill="currentColor"
                  d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1Zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2Zm0 16H8V7h11v14Z"
                />
              )}
            </svg>
          </button>
        </div>

        <div className="site-footer__bottom">
          <p>Made this using Cursor</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
