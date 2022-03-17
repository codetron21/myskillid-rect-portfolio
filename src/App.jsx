import React, { useState } from "react";
import CardContainer from "./components/CardContainer";
import ItemProject from "./components/ItemProject";
import LinkProfile from "./components/LinkProfile";
import PhotoProfile from "./components/PhotoProfile";
import Spacer from "./components/Spacer";

const res = {
  image: "/ct-logo.png",
};

const links = [
  {
    id: 0,
    text: "GitHub",
    url: "https://github.com/codetron21",
  },
  {
    id: 1,
    text: "Gitlab",
    url: "https://gitlab.com/adasoraninda",
  },
];

const projects = [
  {
    id: 0,
    title: "GitHubUser App",
    description:
      "Mobile app to view users from github. This app uses github api as its data source.",
    image: "/ss-github-user.png",
    type: "FE",
  },
  {
    id: 1,
    title: "Personal Money Manager",
    description:
      "Mobile app to control/manage budget, expansion and revenue to track your finances. This app has features to filter, sort and view results with diagrams.",
    image: "ss-personal-money-manager.png",
    type: "FE",
  },
  {
    id: 2,
    title: "Student Planner",
    description:
      "Mobile app to organizing school assignments so that students are easy to manage and don't forget their assignments.",
    image: "ss-student-planner.png",
    type: "FE",
  },
  {
    id: 3,
    title: "Simple Core Banking",
    description: "Back end app that have a purpose such as banking app.",
    image: "ss-simple-core-banking.png",
    type: "BE",
  },
];

const App = () => {
  const [linkProfileHover, setLinkProfileHover] = useState({
    list: links.map(() => false),
  });

  return (
    <div style={styles.App}>
      <CardContainer isHeader>
        <PhotoProfile resources={res} />
        <Spacer height={"10px"} />
        <h1>Adadua Karunia Putera</h1>
        <h3>Programmer</h3>
        <Spacer height={"20px"} />
        <div style={styles.LinkProfile}>
          {links.map((l) => (
            <LinkProfile
              key={l.id.toString()}
              index={l.id}
              text={l.text}
              url={l.url}
              isHover={linkProfileHover.list[l.id]}
              onMouseOver={(index) => {
                setLinkProfileHover({
                  list: linkProfileHover.list.map((p, i) =>
                    i === index ? true : p
                  ),
                });
              }}
              onMouseLeave={(index) => {
                setLinkProfileHover({
                  list: linkProfileHover.list.map((p, i) =>
                    i === index ? false : p
                  ),
                });
              }}
            />
          ))}
        </div>
      </CardContainer>
      <div style={styles.Body}>
        <h3>Projects</h3>
        <Spacer height={"20px"} />
        <div style={styles.Projects}>
          {projects.map((p) => (
            <ItemProject
              key={p.id.toString()}
              title={p.title}
              description={p.description}
              image={p.image}
              type={p.type}
            />
          ))}
        </div>
      </div>
      <CardContainer>
        <h2>Thank You</h2>
      </CardContainer>
    </div>
  );
};

const styles = {
  App: {
    backgroundColor: "#F2F2F2",
  },
  Body: {
    display: "flex",
    flexDirection: "column",
    padding: "20px 40px",
    alignItems: "center",
  },
  LinkProfile: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  Projects: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
};

export default App;
