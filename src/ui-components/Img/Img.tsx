import React from "react";

import fallbackImg from "../../misc/image_not_found.jpg";

interface ImgProps extends React.ImgHTMLAttributes<object> {
  alt: string;
}

export const Img: React.FC<ImgProps> = (args) => {
  const [isError, setIserror] = React.useState(false);
  const src = isError ? fallbackImg : args.src;
  const onError = () => {
    setIserror(true);
  };

  return <img {...{ ...args, src, onError, alt: args.alt }} />;
};
