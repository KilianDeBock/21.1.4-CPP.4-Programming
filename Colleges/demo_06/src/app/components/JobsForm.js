import { useState } from "react";

const jobs = [
  "Full-Stack Developer",
  "Software Engineer",
  "Freelance .Net Developer",
  "Project Manager",
  "Freelance C++",
];

const frameworks = ["Angular", "React", "Vue", "Ruby on Rails", "TypeScript"];

const JobsForm = () => {
  const [job, setJob] = useState(jobs[0]);
  const [selectedFrameworks, setSelectedFrameworks] = useState([frameworks[0]]);
  const [files, setFiles] = useState([]);

  const handleOnSubmit = (ev) => {
    ev.preventDefault();
    alert(`Hello ${job}!`);
  };

  const handleJobOnChange = (ev) => {
    setJob(ev.target.value);
  };

  const handleFrameworksOnChange = (ev) => {
    const values = [...ev.target.selectedOptions].map((option) => option.value);
    setSelectedFrameworks(values);
  };

  const handleFilesOnChange = (ev) => {
    setFiles((prevState) => [
      ...prevState,
      Array.prototype.slice.call(ev.target.files),
    ]);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <label>
        Select the Job you prefer:
        <select value={job} onChange={handleJobOnChange}>
          {jobs &&
            jobs.map((job, id) => (
              <option key={id} value={job}>
                {job}
              </option>
            ))}
        </select>
      </label>
      <label>
        Select the Frameworks you prefer:
        <select
          multiple={true}
          value={selectedFrameworks}
          onChange={handleFrameworksOnChange}
        >
          {frameworks &&
            frameworks.map((framework, id) => (
              <option key={id} value={framework}>
                {framework}
              </option>
            ))}
        </select>
      </label>
      <label>
        Attach files:
        <input type="file" multiple={true} onChange={handleFilesOnChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default JobsForm;
