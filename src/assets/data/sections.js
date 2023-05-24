const sections = [
  {
    id: "1",
    activated: true,
    title: "Education",
    formItems: [
      { label: "school", type: "text", name: "school" },
      { label: "degree", type: "text", name: "degree" },
      { label: "field of study", type: "text", name: "field" },
      { label: "location", type: "text", name: "location" },
    ],
    addedItems: [
      {
        id: "1",
        school: "demo university school and collete",
        degree: "bachelor of science",
        field: "name of subject",
        location: "location",
      },
    ],
  },
  {
    id: "2",
    activated: true,
    title: "Experience",
    formItems: [
      { label: "position", type: "text", name: "position" },
      { label: "company name", type: "text", name: "company" },
      { label: "location", type: "text", name: "location" },
      { label: "description", type: "text", name: "description" },
    ],
    addedItems: [
      {
        id: "1",
        position: "demo position",
        company: "xyz company",
        location: "location",
        description:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit iaculis, et parturient erat cum mollis malesuada porttitor curabitur, interdum magnis lectus ultricies mus felis nunc. Scelerisque cras eu faucibus morbi mattis litora tellus volutp",
      },
    ],
  },
  {
    id: "3",
    activated: true,
    title: "Skills",
    formItems: [
      { label: "Skill", type: "text", name: "skill" },
      {
        label: "Years of experience",
        type: "select",
        options: [
          "1 year",
          "2 years",
          "3 years",
          "4 years",
          "5 years",
          "6 years",
          "7 years",
          "10+ years",
        ],
        name: "experience",
      },
    ],
    addedItems: [],
  },
  {
    id: "4",
    activated: false,
    title: "Soft Skills",
    formItems: [{ label: "Skills", type: "text", name: "skills" }],
    addedItems: [],
  },
];

export default sections;
