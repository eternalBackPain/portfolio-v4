const STYLES = {
  Maddocks: {
    container: "bg-neutral-600 text-white",
  },
  Lendlease: {
    container: "bg-lime-200 text-black",
  },
  "University of Technology Sydney": {
    container: "bg-blue-800 text-white",
  },
};

const WorkplaceBanner = ({ workplace, children }) => {
  const styles = STYLES[workplace] || { container: "" };

  return (
    <div className={`rounded-md p-4 ${styles.container || ""}`}>
      <div className="text-2xl font-medium">{workplace}</div>
      <div>{children}</div>
    </div>
  );
};

export default WorkplaceBanner;
