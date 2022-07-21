import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Wrap,
} from '@chakra-ui/react'
import { useState } from 'react'
import { useDeleteProjectMutation } from '../redux/services/projects'
import ProjectEdit from './ProjectEdit'

function ProjectResult({ project }) {
  const [deleteProject] = useDeleteProjectMutation()
  const [showEditForm, setShowEditForm] = useState(false)
  return (
    <Box border="1px" borderColor="red" w={200} textAlign="center">
      {showEditForm ? (
        <ProjectEdit project={project} onSuccess={() => setShowEditForm(false)} />
      ) : (
        <Wrap spacing={10}>
          <Box w={200} h={300} display="flex" flexDir="column" justifyContent={'space-between'}>
            <Box>
              <Heading fontSize={17} mt={2} mb={2} px={2}>
                {project.name}
              </Heading>
              <Text fontSize={12}>Description:</Text>
              <Text textAlign={'center'} px={2}>
                {project.description}
              </Text>
            </Box>
            <Box>
              <Box mb={2}>
                <Text>0 Contributions</Text>
                <Text>{project.status}</Text>
              </Box>
              <Flex gap="2" justifyContent={'center'}>
                <Button size="sm" aria-label="icon" onClick={() => setShowEditForm(true)}>
                  📝
                </Button>
                <Button size="sm" onClick={() => deleteProject(project.id)} aria-label="icon">
                  ❌
                </Button>
              </Flex>
            </Box>
          </Box>
        </Wrap>
      )}
    </Box>
  )
}

export default ProjectResult

// WITH OR WITHOUT ACCORDION??

// <Box border="1px" borderColor="red" w={200} textAlign="center">
//       {showEditForm ? (
//         <ProjectEdit project={project} onSuccess={() => setShowEditForm(false)} />
//       ) : (
//         <Wrap spacing={10}>
//           <Box w={200} h={300}>
//             <Accordion allowToggle>
//               <AccordionItem>
//                 <h2>
//                   <AccordionButton>
//                     <Box flex="1" textAlign="left">
//                       {project.name}
//                     </Box>
//                     <AccordionIcon />
//                   </AccordionButton>
//                 </h2>
//                 <AccordionPanel pb={4}>{project.description}</AccordionPanel>
//               </AccordionItem>
//             </Accordion>
//             <Text>{project.status}</Text>
//             <Flex gap="2" justifyContent={'center'}>
//               <Button size="sm" aria-label="icon" onClick={() => setShowEditForm(true)}>
//                 📝
//               </Button>
//               <Button size="sm" onClick={() => deleteProject(project.id)} aria-label="icon">
//                 ❌
//               </Button>
//             </Flex>
//           </Box>
//         </Wrap>
//       )}
//     </Box>
