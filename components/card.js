// Sample card from Airbnb
import { Box, Image, Badge, Heading } from "@chakra-ui/react";

function UserCard(props) {
  const { avatar, userName, followers } = props;

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={avatar} alt="Avatar" />
      <Heading>{userName}</Heading>
      <Heading>{followers}</Heading>
    </Box>
  );
}

export default UserCard;
