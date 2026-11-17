const TYPEWRITER_WORDS = [
  'WEBSITES',
  'BRANDS',
  'INTERFACES',
  'IDEAS',
  'EXPERIENCES',
];

const NARRATIVE_PHASES = [
  {
    phase: 'PHASE 01 / PLANNING',
    tag: 'ORIGIN',
    title: 'Defining the Point',
    highlight: 'MS Paint -> Digital Systems',
    body: 'It started since childhood. I always struggled with hand drawn art. I still do, but at the same time, I was weirdly fascinated by computers. I started out on Paint, tracing lines and calling it designs. Later on, the reference image became my imagination, and paint developed into many tools.',
  },
  {
    phase: 'PHASE 02 / LOGIC',
    tag: 'STRUCTURE',
    title: 'Logic Building',
    highlight: "VIT Chennai · Vibrance '25 · The White Helmets",
    body: 'VIT Chennai provided the logic. I spent hours working for clubs, making designs for them, curating their t-shirts and event posters. Worked on the core design team for Vibrance 2025 — the annual cultural fest of VIT — and led the design team of The White Helmets, a social club aimed at raising awareness. Eventually I dropped out tho :)',
  },
  {
    phase: 'PHASE 03 / CONNECTION',
    tag: 'COMMERCE',
    title: 'Connecting the Dots',
    highlight: '100+ Pieces Sold · 2023 Side Hustle',
    body: 'In 2023, I decided to monetize my skills. I started a small t-shirt business, designing and selling shirts on Instagram. The idea was to create t-shirts that would express — designs that would resonate. I eventually sold more than 100 pieces both online and offline. It was a crash course in entrepreneurship: branding, marketing, customer service, and the value of my work.',
  },
  {
    phase: 'PHASE 04 / OUTPUT',
    tag: 'CONVICTION',
    title: 'Final Output',
    highlight: 'Design as a Lifelong Craft',
    body: 'It took me a bit long, but I finally realized that designing was something I wanted to do for the rest of my life. Not just a hobby or a side hustle, but a passion. I wanted to create things that make people feel something — things that inspire, challenge, provoke, and are remembered.',
  },
];

const SKILLS = [
  {
    name: 'Visual Identity',
    percentage: 95,
    level: 'Professional',
    category: 'CORE EXPERTISE',
    detail: 'Brand systems, typography hierarchies, and monochrome art direction.',
  },
  {
    name: 'Digital Products',
    percentage: 90,
    level: 'Professional',
    category: 'CORE EXPERTISE',
    detail: 'End-to-end web apps, interactive dashboards, and component architecture.',
  },
  {
    name: 'Structural Logic',
    percentage: 88,
    level: 'Professional',
    category: 'CORE EXPERTISE',
    detail: 'Grid systems, information architecture, and design-to-code translation.',
  },
  {
    name: 'User Experience',
    percentage: 90,
    level: 'Intermediate',
    category: 'CORE EXPERTISE',
    detail: 'User flows, micro-interactions, and responsive usability across viewports.',
  },
  {
    name: 'Brutalist Art',
    percentage: 75,
    level: 'Intermediate',
    category: 'CORE EXPERTISE',
    detail: 'Raw editorial layouts, kinetic type experiments, and high-contrast posters.',
  },
  {
    name: 'Figma',
    percentage: 100,
    level: 'Professional',
    category: 'SOFTWARE STACK',
    detail: 'Design systems, auto-layout, interactive prototyping, and design tokens.',
  },
  {
    name: 'Canva',
    percentage: 99,
    level: 'Professional',
    category: 'SOFTWARE STACK',
    detail: 'Rapid campaign collateral, social systems, and brand templates.',
  },
  {
    name: 'Photoshop',
    percentage: 92,
    level: 'Professional',
    category: 'SOFTWARE STACK',
    detail: 'Apparel mockups, texture compositing, and poster manipulation.',
  },
  {
    name: 'After Effects',
    percentage: 72,
    level: 'Intermediate',
    category: 'SOFTWARE STACK',
    detail: 'Kinetic typography, UI motion studies, and visual transitions.',
  },
  {
    name: 'React / Vite',
    percentage: 65,
    level: 'Intermediate',
    category: 'SOFTWARE STACK',
    detail: 'Component-driven front-end engineering with TypeScript & Tailwind CSS.',
  },
];

const PROJECTS = [
  {
    id: 'luma',
    index: '01',
    title: 'LUMA | Productivity OS',
    subtitle: 'Interactive Workspace & Planner Architecture',
    category: 'WEB',
    year: '2025',
    role: 'Product Designer & Front-End Engineer',
    description:
      'A high-performance productivity planner OS featuring complex drag-and-drop workspace layouts, custom design systems, and responsive front-end engineering.',
    deliverables: ['React & TypeScript', 'Drag & Drop Engine', 'Custom Design System', 'Responsive UI'],
    liveUrl: 'https://lumaplanner.vercel.app/',
    visualStyle: 'luma',
  },
  {
    id: 'esnce',
    index: '02',
    title: 'ESNCE Perfumery Journal',
    subtitle: 'Co-Founded Fragrance Catalog & Editorial Platform',
    category: 'WEB',
    year: '2025',
    role: 'Co-Founder & Lead Designer',
    description:
      'Co-founded premium fragrance catalog journaling platform. Engineered complete interactive component interfaces, custom design tokens, and fluid layout navigation.',
    deliverables: ['Brand Identity', 'Design Tokens', 'Component Library', 'Front-End Build'],
    liveUrl: 'https://esnce-fragrance-journal.vercel.app/',
    visualStyle: 'esnce',
  },
];

// 1. Theme Toggle
const htmlEl = document.documentElement;
const themeBtn = document.getElementById('theme-toggle');
const iconSun = document.getElementById('icon-sun');
const iconMoon = document.getElementById('icon-moon');

function applyTheme(isDark) {
  if (isDark) {
    htmlEl.classList.add('dark');
    iconSun.classList.remove('hidden');
    iconMoon.classList.add('hidden');
    themeBtn.setAttribute('aria-label', 'Switch to light mode');
    localStorage.setItem('theme', 'dark');
  } else {
    htmlEl.classList.remove('dark');
    iconSun.classList.add('hidden');
    iconMoon.classList.remove('hidden');
    themeBtn.setAttribute('aria-label', 'Switch to dark mode');
    localStorage.setItem('theme', 'light');
  }
}

const savedTheme = localStorage.getItem('theme');
applyTheme(savedTheme ? savedTheme === 'dark' : true);

themeBtn.addEventListener('click', () => {
  applyTheme(!htmlEl.classList.contains('dark'));
});

// 2. Mobile Hamburger Drawer
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileDrawer = document.getElementById('mobile-drawer');
const iconMenu = document.getElementById('icon-menu');
const iconClose = document.getElementById('icon-close');

function setMobileMenu(open) {
  mobileDrawer.classList.toggle('hidden', !open);
  mobileDrawer.setAttribute('aria-hidden', String(!open));
  mobileMenuBtn.setAttribute('aria-expanded', String(open));
  mobileMenuBtn.setAttribute(
    'aria-label',
    open ? 'Close navigation menu' : 'Open navigation menu',
  );
  iconMenu.classList.toggle('hidden', open);
  iconClose.classList.toggle('hidden', !open);
  document.body.style.overflow = open ? 'hidden' : '';
}

mobileMenuBtn.addEventListener('click', () => {
  const isOpen = !mobileDrawer.classList.contains('hidden');
  setMobileMenu(!isOpen);
});

mobileDrawer.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMobileMenu(false));
});

// 3. Typewriter
const typewriterEl = document.getElementById('typewriter-text');
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function tickTypewriter() {
  const current = TYPEWRITER_WORDS[wordIndex];
  if (!isDeleting && charIndex === current.length) {
    setTimeout(() => {
      isDeleting = true;
      tickTypewriter();
    }, 1200);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % TYPEWRITER_WORDS.length;
  } else {
    charIndex += isDeleting ? -1 : 1;
  }

  typewriterEl.textContent = current.slice(0, charIndex) || '\u00A0';
  setTimeout(tickTypewriter, isDeleting ? 55 : 95);
}
tickTypewriter();

// 4. Render Narrative
const narrativeGrid = document.getElementById('narrative-grid');
narrativeGrid.innerHTML = NARRATIVE_PHASES.map(
  (item) => `
    <article class="narrative-card">
      <div>
        <div class="narrative-top">
          <span class="narrative-phase">${item.phase}</span>
          <span class="narrative-tag">${item.tag}</span>
        </div>
        <h3 class="narrative-title">${item.title}</h3>
        <p class="narrative-body">${item.body}</p>
      </div>
      <div class="narrative-footer">// ${item.highlight}</div>
    </article>
  `,
).join('');

// 5. Render Skills & Filter
const skillsGrid = document.getElementById('skills-grid');
const skillButtons = document.querySelectorAll('[data-skill-filter]');

function renderSkills(filter) {
  const list =
    filter === 'ALL'
      ? SKILLS
      : SKILLS.filter((s) => s.category === filter);

  const radius = 26;
  const circumference = 2 * Math.PI * radius;

  skillsGrid.innerHTML = list
    .map((skill) => {
      const offset = circumference - (skill.percentage / 100) * circumference;
      const badgeClass = skill.level === 'Professional' ? 'skill-badge pro' : 'skill-badge';
      return `
        <div class="skill-card">
          <div class="skill-top">
            <div>
              <span class="skill-cat">${skill.category}</span>
              <h3 class="skill-name">${skill.name}</h3>
              <span class="${badgeClass}">${skill.level}</span>
            </div>
            <div class="gauge-wrap">
              <svg class="gauge-svg" viewBox="0 0 64 64" aria-hidden="true">
                <circle cx="32" cy="32" r="${radius}" fill="none" stroke="var(--border-color)" stroke-width="3"></circle>
                <circle cx="32" cy="32" r="${radius}" fill="none" stroke="var(--text-primary)" stroke-width="3"
                  stroke-dasharray="${circumference}" stroke-dashoffset="${offset}" stroke-linecap="square"></circle>
              </svg>
              <span class="gauge-text">${skill.percentage}%</span>
            </div>
          </div>
          <p class="skill-detail">${skill.detail}</p>
        </div>
      `;
    })
    .join('');
}

skillButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    skillButtons.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    renderSkills(btn.getAttribute('data-skill-filter'));
  });
});
renderSkills('ALL');

// 6. Project Visual Helper
function buildProjectVisual(project) {
  let inner = '';
  if (project.visualStyle === 'luma') {
    inner = `
      <div class="visual-luma">
        <div class="visual-luma-bar">
          <span>LUMA OS // WORKSPACE</span>
          <span class="status-dot"></span>
        </div>
        <div class="visual-luma-cols">
          <div class="visual-luma-main">
            <div style="height:6px;width:40px;background:var(--text-primary)"></div>
            <div style="height:4px;width:56px;margin-top:6px;background:var(--text-secondary);opacity:0.4"></div>
          </div>
          <div class="visual-luma-side"></div>
        </div>
      </div>
    `;
  } else if (project.visualStyle === 'esnce') {
    inner = `
      <div class="visual-esnce">
        <div class="visual-esnce-bottle">
          <div class="visual-esnce-cap"></div>
          <span style="font-family:'Syne',sans-serif;font-size:12px;font-weight:800;letter-spacing:0.1em">ESNCE</span>
          <span style="font-family:'JetBrains Mono',monospace;font-size:8px;color:var(--text-secondary)">NO. 01</span>
        </div>
        <div style="display:flex;flex-direction:column;gap:6px">
          <div style="height:6px;width:64px;background:var(--text-primary)"></div>
          <div style="height:4px;width:48px;background:var(--text-secondary);opacity:0.5"></div>
          <div style="height:4px;width:56px;background:var(--text-secondary);opacity:0.5"></div>
        </div>
      </div>
    `;
  }

  return `
    <div class="project-visual">
      <div class="bg-arch-grid project-visual-grid"></div>
      <span class="project-fig">FIG. ${project.index}</span>
      <span class="project-year">${project.year}</span>
      ${inner}
    </div>
  `;
}

// 7. Render Archive
const archiveGrid = document.getElementById('archive-grid');

function renderArchive() {
  archiveGrid.innerHTML = PROJECTS.map(
      (project) => `
      <article class="project-card">
        <div>
          ${buildProjectVisual(project)}
          <div class="project-content">
            <span class="project-role">${project.category} // ${project.role}</span>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-subtitle">${project.subtitle}</p>
            <p class="project-desc">${project.description}</p>
            <div class="project-tags">
              ${project.deliverables
                .slice(0, 3)
                .map((tag) => `<span class="project-tag">${tag}</span>`)
                .join('')}
            </div>
          </div>
        </div>
        <div class="project-footer">
          <button type="button" class="inspect-btn" data-inspect-id="${project.id}">
            <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            <span>INSPECT</span>
          </button>
          ${
            project.liveUrl
              ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="golive-btn">
                  <span>GO LIVE</span>
                  <svg class="icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                </a>`
              : ''
          }
        </div>
      </article>
    `,
    )
    .join('');

  archiveGrid.querySelectorAll('[data-inspect-id]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-inspect-id');
      const found = PROJECTS.find((p) => p.id === id);
      if (found) openModal(found);
    });
  });
}

renderArchive();

// 8. Project Modal
const modal = document.getElementById('project-modal');
const modalBox = document.getElementById('modal-box');
const modalMeta = document.getElementById('modal-meta');
const modalVisual = document.getElementById('modal-visual');
const modalTitle = document.getElementById('modal-title');
const modalSubtitle = document.getElementById('modal-subtitle');
const modalDesc = document.getElementById('modal-desc');
const modalTags = document.getElementById('modal-tags');
const modalLiveLink = document.getElementById('modal-live-link');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalCloseFooter = document.getElementById('modal-close-footer');

function openModal(project) {
  modalMeta.textContent = `ARCHIVE // FIG. ${project.index} · ${project.category}`;
  modalVisual.innerHTML = buildProjectVisual(project);
  modalTitle.textContent = project.title;
  modalSubtitle.textContent = `${project.role} · ${project.year}`;
  modalDesc.textContent = project.description;
  modalTags.innerHTML = project.deliverables
    .map((item) => `<span class="modal-tag">${item}</span>`)
    .join('');

  if (project.liveUrl) {
    modalLiveLink.href = project.liveUrl;
    modalLiveLink.classList.remove('hidden');
  } else {
    modalLiveLink.classList.add('hidden');
  }

  modal.classList.remove('hidden');
}

function closeModal() {
  modal.classList.add('hidden');
}

modalCloseBtn.addEventListener('click', closeModal);
modalCloseFooter.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (!modalBox.contains(e.target)) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});

// 9. Copy Email & Contact Form
const copyBtn = document.getElementById('copy-email-btn');
const copyIcon = document.getElementById('copy-icon');
const checkIcon = document.getElementById('check-icon');
const copyBtnText = document.getElementById('copy-btn-text');

copyBtn.addEventListener('click', async () => {
  const email = 'jyotiprakashiiscb@gmail.com';
  try {
    await navigator.clipboard.writeText(email);
    copyIcon.classList.add('hidden');
    checkIcon.classList.remove('hidden');
    copyBtnText.textContent = 'COPIED';
    setTimeout(() => {
      copyIcon.classList.remove('hidden');
      checkIcon.classList.add('hidden');
      copyBtnText.textContent = 'COPY';
    }, 2000);
  } catch {
    window.location.href = `mailto:${email}`;
  }
});

const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('contact-name').value.trim();
  const subject = document.getElementById('contact-subject').value.trim();
  const message = document.getElementById('contact-message').value.trim();
  const mailSubject = encodeURIComponent(
    subject || `Portfolio Inquiry from ${name || 'Visitor'}`,
  );
  const mailBody = encodeURIComponent(
    `Hi Jyotiprakash,\n\n${message}\n\nBest,\n${name || 'A visitor'}`,
  );
  window.location.href = `mailto:jyotiprakashiiscb@gmail.com?subject=${mailSubject}&body=${mailBody}`;
});
