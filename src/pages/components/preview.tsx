import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";

import { UserProfile } from "../../types";

interface ProfileCardProps {
  userProfile?: UserProfile;
  edit: () => void;
}

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

export default function ProfileCard(props: ProfileCardProps) {
  const { userProfile } = props;
  return (
    <Grid
      container
      maxWidth="sm"
      sx={{ p: 3 }}
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
      <Grid
        container
        justifyContent={{ xs: "center" }}
        item
        xs={6}
      >
        <Button
          sx={{ p: "1rem 2rem", my: 2, height: "3rem" }}
          component="button"
          size="large"
          variant="contained"
          color="secondary"
          onClick={() => props.edit()}
        >
          编辑
        </Button>
      </Grid>
    </Grid>
  );
}
