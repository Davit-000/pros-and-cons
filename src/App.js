import {ViewList} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";
import {AppBar, Button, Container, CssBaseline, Link, Toolbar, Typography} from "@material-ui/core";
import ProsAndCons from "./ProsAndCons";

const useStyles = makeStyles(theme => ({
  appBar: {
    marginBottom: theme.spacing(5)
  },
  appLogo: {
    height: "24px",
    width: "24px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className="App">
      <CssBaseline/>

      <AppBar position="relative" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.title} noWrap>
            <Button color="inherit" component={Link} href="/" underline="none" disableRipple>
              <ViewList/> Pros & Cons
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>

      <main>
        <Container maxWidth="md">
          <ProsAndCons/>
        </Container>
      </main>
    </div>
  );
}

export default App;
