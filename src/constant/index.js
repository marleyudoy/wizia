import servicesIcon1 from "../assets/Home/icon/icon1.svg";
import servicesIcon2 from "../assets/Home/icon/icon2.svg";
import servicesIcon3 from "../assets/Home/icon/icon3.svg";

const servicesImages = [servicesIcon1, servicesIcon2, servicesIcon3];

const home = {
  services: [
    {
      id: 1,
      image: servicesImages[0],
      title: "You’re in Control",
      description:
        "aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work.",
    },
    {
      id: 2,
      image: servicesImages[1],
      title: "Infinitely Scalable ",
      description:
        "Train an aiDR on a patch. When you are happy with the results, scale it effortlessly.",
    },
    {
      id: 3,
      image: servicesImages[2],
      title: "Incredibly Flexible",
      description:
        "Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time.",
    },
  ],
};

export { home };
