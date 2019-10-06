import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux'
import { increment, decrement } from '../src/actions'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles(theme =>({
  root: {
    padding: theme.spacing(3, 2),
  },
  searchRoot: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    maxWidth: 400,
    margin: 16,
    marginTop: 10,
  },
  input: {
    marginLeft: 16,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    marginTop: 12,
    marginBottom: 12
  },
  title: {
    fontSize: 14
  },
  defineContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-end'
  }
}))

const Index = (props) => {

  const classes = useStyles()

  return (
    <div>
      <Paper className={classes.searchRoot}>
        {/* <IconButton className={classes.iconButton} aria-label="menu">
          <MenuIcon />
        </IconButton> */}
        <InputBase
          className={classes.input}
          placeholder="Search Dictionary"
          inputProps={{ 'aria-label': 'Search Dictionary' }}
        />
        <IconButton className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>

      <Container maxWidth="sm">
        <Paper className={classes.root}>
          <div className={classes.defineContainer}>
            <Typography variant="h5" component="h3">
              금요일 
            </Typography>
            <Typography variant="h5" component="h3">
              [金曜日]
            </Typography>
          </div>
          <Divider className={classes.divider} orientation="horizontal" />
          <div>
            <Typography component="p">
              Noun
            </Typography>
            <Typography component="p">
              <span>1</span> Friday
            </Typography>
          </div>
        </Paper>
      </Container>
    </div>
  )
}

Index.getInitialProps = ({ store, isServer }) => {
  store.dispatch(increment(isServer))
}

const mapStateToProps = state => {
  return {
    counter: state
  }
}

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)
