import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
  },
  media: {
    height: 140,
  },
  cune: {
    marginTop: 15,
    marginBottom: 15,
  },
  grey: {
    marginTop: 10,
  },
});

const Projects = () => {
  const classes = useStyles();

  return (
    <div>
      <Card className={`${classes.root} ${classes.cune}`}>
        <CardActionArea href="" target="_blank">
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Cuneiform
            </Typography>
            <CardMedia
              className={classes.media}
              image="../assets/an.png"
              title="Cuneiform icon"
            />
            <Typography variant="body2" color="textSecondary" component="p">
              Cuneiform is a journaling web app based around minimalist design to
              increase creativity. When creating a new journal entry, users can
              choose between a randomized prompt or quote to draw inspiration.
              Users can jot down their ideas and set their post public for the
              world to see, or keep the post private.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Typography variant="body2" color="textSecondary" component="p">
            Github Repo
          </Typography>
        </CardActions>
      </Card>
      <Card className={`${classes.root} ${classes.grey}`}>
        <CardActionArea href="https://greyscale-music.herokuapp.com/" target="_blank">
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              greyscale
            </Typography>
            <CardMedia
              className={classes.media}
              image="../assets/greyscaleicon.png"
              title="greyscale icon"
            />
            <Typography variant="body2" color="textSecondary" component="p">
              greyscale is a music-sharing web app tailored for growing artists.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Typography variant="body2" color="textSecondary" component="p">
            Github Repo
          </Typography>
        </CardActions>
      </Card>
    </div>
  );
};

export default Projects;
