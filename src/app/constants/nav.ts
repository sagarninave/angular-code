const links = [
  {
    url: "",
    title: "Binding",
    children: [
      { url: "/binding/text-binding", title: "Text Binding" },
      { url: "/binding/property-binding", title: "Property binding" },
      { url: "/binding/class-binding", title: "Class binding" },
      { url: "/binding/style-binding", title: "Style binding" },
      { url: "/binding/event-binding", title: "Event binding" },
      { url: "/binding/two-way-binding", title: "Two Way binding" },
    ],
    access_level: "default"
  },
  { url: "/pipes", title: "Pipes", access_level: "default" },
  { url: "/directives", title: "Directives", access_level: "default" },
  { url: "/services", title: "Services", access_level: "default" },
  {
    url: "/forms",
    title: "Forms",
    children: [
      { url: "/forms/reactive-form-group", title: "Reactive Form Group" },
      {
        url: "/forms/reactive-nested-form-group",
        title: "Reactive Nested Form Group",
      },
      {
        url: "/forms/reactive-form-group-populate-values",
        title: "Reactive Form Group Populate Value",
      },
      { url: "/forms/reactive-form-builder", title: "Reactive Form Builder" },
      {
        url: "/forms/reactive-nested-form-builder",
        title: "Reactive Nested Form Builder",
      },
      {
        url: "/forms/reactive-form-builder-validation",
        title: "Reactive Form Builder Validation",
      },
      { url: "/forms/template-driven-form", title: "Template Driven Form" },
      {
        url: "/forms/template-driven-form-two-way-binding",
        title: "Template Driven Form Two Way Binding",
      },
      {
        url: "/forms/template-driven-form-two-way-binding-validation",
        title: "Template Driven Form Two Way Binding Validation",
      },
    ],
    access_level: "default"
  },
  { url: "/component-interaction", title: "Component Interaction", access_level: "default" },
  { url: "/life-cycle", title: "Life Cycle", access_level: "default" },
  { url: "/user", title: "User Module", access_level: "default" },
  { url: "/auth/signup", title: "Sign Up", access_level: "unauthenticated" },
  { url: "/auth/login", title: "Login", access_level: "unauthenticated" },
];

export default links;
