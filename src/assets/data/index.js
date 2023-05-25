import identity from "./identity"
import sections from "./sections"
import template from "./template"
import themeConfig from "./themeConfig"

const settings = {
    ...themeConfig.dark,
    template: template[0],
    sections: sections,
    identity: identity,
    isPreview: false,
}

export default settings