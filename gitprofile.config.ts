// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'xiaofengleo', // Your GitHub org/user name. 
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['xiaofengleo/Youtube_transcript_enhance', 'Health-RI/excel2rdf', 'Health-RI/health-ri-metadata','Health-RI/metadata-shacl-validation', 'cmbi/FAIRDataPoint-client'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      // projects: [
      //   {
      //     title: 'Project Name',
      //     description:
      //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      //     imageUrl:
      //       'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
      //     link: 'https://example.com',
      //   },
      //   {
      //     title: 'Project Name',
      //     description:
      //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      //     imageUrl:
      //       'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
      //     link: 'https://example.com',
      //   },
      // ],
    },
  },
  seo: {
    title: 'Portfolio of Ariful Alam',
    description: '',
    imageURL: '',
  },
  // social: {
  //   linkedin: 'ariful-alam',
  //   x: 'arif_szn',
  //   mastodon: 'arifszn@mastodon.social',
  //   researchGate: '',
  //   facebook: '',
  //   instagram: '',
  //   reddit: '',
  //   threads: '',
  //   youtube: '', // example: 'pewdiepie'
  //   udemy: '',
  //   dribbble: '',
  //   behance: '',
  //   medium: 'arifszn',
  //   dev: 'arifszn',
  //   stackoverflow: '', // example: '1/jeff-atwood'
  //   skype: '',
  //   telegram: '',
  //   website: 'https://www.arifszn.com',
  //   phone: '',
  //   email: 'arifulalamszn@gmail.com',
  // },
  // resume: {
  //   fileUrl:
  //     'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  // },
  skills: [
    'Python', 
    'SQL', 
    'SPARQL', 
    'Java', 
    'C/C++', 
    'C#', 
    'JavaScript', 
    'HTML',
    'XML', 
    'JSON'
    'React.js',
    'Node.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'Kubernetes', 
    'AWS(s3, emr, ecs, glue, Athena, airflow, terraform, Spark, zeppelin)', 
    'MongoDB',
    'Power BI', 
    'Protégé', 
    'Vantage6', 
    'FAIR Data Station', 
    'Triplestore (GraphDB, Blazegraph)',
    'RDF', 
    'OWL', 
    'SHACL', 
    'REST API', 
    'DCAT', 
    'ISA', 
    'Phenopacket', 
    'FHIR', 
    'FAIR Genomes',
  ],
  experiences: [
    {
      company: 'Company Name',
      position: 'Position',
      from: 'September 2021',
      to: 'Present',
      companyLink: 'https://example.com',
    },
    {
      company: 'Company Name',
      position: 'Position',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://example.com',
    },
  ],
  certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2015',
      to: '2019',
    },
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2012',
      to: '2014',
    },
  ],
  publications: [
    {
      title: 'FAIR Data Cube, a FAIR data infrastructure for integrated multi-omics data analysis',
      conferenceName: '',
      journalName: 'Journal of Biomedical Semantics',
      authors: 'Liao X, Ederveen THA, Niehues A, de Visser C, Huang J, Badmus F, Doornbos C, Orlova Y, Kulkarni P, van der Velde KJ, Swertz MA, Brandt M, van Gool AJ, \'t Hoen PAC',
      link: 'https://jbiomedsem.biomedcentral.com/articles/10.1186/s13326-024-00321-2',
      description:
        'We are witnessing an enormous growth in the amount of molecular profiling (-omics) data. The integration of multi-omics data is challenging. Moreover, human multi-omics data may be privacy-sensitive and can be misused to de-anonymize and (re-)identify individuals. Hence, most biomedical data is kept in secure and protected silos. Therefore, it remains a challenge to re-use these data without infringing the privacy of the individuals from which the data were derived. Federated analysis of Findable, Accessible, Interoperable, and Reusable (FAIR) data is a privacy-preserving solution to make optimal use of these multi-omics data and transform them into actionable knowledge. The Netherlands X-omics Initiative is a National Roadmap Large-Scale Research Infrastructure aiming for efficient integration of data generated within X-omics and external datasets. To facilitate this, we developed the FAIR Data Cube (FDCube), which adopts and applies the FAIR principles and helps researchers to create FAIR data and metadata, to facilitate re-use of their data, and to make their data analysis workflows transparent, and in the meantime ensure data security and privacy.',
    },
    // {
    //   title: 'Publication Title',
    //   conferenceName: 'Conference Name',
    //   journalName: '',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
