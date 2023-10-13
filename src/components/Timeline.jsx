import { Chrono } from "react-chrono";
import { useDonorDrive } from "../contexts/DonorDriveContext";

function Timeline() {
  const { teamData } = useDonorDrive();
  console.log(teamData);
  const timelineItems = [
    {
      title: "Year One: 2016",
      cardTitle: "Raised: $1002",
      cardDetailedText:
        "Our first year, we hosted an Extra Life with just 10 players.",
      media: {
        name: "2016 team",
        source: {
          url: "https://i.imgur.com/KvhN54a.jpg",
        },
        type: "IMAGE",
      },
    },
    {
      title: "Year Two: 2017",
      cardTitle: "Raised: $3029",
      cardSubtitle: "",
      cardDetailedText:
        "Our second year was similarly small, but we set our goal higher and raised more money than the year before.",
      media: {
        name: "2017 team",
        source: {
          url: "https://i.imgur.com/I1Yp4SD.png",
        },
        type: "IMAGE",
      },
    },
    {
      title: "Year Three: 2018",
      cardTitle: "Raised: $5772",
      cardSubtitle: "",
      cardDetailedText:
        "2018 was the first year that we had more than a handful of players. We also moved our location to West Chester University, allowing us to find more players in the collegiate space.",
      media: {
        name: "2018 team",
        source: {
          url: "https://i.imgur.com/ANVrru8.png",
        },
        type: "IMAGE",
      },
    },
    {
      title: "Year Four: 2019",
      cardTitle: "Raised: $11581",
      cardSubtitle: "",
      cardDetailedText:
        "In 2019, we became an official WCU service organization, which helped us access even more resources to make it the best year yet. Pictured here are our captains, but our team grew in size once again. We also piloted a high school team, partnering with a local school to provide guidance and support to a group of high schoolers who raised over $1000.",
      media: {
        name: "2019 team",
        source: {
          url: "https://i.imgur.com/JK9lBCW.jpg",
        },
        type: "IMAGE",
      },
    },
    {
      title: "Year Five: 2020",
      cardTitle: "Raised: $4213",
      cardSubtitle: "",
      cardDetailedText:
        "Despite the challenges of the pandemic, we launched our first alumni event this year, pictured here.",
      media: {
        name: "2020 team",
        source: {
          url: "https://i.imgur.com/KRVACf5.jpg",
        },
        type: "IMAGE",
      },
    },
    {
      title: "Year Six: 2021",
      cardTitle: "Raised: $14635",
      cardSubtitle: "",
      cardDetailedText:
        "Due to the continued pandemic, we piloted a fully remote event. We utilized Discord to stay connected and encourage each other throughout the event.",
      media: {
        name: "2021 team",
        source: {
          url: "https://i.imgur.com/O8xy0yL.jpg",
        },
        type: "IMAGE",
      },
    },
    {
      title: "Year Seven: 2022",
      cardTitle: "Raised: $18961",
      cardSubtitle: "",
      cardDetailedText:
        "In 2022, we hosted a hybrid event. Volunteers hosted hubs at their homes, while other players chose to play solo. We continued to utilize Discord to stay connected to each hub. We hosted a second event at a local gaming studio, Uplink Studios. We were also invited to speak at a 'Best Practices' panel at Extra Life United for our successful collegiate model. Pictured here is our panel.",
      media: {
        name: "2022 panel",
        source: {
          url: "https://i.imgur.com/aRAfrkU.jpg",
        },
        type: "IMAGE",
      },
    },
    {
      title: "Year Eight: 2023",
      cardTitle: `Raised (so far): $${
        Math.round(teamData.sumDonations) || "Unable to load. Please try again."
      }`,
      cardSubtitle: "",
      cardDetailedText:
        "In 2023, we hosted an in-person event at Uplink Studios, with continued hybrid options for players who are no longer local to the area or simply prefer to play solo. We have plans for a secondary event for folks who were not able to play on our Game Day.",
      media: {
        name: "2023 team",
        source: {
          url: "https://i.imgur.com/3dkUbsu.jpg",
        },
        type: "IMAGE",
      },
    },
  ];

  return (
    <div className="timeline-container">
      <Chrono
        items={timelineItems}
        mediaWidth={300}
        cardWidth={300}
        enableBreakPoint
        verticalBreakPoint={650}
        mode="VERTICAL_ALTERNATING"
        theme={{
          primary: "#8dd0f1",
          titleColor: "#8dd0f1",
          secondary: "#fbbf24",
        }}
      />
    </div>
  );
}

export default Timeline;
