const Section = ({ title, children }) => {
    return (
      <div className="mb-8">
        <h2 className="text-xl font-semibold border-b border-gray-300 pb-2 mb-4">{title}</h2>
        {children}
      </div>
    );
  };
  
  export default Section;
  