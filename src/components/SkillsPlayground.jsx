import { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import './SkillsPlayground.css';

const SKILLS = [
  // Featured
  { id: 'agentic', label: 'Agentic AI', color: '#f2a0b8', shape: 'pill' },
  { id: 'mcp', label: 'MCP', color: '#cdb4db', shape: 'hex' },
  { id: 'wordpress', label: 'WordPress', color: '#b8e0d2', shape: 'pill' },
  { id: 'shopify', label: 'Shopify', color: '#95d5b2', shape: 'rounded' },
  { id: 'unity', label: 'Unity / XR', color: '#e8d48f', shape: 'rounded' },
  { id: 'react', label: 'React', color: '#a8dadc', shape: 'pill' },

  // AI / ML
  { id: 'pytorch', label: 'PyTorch', color: '#f4a261', shape: 'pill' },
  { id: 'tensorflow', label: 'TensorFlow', color: '#ffcc80', shape: 'rounded' },
  { id: 'sklearn', label: 'Scikit-learn', color: '#f9e79f', shape: 'pill' },
  { id: 'hf', label: 'Hugging Face', color: '#ffab91', shape: 'pill' },
  { id: 'unsloth', label: 'Unsloth / QLoRa', color: '#f48fb1', shape: 'rounded' },
  { id: 'nlp', label: 'NLP', color: '#ce93d8', shape: 'circle' },
  { id: 'llm', label: 'LLMs', color: '#e1bee7', shape: 'circle' },

  // Backend
  { id: 'spring', label: 'Spring Boot', color: '#a5d6a7', shape: 'pill' },
  { id: 'express', label: 'Express', color: '#80cbc4', shape: 'rounded' },
  { id: 'fastapi', label: 'FastAPI', color: '#8fd4e8', shape: 'diamond' },
  { id: 'flask', label: 'Flask', color: '#81d4fa', shape: 'pill' },

  // Databases
  { id: 'postgres', label: 'PostgreSQL', color: '#80deea', shape: 'pill' },
  { id: 'mongodb', label: 'MongoDB', color: '#a5d6a7', shape: 'hex' },

  // ORM / ODM
  { id: 'prisma', label: 'Prisma', color: '#b39ddb', shape: 'diamond' },
  { id: 'hibernate', label: 'Hibernate', color: '#9fa8da', shape: 'rounded' },

  // Infrastructure
  { id: 'eureka', label: 'Eureka', color: '#90caf9', shape: 'circle' },
  { id: 'kafka', label: 'Kafka', color: '#b39ddb', shape: 'hex' },
  { id: 'aws', label: 'AWS', color: '#ffe082', shape: 'square' },
  { id: 'docker', label: 'Docker', color: '#81d4fa', shape: 'pill' },
  { id: 'cicd', label: 'CI/CD · GitLab', color: '#fcb1b1', shape: 'rounded' },

  // Messaging / Cache
  { id: 'bullmq', label: 'BullMQ', color: '#ffab91', shape: 'pill' },
  { id: 'rabbitmq', label: 'RabbitMQ', color: '#f8bbd0', shape: 'hex' },
  { id: 'redis', label: 'Redis', color: '#ef9a9a', shape: 'diamond' },

  // Tools & Frameworks
  { id: 'spring-sec', label: 'Spring Security', color: '#c5e1a5', shape: 'pill' },
  { id: 'spring-cloud', label: 'Spring Cloud', color: '#b2dfdb', shape: 'rounded' },
  { id: 'jira', label: 'Jira', color: '#90caf9', shape: 'square' },

  // Languages
  { id: 'python', label: 'Python', color: '#ffe082', shape: 'pill' },
  { id: 'java', label: 'Java', color: '#ffcc80', shape: 'circle' },
  { id: 'javascript', label: 'JavaScript', color: '#fff59d', shape: 'rounded' },
  { id: 'csharp', label: 'C#', color: '#b39ddb', shape: 'square' },
  { id: 'cpp', label: 'C++', color: '#90caf9', shape: 'diamond' },
  { id: 'c', label: 'C', color: '#a5d6a7', shape: 'circle' },
  { id: 'asm', label: 'Assembly', color: '#bcaaa4', shape: 'hex' },
];

function createBody(Bodies, shape, x, y, w, h, opts) {
  const r = Math.min(w, h) / 2;
  switch (shape) {
    case 'circle':
      return Bodies.circle(x, y, r, opts);
    case 'hex':
      return Bodies.polygon(x, y, 6, r * 0.95, opts);
    case 'diamond':
      return Bodies.polygon(x, y, 4, r * 0.95, {
        ...opts,
        angle: Math.PI / 4,
      });
    case 'square':
      return Bodies.rectangle(x, y, Math.min(w, h), Math.min(w, h), {
        ...opts,
        chamfer: { radius: 10 },
      });
    case 'rounded':
      return Bodies.rectangle(x, y, w, h, {
        ...opts,
        chamfer: { radius: 14 },
      });
    case 'pill':
    default:
      return Bodies.rectangle(x, y, w, h, {
        ...opts,
        chamfer: { radius: Math.min(h / 2, 28) },
      });
  }
}

function SkillsPlayground({ active = true }) {
  const sceneRef = useRef(null);
  const chipsRef = useRef(null);

  useEffect(() => {
    const scene = sceneRef.current;
    const chipsEl = chipsRef.current;
    if (!scene || !chipsEl) return;

    const { Engine, Bodies, Body, Composite, Query } = Matter;

    const engine = Engine.create({
      gravity: { x: 0, y: 0.55 },
    });
    engine.timing.timeScale = 0.85;

    const wallOpts = {
      isStatic: true,
      friction: 1,
      restitution: 0.05,
    };

    let width = 0;
    let height = 0;
    let bodies = [];
    let chipNodes = [];
    let raf = 0;

    // Custom drag state (more reliable than MouseConstraint w/ CSS transforms)
    let drag = null; // { body, node, ox, oy, lastX, lastY, lastT, vx, vy }
    const pointers = new Map();

    const localPoint = (clientX, clientY) => {
      const rect = scene.getBoundingClientRect();
      return {
        x: clientX - rect.left,
        y: clientY - rect.top,
      };
    };

    const measureChip = (node) => {
      // Measure without transform
      const prev = node.style.transform;
      node.style.transform = 'translate(0,0)';
      const rect = node.getBoundingClientRect();
      node.style.transform = prev;
      return {
        w: Math.max(Math.round(rect.width), 52),
        h: Math.max(Math.round(rect.height), 52),
      };
    };

    const build = () => {
      width = scene.clientWidth;
      height = scene.clientHeight;
      if (width < 40 || height < 40) return;

      Composite.clear(engine.world, false);
      chipNodes = Array.from(chipsEl.querySelectorAll('.skill-chip'));

      const t = 120;
      const walls = [
        Bodies.rectangle(width / 2, height + t / 2 - 2, width + 400, t, wallOpts),
        Bodies.rectangle(width / 2, -t / 2, width + 400, t, wallOpts),
        Bodies.rectangle(-t / 2, height / 2, t, height + 400, wallOpts),
        Bodies.rectangle(width + t / 2, height / 2, t, height + 400, wallOpts),
      ];
      Composite.add(engine.world, walls);

      bodies = chipNodes.map((node, i) => {
        const shape = node.dataset.shape || 'pill';
        const { w, h } = measureChip(node);
        node.style.width = `${w}px`;
        node.style.height = `${h}px`;

        const cols = Math.max(3, Math.floor(width / 160));
        const col = i % cols;
        const row = Math.floor(i / cols);
        const x = (width / (cols + 1)) * (col + 1) + (Math.random() - 0.5) * 30;
        const y = 30 + row * 36 + Math.random() * 20;

        const body = createBody(Bodies, shape, x, y, w, h, {
          restitution: 0.2,
          friction: 0.45,
          frictionAir: 0.045,
          density: 0.0018,
          label: node.dataset.id,
          collisionFilter: { category: 0x0001, mask: 0xffffffff },
        });
        body._chipSize = { w, h };
        return body;
      });

      Composite.add(engine.world, bodies);
      drag = null;
    };

    const sync = () => {
      bodies.forEach((body, i) => {
        const node = chipNodes[i];
        if (!node || !body) return;
        const { w, h } = body._chipSize || {
          w: node.offsetWidth,
          h: node.offsetHeight,
        };
        node.style.transform = `translate3d(${body.position.x - w / 2}px, ${body.position.y - h / 2}px, 0) rotate(${body.angle}rad)`;
      });
    };

    const clampVelocities = () => {
      const max = 12;
      bodies.forEach((body) => {
        if (body.isStatic) return;
        const vx = Math.max(-max, Math.min(max, body.velocity.x));
        const vy = Math.max(-max, Math.min(max, body.velocity.y));
        if (vx !== body.velocity.x || vy !== body.velocity.y) {
          Body.setVelocity(body, { x: vx, y: vy });
        }
        const aw = Math.max(-0.25, Math.min(0.25, body.angularVelocity));
        if (aw !== body.angularVelocity) Body.setAngularVelocity(body, aw);
      });
    };

    const onPointerDown = (e) => {
      if (!active) return;
      if (e.button !== undefined && e.button !== 0) return;

      const { x, y } = localPoint(e.clientX, e.clientY);
      // Prefer hit-testing the chip element under the pointer
      const el = e.target.closest?.('.skill-chip');
      let body = null;
      let node = null;

      if (el) {
        const idx = chipNodes.indexOf(el);
        if (idx >= 0) {
          body = bodies[idx];
          node = el;
        }
      }

      if (!body) {
        const hits = Query.point(bodies, { x, y });
        if (!hits.length) return;
        body = hits[hits.length - 1];
        const idx = bodies.indexOf(body);
        node = chipNodes[idx];
      }

      if (!body || !node) return;

      e.preventDefault();
      e.stopPropagation();
      node.setPointerCapture?.(e.pointerId);

      Body.setVelocity(body, { x: 0, y: 0 });
      Body.setAngularVelocity(body, 0);
      Body.setStatic(body, true);

      drag = {
        body,
        node,
        pointerId: e.pointerId,
        ox: x - body.position.x,
        oy: y - body.position.y,
        lastX: x,
        lastY: y,
        lastT: performance.now(),
        vx: 0,
        vy: 0,
      };
      pointers.set(e.pointerId, drag);
      scene.classList.add('is-dragging');
      node.classList.add('is-held');
    };

    const onPointerMove = (e) => {
      const d = pointers.get(e.pointerId) || (drag?.pointerId === e.pointerId ? drag : null);
      if (!d) return;
      e.preventDefault();

      const { x, y } = localPoint(e.clientX, e.clientY);
      const now = performance.now();
      const dt = Math.max(8, now - d.lastT);
      d.vx = ((x - d.lastX) / dt) * 16.67;
      d.vy = ((y - d.lastY) / dt) * 16.67;
      d.lastX = x;
      d.lastY = y;
      d.lastT = now;

      Body.setPosition(d.body, {
        x: x - d.ox,
        y: y - d.oy,
      });
      Body.setVelocity(d.body, { x: 0, y: 0 });
      Body.setAngularVelocity(d.body, 0);
    };

    const onPointerUp = (e) => {
      const d = pointers.get(e.pointerId) || (drag?.pointerId === e.pointerId ? drag : null);
      if (!d) return;

      Body.setStatic(d.body, false);
      Body.setVelocity(d.body, {
        x: Math.max(-10, Math.min(10, d.vx * 0.55)),
        y: Math.max(-10, Math.min(10, d.vy * 0.55)),
      });

      d.node.classList.remove('is-held');
      d.node.releasePointerCapture?.(e.pointerId);
      pointers.delete(e.pointerId);
      if (drag?.pointerId === e.pointerId) drag = null;
      if (!pointers.size) scene.classList.remove('is-dragging');
    };

    build();

    let last = performance.now();
    const loop = (now) => {
      raf = requestAnimationFrame(loop);
      if (!active) {
        last = now;
        sync();
        return;
      }
      const delta = Math.min(1000 / 30, now - last);
      last = now;
      Engine.update(engine, delta);
      clampVelocities();
      sync();
    };
    raf = requestAnimationFrame(loop);

    scene.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove, { passive: false });
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);

    let resizeTimer = 0;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        build();
        sync();
      }, 120);
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(scene);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(resizeTimer);
      ro.disconnect();
      scene.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', onPointerUp);
      Composite.clear(engine.world, false);
      Engine.clear(engine);
    };
  }, [active]);

  return (
    <div className="skills-playground" ref={sceneRef}>
      <p className="skills-label">My skills — drag them around</p>
      <div className="skills-chips" ref={chipsRef}>
        {SKILLS.map((skill) => (
          <div
            key={skill.id}
            className={`skill-chip skill-chip--${skill.shape}`}
            data-id={skill.id}
            data-shape={skill.shape}
            style={{ backgroundColor: skill.color }}
          >
            <span>{skill.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsPlayground;
