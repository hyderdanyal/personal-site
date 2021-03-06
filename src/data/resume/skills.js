// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Javascript',
    competency: 3,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Java',
    competency: 3,
    category: ['Languages', 'Java'],
  },
  // {
  //   title: 'Node.JS',
  //   competency: 3,
  //   category: ['Web Development', 'Javascript'],
  // },
  {
    title: 'React',
    competency: 3,
    category: ['Web Development', 'Framework', 'Javascript'],
  },
  {
    title: 'Spring',
    competency: 2,
    category: ['Web Development', 'Framework', 'Java', 'MVC'],
  },
  {
    title: 'Maven',
    competency: 2,
    category: ['Dependency', 'Project Management', 'Java'],
  },
  {
    title: 'NPM',
    competency: 2,
    category: ['Dependency', 'Project Management', 'Javascript'],
  },
  {
    title: 'Pip',
    competency: 2,
    category: ['Dependency', 'Project Management', 'Python'],
  },
  {
    title: 'Hibernate/JPA',
    competency: 3,
    category: ['Web Development', 'Framework', 'Java', 'ORM'],
  },
  // {
  //   title: 'Bash',
  //   competency: 2,
  //   category: ['Tools', 'Languages'],
  // },
  {
    title: 'REST API',
    competency: 3,
    category: ['Web Development', 'Methodology'],
  },
  {
    title: 'Machine Learning',
    competency: 2,
    category: ['Algorithms', 'Methodology'],
  },
  {
    title: 'Agile/SDLC',
    competency: 3,
    category: ['Life Cycle'],
  },
  // {
  //   title: 'Amazon Web Services',
  //   competency: 4,
  //   category: ['Web Development', 'Tools'],
  // },
  // {
  //   title: 'Heroku',
  //   competency: 2,
  //   category: ['Web Development', 'Tools'],
  // },
  {
    title: 'MongoDB/Firebase/NoSQL',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  // {
  //   title: 'ElasticSearch',
  //   competency: 2,
  //   category: ['Web Development', 'Databases'],
  // },
  {
    title: 'SQLite3/SQL',
    competency: 3,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  // {
  //   title: 'Redis',
  //   competency: 3,
  //   category: ['Web Development', 'Databases'],
  // },
  // {
  //   title: 'Data Mining',
  //   competency: 3,
  //   category: ['Data Science'],
  // },
  // {
  //   title: 'Express.JS',
  //   competency: 2,
  //   category: ['Web Development', 'Javascript'],
  // },
  // {
  //   title: 'D3',
  //   competency: 2,
  //   category: ['Web Development', 'Javascript'],
  // },
  {
    title: 'Flask',
    competency: 3,
    category: ['Web Development', 'Framework', 'Python'],
  },
  {
    title: 'Git',
    competency: 3,
    category: ['Tools'],
  },
  // {
  //   title: 'Kubernetes',
  //   competency: 2,
  //   category: ['Tools', 'Data Engineering'],
  // },
  {
    title: 'Google Cloud Platform',
    competency: 2,
    category: ['Tools', 'Hosting', 'Web Development'],
  },
  {
    title: 'Amazon Web Services S3',
    competency: 2,
    category: ['Tools', 'Hosting', 'Web Development'],
  },
  // {
  //   title: 'Numpy',
  //   competency: 3,
  //   category: ['Data Science', 'Data Engineering', 'Python'],
  // },
  // {
  //   title: 'Numba',
  //   competency: 2,
  //   category: ['Data Science', 'Data Engineering', 'Python'],
  // },
  // {
  //   title: 'Tensorflow + Keras',
  //   competency: 3,
  //   category: ['Data Science', 'Python'],
  // },
  // {
  //   title: 'Jupyter',
  //   competency: 3,
  //   category: ['Data Science', 'Python'],
  // },
  // {
  //   title: 'Typescript',
  //   competency: 2,
  //   category: ['Web Development', 'Languages', 'Javascript'],
  // },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 2,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 3,
    category: ['Languages', 'Python'],
  },
  // {
  //   title: 'C++',
  //   competency: 2,
  //   category: ['Languages'],
  // },
  // {
  //   title: 'Julia',
  //   competency: 2,
  //   category: ['Languages'],
  // },
  // {
  //   title: 'MATLAB',
  //   competency: 2,
  //   category: ['Languages'],
  // },
  // {
  //   title: 'R',
  //   competency: 2,
  //   category: ['Languages'],
  // },
  // {
  //   title: 'Data Visualization',
  //   competency: 3,
  //   category: ['Data Science', 'Javascript'],
  // },
  // {
  //   title: 'GraphQL',
  //   competency: 2,
  //   category: ['Web Development', 'Databases'],
  // },
  // {
  //   title: 'Pandas',
  //   competency: 3,
  //   category: ['Data Engineering', 'Data Science', 'Python'],
  // },
  // {
  //   title: 'Matplotlib',
  //   competency: 3,
  //   category: ['Data Engineering', 'Data Science', 'Python'],
  // },
  // {
  //   title: 'Scikit-Learn',
  //   competency: 4,
  //   category: ['Data Engineering', 'Data Science', 'Python'],
  // },
  // {
  //   title: 'Hadoop',
  //   competency: 2,
  //   category: ['Data Engineering', 'Data Science'],
  // },
  // {
  //   title: 'Spark',
  //   competency: 2,
  //   category: ['Data Engineering', 'Data Science'],
  // },
  // {
  //   title: 'Dagster',
  //   competency: 2,
  //   category: ['Data Engineering', 'Python'],
  // },
  // {
  //   title: 'Mypy',
  //   competency: 3,
  //   category: ['Python'],
  // },
  // {
  //   title: 'Pylint',
  //   competency: 4,
  //   category: ['Data Engineering', 'Python'],
  // },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
