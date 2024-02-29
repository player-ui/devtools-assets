import React from "react";

interface TextProps {
  children: React.ReactNode;
}

const Text = ({ children }: TextProps) => {
  return <span>{children}</span>;
};

export default Text;
