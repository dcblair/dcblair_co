import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography
} from '@material-ui/core';

import { a, useSpring } from 'react-spring';

import ProjectCard from './ProjectCard';

import Cuneiform from '../assets/an.png';
import GreyScale from '../assets/greyscaleicon.png';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 600,
    textAlign: 'left',
    padding: theme.spacing(5),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(0)
    }
  },
  media: {
    height: 60,
    width: 60
  },
  cune: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(5)
  },
  grey: {
    marginTop: theme.spacing(1)
  },
  cardTop: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  repoButtons: {
    display: 'flex',
    justifyContent: 'space-evenly',
    borderRadius: 8,
    padding: theme.spacing('.3'),
    background: 'rgba(210, 231, 253, 0)'
  },
  text: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    letterSpacing: '.03rem'
  }
}));

const Projects = () => {
  const classes = useStyles();

  const cardFade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { mass: 10, tension: 180, friction: 160 }
  });

  return (
    <a.div
      style={cardFade}
    >
      <ProjectCard className={[classes.root, classes.cune]}>
        <CardActionArea href="" target="_blank">
          <CardContent>
            <Grid container className={classes.cardTop}>
              <Typography gutterBottom variant="h5" component="h2">
                Cuneiform
              </Typography>
              <CardMedia
                className={classes.media}
                image={Cuneiform}
                title="Cuneiform icon"
                key="Cuneiform icon"
              />
            </Grid>
            <Typography
              className={classes.text}
              variant="body2"
              component="p"
              style={{ textAlign: 'left' }}
            >
              Cuneiform is a journaling web app based around minimal design to
              increase creativity. When creating a new journal entry, users can
              choose between a randomized prompt or quote to draw inspiration.
              Users can jot down their ideas and set their post public for the
              world to see, or keep the post private.
            </Typography>
          </CardContent>
        </CardActionArea>
        <Card className={classes.repoButtons}>
          <Button onClick={() => window.open('https://github.com/mgcarbonell/cuneiform-frontend', '_blank')}>
            <Typography variant="body1" component="p">
              Frontend
            </Typography>
          </Button>
          <Button onClick={() => window.open('https://github.com/mgcarbonell/cuneiform-backend', '_blank')}>
            <Typography variant="body1" component="p">
              Backend
            </Typography>
          </Button>
        </Card>
      </ProjectCard>
      <ProjectCard className={[classes.root, classes.grey]}>
        <CardActionArea href="https://greyscale-music.herokuapp.com/" target="_blank">
          <CardContent>
            <Grid container className={classes.cardTop}>
              <Typography gutterBottom variant="h5" component="h2">
                greyscale
              </Typography>
              <CardMedia
                className={classes.media}
                image={GreyScale}
                title="greyscale icon"
                key="greyscale icon"
              />
              <Typography
                className={classes.text}
                variant="body2"
                component="p"
                style={{ textAlign: 'left' }}
              >
                greyscale is a music-sharing web app tailored for growing artists. featuring an
                easy-to-use interface, greyscale offers artists and bands a platform to upload
                their own music and explore the music of other emerging artists.
              </Typography>
            </Grid>
          </CardContent>
        </CardActionArea>
        <Card className={classes.repoButtons}>
          <Button onClick={() => window.open('https://github.com/dcblair/greyscale_frontend', '_blank')}>
            <Typography variant="body1" component="p">
              Frontend
            </Typography>
          </Button>
          <Button onClick={() => window.open('https://github.com/dcblair/greyscale_backend', '_blank')}>
            <Typography variant="body1" component="p">
              Backend
            </Typography>
          </Button>
        </Card>
      </ProjectCard>
    </a.div>
  );
};

export default Projects;
