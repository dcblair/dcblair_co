import * as React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import {
  Box,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography
} from '@material-ui/core';

import ProjectCard from './ProjectCard';
import FadeSpring from './FadeSpring';

import Cuneiform from '../assets/an.png';
import GreyScale from '../assets/greyscaleicon.png';
import ProjectButton from './ProjectButton';

const useStyles = makeStyles((theme: Theme) => ({
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
  cardAction: {
    borderRadius: 20,
    marginBottom: theme.spacing(2)
  },
  buttonBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
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
    padding: theme.spacing(0.3),
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

  return (
    <>
      <FadeSpring>
        <ProjectCard className={[classes.root, classes.cune]}>
          <CardActionArea
            href=""
            target="_blank"
            className={classes.cardAction}
          >
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
                increase creativity. When creating a new journal entry, users
                can choose between a randomized prompt or quote to draw
                inspiration. Users can jot down their ideas and set their post
                public for the world to see, or keep the post private.
              </Typography>
            </CardContent>
          </CardActionArea>
          <Box className={classes.buttonBox}>
            <ProjectButton link="https://github.com/mgcarbonell/cuneiform-frontend">
              Frontend
            </ProjectButton>
            <ProjectButton link="https://github.com/mgcarbonell/cuneiform-backend">
              Backend
            </ProjectButton>
          </Box>
        </ProjectCard>
        <ProjectCard className={[classes.root, classes.grey]}>
          <CardActionArea
            href="https://greyscale-music.herokuapp.com/"
            target="_blank"
            className={classes.cardAction}
          >
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
                  greyscale is a music-sharing web app tailored for growing
                  artists. featuring an easy-to-use interface, greyscale offers
                  artists and bands a platform to upload their own music and
                  explore the music of other emerging artists.
                </Typography>
              </Grid>
            </CardContent>
          </CardActionArea>
          <Box className={classes.buttonBox}>
            <ProjectButton link="https://github.com/dcblair/greyscale_frontend">
              Frontend
            </ProjectButton>
            <ProjectButton link="https://github.com/dcblair/greyscale_backend">
              Backend
            </ProjectButton>
          </Box>
        </ProjectCard>
      </FadeSpring>
    </>
  );
};

export default Projects;
