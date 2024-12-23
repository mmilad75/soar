interface ILoaderProps {
  message?: string;
}
const Loader: React.FC<ILoaderProps> = ({ message }) => {
  return (
    <div role="status" className="text-center">
      <div className="inline-block w-10 h-10 border-4 border-primary border-t-transparent  rounded-full animate-spin"></div>

      {message ? <p className="mt-4 text-primary">{message}</p> : null}

      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loader;
