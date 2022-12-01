import { Text, Heading, Image, Stack } from "@chakra-ui/react";

export default function About() {
  return (
    <>
      <Stack spacing={3}>
        <Heading
          as="h1"
          size="4xl"
          bgGradient="linear(to-l, blue.400, pink.200)"
        >
          About
        </Heading>
        <Text as="b">Name:王伯雅</Text>
        <Text as="b">Student ID: D08142001</Text>
        <Text as="b">Email: differe94nt@gmail.com</Text>
        <Stack direction="row">
          <Image
            boxSize="400px"
            objectFit="cover"
            src={"./head.jpg"}
            alt="head"
          />
          <Image
            boxSize="400px"
            objectFit="cover"
            src={"./cat.jpg"}
            alt="cat"
          />
          <Image boxSize="400px" src={"./ref.jpg"} alt="ref" />
        </Stack>
      </Stack>

      {/* <h1>About</h1>
      <h1>王伯雅</h1>
      <h1>D08142001</h1>
      <h1>differe94nt@gmail.com</h1>
      <img src={"./head.jpg"} width="600" height="400" alt="一張圖片"></img> */}
    </>
  );
}
