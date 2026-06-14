// ============================================================
// Content data — Mojtaba Masoudinejad personal site
// Sourced from masoudinejad.xyz (Home, About, Publications)
// ============================================================

const SOCIAL = {
  email: 'masoudinejad@gmail.com',
  orcid: 'https://orcid.org/0000-0002-3627-9387',
  github: 'https://github.com/masoudinejad',
  scholar: 'https://scholar.google.com/citations?user=nb5UK5sAAAAJ&hl=en',
  linkedin: 'https://www.linkedin.com/in/mojtaba-masoudinejad/',
};

const FIELDS = [
  'Machine learning & AI',
  'Resource-aware AI',
  'Cyber-physical systems',
  'Embedded systems',
  'Energy harvesting',
  'Photovoltaic energy',
  'Computer vision & image processing',
];

// Combined career timeline
const POSITIONS = [
  {
    when: '2023–now',
    role: 'Senior machine learning engineer',
    org: 'Bosch Center for Artificial Intelligence',
    place: 'Renningen, Germany · Robert Bosch GmbH',
    now: true,
    bullets: [
      'Delivered ML courses and workshops (Classical ML, Deep Learning, Resource-Aware AI), consistently achieving 4.5/5 ratings',
      'Mentored and consulted on 25+ ML projects, resulting in 12 successful deployments',
      'Developed and maintained 3 AI demonstrators integrated into training programs and workshops',
      'Designed and deployed a Retrieval-Augmented Generation system for training quality management',
    ],
  },
  {
    when: '2021–2022',
    role: 'Postdoctoral researcher',
    org: 'DAES group, TU Dortmund University',
    place: 'Dortmund, Germany',
    bullets: [
      'Developed resource-aware and fault-tolerant machine learning algorithms for embedded systems',
    ],
  },
  {
    when: '2019–2020',
    role: 'Scientific researcher',
    org: 'ML2R, Competence Center Machine Learning Rhine-Ruhr',
    place: 'TU Dortmund University',
    bullets: [
      'Project manager: generated a 3D annotated visual dataset for cubical objects',
      'System designer: automated bread quality control using image processing (Fraunhofer IML)',
    ],
  },
  {
    when: '2012–2020',
    role: 'Research associate',
    org: 'Chair of Materials Handling & Warehousing (FLW)',
    place: 'TU Dortmund University',
    bullets: [
      'Acquired and fulfilled multiple DFG, AiF and EU research projects (SFB876, FLEXINET)',
      'Managed PhyNetLab: an ultra-low-power IoT warehouse testbed',
      'Organised workshops, seminars, and hackathons; lectured multiple engineering courses',
    ],
  },
  {
    when: '2016 & 2017',
    role: 'Guest researcher',
    org: 'Institute of Integrated Systems (IIS)',
    place: 'ETH Zurich, Switzerland',
  },
  {
    when: '2010–2011',
    role: 'Automation engineer',
    org: 'SABIC Polyolefine GmbH',
    place: 'Gelsenkirchen, Germany',
    bullets: [
      'Trained and deployed an ML-based automated system replacing manual quality control',
    ],
  },
];

const EDUCATION = [
  {
    when: 'Postdoc · 2021–2022',
    degree: 'Postdoctoral researcher',
    org: 'DAES group, TU Dortmund University',
    detail: 'Development of resource-aware and fault-tolerant machine learning algorithms.',
    advisors: 'Prof. Jian-Jia Chen',
  },
  {
    when: 'PhD · 2020',
    degree: 'Doctorate',
    org: 'TU Dortmund University, Germany',
    detail: 'Modeling the energy supply unit of ultra-low-power devices with indoor photovoltaic harvesting.',
    advisors: 'Prof. Michael ten Hompel · Prof. Luca Benini',
  },
  {
    when: 'MSc · 2011',
    degree: 'Automation & Robotics',
    org: 'TU Dortmund University, Germany',
    detail: 'Optimization of shuttle-robot management in a SABIC high-rise warehouse.',
    advisors: 'Prof. ten Hompel · E. Hornung · Dr. S. Feldhorst',
  },
  {
    when: 'BSc · 2007',
    degree: 'Electrical Engineering — Control & Systems',
    org: 'K. N. Toosi University of Technology, Tehran',
    detail: 'Brain Emotional Learning Based Intelligent Controller (BELBIC) for a level pilot plant.',
    advisors: 'Dr. AliReza Fatehi · Prof. Caro Lucas',
  },
];

const AWARDS = [
  { year: '2015', title: 'Best paper award', org: 'IEEE International Renewable Energy Congress (IREC)' },
  { year: '2011', title: 'Outstanding master\'s thesis, top 3', org: 'TU Dortmund University' },
  { year: '2011', title: 'Leading research with direct industrial impact', org: 'SABIC Polyolefine GmbH' },
];

const SKILLS = [
  { category: 'Programming', items: ['Python', 'MATLAB', 'Bash', 'C/C++', 'Assembly', 'Siemens S7'] },
  { category: 'Frameworks', items: ['Scikit-learn', 'Keras', 'TensorFlow', 'PyTorch', 'ONNX', 'TVM', 'MLflow', 'OpenCV'] },
  { category: 'Tools', items: ['Git', 'Docker', 'AutoCAD', 'Simulink/Simscape'] },
  { category: 'Languages', items: ['Farsi (native)', 'English (fluent)', 'German (advanced)'] },
];

const TEACHING = [
  { when: '2020–2021', role: 'Tutor', course: 'Computer Systems', org: 'TU Dortmund University' },
  { when: '2020', role: 'Lecturer & organiser', course: 'Cyber-Physical Systems', org: 'TU Dortmund University' },
  { when: '2014–2018', role: 'Lecturer & organiser', course: 'IT systems for industrial production', org: 'TU Dortmund University' },
  { when: '2013–2017', role: 'Lecturer & organiser', course: 'Identification and automation technology', org: 'TU Dortmund University' },
  { when: '2015–2017', role: 'Lab instructor', course: 'PLC programming', org: 'TU Dortmund University' },
  { when: '2013–2015', role: 'Lab instructor', course: 'Automated identification systems', org: 'TU Dortmund University' },
];

// Publications — newest first. type ∈ Journal | Conference | Dataset | Chapter | Thesis | Report
const PUBLICATIONS = [
  { year: 2023, type: 'Chapter', authors: 'M. Masoudinejad', title: 'Indoor photovoltaic energy harvesting', venue: 'Machine Learning under Resource Constraints — Applications, pp. 195–211 · De Gruyter', link: '' },
  { year: 2023, type: 'Chapter', authors: 'M. Masoudinejad & M. Buschhoff', title: 'PhyNetLab test bed', venue: 'Machine Learning under Resource Constraints — Fundamentals, pp. 34–45 · De Gruyter', link: '' },
  { year: 2022, type: 'Conference', authors: 'M. Yayla, et al.', title: 'TREAM: A tool for evaluating error resilience of tree-based models using approximate memory', venue: 'Embedded Computer Systems: Architectures, Modeling, and Simulation (LNCS), Springer', link: 'https://link.springer.com/chapter/10.1007/978-3-031-15074-6_4' },
  { year: 2020, type: 'Thesis', authors: 'M. Masoudinejad', title: 'Modeling energy supply unit of ultra-low power devices with indoor photovoltaic harvesting', venue: 'PhD dissertation · Eldorado, TU Dortmund University', link: 'https://dx.doi.org/10.17877/DE290R-21657' },
  { year: 2020, type: 'Journal', authors: 'M. Masoudinejad', title: 'Open-loop dynamic modeling of low-budget batteries with low-power loads', venue: 'Batteries, vol. 6, no. 4, p. 50 · MDPI', link: 'https://doi.org/10.3390/batteries6040050' },
  { year: 2020, type: 'Dataset', authors: 'M. Masoudinejad', title: 'Data-sets for indoor photovoltaic behavior in low lighting conditions', venue: 'Data, vol. 5, no. 2, p. 32 · MDPI', link: 'https://doi.org/10.3390/data5020032' },
  { year: 2020, type: 'Dataset', authors: 'M. Masoudinejad', title: 'Data-sets for indoor photovoltaic behavior in low lighting condition', venue: 'Zenodo', link: 'https://doi.org/10.5281/zenodo.3697105' },
  { year: 2019, type: 'Chapter', authors: 'M. ten Hompel, et al.', title: 'Automatic identification technology', venue: 'Operations, Logistics and Supply Chain Management (LN in Logistics), Springer', link: 'https://doi.org/10.1007/978-3-319-92447-2_30' },
  { year: 2018, type: 'Conference', authors: 'M. Masoudinejad, et al.', title: 'Average modelling of state-of-the-art ultra-low power energy harvesting converter IC', venue: 'SPEEDAM 2018, pp. 99–104 · Amalfi, Italy', link: 'https://doi.org/10.1109/SPEEDAM.2018.8445303' },
  { year: 2018, type: 'Dataset', authors: 'M. Masoudinejad', title: 'Large signal converter data from Texas Instruments BQ25570', venue: 'SFB876, TU Dortmund University', link: 'https://doi.org/10.17877/fd72wij6yo' },
  { year: 2018, type: 'Dataset', authors: 'M. Masoudinejad', title: 'Large signal converter data from Texas Instruments BQ25505', venue: 'SFB876, TU Dortmund University', link: 'https://doi.org/10.17877/fd72o6mn0g' },
  { year: 2018, type: 'Dataset', authors: 'M. Masoudinejad', title: 'Models and training datasets for Texas Instruments BQ25505 and BQ25570 ICs', venue: 'SFB876, TU Dortmund University', link: 'https://doi.org/10.17877/FE0O0YSXS0' },
  { year: 2018, type: 'Report', authors: 'M. Masoudinejad', title: 'Power analysis of PhyNode', venue: '2018 Annual Technical Reports of SFB876, TU Dortmund', link: 'https://masoudinejad.xyz/files/TechReport2018.pdf' },
  { year: 2018, type: 'Conference', authors: 'M. Masoudinejad, et al.', title: 'Machine learning based indoor localisation using environmental data in PhyNetLab warehouse', venue: 'European Conf. on Smart Objects, Systems and Technologies (Smart SysTech), pp. 1–8', link: 'https://ieeexplore.ieee.org/abstract/document/8435922' },
  { year: 2017, type: 'Report', authors: 'M. Masoudinejad', title: 'Data collection for modelling power chargers in energy harvesting', venue: '2017 Annual Technical Reports of SFB876, TU Dortmund', link: 'https://masoudinejad.xyz/files/TechReport2017.pdf' },
  { year: 2017, type: 'Conference', authors: 'R. Falkenberg, et al.', title: 'PhyNetLab: An IoT-based warehouse testbed', venue: 'FedCSIS 2017, pp. 1051–1055', link: 'https://annals-csis.org/proceedings/2017/drp/pdf/267.pdf' },
  { year: 2017, type: 'Report', authors: 'M. Masoudinejad', title: 'Automated data collection for modelling Texas Instruments ultra low-power chargers', venue: 'Technical Report · SFB876, TU Dortmund', link: 'https://sfb876.tu-dortmund.de/PublicPublicationFiles/masoudinejad_2017b.pdf' },
  { year: 2017, type: 'Report', authors: 'M. Masoudinejad', title: 'A power model for DC-DC boost converters operating in PFM mode', venue: 'Technical Report · SFB876, TU Dortmund', link: 'https://sfb876.tu-dortmund.de/PublicPublicationFiles/masoudinejad_2017a.pdf' },
  { year: 2017, type: 'Chapter', authors: 'M. Masoudinejad, et al.', title: 'Smart sensing devices for logistics application', venue: 'Sensor Systems and Software, vol. 205, pp. 41–52 · Springer', link: 'https://doi.org/10.1007/978-3-319-61563-9_4' },
  { year: 2016, type: 'Report', authors: 'M. Masoudinejad', title: 'Photovoltaic energy harvesting characteristics under ultra-low light', venue: '2016 Annual Technical Reports of SFB876, pp. 41–44', link: 'https://sfb876.tu-dortmund.de/PublicPublicationFiles/sfbgk_etal_2016a.pdf' },
  { year: 2016, type: 'Conference', authors: 'S. Feldhorst, et al.', title: 'Motion classification for analyzing the order picking process using mobile sensors', venue: 'ICPRAM 2016, pp. 706–713 · SCITEPRESS', link: 'https://doi.org/10.5220/0005828407060713' },
  { year: 2015, type: 'Conference', authors: 'M. Masoudinejad, et al.', title: 'A gray box modeling of a photovoltaic cell under low illumination in materials handling application', venue: 'IEEE IRSEC 2015, pp. 1–6', link: 'https://doi.org/10.1109/IRSEC.2015.7455081' },
  { year: 2015, type: 'Report', authors: 'M. Masoudinejad', title: 'A measurement platform for photovoltaic energy harvesting in indoor low light environment', venue: '2015 Annual Technical Reports of SFB876, TU Dortmund', link: 'https://masoudinejad.xyz/files/TechReport2015.pdf' },
  { year: 2015, type: 'Journal', authors: 'M. Masoudinejad, et al.', title: 'A measurement platform for photovoltaic performance analysis in environments with ultra-low energy harvesting potential', venue: 'Sustainable Cities and Society 25, pp. 74–81', link: 'https://doi.org/10.1016/j.scs.2015.09.006' },
  { year: 2015, type: 'Conference', authors: 'M. Masoudinejad, et al.', title: 'Development of a measurement platform for indoor photovoltaic energy harvesting in materials handling applications', venue: '6th Int. Renewable Energy Congress (IREC), pp. 1–6', link: 'https://doi.org/10.1109/IREC.2015.7110938' },
  { year: 2015, type: 'Journal', authors: 'M. Masoudinejad, et al.', title: 'Reduction of energy consumption by proper speed selection in PMSM-driven roller conveyors', venue: 'IEEE Transactions on Industry Applications 51.2, pp. 1572–1578', link: 'https://doi.org/10.1109/TIA.2014.2360013' },
  { year: 2014, type: 'Conference', authors: 'M. Roidl, et al.', title: 'Performance availability evaluation of smart devices in materials handling systems', venue: 'IEEE ICCC Workshops on Internet of Things, pp. 6–10', link: 'https://doi.org/10.1109/ICCChinaW.2014.7107857' },
  { year: 2014, type: 'Journal', authors: 'M. Roidl, et al.', title: 'Entwicklung eines Versuchsfelds für große Systeme intelligenter Behälter', venue: 'Logistics Journal 2014', link: 'https://doi.org/10.2195/lj_Proc_roidl_de_201411_01' },
  { year: 2013, type: 'Conference', authors: 'M. Masoudinejad, et al.', title: 'Energy optimized speed regulation of permanent magnet synchronous motors for driving roller conveyors', venue: 'Int. Conf. on Power Electronics and Drive Systems (PEDS), pp. 500–505', link: 'https://doi.org/10.1109/PEDS.2013.6527070' },
  { year: 2011, type: 'Thesis', authors: 'M. Masoudinejad', title: 'Optimization of shuttle robots management in a SABIC high rise warehouse', venue: "Master's thesis · TU Dortmund University", link: '' },
  { year: 2008, type: 'Conference', authors: 'M. Masoudinejad, et al.', title: 'Real-time level plant control using improved BELBIC', venue: '17th IFAC World Congress, vol. 17 · Seoul, Korea', link: 'https://doi.org/10.3182/20080706-5-KR-1001.00779' },
  { year: 2007, type: 'Thesis', authors: 'M. Masoudinejad & R. Khorsandi', title: 'Design and implementation of Brain Emotional Learning Based Intelligent Controller (BELBIC) for a level pilot plant', venue: "Bachelor's thesis · K. N. Toosi University of Technology, Tehran", link: 'https://masoudinejad.xyz/files/BELBIC_thesis.pdf' },
  { year: 2006, type: 'Conference', authors: 'M. Masoudinejad', title: 'Iran Khodro stock market estimation using polynomial neural networks', venue: '9th Iranian Student Conf. on Electrical Engineering, Tehran', link: 'https://civilica.com/doc/48670/' },
  { year: 2005, type: 'Conference', authors: 'M. Masoudinejad', title: 'Analysis of the Karkhe Dam automatic voltage regulator', venue: '8th Iranian Student Conf. on Electrical Engineering, Kerman', link: 'https://civilica.com/doc/47220/' },
];

const DOWNLOADS = [
  {
    category: 'CV & Résumé',
    icon: 'file-text',
    items: [
      { name: 'Curriculum Vitae', desc: 'Full academic CV including publications, experience, and education.', file: 'uploads/Masoudinejad_CV.pdf', type: 'PDF' },
    ],
  },
  {
    category: 'Cryptography',
    icon: 'key',
    items: [
      { name: 'PGP Public Key', desc: 'Use to send encrypted email or verify signed files.', keyId: '0xE5C606F3917B21E8', file: 'downloads/keys/masoudinejad-pgp-public.asc', type: 'ASC' },
    ],
  },
  {
    category: 'Academic',
    icon: 'graduation-cap',
    items: [
      { name: 'Knowledge Management in Research', issuer: 'TU Dortmund University', year: '2022', file: 'uploads/Docs/Academic/CertWissen.pdf', type: 'PDF' },
      { name: 'Writing Successful Research Proposals', issuer: 'TU Dortmund University', year: '2021', file: 'uploads/Docs/Academic/CertWriteProposal.pdf', type: 'PDF' },
      { name: 'Best Paper Award', issuer: 'IEEE Int. Renewable Energy Congress (IREC)', year: '2015', file: 'uploads/Docs/Academic/BestPaper.pdf', type: 'PDF' },
    ],
  },
  {
    category: 'Soft skills',
    icon: 'users',
    items: [
      { name: 'Meeting & Moderation Skills', issuer: 'TU Dortmund University', year: '2015', file: 'uploads/Docs/Soft Skills/CertMeeting.pdf', type: 'PDF' },
      { name: 'Rhetorik und Präsentation', issuer: 'cum-Training / Fraunhofer IML', year: '2014', file: 'uploads/Docs/Soft Skills/CertCum.pdf', type: 'PDF' },
    ],
  },
  {
    category: 'Specializations',
    icon: 'award',
    variant: 'list',
    items: [
      { name: 'Deep Learning', issuer: 'DeepLearning.AI', year: '2022', type: 'Specialization', file: 'uploads/Docs/Specializations/Coursera LAMXWRLT7XL3.pdf', verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/specialization/LAMXWRLT7XL3' },
      { name: 'Google IT Automation with Python', issuer: 'Google', year: '2022', type: 'Professional Certificate', file: 'uploads/Docs/Specializations/Coursera BAKC4HQT7PME.pdf', verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/professional-cert/BAKC4HQT7PME' },
      { name: 'Mathematics for Machine Learning and Data Science', issuer: 'DeepLearning.AI', year: '2025', type: 'Specialization', file: 'uploads/Docs/Specializations/Coursera VUUL9OQKAC23.pdf', verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/specialization/VUUL9OQKAC23' },
      { name: 'Introduction to Generative AI Learning Path', issuer: 'Google', year: '2025', type: 'Specialization', file: 'uploads/Docs/Specializations/Coursera 0DYBAQDABB9S.pdf', verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/specialization/0DYBAQDABB9S' },
    ],
  },
  {
    category: 'Courses',
    icon: 'book-open',
    variant: 'grouped-list',
    groups: [
      {
        label: 'Machine Learning & Deep Learning',
        items: [
          { name: 'Neural Networks and Deep Learning', issuer: 'DeepLearning.AI', year: '2022', file: 'uploads/Docs/Courses/Coursera Q62TXV74S56G.pdf', verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/Q62TXV74S56G' },
          { name: 'Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization', issuer: 'DeepLearning.AI', year: '2022', file: 'uploads/Docs/Courses/Coursera L45YWG5SGMN8.pdf', verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/L45YWG5SGMN8' },
          { name: 'Structuring Machine Learning Projects', issuer: 'DeepLearning.AI', year: '2022', file: 'uploads/Docs/Courses/Coursera 8UT57E82J4CX.pdf', verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/8UT57E82J4CX' },
          { name: 'Sequence Models', issuer: 'DeepLearning.AI', year: '2022', file: 'uploads/Docs/Courses/Coursera HAX5KPABN9QW.pdf', verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/HAX5KPABN9QW' },
          { name: 'PyTorch: Fundamentals', issuer: 'DeepLearning.AI', year: '2026', file: 'uploads/Docs/Courses/Coursera I91R18XQX47W.pdf', verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/I91R18XQX47W' },
          { name: 'Introduction to Neural Networks and PyTorch', issuer: 'IBM', year: '2022', file: 'uploads/Docs/Courses/Coursera HGW7U67G5WY5.pdf', verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/HGW7U67G5WY5' },
          { name: 'Deep Learning with Keras and Tensorflow', issuer: 'IBM', year: '2022', file: 'uploads/Docs/Courses/Coursera 48Z5BDKUC67D.pdf', verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/48Z5BDKUC67D' },
          { name: 'Introduction to Deep Learning & Neural Networks with Keras', issuer: 'IBM', year: '2022', file: 'uploads/Docs/Courses/Coursera ZYBHELG8A92E.pdf', verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/ZYBHELG8A92E' },
          { name: 'Machine Learning with Python', issuer: 'IBM', year: '2022', file: 'uploads/Docs/Courses/Coursera CDDN8FGBCFW3.pdf', verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/CDDN8FGBCFW3' },
          { name: 'AI Capstone Project with Deep Learning', issuer: 'IBM', year: '2022', file: 'uploads/Docs/Courses/Coursera SY5JW54B78EH.pdf', verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/SY5JW54B78EH' },
        ],
      },
      {
        label: 'Generative AI',
        items: [
          { name: 'Introduction to Large Language Models', issuer: 'Google', year: '2025', file: 'uploads/Docs/Courses/Coursera SCWUJF9PROAT.pdf', verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/SCWUJF9PROAT' },
          { name: 'Introduction to Generative AI', issuer: 'Google', year: '2025', file: 'uploads/Docs/Courses/Coursera AK8NW5FJM7VE.pdf', verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/AK8NW5FJM7VE' },
          { name: 'Retrieval Augmented Generation (RAG)', issuer: 'DeepLearning.AI', year: '2025', file: 'uploads/Docs/Courses/Coursera QOPJE0W3QAKA.pdf', verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/QOPJE0W3QAKA' },
          { name: 'Generative AI for Everyone', issuer: 'DeepLearning.AI', year: '2025', file: 'uploads/Docs/Courses/Coursera YN8C3564PGYP.pdf', verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/YN8C3564PGYP' },
        ],
      },
      {
        label: 'NLP',
        items: [
          { name: 'Natural Language Processing with Classification and Vector Spaces', issuer: 'DeepLearning.AI', year: '2022', file: 'uploads/Docs/Courses/Coursera JCCBP8Y4U7U4.pdf', verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/JCCBP8Y4U7U4' },
          { name: 'Transformer Models and BERT Model', issuer: 'Google', year: '2025', file: 'uploads/Docs/Courses/Coursera VFVP3RFLT488.pdf', verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/VFVP3RFLT488' },
        ],
      },
      {
        label: 'Computer Vision',
        items: [
          { name: 'Convolutional Neural Networks', issuer: 'DeepLearning.AI', year: '2022', file: 'uploads/Docs/Courses/Coursera T3242EDX3XF3.pdf', verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/T3242EDX3XF3' },
          { name: 'Introduction to Computer Vision and Image Processing', issuer: 'IBM', year: '2022', file: 'uploads/Docs/Courses/Coursera XCCRHYP5A374.pdf', verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/XCCRHYP5A374' },
        ],
      },
      {
        label: 'MLOps',
        items: [
          { name: 'Machine Learning in Production', issuer: 'DeepLearning.AI', year: '2024', file: 'uploads/Docs/Courses/Coursera WJU0HTVTU7FF.pdf', verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/WJU0HTVTU7FF' },
        ],
      },
      {
        label: 'Mathematics',
        items: [
          { name: 'Linear Algebra for Machine Learning and Data Science', issuer: 'DeepLearning.AI', year: '2023', file: 'uploads/Docs/Courses/Coursera GBDT6X57KUQ7.pdf', verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/GBDT6X57KUQ7' },
          { name: 'Calculus for Machine Learning and Data Science', issuer: 'DeepLearning.AI', year: '2025', file: 'uploads/Docs/Courses/Coursera TG7G2N5C47KA.pdf', verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/TG7G2N5C47KA' },
          { name: 'Probability & Statistics for Machine Learning & Data Science', issuer: 'DeepLearning.AI', year: '2025', file: 'uploads/Docs/Courses/Coursera KXD9AT7115LY.pdf', verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/KXD9AT7115LY' },
        ],
      },
      {
        label: 'AI Ethics & Responsible AI',
        items: [
          { name: 'Introduction to Responsible AI', issuer: 'Google', year: '2025', file: 'uploads/Docs/Courses/Coursera YLGXNI8PA80L.pdf', verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/YLGXNI8PA80L' },
          { name: 'Responsible AI: Applying AI Principles with Google Cloud', issuer: 'Google', year: '2025', file: 'uploads/Docs/Courses/Coursera ILEJNO9X8BYM.pdf', verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/ILEJNO9X8BYM' },
        ],
      },
      {
        label: 'Python Programming',
        items: [
          { name: 'Crash Course on Python', issuer: 'Google', year: '2022', file: 'uploads/Docs/Courses/Coursera HS2D6T938RRR.pdf', verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/HS2D6T938RRR' },
          { name: 'Using Python to Interact with the Operating System', issuer: 'Google', year: '2022', file: 'uploads/Docs/Courses/Coursera RQ9AS5PJR22S.pdf', verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/RQ9AS5PJR22S' },
          { name: 'Automating Real-World Tasks with Python', issuer: 'Google', year: '2022', file: 'uploads/Docs/Courses/Coursera MTHVPRLR7URK.pdf', verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/MTHVPRLR7URK' },
        ],
      },
      {
        label: 'IT & DevOps',
        items: [
          { name: 'Introduction to Git and GitHub', issuer: 'Google', year: '2022', file: 'uploads/Docs/Courses/Coursera J45FMFRMNTF6.pdf', verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/J45FMFRMNTF6' },
          { name: 'Troubleshooting and Debugging Techniques', issuer: 'Google', year: '2022', file: 'uploads/Docs/Courses/Coursera F99AHFBUCM34.pdf', verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/F99AHFBUCM34' },
          { name: 'Configuration Management and the Cloud', issuer: 'Google', year: '2022', file: 'uploads/Docs/Courses/Coursera TPLN59SBGH7G.pdf', verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/TPLN59SBGH7G' },
          { name: 'Write Basic Ansible Playbooks', issuer: 'Coursera', year: '2023', file: 'uploads/Docs/Courses/Coursera ZBFZERWKFG2X.pdf', verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/ZBFZERWKFG2X' },
          { name: 'Introduction to Ansible: The Fundamentals', issuer: 'Coursera', year: '2023', file: 'uploads/Docs/Courses/Coursera R8SQD82Y42Q7.pdf', verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/R8SQD82Y42Q7' },
        ],
      },
    ],
  },
];



Object.assign(window, { SOCIAL, FIELDS, POSITIONS, EDUCATION, PUBLICATIONS, AWARDS, SKILLS, TEACHING, DOWNLOADS });
