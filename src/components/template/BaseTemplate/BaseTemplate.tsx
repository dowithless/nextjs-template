import { FC } from "react";
import { BaseTemplateProps } from "./interface";

export const BaseTemplate: FC<BaseTemplateProps> = ({ message, onGreet }) => {
  return (
    <div>
      <p>Greet message: {message}</p>
      <button onClick={() => onGreet?.(`Hello ${message}`)}>Greet</button>
    </div>
  );
};
