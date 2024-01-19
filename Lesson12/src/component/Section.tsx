import { ReactNode } from "react";

type sectionProp = {
  title?: string;
  children: ReactNode; //ReactNode is use for like children prop//all react is in react node
};
export default function Section({
  title = "my sub heading",
  children,
}: sectionProp) {
  return (
    <section>
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  );
}
