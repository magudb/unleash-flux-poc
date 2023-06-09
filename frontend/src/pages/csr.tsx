import { FlagProvider, useFlag, useFlagsStatus } from "@unleash/nextjs/client";
import { LoadingDots } from "@vercel/examples-ui";
import type { NextPage } from "next";

const ExampleComponent = () => {
  const isEnabled = useFlag("Awesome_new_feature");
  const { flagsReady } = useFlagsStatus();

  if (!flagsReady) {
    return <>Loading</>;
  }

  return <>Feature toggle is: {isEnabled ? "ENABLED" : "DISABLED"}</>;
};

const ClientSideRenderedPage: NextPage = () => (
  <FlagProvider>
    <ExampleComponent />
  </FlagProvider>
);

export default ClientSideRenderedPage;
