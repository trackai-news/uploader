import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
    Space,
  } from '@mantine/core';
  import classes from './UploadForm.module.css';
import { DropzoneButton } from '../Dropzone/DropzoneButton';
import { Textarea } from '@mantine/core';  
import { CategorySelector } from '../CategorySelector/CategorySelector';
import { Tags } from '../Tags/Tags';
import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { encode, decode } from 'js-base64';


  export function UploadFormComponent() {
    const [isLoading, setIsLoading] = useState(false);
    const [articleTitle, setArticleTitle] = useState('')
    const [articleImage, setArticleImage] = useState('')
    const [articleCategory, setArticleCategory] = useState('')
    const [articleDescription, setArticleDescription] = useState('')
    const [articleParagraphs, setArticleParagraphs] = useState('')
    const [articleTags, setArticleTags] = useState('')

    const loginToken = Cookies.get('loginToken')

    if(loginToken === 'value'){

    }
    else if(loginToken === undefined){
        window.location.href = '/'
    }

    function submitArticle(){
        const articleObj = {
            'title': articleTitle,
            'articleImage': Cookies.get('articleImage'),
            'articleCategory': Cookies.get('articleCategory'),
            'articleDescription': articleDescription,
            'articleParagraphs': articleParagraphs,
            'articleTags': Cookies.get('articleTags'),
        }
        console.log(articleObj)
        const tags = articleObj['articleTags']
        console.log(decode(String(tags)))
    }

    return (
      <Container size={420} my={40}>

        <Paper withBorder shadow="xl" p={30} mt={30} radius="xl">
            <TextInput label="Title" placeholder="Article Title" required onChange={(e) => setArticleTitle(e.target.value)} value={articleTitle} />

            <Space h={'xl'}/>

            <Title ta="center" className={classes.title}>
                Image
            </Title>

            <Space h={'xl'}/>

            <DropzoneButton/>

            <Space h={'xl'}/>
            
            <CategorySelector/>

            <Space h={'xl'}/>

            {/* <TextInput label="Title" placeholder="Article Title" required /> */}
            <Textarea
                placeholder="Articlev Preview"
                label="Description"
                autosize
                minRows={2}
                required
                onChange={(e) => setArticleDescription(e.target.value)} value={articleDescription}
            />
            <Textarea
                placeholder="Main Paragraphs"
                label="Paragraphs"
                autosize
                minRows={2}
                required
                onChange={(e) => setArticleParagraphs(e.target.value)} value={articleParagraphs}
            />

            <Space h={'xl'}/>

        

          <Tags/>
          {/* <Button fullWidth mt="xl">
            Upload Story
          </Button> */}
          <Button onClick={() => submitArticle()} fullWidth mt="xl" loading={isLoading} loaderProps={{ type: 'dots' }}>
            Upload Story
          </Button>
        </Paper>
      </Container>
    );
  }