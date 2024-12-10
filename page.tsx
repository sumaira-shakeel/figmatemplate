const Shopsec = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Blurred background */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm"
        style={{ backgroundImage: "url('/background.jpeg')" }}
      ></div>

      {/* Content */}
      <div className="relative flex flex-col justify-center items-center text-center z-10 p-8">
        <h1 className="text-black text-6xl mb-4 font-bold">Shop</h1>
      </div>
    </div>
  );
};

export default Shopsec;
