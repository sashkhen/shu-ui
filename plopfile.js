export default function (plop) {
  plop.setGenerator("component", {
    description: "New component generator",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name:",
        validate: (value) => !!value || "Must not be empty",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{properCase name}}/__test__/{{properCase name}}.test.tsx",
        templateFile: "plop-templates/component/test.hbs",
      },
      {
        type: "add",
        path: "src/components/{{properCase name}}/{{properCase name}}.module.scss",
        templateFile: "plop-templates/component/styles.hbs",
      },
      {
        type: "add",
        path: "src/components/{{properCase name}}/{{properCase name}}.tsx",
        templateFile: "plop-templates/component/component.hbs",
      },
      {
        type: "add",
        path: "src/components/{{properCase name}}/index.ts",
        templateFile: "plop-templates/component/index.hbs",
      },
    ],
  });
}
