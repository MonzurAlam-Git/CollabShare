import Title from "../Title";
import UseCase from "./UseCase";

const WhoBenefits = () => {
  const useCases = [
    {
      id: 1,
      title: "Developers",
      img: "https://i.ibb.co/Xbnn01C/jess-morgan-rhmpw-Ab-H7t-Q-unsplash.jpg",
      description:
        "To manage project milestones, track bugs, coordinate code reviews, and integrate with development tools.",
    },
    {
      id: 2,
      title: "Corporate Professionals",
      img: "https://i.ibb.co/CwxK5Kq/annie-spratt-Qckxruozj-Rg-unsplash.jpg",
      description:
        "To organize meetings, delegate tasks, and monitor project progress.",
    },
    {
      id: 5,
      title: "Educators & Students",
      img: "https://i.ibb.co/0ZVrD1D/andrew-neel-cckf4-Ts-HAuw-unsplash.jpg",
      description:
        "To manage coursework, track assignments, and collaborate on projects.",
    },
    {
      id: 6,
      title: "Freelancers",
      img: "https://i.ibb.co/Y0b39R7/ali-morshedlou-WMD64t-Mfc4k-unsplash.jpg",
      description:
        "To juggle multiple clients, track time, and manage deliverables.",
    },

    {
      id: 9,
      title: "Remote Teams",
      img: "https://i.ibb.co/w77FY3f/kornel-mahl-m-V4-Gw-TDD8-Tw-unsplash.jpg",
      description:
        "To coordinate across different time zones and ensure all team members are on the same page.",
    },
  ];

  return (
    <div>
      <Title
        parentText="Diverse Users, Common Benefits: Who's Partaking?"
        childText="Target Audience"
      ></Title>
      <div className="grid lg:flex">
        {useCases.map((x) => (
          <UseCase key={x.id} x={x}></UseCase>
        ))}
      </div>
    </div>
  );
};

export default WhoBenefits;
