const PageContent: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <section className="bg-gray overflow-y-auto">
      <main className="h-content max-w-screen-xl py-6 px-10 mx-auto">{children}</main>
    </section>
  );
};

export default PageContent;
