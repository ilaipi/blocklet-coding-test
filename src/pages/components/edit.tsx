import React, { useState } from "react";
import { Grid, TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";

import { UserProfile, userProfileFormSchema } from "../../types";

interface EditCardProps {
  userProfile?: UserProfile;
  save: (payload: UserProfile) => void;
}

export default function EditCard(props: EditCardProps) {
  const { userProfile } = props;
  const [user, setUser] = useState({
    username: userProfile?.username || '',
    phone: userProfile?.phone || '',
    email: userProfile?.email || '',
  });

  const changeField = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  return (
    <Grid
      container
      maxWidth="sm"
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ p: 3 }}
    >
        <Grid
          container
          direction={{ xs: "column" }}
          columnSpacing={5}
          rowSpacing={3}
        >
          {
            userProfileFormSchema.map((row) => (
              <Grid item xs={12} key={row.field}>
                <FormControl fullWidth>
                  <TextField
                    fullWidth
                    required
                    id={row.field}
                    name={row.field}
                    label={row.label}
                    value={user[row.field as keyof UserProfile]}
                    onChange={changeField}
                  />
                </FormControl>
              </Grid>
            ))
          }

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
              onClick={() => props.save(user)}
            >
              保存
            </Button>
          </Grid>
        </Grid>
    </Grid>
  );
}
