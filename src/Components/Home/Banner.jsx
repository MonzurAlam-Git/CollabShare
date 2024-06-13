import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className=" w-full lg:w-full  py-12 md:py-24 flex justify-center bg-white flex-col lg:py-32 bg-gradient-to-b from-#52C2FF to-white">
      <div className=" px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center text-black">
          {/* Text content */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Streamline Your Team's Workflow with{" "}
              <span className="font-bold text-red-500">Collab</span>Sphere
            </h1>
            <p className="mx-auto max-w-[700px]">
              Effortlessly manage tasks, collaborate seamlessly, and boost
              productivity. CollabSphere is your all-in-one task management
              solution for teams of any size
            </p>
          </div>
          <div className="space-x-4">
            <button className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50">
              <Link to="/dashboard">Lets Explore</Link>
            </button>
          </div>
        </div>
      </div>
      {/* Feature Cards */}
    </section>
  );
};

export default Banner;

{
  /* Make the keypoint reveal one after another */
}
// CollabSphere is more than just a platform; it's a catalyst for change. By fostering collaboration among teams, we ignite innovation and drive transformative outcomes. Experience a space where ideas flourish, creativity thrives, and innovation knows no bounds. Join us in reshaping the future of collaboration, one inspired idea at a time.
