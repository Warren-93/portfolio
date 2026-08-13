const education = [
  {
    title: 'BSc Computing',
    subtitle: 'University of Abertay Dundee/ 2018 - 2021',
    body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    title: 'HND Software Development',
    subtitle: 'Dundee & Angus College / 2016 - 2018',
    body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
];

const experience = [
  {
    title: 'Associate Java Developer',
    subtitle: 'FDM Consultancy / 2022 - 2023',
    body: 'Lisque persius interesset his et, in quot quidam persequeris vim.',
  },
  {
    title: 'Java Developer',
    subtitle: 'Sky(Through FDM) / 2022 - 2023',
    body: 'Lisque persius interesset his et, in quot quidam persequeris vim.',
  },
];

const skills = [
  { name: 'HTML/CSS', percent: 95 },
  { name: 'Bootstrap', percent: 90 },
  { name: 'Java', percent: 85 },
  { name: 'Angular JS', percent: 70 },
  { name: 'React', percent: 70 },
  { name: 'PHP', percent: 60 },
];

const TimelineItem = ({ title, subtitle, body }) => (
  <div>
    <h3 className="font-semibold text-cyan-900 dark:text-cyan-100">{title}</h3>
    <p className="text-sm text-cyan-700 dark:text-cyan-400">{subtitle}</p>
    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{body}</p>
  </div>
);

const SkillBar = ({ name, percent }) => (
  <div>
    <div className="mb-1 flex justify-between text-sm text-neutral-700 dark:text-neutral-300">
      <span>{name}</span>
    </div>
    <div className="h-2 w-full rounded-full bg-cyan-100 dark:bg-cyan-900">
      <div
        className="h-2 rounded-full bg-cyan-600 dark:bg-cyan-400"
        style={{ width: `${percent}%` }}
      />
    </div>
  </div>
);

const Resume = () => (
  <div className="mx-auto max-w-4xl px-6 py-16">
    <h1 className="mb-10 text-center text-3xl font-semibold text-cyan-900 dark:text-cyan-100">
      A summary of My Resume
    </h1>

    <div className="grid gap-10 md:grid-cols-2">
      <div>
        <h2 className="mb-4 text-xl font-semibold text-cyan-800 dark:text-cyan-200">
          My Education
        </h2>
        <div className="flex flex-col gap-6">
          {education.map((item) => (
            <TimelineItem key={item.title} {...item} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="mb-4 text-xl font-semibold text-cyan-800 dark:text-cyan-200">
          My Experience
        </h2>
        <div className="flex flex-col gap-6">
          {experience.map((item) => (
            <TimelineItem key={item.title} {...item} />
          ))}
        </div>
      </div>
    </div>

    <div className="mt-12">
      <h2 className="mb-4 text-xl font-semibold text-cyan-800 dark:text-cyan-200">My Skills</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((skill) => (
          <SkillBar key={skill.name} {...skill} />
        ))}
      </div>
    </div>

    <div className="mt-12 text-center">
      <a
        href="/resume/Resume.pdf"
        download
        className="inline-block rounded-md bg-cyan-600 px-6 py-3 font-medium text-white transition-colors hover:bg-cyan-700"
      >
        Download CV
      </a>
    </div>
  </div>
);

export default Resume;
