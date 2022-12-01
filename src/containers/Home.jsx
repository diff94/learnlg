import {  Text, Heading } from "@chakra-ui/react";
export default function Home() {
  // return <h1>Home</h1>;
  return (
    <div>
      <Heading size="lg" fontSize="50px" bgGradient="linear(to-l, yellow.400, pink.200)">
        Home
      </Heading>

      <Text
        as="section"
        fontSize="3rem"
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontWeight="extrabold"
      >
        Welcome to this simple page to explore the complicated languages!
      </Text>
    </div>
  );
}
