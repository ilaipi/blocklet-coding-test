import { useEffect, useState } from "react";
import { Alert, CircularProgress } from "@mui/material";
import { useSnackbar } from "notistack";
import { keyBy } from "lodash";

import axios from "../libs/api";
import logo from "../logo.svg";

import "./home.css";
import PreviewCard from "./components/preview";
import EditCard from "./components/edit";
import { UserProfile, userProfileFormSchema } from "../types";

enum MODE {
  EDIT = 'edit',
  PREVIEW = 'preview',
}

const userProfileFields = keyBy(userProfileFormSchema, 'field');

function Home() {
  const { enqueueSnackbar } = useSnackbar();
  const [mode, setMode] = useState(MODE.PREVIEW);
  const [loading, setLoading] = useState(true);
  const [userProfile, setUserProfile] = useState<UserProfile>();

  const fetchUserProfile = async () => {
    setLoading(true);
    const profileRes = await axios.get('/api/user');
    const profile = profileRes.data;
    setUserProfile(profile);
    if (!profile) {
      setMode(MODE.EDIT);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const renderNotice = () => {
    if (userProfile) {
      return <></>;
    }
    return <Alert style={{ marginTop: '5px' }} severity="warning">用户未注册，请先完成注册！</Alert>;
  }

  const renderPreview = () => {
    if (mode === MODE.EDIT) {
      return <></>;
    }
    return <PreviewCard userProfile={userProfile} />;
  }

  const save = async (payload: UserProfile) => {
    for (const key of Object.keys(payload)) {
      if (!payload[key as keyof UserProfile]) {
        enqueueSnackbar(`请检查必填项: ${userProfileFields[key].label}`, { variant: 'error' });
        return;
      }
    }
    await axios.post('/api/user', payload);
  };

  const renderEdit = () => {
    if (mode === MODE.PREVIEW) {
      return <></>;
    }
    return <EditCard userProfile={userProfile} save={save} />;
  }

  return (
    <div className="app-content">
      <img src={logo} className="app-logo" alt="logo" />
      {
        loading
          ? <CircularProgress />
          : (
            <>
              { renderNotice() }
              { renderPreview() }
              { renderEdit() }
            </>
          )
      }
    </div>
  );
}

export default Home;
