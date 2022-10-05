import {
  Flex,
  Text,
  Button,
  Link as StyledLink,
} from "rebass/styled-components";
import { Link as RouterLink } from "react-router-dom";

const BookItem = ({ id, title, author }) => {
  return (
    <Flex key={id} p={3} width="100%" alignItems="center">
      <StyledLink as={RouterLink} to={`/update-book/${id}`} mr="auto">
        {title}
      </StyledLink>
      <Text>{author}</Text>
      <Button ml="5">Remove</Button>
    </Flex>
  );
};

export default BookItem;
