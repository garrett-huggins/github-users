// Sample card from Airbnb
import { Box, Image, Badge, Heading } from "@chakra-ui/react";
import Head from "next/head";

function UserCard(props) {
  const { avatar, userName, followers, following, name } = props;

  if (userName) {
    return (
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        borderColor="black"
      >
        <Heading mb={2}>{userName}</Heading>
        <Image
          border="5px solid"
          borderColor="grey"
          borderRadius="md"
          src={avatar}
          alt="Avatar"
          width="400px"
        />
        {name ? <Heading>Name: {name}</Heading> : <></>}
        <Heading>Followers: {followers}</Heading>
        <Heading>Following: {following}</Heading>
      </Box>
    );
  } else {
    return <Heading>Please Submit User</Heading>;
  }
}

export default UserCard;
