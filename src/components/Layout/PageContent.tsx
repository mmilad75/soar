const PageContent: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <section className="h-content py-6 px-10 bg-gray overflow-y-auto">{children}</section>;
};

export default PageContent;
