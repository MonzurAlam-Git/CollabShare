import { useAuth } from "../../Hooks/useAuth";
import Banner from "./Banner";
import WhoBenefits from "./WhoBenefits";

const Home = () => {
  const { user } = useAuth();
  console.log("loggedIn User", user?.email);
  return (
    <div className="">
      {/* Banner  */}
      <Banner></Banner>
      <WhoBenefits></WhoBenefits>
    </div>
  );
};

export default Home;
