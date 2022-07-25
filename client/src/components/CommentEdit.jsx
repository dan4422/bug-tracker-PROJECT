import { Box, Button, Heading, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useUpdateCommentMutation } from '../redux/services/comment'

function CommentEdit({ comment }) {
  const [updateComment] = useUpdateCommentMutation()
  const [form, setForm] = useState({
    name: comment.name,
  })

  const updateField = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    })
  }
  return (
    <div>
      <Box p={5}>
        <Box border="1px" borderColor="red" mt={2}>
          <Heading fontSize={17}>Comment</Heading>
          {/* <Textarea value={comment} onChange={onChangeHandler} mb={2} />
          <Button onClick={onClickHandler}>Update</Button> */}
        </Box>
      </Box>
    </div>
  )
}

export default CommentEdit
