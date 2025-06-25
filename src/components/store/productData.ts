
export interface Product {
  id: string;
  title: string;
  tagline: string;
  price: number;
  url: string;
  category: string;
  isBundle?: boolean;
  isFree?: boolean;
}

export interface Category {
  id: string;
  name: string;
}

export const categories: Category[] = [
  { id: 'core-skills', name: 'Core Skills Series (Beginner Path)' },
  { id: 'foundations', name: 'Foundations & Starter Kits' },
  { id: 'excel', name: 'Excel & Spreadsheets' },
  { id: 'python-sql', name: 'Python & SQL' },
  { id: 'power-bi', name: 'Power BI' },
  { id: 'data-cleaning', name: 'Data Cleaning & Prompt Engineering' },
  { id: 'bundles', name: 'Career Bundles' },
];

export const products: Product[] = [
  // Core Skills Series
  {
    id: 'core-week-1',
    title: 'Core Skills for Beginner Data Analyst — Week 1',
    tagline: 'Foundation concepts and tools for starting your data journey',
    price: 9.99,
    url: 'https://journeyanalyst.gumroad.com/l/oralmo',
    category: 'core-skills',
  },
  {
    id: 'core-week-2',
    title: 'Core Skills for Beginner Data Analyst — Week 2',
    tagline: 'Data collection and basic analysis techniques',
    price: 9.99,
    url: 'https://journeyanalyst.gumroad.com/l/tzwip',
    category: 'core-skills',
  },
  {
    id: 'core-week-3',
    title: 'Core Skills for Beginner Data Analyst — Week 3',
    tagline: 'Visualization and reporting fundamentals',
    price: 9.99,
    url: 'https://journeyanalyst.gumroad.com/l/iageoa',
    category: 'core-skills',
  },
  {
    id: 'core-week-4',
    title: 'Core Skills for Beginner Data Analyst — Week 4',
    tagline: 'Advanced analysis and career preparation',
    price: 9.99,
    url: 'https://journeyanalyst.gumroad.com/l/vbszr',
    category: 'core-skills',
  },

  // Foundations & Starter Kits
  {
    id: 'starter-guide',
    title: 'Starter – How to Start Your Career in Data Analysis',
    tagline: 'Free comprehensive guide to launching your data career',
    price: 0,
    url: 'https://dlahtalk.gumroad.com/l/yclpyi',
    category: 'foundations',
    isFree: true,
  },

  // Excel & Spreadsheets
  {
    id: 'excel-troubleshooting',
    title: 'The Ultimate Excel Troubleshooting Guide',
    tagline: 'Solve common Excel problems with expert solutions',
    price: 9.99,
    url: 'https://dlahtalk.gumroad.com/l/hfoyd',
    category: 'excel',
  },
  {
    id: 'excel-analysis',
    title: 'Excel for Analysis',
    tagline: 'Master Excel techniques for data analysis',
    price: 7.99,
    url: 'https://dlahtalk.gumroad.com/l/xqdhfh',
    category: 'excel',
  },

  // Python & SQL
  {
    id: 'python-sql-integration',
    title: 'Python and SQL – Integration with Data Analysis',
    tagline: 'Combine Python and SQL for powerful data workflows',
    price: 9.99,
    url: 'https://dlahtalk.gumroad.com/l/ydxlj',
    category: 'python-sql',
  },
  {
    id: 'python-analysts',
    title: 'Python for Analysts',
    tagline: 'Essential Python skills for data professionals',
    price: 9.99,
    url: 'https://dlahtalk.gumroad.com/l/jbjcdx',
    category: 'python-sql',
  },
  {
    id: 'sql-analysts',
    title: 'SQL for Analysts',
    tagline: 'Master SQL queries for data analysis',
    price: 9.99,
    url: 'https://dlahtalk.gumroad.com/l/rycuf',
    category: 'python-sql',
  },

  // Power BI
  {
    id: 'power-bi-dashboards',
    title: 'Power BI – Real-World Dashboards',
    tagline: 'Build professional dashboards with real data scenarios',
    price: 9.99,
    url: 'https://dlahtalk.gumroad.com/l/cmzrw',
    category: 'power-bi',
  },
  {
    id: 'power-bi-cleaning',
    title: 'Power BI – Data Cleaning & Relationships',
    tagline: 'Advanced data modeling and relationship management',
    price: 7.99,
    url: 'https://dlahtalk.gumroad.com/l/fobnh',
    category: 'power-bi',
  },
  {
    id: 'power-bi-bundle',
    title: 'Power BI Bundle',
    tagline: 'Complete Power BI training package',
    price: 10.99,
    url: 'https://dlahtalk.gumroad.com/l/wfcmn',
    category: 'power-bi',
    isBundle: true,
  },

  // Data Cleaning & Prompt Engineering
  {
    id: 'chatgpt-data-cleaning',
    title: 'Using ChatGPT & AI Tools for Data Cleaning & Preparation',
    tagline: 'Leverage AI to streamline your data preparation workflow',
    price: 9.99,
    url: 'https://dlahtalk.gumroad.com/l/tjfxdq',
    category: 'data-cleaning',
  },
  {
    id: 'prompt-engineering',
    title: 'Prompt Engineering for Data Analysts: The Definitive Guide',
    tagline: 'Master AI prompts for data analysis tasks',
    price: 15.99,
    url: 'https://dlahtalk.gumroad.com/l/uwlzc',
    category: 'data-cleaning',
  },

  // Career Bundles
  {
    id: 'starter-kit-bundle',
    title: 'Data Analyst Starter Kit: The Complete Self-Taught Bundle',
    tagline: 'Everything you need to become a self-taught data analyst',
    price: 19.99,
    url: 'https://dlahtalk.gumroad.com/l/vmkvtb',
    category: 'bundles',
    isBundle: true,
  },
];
