import React from "react";
import { useState } from "react";
import Mentor from "./MentorGalleryCard";
import Grid from "@material-ui/core/Grid";
import imageA from "../../assets/person-a.jpeg";
import imageB from "../../assets/person-b.jpeg";
import imageC from "../../assets/person-c.jpeg";
import Tag from "./Tag";
import "./MentorGallery.scss";
import "./Tag.scss";
export default function MentorGallery(props) {
  const [enteredTag, setEnteredTag] = useState("");
  const clickHandler = (e) => {
    setEnteredTag(e.target.outerText);
  };
  const people = [
    {
      name: "Priscilla",
      image: imageB,
      tag: "Women in STEM",
      story:
        "As the first girl in my family of immigrants to pursue a degree, there have been no shortage of obstacles along the way. From dealing with losing family members to facing financial hardship, applying to my dream program for university was challenging enough. I didn’t have any guidance from people that looked like me that I could look up to for help or simply reassurance. Though battling these mental barriers was incredibly difficult, as I tackled one challenge at a time, I was able to gain the confidence to be resilient. I worked hard and although didn’t always get the results I hoped for, I began forming a community around me that became my unconditional support network. I realized I attracted the energy I gave to others, so I maintained my values and work ethic to get where I am today. I’d love to chat about my story and experience in hopes to being someone others can now look up to!",
      clipped:
        "As the first girl in my family of immigrants to pursue a degree, there have been no shortage of obstacles along the way.",
    },
    {
      name: "Tristan",
      tag: "Student Exchange",
      image: imageA,
      story:
        "I was born without hands and feet. It’s a rare condition called congenital amputation. Living with that adversity has made me who I am today.",
      clipped:
        "I was born without hands and feet. It’s a rare condition called congenital amputation.",
    },
    {
      name: "Janet",
      tag: "LGBTQ+ Advocate",
      image:
        "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      story:
        "I’m a sociology major by day, and an aspiring DJ by night and I love it.",
      clipped:
        "I’m a sociology major by day, and an aspiring DJ by night and I love it.",
    },
  ];

  return (
    <div class="mentor_gallery">
      <div className="tag_box">
        <a className="tag">
          🔬 <span onClick={clickHandler}>Women in STEM</span>
        </a>
        <a className="tag">
          🌎 <span onClick={clickHandler}>Student Exchange</span>
        </a>
        <a className="tag">
          🌈 <span onClick={clickHandler}>LGBTQ+ Advocate</span>
        </a>
      </div>

      <div class="box">
        <Grid container spacing={2}>
          {people
            .filter((person) => {
              // if (enteredTag === "") {
              //   return person;
              // } else if (person.tag === enteredTag) {
              //   return person;
              // }
              return person
            })
            .map((filteredPerson) => (
              <Grid item xs={12} md={6} lg={4}>
                <Mentor
                  name={filteredPerson.name}
                  image={filteredPerson.image}
                  story={filteredPerson.clipped}
                  tag={filteredPerson.tag}
                  selectFunc={props.selectFunc}
                  setImageFunc={props.setImageFunc}
                  person={filteredPerson}
                />
              </Grid>
            ))}
        </Grid>
      </div>
    </div>
  );
}
