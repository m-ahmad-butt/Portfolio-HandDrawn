import { useEffect, useMemo, useRef, useState } from 'react';
import Matter from 'matter-js';
import './SkillsPlayground.css';

const publicUrl = (file) =>
  `${import.meta.env.BASE_URL}${String(file).replace(/^\//, '')}`;
const AVATAR_TALK = publicUrl('avatar.png');
const AVATAR_IDLE = publicUrl('avatar-about.png');

const CATEGORIES = [
  { id: 'xr', label: 'XR', color: '#e8d48f' },
  { id: 'ai', label: 'AI / ML', color: '#f2a0b8' },
  { id: 'web', label: 'Web', color: '#9fd4a8' },
  { id: 'devops', label: 'DevOps', color: '#81d4fa' },
  { id: 'data', label: 'Data', color: '#80deea' },
  { id: 'embedded', label: 'Embedded', color: '#c5e1a5' },
  { id: 'tools', label: 'Tools', color: '#cdb4db' },
];

const CAT_LABEL = Object.fromEntries(CATEGORIES.map((c) => [c.id, c.label]));

const SKILLS = [
  {
    id: 'agentic',
    label: 'Agentic AI',
    color: '#f2a0b8',
    shape: 'pill',
    category: 'ai',
    role: 'Autonomous AI',
    blurb: 'Agentic AI is systems that plan, call tools, and act on their own. Model behavior — not a webpage.',
  },
  {
    id: 'mcp',
    label: 'MCP',
    color: '#cdb4db',
    shape: 'hex',
    category: 'ai',
    role: 'Model protocol',
    blurb: 'MCP is the Model Context Protocol — the USB-C of LLMs. It lets models talk to tools and data.',
  },
  {
    id: 'wordpress',
    label: 'WordPress',
    color: '#b8e0d2',
    shape: 'pill',
    category: 'web',
    role: 'CMS',
    blurb: 'WordPress is a content-management system for sites and blogs. Classic Web.',
  },
  {
    id: 'shopify',
    label: 'Shopify',
    color: '#95d5b2',
    shape: 'rounded',
    category: 'web',
    role: 'E-commerce',
    blurb: "Shopify is an e-commerce platform for online stores. That's Web, not infrastructure.",
  },
  {
    id: 'unity',
    label: 'Unity / XR',
    color: '#e8d48f',
    shape: 'rounded',
    category: 'xr',
    role: 'Game engine',
    blurb: 'Unity is a game engine for 3D, AR, and VR worlds. Scenes, cameras, headsets — not HTML.',
  },
  {
    id: 'react',
    label: 'React',
    color: '#a8dadc',
    shape: 'pill',
    category: 'web',
    role: 'UI library',
    blurb: "React is a JavaScript library for building user interfaces in the browser. That's Web.",
  },
  {
    id: 'pytorch',
    label: 'PyTorch',
    color: '#f4a261',
    shape: 'pill',
    category: 'ai',
    role: 'ML framework',
    blurb: 'PyTorch is a deep-learning framework. Tensors and neural nets live in AI / ML.',
  },
  {
    id: 'tensorflow',
    label: 'TensorFlow',
    color: '#ffcc80',
    shape: 'rounded',
    category: 'ai',
    role: 'ML framework',
    blurb: "TensorFlow is Google's machine-learning framework. Training models, not serving pages.",
  },
  {
    id: 'sklearn',
    label: 'Scikit-learn',
    color: '#f9e79f',
    shape: 'pill',
    category: 'ai',
    role: 'ML library',
    blurb: 'Scikit-learn is classic machine learning — classifiers, regressors, clustering. AI / ML.',
  },
  {
    id: 'hf',
    label: 'Hugging Face',
    color: '#ffab91',
    shape: 'pill',
    category: 'ai',
    role: 'Model hub',
    blurb: 'Hugging Face is the hub for pretrained models and NLP tooling. Straight AI / ML.',
  },
  {
    id: 'unsloth',
    label: 'Unsloth / QLoRa',
    color: '#f48fb1',
    shape: 'rounded',
    category: 'ai',
    role: 'Fine-tuning',
    blurb: 'Unsloth and QLoRa are for fine-tuning large language models on a smaller GPU. AI / ML.',
  },
  {
    id: 'nlp',
    label: 'NLP',
    color: '#ce93d8',
    shape: 'circle',
    category: 'ai',
    role: 'Language AI',
    blurb: 'NLP is Natural Language Processing — teaching machines to read, parse, and write text.',
  },
  {
    id: 'llm',
    label: 'LLMs',
    color: '#e1bee7',
    shape: 'circle',
    category: 'ai',
    role: 'Language models',
    blurb: "LLMs are large language models. They're the brains of modern AI - not a web framework.",
  },
  {
    id: 'spring',
    label: 'Spring Boot',
    color: '#a5d6a7',
    shape: 'pill',
    category: 'web',
    role: 'Backend framework',
    blurb: "Spring Boot is a Java framework for building backend APIs. That's the Web stack.",
  },
  {
    id: 'express',
    label: 'Express',
    color: '#80cbc4',
    shape: 'rounded',
    category: 'web',
    role: 'Node server',
    blurb: 'Express is a Node.js HTTP server. Routes and middleware — Web.',
  },
  {
    id: 'fastapi',
    label: 'FastAPI',
    color: '#8fd4e8',
    shape: 'diamond',
    category: 'web',
    role: 'Python API',
    blurb: 'FastAPI is a Python framework for fast HTTP APIs. Web, even when it serves a model.',
  },
  {
    id: 'flask',
    label: 'Flask',
    color: '#81d4fa',
    shape: 'pill',
    category: 'web',
    role: 'Python web',
    blurb: 'Flask is a lightweight Python web framework. Endpoints and templates — Web.',
  },
  {
    id: 'postgres',
    label: 'PostgreSQL',
    color: '#80deea',
    shape: 'pill',
    category: 'data',
    role: 'Relational DB',
    blurb: "PostgreSQL is a relational database. Tables, SQL, indexes - that's Data.",
  },
  {
    id: 'mongodb',
    label: 'MongoDB',
    color: '#a5d6a7',
    shape: 'hex',
    category: 'data',
    role: 'Document DB',
    blurb: 'MongoDB is a document database. JSON-like collections live in Data, not DevOps.',
  },
  {
    id: 'prisma',
    label: 'Prisma',
    color: '#b39ddb',
    shape: 'diamond',
    category: 'data',
    role: 'ORM',
    blurb: 'Prisma is an ORM — it maps TypeScript to a database schema. Data layer, not UI.',
  },
  {
    id: 'hibernate',
    label: 'Hibernate',
    color: '#9fa8da',
    shape: 'rounded',
    category: 'data',
    role: 'Java ORM',
    blurb: "Hibernate is a Java ORM. It talks to databases so your services don't write raw SQL.",
  },
  {
    id: 'eureka',
    label: 'Eureka',
    color: '#90caf9',
    shape: 'circle',
    category: 'devops',
    role: 'Service discovery',
    blurb: 'Eureka is Netflix service discovery. Microservices find each other here — DevOps.',
  },
  {
    id: 'kafka',
    label: 'Kafka',
    color: '#b39ddb',
    shape: 'hex',
    category: 'devops',
    role: 'Event streaming',
    blurb: 'Kafka is an event-streaming backbone. Topics, consumers, pipelines — DevOps.',
  },
  {
    id: 'aws',
    label: 'AWS',
    color: '#ffe082',
    shape: 'square',
    category: 'devops',
    role: 'Cloud',
    blurb: 'AWS is cloud infrastructure. Servers, buckets, and networks — DevOps.',
  },
  {
    id: 'docker',
    label: 'Docker',
    color: '#81d4fa',
    shape: 'pill',
    category: 'devops',
    role: 'Containers',
    blurb: "Docker packages an app and its deps into a container. That's DevOps.",
  },
  {
    id: 'cicd',
    label: 'CI/CD · GitLab',
    color: '#fcb1b1',
    shape: 'rounded',
    category: 'devops',
    role: 'Pipelines',
    blurb: 'CI/CD on GitLab is automated build, test, and deploy. Pipeline work — DevOps.',
  },
  {
    id: 'bullmq',
    label: 'BullMQ',
    color: '#ffab91',
    shape: 'pill',
    category: 'devops',
    role: 'Job queue',
    blurb: 'BullMQ is a Redis-backed job queue for background work. Infra, so DevOps.',
  },
  {
    id: 'rabbitmq',
    label: 'RabbitMQ',
    color: '#f8bbd0',
    shape: 'hex',
    category: 'devops',
    role: 'Message broker',
    blurb: 'RabbitMQ is a message broker. Services pass work through queues — DevOps.',
  },
  {
    id: 'redis',
    label: 'Redis',
    color: '#ef9a9a',
    shape: 'diamond',
    category: 'data',
    role: 'In-memory store',
    blurb: "Redis is an in-memory data store - cache, keys, sessions. That's Data.",
  },
  {
    id: 'spring-sec',
    label: 'Spring Security',
    color: '#c5e1a5',
    shape: 'pill',
    category: 'web',
    role: 'Auth framework',
    blurb: 'Spring Security handles login, roles, and access control on Java APIs. Web.',
  },
  {
    id: 'spring-cloud',
    label: 'Spring Cloud',
    color: '#b2dfdb',
    shape: 'rounded',
    category: 'devops',
    role: 'Microservices',
    blurb: 'Spring Cloud is the toolkit for distributed Java services — config, discovery, gateways. DevOps.',
  },
  {
    id: 'jira',
    label: 'Jira',
    color: '#90caf9',
    shape: 'square',
    category: 'tools',
    role: 'Project tracker',
    blurb: 'Jira is project tracking. Tickets and sprints — a Tool, not a runtime.',
  },
  {
    id: 'python',
    label: 'Python',
    color: '#ffe082',
    shape: 'pill',
    category: 'ai',
    role: 'AI language',
    blurb: 'Python is the language I use for models and NLP. In this stack it sits with AI / ML.',
  },
  {
    id: 'java',
    label: 'Java',
    color: '#ffcc80',
    shape: 'circle',
    category: 'web',
    role: 'Backend language',
    blurb: "Java powers the Spring stack here - APIs and services. That's Web.",
  },
  {
    id: 'javascript',
    label: 'JavaScript',
    color: '#fff59d',
    shape: 'rounded',
    category: 'web',
    role: 'Web language',
    blurb: 'JavaScript is the language of the browser. Frontends and Node — Web.',
  },
  {
    id: 'csharp',
    label: 'C#',
    color: '#b39ddb',
    shape: 'square',
    category: 'xr',
    role: 'Unity language',
    blurb: "C# is Unity's language. Same family as the game engine, so it lives in XR.",
  },
  {
    id: 'cpp',
    label: 'C++',
    color: '#90caf9',
    shape: 'diamond',
    category: 'embedded',
    role: 'Systems language',
    blurb: "C++ is a systems language - performance, hardware, engines. That's Embedded, not a ticket tool.",
  },
  {
    id: 'c',
    label: 'C',
    color: '#a5d6a7',
    shape: 'circle',
    category: 'embedded',
    role: 'Embedded language',
    blurb: 'C is the language of embedded systems and kernels. Close to the metal — Embedded.',
  },
  {
    id: 'asm',
    label: 'Assembly',
    color: '#bcaaa4',
    shape: 'hex',
    category: 'embedded',
    role: 'Machine language',
    blurb: 'Assembly talks to the CPU directly. Firmware and low-level work — Embedded.',
  },
];

const SKILL_MAP = Object.fromEntries(SKILLS.map((s) => [s.id, s]));
const CATEGORY_TOTALS = Object.fromEntries(
  CATEGORIES.map((cat) => [
    cat.id,
    SKILLS.filter((s) => s.category === cat.id).length,
  ])
);

function createBody(Bodies, shape, x, y, w, h, opts, lite) {
  const r = Math.min(w, h) / 2;
  if (lite) {
    if (shape === 'circle') return Bodies.circle(x, y, r, opts);
    return Bodies.rectangle(x, y, w, h, opts);
  }
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

function SkillsPlayground({ active = true, lite = false }) {
  const sceneRef = useRef(null);
  const chipsRef = useRef(null);
  const binsRef = useRef(null);
  const dropRef = useRef(() => false);
  const hoverRef = useRef(() => {});
  const placedIdsRef = useRef(new Set());
  const comboRef = useRef(0);
  const popTimer = useRef(0);
  const guideTimer = useRef(0);
  const activeRef = useRef(active);
  const controlRef = useRef({ start() {}, stop() {} });
  activeRef.current = active;

  const [score, setScore] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [combo, setCombo] = useState(0);
  const [placed, setPlaced] = useState(() => new Set());
  const [hotBin, setHotBin] = useState(null);
  const [rejectBin, setRejectBin] = useState(null);
  const [pop, setPop] = useState(null);
  const [done, setDone] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const [guide, setGuide] = useState(null);
  const [typed, setTyped] = useState('');
  const [mouthOpen, setMouthOpen] = useState(false);

  const counts = useMemo(() => {
    const next = Object.fromEntries(CATEGORIES.map((cat) => [cat.id, 0]));
    placed.forEach((id) => {
      const skill = SKILL_MAP[id];
      if (skill) next[skill.category] += 1;
    });
    return next;
  }, [placed]);

  const attempts = correct + wrong;
  const accuracy = attempts ? Math.round((correct / attempts) * 100) : 0;

  const showPop = (x, y, text, kind) => {
    const scene = sceneRef.current;
    if (!scene) return;
    const rect = scene.getBoundingClientRect();
    setPop({
      x: x - rect.left,
      y: y - rect.top,
      text,
      kind,
      key: Date.now(),
    });
    clearTimeout(popTimer.current);
    popTimer.current = window.setTimeout(() => setPop(null), 780);
  };

  dropRef.current = (skillId, categoryId, clientX, clientY) => {
    const skill = SKILL_MAP[skillId];
    if (!skill || placedIdsRef.current.has(skillId)) return false;

    if (skill.category === categoryId) {
      const earned = 10 + Math.min(comboRef.current, 6) * 5;
      comboRef.current += 1;
      placedIdsRef.current.add(skillId);
      setCombo(comboRef.current);
      setScore((s) => s + earned);
      setCorrect((n) => n + 1);
      setPlaced((prev) => {
        const next = new Set(prev);
        next.add(skillId);
        if (next.size === SKILLS.length) setDone(true);
        return next;
      });
      showPop(clientX, clientY, `+${earned}`, 'good');
      return true;
    }

    comboRef.current = 0;
    setCombo(0);
    setWrong((n) => n + 1);
    setRejectBin(categoryId);
    window.setTimeout(() => setRejectBin(null), 420);
    showPop(clientX, clientY, 'Nope', 'bad');
    setGuide({
      key: Date.now(),
      skill: skill.label,
      role: skill.role,
      blurb: skill.blurb,
      droppedIn: CAT_LABEL[categoryId] || categoryId,
      target: CAT_LABEL[skill.category],
    });
    return false;
  };

  hoverRef.current = (categoryId) => {
    setHotBin((prev) => (prev === categoryId ? prev : categoryId));
  };

  useEffect(() => () => {
    clearTimeout(popTimer.current);
    clearTimeout(guideTimer.current);
  }, []);

  useEffect(() => {
    if (!guide) {
      setTyped('');
      setMouthOpen(false);
      return undefined;
    }

    const full = guide.blurb;
    let i = 0;
    setTyped('');
    setMouthOpen(true);

    const tick = window.setInterval(() => {
      i += 1;
      setTyped(full.slice(0, i));
      setMouthOpen(i % 2 === 0);
      if (i >= full.length) {
        window.clearInterval(tick);
        setMouthOpen(false);
      }
    }, 18);

    clearTimeout(guideTimer.current);
    guideTimer.current = window.setTimeout(() => setGuide(null), 7200);

    return () => {
      window.clearInterval(tick);
      clearTimeout(guideTimer.current);
    };
  }, [guide]);

  useEffect(() => {
    const scene = sceneRef.current;
    const chipsEl = chipsRef.current;
    if (!scene || !chipsEl) return;

    const { Engine, Bodies, Body, Composite, Query, Sleeping } = Matter;

    const engine = Engine.create({
      gravity: { x: 0, y: lite ? 0.06 : 0.55 },
      enableSleeping: true,
      positionIterations: lite ? 3 : 6,
      velocityIterations: lite ? 2 : 4,
    });
    engine.timing.timeScale = lite ? 0.72 : 0.85;

    const wallOpts = {
      isStatic: true,
      friction: 1,
      restitution: 0.05,
    };

    let width = 0;
    let height = 0;
    let floorY = 0;
    let bodies = [];
    let chipNodes = [];
    let raf = 0;
    let looping = false;
    let visible = true;
    let last = performance.now();
    let acc = 0;

    let drag = null;
    const pointers = new Map();
    const frameMs = lite ? 1000 / 30 : 0;

    const localPoint = (clientX, clientY) => {
      const rect = scene.getBoundingClientRect();
      return {
        x: clientX - rect.left,
        y: clientY - rect.top,
      };
    };

    const hitBin = (clientX, clientY) => {
      const root = binsRef.current;
      if (!root) return null;
      const bins = root.querySelectorAll('.skill-bin');
      for (const bin of bins) {
        const r = bin.getBoundingClientRect();
        if (
          clientX >= r.left &&
          clientX <= r.right &&
          clientY >= r.top &&
          clientY <= r.bottom
        ) {
          return bin.dataset.category;
        }
      }
      return null;
    };

    const measureChip = (node) => {
      const prev = node.style.transform;
      node.style.transform = 'translate(0,0)';
      const rect = node.getBoundingClientRect();
      node.style.transform = prev;
      const minSize = scene.clientWidth <= 640 ? 32 : 52;
      return {
        w: Math.max(Math.round(rect.width), minSize),
        h: Math.max(Math.round(rect.height), minSize),
      };
    };

    const settled = () =>
      !drag &&
      bodies.every((body) => body.isSleeping || body.isStatic);

    const stopLoop = () => {
      looping = false;
      if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    };

    const loop = (now) => {
      raf = 0;
      if (!looping || !activeRef.current || !visible) {
        looping = false;
        return;
      }

      const delta = Math.min(1000 / 30, now - last);
      last = now;
      if (lite) {
        acc += delta;
        if (acc < frameMs) {
          raf = requestAnimationFrame(loop);
          return;
        }
        Engine.update(engine, frameMs);
        acc -= frameMs;
      } else {
        Engine.update(engine, delta);
      }

      clampVelocities();
      sync();

      if (lite && settled()) {
        looping = false;
        return;
      }

      raf = requestAnimationFrame(loop);
    };

    const startLoop = () => {
      if (looping || !activeRef.current || !visible) return;
      looping = true;
      last = performance.now();
      acc = 0;
      raf = requestAnimationFrame(loop);
    };

    controlRef.current = { start: startLoop, stop: stopLoop };

    const build = () => {
      width = scene.clientWidth;
      height = scene.clientHeight;
      if (width < 40 || height < 40) return;

      const binsH = binsRef.current?.offsetHeight || 72;
      const hudH = 62;
      floorY = Math.max(120, height - binsH - 10);

      Composite.clear(engine.world, false);
      chipNodes = Array.from(chipsEl.querySelectorAll('.skill-chip')).filter(
        (node) => !placedIdsRef.current.has(node.dataset.id)
      );

      const t = 120;
      const walls = [
        Bodies.rectangle(width / 2, floorY + t / 2, width + 400, t, wallOpts),
        Bodies.rectangle(width / 2, hudH - t / 2, width + 400, t, wallOpts),
        Bodies.rectangle(-t / 2, height / 2, t, height + 400, wallOpts),
        Bodies.rectangle(width + t / 2, height / 2, t, height + 400, wallOpts),
      ];
      Composite.add(engine.world, walls);

      const playTop = hudH + 28;
      const playBottom = Math.max(playTop + 80, floorY - 16);
      const cols = lite
        ? Math.max(3, Math.min(4, Math.floor(width / 86)))
        : Math.max(3, Math.floor(width / 160));
      const rows = Math.max(1, Math.ceil(chipNodes.length / cols));
      const colW = width / cols;
      const rowH = (playBottom - playTop) / rows;

      bodies = chipNodes.map((node, i) => {
        const shape = node.dataset.shape || 'pill';
        const { w, h } = measureChip(node);
        node.style.width = `${w}px`;
        node.style.height = `${h}px`;

        const col = i % cols;
        const row = Math.floor(i / cols);
        let x;
        let y;
        if (lite) {
          const stagger = (row % 2) * (colW * 0.28);
          x = colW * (col + 0.5) + stagger + (Math.random() - 0.5) * 12;
          x = Math.max(w / 2 + 8, Math.min(width - w / 2 - 8, x));
          y =
            playTop +
            rowH * (row + 0.5) +
            (Math.random() - 0.5) * Math.min(14, rowH * 0.3);
        } else {
          x = (width / (cols + 1)) * (col + 1) + (Math.random() - 0.5) * 30;
          y = 36 + row * 34 + Math.random() * 18;
        }

        const opts = {
          restitution: 0.2,
          friction: 0.45,
          frictionAir: lite ? 0.16 : 0.045,
          density: 0.0018,
          sleepThreshold: lite ? 30 : 60,
          label: node.dataset.id,
          collisionFilter: { category: 0x0001, mask: 0xffffffff },
        };
        if (lite) opts.inertia = Infinity;

        const body = createBody(Bodies, shape, x, y, w, h, opts, lite);
        body._chipSize = { w, h };
        return body;
      });

      Composite.add(engine.world, bodies);
      drag = null;
    };

    const sync = () => {
      bodies.forEach((body, i) => {
        const node = chipNodes[i];
        if (!node || !body || node.classList.contains('is-scored')) return;
        const { w, h } = body._chipSize || {
          w: node.offsetWidth,
          h: node.offsetHeight,
        };
        const angle = lite ? 0 : body.angle;
        node.style.transform = `translate3d(${body.position.x - w / 2}px, ${body.position.y - h / 2}px, 0) rotate(${angle}rad)`;
      });
    };

    const clampVelocities = () => {
      const max = lite ? 8 : 12;
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

    const clampInside = (body) => {
      const { w, h } = body._chipSize || { w: 64, h: 48 };
      Body.setPosition(body, {
        x: Math.max(w / 2 + 8, Math.min(width - w / 2 - 8, body.position.x)),
        y: Math.max(70 + h / 2, Math.min(floorY - h / 2 - 6, body.position.y)),
      });
    };

    const removeChip = (body, node) => {
      const idx = bodies.indexOf(body);
      node.classList.add('is-scored');
      if (idx >= 0) {
        Composite.remove(engine.world, body);
        bodies.splice(idx, 1);
        chipNodes.splice(idx, 1);
      }
    };

    const onPointerDown = (e) => {
      if (!activeRef.current) return;
      if (e.button !== undefined && e.button !== 0) return;
      if (e.target.closest?.('.skill-bin, .skills-hud, .skills-again, .skill-guide')) return;

      const { x, y } = localPoint(e.clientX, e.clientY);
      const el = e.target.closest?.('.skill-chip');
      let body = null;
      let node = null;

      if (el && !el.classList.contains('is-scored')) {
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

      if (!body || !node || node.classList.contains('is-scored')) return;

      e.preventDefault();
      e.stopPropagation();
      node.setPointerCapture?.(e.pointerId);
      if (Sleeping) Sleeping.set(body, false);

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
      startLoop();
    };

    const onPointerMove = (e) => {
      const d =
        pointers.get(e.pointerId) ||
        (drag?.pointerId === e.pointerId ? drag : null);
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
      hoverRef.current(hitBin(e.clientX, e.clientY));
      if (lite) sync();
    };

    const onPointerUp = (e) => {
      const d =
        pointers.get(e.pointerId) ||
        (drag?.pointerId === e.pointerId ? drag : null);
      if (!d) return;

      const bin = hitBin(e.clientX, e.clientY);
      hoverRef.current(null);

      if (bin) {
        const ok = dropRef.current(
          d.body.label,
          bin,
          e.clientX,
          e.clientY
        );
        if (ok) {
          d.node.classList.remove('is-held');
          d.node.releasePointerCapture?.(e.pointerId);
          pointers.delete(e.pointerId);
          if (drag?.pointerId === e.pointerId) drag = null;
          if (!pointers.size) scene.classList.remove('is-dragging');
          removeChip(d.body, d.node);
          startLoop();
          return;
        }

        d.node.classList.add('is-wrong');
        window.setTimeout(() => d.node.classList.remove('is-wrong'), 420);
        clampInside(d.body);
        Body.setStatic(d.body, false);
        Body.setVelocity(d.body, { x: (Math.random() - 0.5) * 6, y: -7 });
      } else {
        clampInside(d.body);
        Body.setStatic(d.body, false);
        Body.setVelocity(d.body, {
          x: Math.max(-10, Math.min(10, d.vx * 0.55)),
          y: Math.max(-10, Math.min(10, d.vy * 0.55)),
        });
      }

      d.node.classList.remove('is-held');
      d.node.releasePointerCapture?.(e.pointerId);
      pointers.delete(e.pointerId);
      if (drag?.pointerId === e.pointerId) drag = null;
      if (!pointers.size) scene.classList.remove('is-dragging');
      startLoop();
    };

    build();
    sync();

    scene.addEventListener('pointerdown', onPointerDown);
    scene.addEventListener('pointermove', onPointerMove, { passive: false });
    scene.addEventListener('pointerup', onPointerUp);
    scene.addEventListener('pointercancel', onPointerUp);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);

    let resizeTimer = 0;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        build();
        sync();
        startLoop();
      }, 120);
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(scene);

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting && entry.intersectionRatio > 0.15;
        if (visible) startLoop();
        else stopLoop();
      },
      { threshold: [0, 0.15, 0.5] }
    );
    io.observe(scene);

    if (activeRef.current) startLoop();

    return () => {
      stopLoop();
      clearTimeout(resizeTimer);
      ro.disconnect();
      io.disconnect();
      scene.removeEventListener('pointerdown', onPointerDown);
      scene.removeEventListener('pointermove', onPointerMove);
      scene.removeEventListener('pointerup', onPointerUp);
      scene.removeEventListener('pointercancel', onPointerUp);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', onPointerUp);
      Composite.clear(engine.world, false);
      Engine.clear(engine);
      controlRef.current = { start() {}, stop() {} };
    };
  }, [lite, resetKey]);

  useEffect(() => {
    if (active) controlRef.current.start();
    else controlRef.current.stop();
  }, [active]);

  const playAgain = () => {
    placedIdsRef.current = new Set();
    comboRef.current = 0;
    setPlaced(new Set());
    setScore(0);
    setCorrect(0);
    setWrong(0);
    setCombo(0);
    setDone(false);
    setHotBin(null);
    setPop(null);
    setGuide(null);
    setResetKey((k) => k + 1);
  };

  const left = SKILLS.length - placed.size;

  return (
    <div
      className={`skills-playground${lite ? ' is-lite' : ''}`}
      ref={sceneRef}
    >
      <div className="skills-hud">
        <div className="skills-hud-copy">
          <p className="skills-label">Sort my stack</p>
          <p className="skills-hint">
            Drop each skill into its category · {left} left
          </p>
        </div>
        <div className="skills-score" aria-live="polite">
          <span className="skills-score-main">{score}</span>
          <span className="skills-score-meta">
            <span className="is-good">{correct} right</span>
            <span className="is-bad">{wrong} wrong</span>
            {combo >= 2 ? <span className="is-combo">x{combo}</span> : null}
          </span>
        </div>
      </div>

      <div className="skills-chips" ref={chipsRef}>
        {SKILLS.map((skill) => (
          <div
            key={`${skill.id}-${resetKey}`}
            className={`skill-chip skill-chip--${skill.shape}${
              placed.has(skill.id) ? ' is-scored' : ''
            }`}
            data-id={skill.id}
            data-shape={skill.shape}
            data-category={skill.category}
            style={{ backgroundColor: skill.color }}
          >
            <span>{skill.label}</span>
          </div>
        ))}
      </div>

      <div className="skill-bins" ref={binsRef}>
        {CATEGORIES.map((cat) => {
          const got = counts[cat.id];
          const total = CATEGORY_TOTALS[cat.id];
          const full = got === total;
          return (
            <div
              key={cat.id}
              className={`skill-bin${hotBin === cat.id ? ' is-hot' : ''}${
                rejectBin === cat.id ? ' is-reject' : ''
              }${full ? ' is-full' : ''}`}
              data-category={cat.id}
              style={{ '--bin-color': cat.color }}
            >
              <span className="skill-bin-label">{cat.label}</span>
              <span className="skill-bin-count">
                {got}/{total}
              </span>
            </div>
          );
        })}
      </div>

      {pop ? (
        <span
          key={pop.key}
          className={`skill-pop skill-pop--${pop.kind}`}
          style={{ left: pop.x, top: pop.y }}
        >
          {pop.text}
        </span>
      ) : null}

      {guide ? (
        <div className="skill-guide" key={guide.key} role="status" aria-live="polite">
          <div className="skill-guide-face">
            <div className={`skill-guide-portrait${mouthOpen ? ' is-talking' : ''}`}>
              <img
                src={mouthOpen ? AVATAR_TALK : AVATAR_IDLE}
                alt="Local"
                draggable={false}
                onError={(e) => {
                  if (e.currentTarget.src !== AVATAR_TALK) {
                    e.currentTarget.src = AVATAR_TALK;
                  }
                }}
              />
            </div>
            <span className="skill-guide-name">Local</span>
          </div>
          <div className="skill-guide-bubble">
            <p className="skill-guide-title">
              {guide.skill} isn't {guide.droppedIn}.
              <span>{guide.role}</span>
            </p>
            <p className="skill-guide-body">
              {typed}
              {typed.length < guide.blurb.length ? (
                <span className="skill-guide-caret" aria-hidden="true" />
              ) : null}
            </p>
            <p className="skill-guide-hint">
              Park it in <em>{guide.target}</em>
            </p>
            <button
              type="button"
              className="skill-guide-ok"
              onClick={() => setGuide(null)}
            >
              Got it
            </button>
          </div>
        </div>
      ) : null}

      {done ? (
        <div className="skills-complete">
          <p className="skills-complete-kicker">All sorted</p>
          <p className="skills-complete-title">You know the stack.</p>
          <p className="skills-complete-stats">
            {score} pts · {accuracy}% accuracy · {wrong} miss
            {wrong === 1 ? '' : 'es'}
          </p>
          <button type="button" className="skills-again" onClick={playAgain}>
            Play again
          </button>
        </div>
      ) : null}

    </div>
  );
}

export default SkillsPlayground;
