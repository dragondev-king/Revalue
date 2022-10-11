import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import DrawerComponent from './DrawerContent';

const useStyles = makeStyles({
  drawerContent: {
    width: 480,
    padding: '20px',
  },
});

export default function SettingDrawer({ open, setOpen }) {
  const classes = useStyles();

  return (
    <>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <div className={classes.drawerContent}>
          <DrawerComponent setOpen={setOpen} />
        </div>
      </Drawer>
    </>
  );
}
