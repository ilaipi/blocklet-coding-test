import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

import { UserProfile } from "../../types";

const styles = {
  details: {
    padding: "1rem",
    borderTop: "1px solid #e1e1e1"
  },
  value: {
    padding: "1rem 2rem",
    borderTop: "1px solid #e1e1e1",
    color: "#899499"
  }
};

export default function ProfileCard(props: { userProfile?: UserProfile }) {
  const { userProfile } = props;
  return (
    <Grid
      container
      maxWidth="xs"
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item sx={{ p: "1.5rem 0rem", textAlign: "center" }}>
        <Typography variant="h6">{userProfile?.username}</Typography>
      </Grid>

      <Grid container>
        <Grid item xs={6}>
          <Typography style={styles.details}>手机号</Typography>
          <Typography style={styles.details}>邮箱</Typography>
        </Grid>
        <Grid item xs={6} sx={{ textAlign: "end" }}>
          <Typography style={styles.value}>{userProfile?.phone}</Typography>
          <Typography style={styles.value}>{userProfile?.email}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
