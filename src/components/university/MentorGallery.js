import React from "react";
import { useState } from "react";
import Mentor from "./MentorGalleryCard";
import Grid from "@material-ui/core/Grid";
import imageA from "../../assets/person-a.jpeg";
import imageB from "../../assets/person-b.jpeg";
import "./MentorGallery.scss";
import "./Tag.scss";
export default function MentorGallery(props) {
  const [enteredTag, setEnteredTag] = useState("");
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
        "I was born without hands and feet. It’s a rare condition called congenital amputation. Living with that adversity has made me who I am today. My parents played a vital role in helping me persevere and appreciate myself more when I constantly compared my situation to everyone else's in the world. They're simple, but consistent words of affirmation helped me make peace with how I was going to have to live my life from now on. And my condition didn't stop me. I continued to have a blast in university and finish at the top of my honour role. I partook in every opportunity I wished in university - from a student exchange, to competing in debate competitions. I now work in my dream job no matter the limitations I had when I started. I'd love to talk about my experiences, book a chat if you'd like to learn more!",
      clipped:
        "I was born without hands and feet. It’s a rare condition called congenital amputation.",
    },
    {
      name: "Janet",
      tag: "LGBTQ+ Advocate",
      image:
        "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      story:
        "I’m a sociology major by day, and an aspiring DJ by night and I love it. After constantly being let down by others as I'm not someone they 'expect' to have these interests, really put a toll on me since I felt restricted from something I loved to do solely because I looked a certain way. There came a point where I didn't even bother telling others that I liked to DJ because of the judgmental 'huhs?' I would get afterwards. Even if others didn't know, I kept creating and learning to DJ behind closed doors. Especially during the pandemic, I finally gained the confidence to share what I'd been creating with the rest of the world that helped me feel the pride and excitement I once felt pursuing my interests. After all these years, I've become a more self-driven person who is now prioritizing being her unconditional self in front of everyone she meets. Reach out to me if you'd like to learn more!",
      clipped:
        "I’m a sociology major by day, and an aspiring DJ by night and I love it.",
    },
  ];

  return (
    <div className="mentor_gallery">
      <div className="tag_box">
        <div
          className="tag"
          onClick={() => {
            if (enteredTag === "Women in STEM") {
              setEnteredTag("");
            } else {
              setEnteredTag("Women in STEM");
            }
          }}
        >
          🔬 <span>Women in STEM</span>
        </div>
        <div
          className="tag"
          onClick={() => {
            if (enteredTag === "Student Exchange") {
              setEnteredTag("");
            } else {
              setEnteredTag("Student Exchange");
            }
          }}
        >
          🌎 <span>Student Exchange</span>
        </div>
        <div
          className="tag"
          onClick={() => {
            if (enteredTag === "LGBTQ+ Advocate") {
              setEnteredTag("");
            } else {
              setEnteredTag("LGBTQ+ Advocate");
            }
          }}
        >
          🌈 <span>LGBTQ+ Advocate</span>
        </div>
      </div>

      <div className="box">
        <Grid container spacing={2}>
          {people
            .filter((person) => {
              if (enteredTag === "" || person.tag === enteredTag) {
                return person;
              }
              return null;
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
