import Section from "../../components/section";
import { useState } from "react";
import { Input, Textarea, Box, Grid } from "@chakra-ui/react";

const Page = () => {
  return (
    <Grid
      templateColumns="1fr 1fre"
      templateRows="auto 1fr"
      templateAreas={`"center center"
      "left right"`}
    >
      <Grid gridArea="center">
        <Box variants="label">Test</Box>
        <Input />
      </Grid>
      <Grid gridArea="left">
        <Section>
          <Box variants="label"></Box>
          <Input />
          <Box variants="label"></Box>
          <Input />
          <Box variants="label"></Box>
          <Input />
        </Section>
      </Grid>
      <Grid gridArea="right">
        <Section>
          <Box variants="label"></Box>
          <Input />
          <Box variants="label"></Box>
          <Input />
          <Box variants="label"></Box>
          <Input />
        </Section>
      </Grid>
    </Grid>
  );
};

Page.tittle = "Home";
export default Page;
