import React, { useState } from "react";
import { Box, Grid, Stack } from "@chakra-ui/layout";
import mainStyle from "../styles/main.module.css";
import Head from "next/head";
import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Select,
} from "@chakra-ui/react";

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>AI Chess - Jovan Ilovski</title>
        <link rel="icon" href="/chess.ico" />
      </Head>
      <div className={mainStyle.mainfield}>
        <h1 className={mainStyle.mainheader}>Play Chess With AI</h1>
        <Grid
          gap={2}
          h="100%"
          alignContent="center"
          justifyContent="center"
          textAlign="center"
          p={3}
          w="100%"
          maxW="800px"
          m="auto"
        >
          <Box p={5}>
            <form method="get" action="/chess">
              <Stack spacing="15px">
                <FormControl id="ai">
                  <FormLabel>Stage of the AI</FormLabel>
                  <Select defaultValue="2" name="ai">
                    <option value="1">Stage 1</option>
                    <option value="2">Stage 2</option>
                    <option value="3">Stage 3</option>
                  </Select>
                  <FormHelperText>
                    {
                      "Time needed to complete the moves depends on the browser and computer's processing capabillities."
                    }
                  </FormHelperText>
                </FormControl>

                <FormControl id="time">
                  <FormLabel>Time & Increments per Round</FormLabel>
                  <Select defaultValue="3x2" name="timeControl">
                    <option value="1x0">1 minute no increments</option>
                    <option value="1x2">1 minute 2 seconds increments</option>
                    <option value="3x0">3 minutes no increments</option>
                    <option value="3x2">3 minutes 2 seconds increments</option>
                    <option value="5x3">5 minutes 3 seconds increments</option>
                    <option value="10x0">10 minutes no increments</option>
                    <option value="10x5">
                      10 minutes 10 seconds increments
                    </option>
                    <option value="15x10">
                      15 minutes 10 seconds increments
                    </option>
                    <option value="30x0">30 minutes no increments</option>
                    <option value="30x15">
                      30 minutes 15 seconds increments
                    </option>
                  </Select>
                </FormControl>

                <FormControl id="side">
                  <FormLabel>Side</FormLabel>
                  <Select defaultValue="random" name="side">
                    <option value="random">Random</option>
                    <option value="white">White</option>
                    <option value="black">Black</option>
                  </Select>
                </FormControl>

                <Button type="submit" size="lg" colorScheme="blue">
                  Challenge The AI!
                </Button>
              </Stack>
            </form>
          </Box>
        </Grid>
      </div>
      <h2 className={mainStyle.bottomheader}>
        Created as a Project for the subject Artificial Intelligence in 2022/23
        by Jovan Ilovski.
      </h2>
    </>
  );
};

export default LandingPage;
