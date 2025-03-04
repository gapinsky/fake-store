const NewCollection = () => {
  return (
    <div className="bg-[url(../src/img/collectionImg.webp)] bg-no-repeat bg-cover bg-top h-full w-full ">
      <div className="flex flex-col items-center justify-center h-full w-full bg-black/30 text-white backdrop-blur-xs">
        <p className="text-7xl tracking-tighter mb-3 text-center">
          New Collection Arrived!
        </p>
        <p className="text-4xl  tracking-tighter">Get ready for 2025!</p>
      </div>
    </div>
  );
};

export default NewCollection;
