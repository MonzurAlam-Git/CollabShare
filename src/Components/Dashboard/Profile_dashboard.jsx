import { useAuth } from "../../Hooks/useAuth";

{
  /* Social link add */
  // Edit implemenetation
}
const Profile_dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-[350px] space-y-8 rounded-2xl bg-white px-6 py-8 shadow-md dark:bg-[#18181B] md:max-w-[350px] lg:w-full">
      {/* profile image & bg  */}
      <div className="relative ">
        <img
          width={350}
          height={150}
          className="h-[150px] w-[350px] rounded-2xl bg-gray-500"
          src="https://i.ibb.co/zFR9cwW/1717737769346.jpg"
          alt="card navigate ui"
        />
        <img
          width={100}
          height={100}
          className="absolute -bottom-12 left-1/2 h-[100px] w-[100px] -translate-x-1/2 rounded-full border-4 border-white bg-gray-400 dark:border-[#18181B]"
          src={user.photoURL}
          alt="card navigate ui"
        />
      </div>
      {/* profile name & role */}
      <div className="space-y-1 pt-8 text-center">
        <h1 className="text-xl md:text-2xl">{user.displayName}</h1>
        <p className="text-sm text-gray-400">Web Developer</p>
      </div>
      {/* post , Co-Workers following  */}
      <div className="flex flex-wrap items-center justify-between px-4">
        <div className="text-center">
          <h5 className="text-xl font-medium">17</h5>
          <p className="text-sm text-gray-400">Projects</p>
        </div>
        <div className="text-center">
          <h5 className="text-xl font-medium">241</h5>
          <p className="text-sm text-gray-400">Co-Workers</p>
        </div>
        <div className="text-center">
          <h5 className="text-xl font-medium">85%</h5>
          <p className="text-sm text-gray-400">Completion</p>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="w-[80%] rounded-full py-2 font-medium text-gray-400 shadow-[0px_0px_10px_#E2DADA] duration-500  hover:scale-95 hover:bg-[#0095FF] hover:text-white hover:shadow-xl dark:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.8)]">
          Edit profile
        </button>
      </div>
    </div>
  );
};

export default Profile_dashboard;
