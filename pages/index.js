import {
  Box,
  Container,
  Heading,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import UserCard from "../components/card";
import { useEffect, useState } from "react";
import Error from "../components/error";

export default function Home() {
  const [avatar, setAvatar] = useState("");
  const [userName, setUserName] = useState("");
  const [followers, setFollowers] = useState("");
  const [error, setError] = useState(false);
  const [name, setName] = useState("");
  const [following, setFollowing] = useState("");

  const [userInput, setUserInput] = useState("");

  const setData = ({ avatar_url, login, followers, following, name }) => {
    setAvatar(avatar_url);
    setUserName(login);
    setFollowers(followers);
    setFollowing(following);
    setName(name);
  };

  // useEffect(() => {
  //   fetch("https://api.github.com/users/example")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  const handleSearch = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = () => {
    fetch(`https://api.github.com/users/${userInput}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setError(true);
        } else {
          setError(false);
          setData(data);
        }
      });
  };

  return (
    <Container>
      <Box>
        <Heading align="center" mb="15px">
          GitHub User Trading Cards
        </Heading>
      </Box>
      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor="name">GitHub&nbsp;Username:</FormLabel>
        <Input
          id="name"
          type="name"
          value={userInput}
          onChange={handleSearch}
          mr="1em"
        />
        <Button w="200px" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </FormControl>
      <Box mt={14} align="center">
        {error ? (
          <Error></Error>
        ) : (
          <UserCard
            avatar={avatar}
            userName={userName}
            followers={followers}
            following={following}
            name={name}
          />
        )}
      </Box>
    </Container>
  );
}
