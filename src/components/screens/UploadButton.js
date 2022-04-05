// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// // import PhotoCamera from '@mui/icons-material/PhotoCamera';
// import Stack from '@mui/material/Stack';

// // const Input = styled('input')({
// //   display: 'none',
// // });

// // export default function UploadButtons() {
// //   return (
// //     <Stack direction="row" alignItems="center" spacing={2}>
// //       <label htmlFor="contained-button-file">
// //         <Input accept="image/*" id="contained-button-file" multiple type="file" />
// //         <Button variant="contained" component="span">
// //           Upload
// //         </Button>
// //       </label>
// //       <label htmlFor="icon-button-file">
// //         <Input accept="image/*" id="icon-button-file" type="file" />
// //         <IconButton color="primary" aria-label="upload picture" component="span">
// //           {/* <PhotoCamera /> */}
// //         </IconButton>
// //       </label>
// //     </Stack>
// //   );
// // }
// const uploadPage = () =>{
//   return (
//   <Container>
//   <Row>
//     <Col lg={{ span: 4, offset: 3 }}>
//       <Form
//         action="http://localhost:8081/upload_file"
//         method="post"
//         encType="multipart/form-data"
//         onSubmit={submitHandler}
//       >
//         <Form.Group>
//           <Form.File
//             id="exampleFormControlFile1"
//             label="Select a File"
//             name="file"
//             onChange={e => {
//               setSelectedFiles(e.target.files)
//             }}
//           />
//         </Form.Group>
//         <Form.Group>
//           <Button variant="info" type="submit">
//             Upload
//           </Button>
//         </Form.Group>
//         {error && <Alert variant="danger">{error}</Alert>}
//         {!error && progress && (
//           <ProgressBar now={progress} label={`${progress}%`} />
//         )}
//       </Form>
//     </Col>
//   </Row>
//   </Container>

//   )
// }
