import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';
import Cuneiform from '../assets/an.png';
import GreyScale from '../assets/greyscaleicon.png';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    textAlign: 'left',
    padding: 20,
  },
  media: {
    height: 70,
    width: 70,
  },
  cune: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(5),
  },
  grey: {
    marginTop: theme.spacing(4),
  },
  cardTop: {
    display: 'flex',
    alignItems: 'center',
  },
  repoButtons: {
    display: 'flex',
    justifyContent: 'space-evenly',
    borderRadius: 8,
    padding: theme.spacing('.3'),
    background: 'rgba(210, 231, 253, 0)',
  },
  text: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    letterSpacing: '.03rem',
  },
}));

const Projects = () => {
  const classes = useStyles();

  return (
    <div>
      <Card className={`${classes.root} ${classes.cune}`}>
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
      </Card>
      <Card className={`${classes.root} ${classes.grey}`}>
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
          <Button onClick={() => window.open('https://github.com/dcblair/greyscale-frontend', '_blank')}>
            <Typography variant="body1" component="p">
              Frontend
            </Typography>
          </Button>
          <Button onClick={() => window.open('https://github.com/dcblair/greyscale-backend', '_blank')}>
            <Typography variant="body1" component="p">
              Backend
            </Typography>
          </Button>
        </Card>
      </Card>
    </div>
  );
};

export default Projects;
