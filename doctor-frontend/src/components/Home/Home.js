import React from 'react';
import { Grid, Paper, Typography, ButtonBase, makeStyles, Container} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "5px",
    display: 'flex',
    flexDirection: "row",
    justifyContent: "space-between"
  },
  paper: {
    padding: theme.spacing(2),
    flex: '1',
    margin: theme.spacing(1),
    minHeight: 400
 },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

function Home() {

    const css = useStyles();

    return (
      <Container maxWidth='lg' className={css.root}>
        <Paper className={css.paper}>
            <Grid container spacing={2}>
                <Grid item>
                    <ButtonBase className={css.image}>
                        <img className={css.img} alt="complex" src="https://material-ui.com/static/images/grid/complex.jpg" />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1">
                                Standard license
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Full resolution 1920x1080 • JPEG
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                ID: 1030114
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                Remove
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1">$19.00</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>

        <Paper className={css.paper}>
            <Grid container spacing={2}>
                <Grid item>
                    <ButtonBase className={css.image}>
                        <img className={css.img} alt="complex" src="https://material-ui.com/static/images/grid/complex.jpg" />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1">
                                Standard license
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Full resolution 1920x1080 • JPEG
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                ID: 1030114
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                Remove
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1">$19.00</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
      </Container>
    );
}

export default Home
