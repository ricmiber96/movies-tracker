import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
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

export default function TabsMovies(){

    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return(
        <Box sx={{ width: '100%', marginTop:'1.5rem', backgroundColor:'#060d17', color:'#fff'}}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs sx={{display:'flex', alignItems: 'center',alignContent: 'center',justifyContent: 'center', width:'100%'}} value={value} 
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="basic tabs example" >
            <Tab style={{color:'#fff'}} label="Pendientes" {...a11yProps(0)} />
            <Tab  style={{color:'#fff'}} label="Vistas" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
            Peliculas Pendientes
        </TabPanel>
        <TabPanel value={value} index={1}>
            Peliculas Vistas
        </TabPanel>
      </Box>
    )
}