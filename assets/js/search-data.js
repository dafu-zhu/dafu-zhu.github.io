// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "Quantitative research and trading systems from internship experience",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Open source projects and contributions",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-all-weather-strategy",
          title: 'All-Weather Strategy',
          description: "Risk Parity v2.1 - Asymmetric Mean-Reversion",
          section: "Projects",handler: () => {
              window.location.href = "/projects/all-weather/";
            },},{id: "projects-dcam",
          title: 'DCAM',
          description: "Dynamic Contextual Alpha Model - IC 0.087, 6.5-8.3% excess return",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dcam/";
            },},{id: "projects-jump-risk-anomaly",
          title: 'Jump-Risk Anomaly',
          description: "Intraday Jump Detection - Sharpe 1.63 with Regime Filter",
          section: "Projects",handler: () => {
              window.location.href = "/projects/jump-risk/";
            },},{id: "projects-market-regime-analysis",
          title: 'Market Regime Analysis',
          description: "HMM Sector Rotation - 2.15x vs 1.10x Benchmark",
          section: "Projects",handler: () => {
              window.location.href = "/projects/market-regime/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/dafu-zhu", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/dafu-zhu", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
