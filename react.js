(function () {
  const root = document.getElementById('reactRoot');
  if (!root || !window.React || !window.ReactDOM) return;

  const e = React.createElement;
  const page = root.dataset.page;

  const SectionHeader = title => e('div', { className: 'section-header reveal' }, e('h2', null, title));
  const PageSection = (sectionProps, content) => e('section', sectionProps, content);
  const SocialLink = ({ href, label, icon, ...props }) =>
    e(
      'a',
      { href, className: props.className || '', target: props.target, rel: props.rel, 'aria-label': label },
      icon,
      label
    );

  const HomePage = () =>
    PageSection(
      { className: 'hero section', id: 'home' },
      e(
        'div',
        { className: 'hero-content reveal' },
        e('p', { className: 'eyebrow' }, 'Hello, I’m'),
        e('h1', null, 'Dino Luis Calimlim'),
        e('p', { className: 'hero-title' }, 'BSIT 601'),
        e(
          'p',
          { className: 'hero-description' },
          'A 3rd Year student who tries to learn how to code and design websites that are both functional and visually appealing. I am passionate about creating engaging digital experiences and am focused on strengthening my skills in web development and building clean, modern interfaces.'
        ),
        e(
          'div',
          { className: 'hero-actions' },
          e('a', { href: 'about.html', className: 'btn btn-primary' }, 'About Me'),
          e('a', { href: 'contact.html', className: 'btn btn-secondary' }, 'Contact Me')
        )
      )
    );

  const AboutPage = () =>
    PageSection(
      { className: 'section about', id: 'about' },
      e(
        React.Fragment,
        null,
        SectionHeader('About Me'),
        e(
          'div',
          { className: 'about-grid' },
          e(
            'div',
            { className: 'about-text reveal' },
            e('p', null, 'I am a beginner of code and design with a passion for creating engaging digital experiences. I am focused on learning new skills in web development and building clean, modern interfaces.'),
            e('p', null, 'I chose this course because I want to learn how to code and design websites that are both functional and visually appealing.')
          ),
          e(
            'div',
            { className: 'about-cards' },
            e(
              'div',
              { className: 'info-card reveal' },
              e('h3', null, 'Interests & Goals'),
              e('p', null, 'Building responsive interfaces, learning JavaScript frameworks, and contributing to meaningful digital products.')
            )
          )
        )
      )
    );

  const SkillLevel = ({ percent }) =>
    e(
      'div',
      { className: 'skill-level' },
      e(
        'div',
        { className: 'skill-level-header' },
        e('span', { className: 'skill-level-label' }, 'Proficiency'),
        e('span', { className: 'skill-percent' }, `${percent}%`)
      ),
      e(
        'div',
        {
          className: 'progress-bar',
          style: { '--progress': `${percent}%` },
          role: 'progressbar',
          'aria-valuenow': percent,
          'aria-valuemin': 0,
          'aria-valuemax': 100,
        },
        e('span', { className: 'progress-fill' })
      )
    );

  const SkillsPage = () =>
    PageSection(
      { className: 'section skills', id: 'skills' },
      e(
        React.Fragment,
        null,
        SectionHeader('Skills'),
        e(
          'div',
          { className: 'skills-grid' },
          e(
            'article',
            { className: 'skill-card reveal' },
            e('h3', null, 'Programming'),
            e('p', null, 'JavaScript, Python, Java, and C#.'),
            e(SkillLevel, { percent: 36 })
          ),
          e(
            'article',
            { className: 'skill-card reveal' },
            e('h3', null, 'Web Development'),
            e('p', null, 'HTML, and CSS.'),
            e(SkillLevel, { percent: 47 })
          )
        )
      )
    );

  const TimelineContent = ({ title, description }) => {
    const [open, setOpen] = React.useState(false);
    return e(
      'div',
      {
        className: `timeline-content${open ? ' open' : ''}`,
        tabIndex: 0,
        role: 'button',
        'aria-expanded': open,
        onClick: () => setOpen(!open),
        onKeyDown: event => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            setOpen(!open);
          }
        },
      },
      e('h3', null, title),
      e('p', null, description)
    );
  };

  const ExperiencePage = () =>
    PageSection(
      { className: 'section experience', id: 'experience' },
      e(
        React.Fragment,
        null,
        SectionHeader('Experience'),
        e(
          'div',
          { className: 'timeline' },
          e(
            'div',
            { className: 'timeline-item reveal' },
            e('span', { className: 'timeline-date' }, '2025 - Present'),
            e(TimelineContent, {
              title: 'Web Developer',
              description: 'Creating the portfolio website with layout and functionality.',
            })
          ),
          e(
            'div',
            { className: 'timeline-item reveal' },
            e('span', { className: 'timeline-date' }, '2025 - Present'),
            e(TimelineContent, {
              title: 'Design Learner',
              description:
                'Learning design principles and techniques to create visually appealing and user-friendly interfaces.',
            })
          )
        )
      )
    );

  const ContactPage = () => {
    const githubIcon = e('svg', {
      width: '20',
      height: '20',
      viewBox: '0 0 24 24',
      fill: 'currentColor',
      'aria-hidden': 'true',
      xmlns: 'http://www.w3.org/2000/svg',
      style: { marginRight: '8px' },
    },
    e('path', {
      d: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.016-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.76-1.605-2.665-.305-5.467-1.332-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23.958-.266 1.98-.399 3-.404 1.02.005 2.042.138 3 .404 2.29-1.552 3.295-1.23 3.295-1.23.655 1.653.243 2.874.12 3.176.77.84 1.235 1.91 1.235 3.221 0 4.61-2.807 5.624-5.48 5.921.43.372.815 1.102.815 2.222 0 1.606-.015 2.902-.015 3.293 0 .32.216.694.825.576C20.565 22.092 24 17.592 24 12.297 24 5.67 18.63.297 12 .297z',
    }));

    return PageSection(
      { className: 'section contact', id: 'contact' },
      e(
        React.Fragment,
        null,
        SectionHeader('Contact'),
        e(
          'div',
          { className: 'contact-grid' },
          e(
            'div',
            { className: 'contact-copy reveal' },
            e('h3', null, 'Let me know'),
            e(
              'p',
              null,
              'Do you have a opportunity to practice web development with me? Feel free to send me a message.'
            ),
            e(
              'div',
              { className: 'social-links' },
              SocialLink({ href: 'mailto:luiscalimlim082004@gmail.com', label: 'Gmail', className: '' }),
              SocialLink({
                href: 'https://github.com/DinoCalimlim',
                label: 'GitHub',
                icon: githubIcon,
                className: 'github',
                target: '_blank',
                rel: 'noopener noreferrer',
              })
            )
          ),
          e(
            'form',
            { className: 'contact-form reveal', id: 'contactForm' },
            e('label', { htmlFor: 'name' }, 'Name'),
            e('input', { type: 'text', id: 'name', name: 'name', placeholder: 'Your name', required: true }),
            e('label', { htmlFor: 'email' }, 'Email'),
            e('input', { type: 'email', id: 'email', name: 'email', placeholder: 'Your email', required: true }),
            e('label', { htmlFor: 'message' }, 'Message'),
            e('textarea', {
              id: 'message',
              name: 'message',
              rows: 5,
              placeholder: 'Write a message',
              required: true,
            }),
            e('button', { type: 'submit', className: 'btn btn-primary' }, 'Send Message'),
            e('p', { className: 'form-status', id: 'formStatus' })
          )
        )
      )
    );
  };

  const pages = {
    home: HomePage,
    about: AboutPage,
    skills: SkillsPage,
    experience: ExperiencePage,
    contact: ContactPage,
  };

  const PageComponent = pages[page] || (() => e('div', null));
  ReactDOM.createRoot(root).render(e(PageComponent));
})();