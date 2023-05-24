import templates from "../assets/data/template";
import themeConfig from "../assets/data/themeConfig";

export const reducer = (state, action) => {
  switch (action.type) {
    case "SWITCH_THEME":
      if (state.theme === "dark") {
        return { ...state, ...themeConfig.light };
      } else {
        return { ...state, ...themeConfig.dark };
      }
    case "LOCALSTORAGE_CHECK":
      return { ...state, ...action.payload };

    case "UPDATE_ACTIVATION":
      [...state.sections].map((section) => {
        if (section.id === action.payload.id) {
          section.activated = !section.activated;
        }
        return section;
      });
      return { ...state };
    case "UPDATE_DRAGEND": {
      const newItems = [...state.sections];
      const [removed] = newItems.splice(action.payload.source, 1);
      newItems.splice(action.payload.destination, 0, removed);
      return { ...state, sections: newItems };
    }

    case "UPDATE_ACTIVATED_DRAGEND": {
      const newItems = [...state.sections];
      const filtered = newItems.filter((each) => each.activated);

      const sourceIndex = newItems.findIndex(
        (each) => each === filtered[action.payload.source]
      );
      const destinationIndex = newItems.findIndex(
        (each) => each === filtered[action.payload.destination]
      );

      const [removed] = newItems.splice(sourceIndex, 1);
      newItems.splice(destinationIndex, 0, removed);
      return { ...state, sections: newItems };
    }
    case "CHANGE_ITEM": {
      return { ...state, [action.payload.property]: action.payload.value };
    }
    case "UPDATE_SECTION": {
      [...state.sections]
        .find((section) => section.id === action.payload.id)
        .addedItems.push(action.payload.values);

      return { ...state };
    }
    case "DELETE_SECTION_VALUE": {
      const find_section = [...state.sections].find(
        (section) => section.id === action.payload.section_id
      );
      const value_index = find_section.addedItems.findIndex(
        (value) => value.id === action.payload.value_id
      );
      find_section.addedItems.splice(value_index, 1);
      return { ...state };
    }
    case "UPDATE_IDENTITY": {
      state.identity = action.payload;
      return { ...state };
    }
    case "CHANGE_TEMPLATE": {
      state.template = templates.find(
        (template) => template.name === action.payload
      );
      return { ...state };
    }
  }
};
