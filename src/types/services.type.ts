import { ReactElement } from "react";

export type ServiceOverviewItem = {
  title: string;
  description: string;
};

export type TextSection = {
  heading?: string;
  content: string;
};

export type Banner = {
  title: string;
  subtitle?: string;
  imagePath: string;
  overlayColor?: string; // optional z. B. „bg-black/50“
};

export type ServiceDataType = {
  icon: ReactElement;
  title: string;
  text: string;
  bg: string;
  border: string;
  button:{
    bg:string,
    text_color:string
    hover_bg:string
  },
  meta:{
    title:string,
    description:string
  } ,
  callAction:{
    first:string,
    second:{
      title:string,
      subtitle:string
    }
  },
  Image: {
    path: string;
    alt: string;
  };
  path: string;
  banner: Banner;
  service_Overview: ServiceOverviewItem[];
  sections: TextSection[]; // neu: mehrere Absätze statt nur „desc“
};
