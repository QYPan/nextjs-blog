import * as React from "react";
import { getMDXDataTest } from "../lib/posts";
import { getMDXComponent } from "mdx-bundler/client";

export async function getStaticProps() {
  const mdxData = await getMDXDataTest();
  console.log(">>> mdxData: ", mdxData);
  return {
    props: {
      mdxData,
    },
  };
}

export default function Test({ mdxData }) {
  const Component = React.useMemo(
    () => getMDXComponent(mdxData.code),
    [mdxData.code]
  );
  return (
    <>
      <header>
        <h1>{mdxData.frontmatter.title}</h1>
        <p>{mdxData.frontmatter.description}</p>
      </header>
      <main>
        <Component />
      </main>
    </>
  );
}
