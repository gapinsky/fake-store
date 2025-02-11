const HomeGrid = () => {
  return (
    <div className="flex flex-col  w-full items-center py-8">
      <p className="text-4xl font-bold mb-4 ">Popular products</p>
      <div className="grid grid-flow-col-dense gap-8 place-content-center">
        <div className="w-[200px] h-[200px] bg-blue-500"></div>
        <div className="w-[200px] h-[200px] bg-blue-500"></div>
        <div className="w-[200px] h-[200px] bg-blue-500"></div>
        <div className="w-[200px] h-[200px] bg-blue-500"></div>
        <div className="w-[200px] h-[200px] bg-blue-500"></div>
        <div className="w-[200px] h-[200px] bg-blue-500"></div>
      </div>
    </div>
  );
};

export default HomeGrid;
