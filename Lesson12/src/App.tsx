import { useState } from "react";
import Counter from "./component/Counter";
import Heading from "./component/Heading";
import Section from "./component/Section";
import List from "./component/List";

export default function App() {
  const [count, setCount] = useState<number>(0); // if the state has no value put in  union type like null or undefined//you dont need to <number> because TS will infer it from the value
  function renderStuff(item: string) {
    return <div className="gold">{item}</div>;
  }
  return (
    <div>
      <Heading title="heelo" />
      <Section>
        <h1>THIS SECTION</h1>
        <Counter setCount={setCount}>the count is {count}</Counter>
      </Section>
      <div>
        <List
          items={["coffee🥤 ", "dragon🐉", "code💻 "]}
          render={renderStuff}
        />
      </div>
      <div>
        <List
          items={["coffee🥤 ", "dragon🐉", "code💻 "]}
          render={(item: string) => <div>{item}</div>}
        />
      </div>
    </div>
  );
}
