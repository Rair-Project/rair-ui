import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      'margin-top': '15px',
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
)

const HexEditor: React.FC<{}> = (props) => {
  const classes = useStyles()

  function FormRow(count: number) {
    let boxes = []
    for (var i = 0; i < count; i++) {
      boxes.push(
        <Grid key={i} item>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
      )
    }

    return (
      <React.Fragment>
        {boxes}
      </React.Fragment>
    )
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={1}>
          <FormRow count={8} />
        </Grid>
        <Grid container item xs={12} spacing={1}>
          <FormRow count={8} />
        </Grid>
        <Grid container item xs={12} spacing={1}>
          <FormRow count={8} />
        </Grid>
      </Grid>
    </div>
  )
}

export default HexEditor
