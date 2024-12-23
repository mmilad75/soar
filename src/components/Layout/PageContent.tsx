const PageContent: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <section className="bg-gray h-content overflow-y-auto overflow-x-hidden">
      <main className=" max-w-screen-xl py-6 px-10 mx-auto">{children}</main>
    </section>
  );
};

export default PageContent;
