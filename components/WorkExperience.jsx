const WorkExperience = ({ title, company, dates, responsibilities }) => {
    return (
      <div className="mb-6">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-500">{company} | {dates}</p>
        <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
          {responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default WorkExperience;
  