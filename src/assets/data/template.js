import images from "../imgs";

const templates = [
    {
      name: "clean",
      demoImg: images.templates.cleanTemplate,
      identityStyle: {
        textAlign: "start",
      },
      sectionStyle: {
      }
    },
    {
      name: "modern",
      demoImg: images.templates.modernTemplate,
      identityStyle: {
        textAlign: "center",
      },
      sectionStyle: {
        display: "flex",
        flexDirection: "row"
      }
    },
  ];

  export default templates;