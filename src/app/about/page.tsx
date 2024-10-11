import Layout from '@components/layout/Layout';
import Image from 'next/image';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

export default function About() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen bg-background">
        <div className="max-w-4xl w-full p-8 rounded-lg shadow-lg text-white bg-black opacity-90">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <div className="md:col-span-1">
            <Image
                src="https://avatars.githubusercontent.com/u/154572400?v=4"
                alt="Mohammed Bensassi"
                width={192}
                height={192}
                className="rounded-full"
              />
            </div>
            <div className="md:col-span-2">
              <h1 className="text-4xl font-bold mb-2 text-primary">Mohammed Bensassi</h1>
              <p className="text-xl mb-4">
                I am an ambitious and driven undergraduate Computer Science student specializing in web development and programming. With a solid foundation in various programming languages and frameworks, I craft beautiful, user-friendly websites and applications. As a quick learner and first-generation student, I take pride in my achievements and aim to be a well-rounded addition to any team.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/Mbensassi2026" target="_blank" rel="noopener noreferrer"><FaGithub size={28} /></a>
                <a href="https://www.linkedin.com/in/mohammed-bensassi/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={28} /></a>
                <a href="mailto:edwardshallowis227@gmail.com"><FaEnvelope size={28} /></a>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between items-start mt-8">
            <div className="flex-1 mr-2">
              <h2 className="text-2xl font-bold mb-2">Skills</h2>
              <ul className="list-disc list-inside text-lg pl-5">
                <li>JavaScript, TypeScript, Python, Java, C#</li>
                <li>React, Next.js, Node.js, Express.js</li>
                <li>HTML, CSS, SCSS, Tailwind CSS</li>
                <li>Database Management (SQL, MongoDB)</li>
                <li>UI/UX Design (Figma)</li>
              </ul>
            </div>
            <div className="flex-1 ml-2">
              <h2 className="text-2xl font-bold mb-2">Education & Certifications</h2>
              <p className="text-lg">
                B.S. in Computer Science, College of Staten Island (Expected: May 2025)<br/>
                <li>Google-Coursera Foundations of Cybersecurityn</li>
                <li>Goldman Sachs/Forage Software Engineering Job Simulation</li>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}