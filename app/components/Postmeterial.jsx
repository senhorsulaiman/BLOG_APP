
import axios from 'axios';
import Link from 'next/link';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const url = `https://jsonplaceholder.typicode.com/posts`;

const PostMeterial = async () => {

  const { data } = await axios(`${url}`);


  return (
    <div>
     
      <Box sx={{ flexGrow: 1 }}>
        <Grid  container spacing={2} columns={24}>

          {data.map((post) => {

            return (
              <Grid xs={6} key={post.id}>

                <Card >

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {post.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {post.body}
                    </Typography>
                  </CardContent>
                  <CardActions>

                    <Button size="small">  <Link className="btn btn-primary" href={`/post/${post.id}`}> Read More</Link></Button>
                  </CardActions>
                </Card>


              </Grid>
            )
          })}


        </Grid>
      </Box>


    </div>
  )
}

export default PostMeterial