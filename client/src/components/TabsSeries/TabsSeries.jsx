import { Tab, Tabs } from "@material-ui/core";
import { Box} from "@mui/material";
import { useState } from "react";
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

export default function TabsSeries(){

    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return(
        <Box sx={{ width: '100%', marginTop:'1.5rem', backgroundColor:'#060d17', color:'#fff'}}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} inkBarStyle={{ background: "#000", height: "5px", marginTop: "-5px" }} aria-label="basic tabs example" >
            <Tab label="Viendo" {...a11yProps(0)} />
            <Tab label="Al dia" {...a11yProps(1)} />
            <Tab label="Pendientes" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
            Series Viendo
        </TabPanel>
        <TabPanel value={value} index={1}>
            Series Vistas
        </TabPanel>
        <TabPanel value={value} index={2}>
            Series Pendientes
        </TabPanel>
      </Box>
    )
}