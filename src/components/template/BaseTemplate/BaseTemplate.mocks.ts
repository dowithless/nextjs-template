import { BaseTemplateProps } from "./interface";

const base: BaseTemplateProps = {
  message: "world",
  onGreet: (message: string) => {
    console.log(message);
  },
};

export const mockBaseTemplateProps = {
  base,
};
