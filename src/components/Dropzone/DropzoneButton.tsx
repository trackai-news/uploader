import { useState } from 'react';
import { Text, Image, SimpleGrid } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE, FileWithPath } from '@mantine/dropzone';
import Cookies from 'js-cookie';
import { encode, decode } from 'js-base64';


export function DropzoneButton() {
  const [files, setFiles] = useState<FileWithPath[]>([]);

  function cookieFile() {
    Cookies.set('articleImage', encode(files));
  }

  const previews = files.map((file, index) => {
    const imageUrl = URL.createObjectURL(file);
    return <Image key={index} src={imageUrl} onLoad={() => URL.revokeObjectURL(imageUrl)} />;
  });

  return (
    <div>
      <Dropzone onChange={cookieFile()} accept={IMAGE_MIME_TYPE} onDrop={setFiles}>
        <Text ta="center">Drop article images here</Text>
      </Dropzone>

      <SimpleGrid cols={{ base: 1, sm: 4 }} mt={previews.length > 0 ? 'xl' : 0}>
        {previews}
      </SimpleGrid>
    </div>
  );
}