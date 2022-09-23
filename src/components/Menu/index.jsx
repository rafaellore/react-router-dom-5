import { Link, useHistory } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';

export const Menu = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const history = useHistory();

  function handleClick(href) {
    history.push(href);
  }

  function LinkTab(props) {
    return (
      <Tab
        component="a"
        onClick={(event) => {
          event.preventDefault();
          //eslint-disable-next-line
          handleClick(props.href);
        }}
        {...props}
      />
    );
  }

  return (
    <nav>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        centered
        variant="fullWidth"
      >
        <LinkTab label="HOME" {...a11yProps(0)} href="/" />
        <LinkTab label="Abc" {...a11yProps(1)} href="/abc" />
      </Tabs>
    </nav>
  );
};
