// CHAKRA:
import { Box, Button, Flex, Heading, Image, Text, Textarea } from '@chakra-ui/react'

// REACT:
import { useState } from 'react'

// REDUX:
import { useGetCurrentUserQuery } from '../redux/services/user'

// IMGS:
import profileImg from '../imgs/profilePhoto.png'

// COMMENTS:
function Comments() {
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState([])

  const { data } = useGetCurrentUserQuery()

  const onClickHandler = () => {
    setComments((comments) => [...comments, comment])
  }

  const deleteHandler = (event, value) => {
    event.target.remove(value)
  }

  const onChangeHandler = (e) => {
    setComment(e.target.value)
  }

  return (
    <Box p={5}>
      {comments.map((text) => (
        <Box border="1px" borderColor="red" mb={2}>
          <Flex borderBottom="1px" borderColor="red" alignItems={'center'} gap={1}>
            <Image width={7} borderRadius="full" m={0} src={profileImg} alt="" />
            <Text>@{data?.username}</Text>
          </Flex>
          <Text>{text}</Text>
          <Flex gap={3} justifyContent={'space-between'}>
            <Flex gap={2}>
              <Button>like</Button>
              <Button>edit</Button>
              <Button onClick={deleteHandler}>delete</Button>
            </Flex>
            <Button>reply</Button>
          </Flex>
        </Box>
      ))}
      <Box border="1px" borderColor="red" mt={2}>
        <Heading fontSize={17}>Comment</Heading>
        <Textarea value={comment} onChange={onChangeHandler} mb={2} />
        <Button onClick={onClickHandler}>Submit</Button>
      </Box>
    </Box>
  )
}

export default Comments
