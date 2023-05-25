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
  {
    id: "5",
    activated: true,
    title: "Links",
    formItems: [
      { label: "link", type: "text", name: "link" },
    ],
    addedItems: [],
  },
  {
    id: "6",
    activated: true,
    title: "Award",
    formItems: [
      { label: "Award Title", type: "text", name: "title" },
      { label: "Description", type: "textarea", name: "description" },
    ],
    addedItems: [],
  },
  {
    id: "7",
    activated: true,
    title: "Certification",
    formItems: [
      { label: "Certificate License", type: "text", name: "license" },
      { label: "Description", type: "textarea", name: "description" },
    ],
    addedItems: [],
  },
  {
    id: "8",
    activated: false,
    title: "Groups",
    formItems: [
      { label: "Group name", type: "text", name: "group_name" },
      { label: "Description", type: "textarea", name: "description" },
    ],
    addedItems: [],
  },
  {
    id: "9",
    activated: true,
    title: "Publication",
    formItems: [
      { label: "publication", type: "text", name: "publication" },
      { label: "url", type: "text", name: "url" },
      { label: "Description", type: "textarea", name: "description" },
    ],
    addedItems: [],
  },
  {
    id: "10",
    activated: false,
    title: "Patents",
    formItems: [
      { label: "Patent", type: "text", name: "patent" },
      { label: "number", type: "text", name: "number" },
      { label: "url", type: "text", name: "url" },
      { label: "Description", type: "textarea", name: "description" },
    ],
    addedItems: [],
  }
];

export default sections;
