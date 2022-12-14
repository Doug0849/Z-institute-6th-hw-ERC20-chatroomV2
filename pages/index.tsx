import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import Nav from "../components/Nav";
import styles from "../styles/Home.module.css";
import { Text, VStack } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ERC20 Chatroom App</title>
        <meta
          name="description"
          content="Generated by @rainbow-me/create-rainbowkit"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav></Nav>
      <VStack>
        <Text mt="10px" fontSize="3xl" style={{ fontWeight: "bold" }}>
          Hello Wellcome to chatroom V2.
        </Text>
        <Text fontSize="2xl">
          Now, you can free mint YTC token in Token Page, and spend YTC token in
          chatroom,
        </Text>
        <Text fontSize="2xl">you don't need to spend any more ETH.</Text>
      </VStack>
    </>
  );
};

export default Home;
