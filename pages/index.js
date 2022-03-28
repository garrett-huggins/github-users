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

export default function Home() {
  const [avatar, setAvatar] = useState("");
  const [userName, setUserName] = useState("");
  const [followers, setFollowers] = useState("");

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
        console.log(data);
        setData(data);
      });
  };

  return (
    <Container>
      <Box>
        <Heading>GitHub Users</Heading>
      </Box>
      <FormControl>
        <FormLabel htmlFor="name">Name</FormLabel>
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
      <Box>
        <UserCard avatar={avatar} userName={userName} followers={followers} />
      </Box>
    </Container>
  );
}
