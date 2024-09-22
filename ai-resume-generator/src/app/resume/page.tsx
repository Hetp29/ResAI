// src/app/resume/page.tsx

'use client';

import { useState } from 'react';

export default function ResumeBuilder() {
  const [jobs, setJobs] = useState([{ title: '', company: '', dates: '' }]);
  const [education, setEducation] = useState([{ school: '', degree: '', dates: '' }]);
  const [skills, setSkills] = useState(['']);

  const addJob = () => setJobs([...jobs, { title: '', company: '', dates: '' }]);
  const addEducation = () => setEducation([...education, { school: '', degree: '', dates: '' }]);
  const addSkill = () => setSkills([...skills, '']);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Create Your Resume</h1>

      {/* Job Experience */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Job Experience</h2>
        {jobs.map((job, index) => (
          <div key={index} className="mb-4">
            <input
              type="text"
              placeholder="Job Title"
              className="border p-2 w-full mb-2"
              value={job.title}
              onChange={(e) => {
                const newJobs = [...jobs];
                newJobs[index].title = e.target.value;
                setJobs(newJobs);
              }}
            />
            <input
              type="text"
              placeholder="Company Name"
              className="border p-2 w-full mb-2"
              value={job.company}
              onChange={(e) => {
                const newJobs = [...jobs];
                newJobs[index].company = e.target.value;
                setJobs(newJobs);
              }}
            />
            <input
              type="text"
              placeholder="Dates"
              className="border p-2 w-full mb-2"
              value={job.dates}
              onChange={(e) => {
                const newJobs = [...jobs];
                newJobs[index].dates = e.target.value;
                setJobs(newJobs);
              }}
            />
          </div>
        ))}
        <button onClick={addJob} className="bg-blue-500 text-white px-4 py-2">Add Job</button>
      </div>

      {/* Education */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="mb-4">
            <input
              type="text"
              placeholder="School Name"
              className="border p-2 w-full mb-2"
              value={edu.school}
              onChange={(e) => {
                const newEducation = [...education];
                newEducation[index].school = e.target.value;
                setEducation(newEducation);
              }}
            />
            <input
              type="text"
              placeholder="Degree"
              className="border p-2 w-full mb-2"
              value={edu.degree}
              onChange={(e) => {
                const newEducation = [...education];
                newEducation[index].degree = e.target.value;
                setEducation(newEducation);
              }}
            />
            <input
              type="text"
              placeholder="Dates"
              className="border p-2 w-full mb-2"
              value={edu.dates}
              onChange={(e) => {
                const newEducation = [...education];
                newEducation[index].dates = e.target.value;
                setEducation(newEducation);
              }}
            />
          </div>
        ))}
        <button onClick={addEducation} className="bg-blue-500 text-white px-4 py-2">Add Education</button>
      </div>

      {/* Skills */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Skills</h2>
        {skills.map((skill, index) => (
          <div key={index} className="mb-4">
            <input
              type="text"
              placeholder="Skill"
              className="border p-2 w-full mb-2"
              value={skill}
              onChange={(e) => {
                const newSkills = [...skills];
                newSkills[index] = e.target.value;
                setSkills(newSkills);
              }}
            />
          </div>
        ))}
        <button onClick={addSkill} className="bg-blue-500 text-white px-4 py-2">Add Skill</button>
      </div>
    </div>
  );
}
