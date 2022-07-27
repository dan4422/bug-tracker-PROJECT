import React, { useRef, useState } from 'react'
import { Avatar, Image, Input, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useGetCurrentUserQuery, useImageMutation } from '../redux/services/user'

function ProfileImage() {
  const inputRef = useRef(null)
  const { data, isLoading } = useGetCurrentUserQuery()
  const [profileImage, setProfileImage] = useState('')
  const [loading, setLoading] = useState(false)
  const [addProfileImage] = useImageMutation()
  const uploadImage = async (e) => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'lpejrzfn')
    setLoading(true)

    const res = await fetch(`http://api.cloudinary.com/v1_1/dzxuqjqec/image/upload`, {
      method: 'POST',
      body: data,
    })
    const file = await res.json()
    setProfileImage(file.secure_url)
    const newProfileImage = { profileImage: file.secure_url }
    console.log(newProfileImage)
    addProfileImage(newProfileImage)
    setLoading(false)
  }

  return (
    <div>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          {data?.profileImage ===
          `${data.first_name.charAt(0).toUpperCase()}${data.last_name.charAt(0).toUpperCase()}` ? (
            <Text>{data.profileImage}</Text>
          ) : (
            <Image
              width={95}
              height={95}
              borderRadius="50%"
              border="4px"
              borderColor="rgba(178, 217, 100, 0.765)"
              m={0}
              src={data?.profileImage}
              onClick={() => inputRef.current && inputRef.current?.click()}
              cursor={'pointer'}
            />
          )}
          <Input type="file" onChange={uploadImage} ref={inputRef} display="none" />
        </>
      )}
    </div>
  )
}

export default ProfileImage
