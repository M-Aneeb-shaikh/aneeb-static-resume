import Section from './Section';
import WorkExperience from './WorkExperience';

const Resume = () => {
  return (
    <div className="bg-white max-w-4xl mx-auto p-6 rounded-lg shadow-lg">
      <header className="text-center mb-8">
        <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-4">
          <img src="https://avatars.githubusercontent.com/u/160625055?v=4" alt="profile picture" />
        </div>
        <h1 className="text-2xl font-bold">Aneeb Shaikh</h1>
        <p className="text-gray-600">Web Developer</p>
      </header>
      <Section title="Professional Summary">
        <p className="text-gray-700">
          Experienced software engineer with a strong background in web development and a passion for creating
          efficient, scalable, and user-friendly applications. Skilled in React, Node.js, and cloud technologies.
        </p>
      </Section>
      <Section title="Work Experience">
        <WorkExperience
          title="Web Developer Intern"
          company="CODSOFT"
          dates="Apr 2024 - May 2024"
          responsibilities={[
            'Codsoft Web Development Internship. Gained hands-on epxerience building web applications with (HTML, CSS, JavaScript, Bootstrap, TypeScript.',
          ]}
        />
        <WorkExperience
          title="Web Developer Intern"
          company="CODSOFT"
          dates="Apr 2024 - May 2024"
          responsibilities={[
            'Codsoft Web Development Internship. Gained hands-on epxerience building web applications with (HTML, CSS, JavaScript, Bootstrap, TypeScript.',
          ]}
        />
      </Section>

      <Section title="Education">
        <WorkExperience
          title="Bachelor of Information Technology"
          company="University of Sufism & Modern Sciences, Bhitshah"
          dates="2020 - 2024"
          responsibilities={[
            'Codsoft Web Development Internship. Gained hands-on epxerience building web applications with (HTML, CSS, JavaScript, Bootstrap, TypeScript.',
          ]}
        />
        <WorkExperience
          title="Web Developer Intern"
          company="CODSOFT"
          dates="Apr 2024 - May 2024"
          responsibilities={[
            'Codsoft Web Development Internship. Gained hands-on epxerience building web applications with (HTML, CSS, JavaScript, Bootstrap, TypeScript.',
          ]}
        />
      </Section>

    </div>
  );
};

export default Resume;
