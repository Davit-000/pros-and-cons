import {Card, CardContent, CardHeader, Grid} from "@material-ui/core";
import RList from "./Components/RList";

const ProsAndCons = () => {
  return (
    <Card variant="elevation">
      <CardHeader
        title="Should I eat at McDonald's?"
        titleTypographyProps={{align: 'center'}}
      />

      <CardContent>
        <Grid spacing={2} container>
          <Grid item xs>
            <RList title="Pros"/>
          </Grid>
          <Grid item xs>
            <RList title="Cons"/>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ProsAndCons;
