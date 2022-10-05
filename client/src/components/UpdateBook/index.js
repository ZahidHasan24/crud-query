import BookForm from "../Shared/BookForm";
import Container from "../Shared/Container";
import { Box, Heading, Flex } from "rebass/styled-components";
import { useParams, useHistory } from "react-router-dom";
import Loader from "react-loader-spinner";
import { getBook, updateBook } from "../../service";
import { useQuery, useMutation } from "react-query";

const UpdateBook = () => {
  const { id } = useParams();
  const history = useHistory();

  const { data, error, isLoading, isError } = useQuery(
    ["book", { id }],
    getBook
  );
  const { mutateAsync, isLoading: isMutating } = useMutation(updateBook);

  const onFormSubmit = async (formData) => {
    await mutateAsync({ ...formData, id });
    history.push("/");
  };

  if (isLoading) {
    return (
      <Container>
        <Flex py="5" justifyContent="center">
          <Loader type="ThreeDots" color="#cccccc" height={30} />
        </Flex>
      </Container>
    );
  }

  if (isError) {
    return (
      <Container>
        <Flex py="5" justifyContent="center">
          Error: {error.message}
        </Flex>
      </Container>
    );
  }

  return (
    <Container>
      <Box
        sx={{
          py: 3,
        }}
      >
        <Heading sx={{ marginBottom: 3 }}>Update Book</Heading>
        <BookForm
          defaultValues={data}
          onFormSubmit={onFormSubmit}
          isLoading={isMutating}
        />
      </Box>
    </Container>
  );
};
export default UpdateBook;
