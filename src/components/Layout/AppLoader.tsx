import { Loader } from '@/components/UI';

const AppLoader: React.FC = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Loader message="Logging In" />
    </div>
  );
};

export default AppLoader;
