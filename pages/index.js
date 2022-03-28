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

  const [userInput, setUserInput] = useState("");

  const setData = ({ avatar_url, login, followers, following }) => {
    setAvatar(avatar_url);
    setUserName(login);
    setFollowers(followers);
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
        <Heading>GitHub Users</Heading>
      </Box>
      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor="name">Username</FormLabel>
        <Input
          id="name"
          type="name"
          value={userInput}
          onChange={handleSearch}
        />
        <Button type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </FormControl>
      <Box align="center">
        {error ? (
          <Error></Error>
        ) : (
          <UserCard avatar={avatar} userName={userName} followers={followers} />
        )}
      </Box>
    </Container>
  );
}
