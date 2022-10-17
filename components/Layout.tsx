import { Container, SimpleGrid } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import React, { PropsWithChildren } from "react";
import { PageMeta, SubscriptionType } from "../types";
import { useSubscription } from "../utils/useSubscription";
import { NavBar } from "./NavBar";

export interface LayoutProps {
  meta?: PageMeta;
}

export const Layout: React.FunctionComponent<
  PropsWithChildren<LayoutProps>
> = ({ children, meta: pageMeta }) => {
  const router = useRouter();
  const subscription = useSubscription();

  const meta = {
    title: "ChordPic | Easily create guitar chord diagrams",
    description: "It has never been easier to create beautiful chord diagrams.",
    cardImage: "/logo.png",
    ...pageMeta,
  };

  console.log({ subscription });

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://chordpic.com${router.asPath}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.cardImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vercel" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.cardImage} />
      </Head>
      {subscription === SubscriptionType.FREE && (
        <Script
          data-ad-client="ca-pub-5764824207547220"
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        />
      )}
      <SimpleGrid row={["100px", null]} spacing="40px">
        <NavBar />
        <Container maxW="container.lg" as="main" mb={12}>
          {children}
        </Container>
      </SimpleGrid>
    </>
  );
};
