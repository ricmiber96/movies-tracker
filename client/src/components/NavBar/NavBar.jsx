import {React,useEffect,useState} from 'react'
import Main from "../../views/Main";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { AppBar, Box, Button, CssBaseline, Divider, Drawer, Grid, Hidden, IconButton, List, ListItem, ListItemIcon, ListItemText, MenuItem, Toolbar, Typography } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';

//ICONS
// import MailIcon from '@material-ui/icons/Mail';
import {BiCameraMovie} from 'react-icons/bi';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox'
import PoolIcon from '@material-ui/icons/Pool';
// import HomeIcon from '@material-ui/icons/Home';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import TodayIcon from '@material-ui/icons/Today';
import LogoutIcon from '@mui/icons-material/Logout';
import ProfileAvatar from '../Profile/ProfileAvatar';
import Profile from '../../views/Profile';
import WatchListMovies from '../../views/WatchListMovies';
import WatchListSeries from '../../views/WatchListSeries';

  const DRAWER_WIDTH = 240
  const useStyles = makeStyles((theme)=>({

      root:{
          display:'flex',
      },
      drawer:{
          [theme.breakpoints.up('sm')]: {
              width: 0,
              flexShrink: 0,
          },
      },
      logo:{
          maxHeight:'80px',
          verticalAlign:'middle',
          margin:'.5em',
          [theme.breakpoints.down('xs')]:{
            verticalAlign: 'middle',
            display: 'inline-block',       
          }
      },
      link:{
          color:'#fbcc49',
          textDecoration:'none',
          marginRight:'15px',
          '&:hover':{
              color:'#cda619',
              textDecoration:'none'
          },
          [theme.breakpoints.down('xs')]:{
              display:'none',
          }
      },
      appBar: {
          [theme.breakpoints.up('sm')]: {
            width: '100%',
            marginLeft: DRAWER_WIDTH,
          },
          backgroundColor:'#060d17',
        },
        menuButton: {
          marginRight: theme.spacing(2),
          fontSize:90,
          [theme.breakpoints.up('sm')]: {
            display: 'none',
          },
        },
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        drawerPaper: {
          width: DRAWER_WIDTH,
          [theme.breakpoints.up('sm')]: {
            display: 'none',
          },
        },
        content: {
          marginTop:'2rem',
          display: 'flex',
          height:'100vh',
        //   [theme.breakpoints.up('sm')]: {
        //     width: '100%',
           
        //   },
          padding: theme.spacing(2),
        },
  }))  

export default function NavBar(){
    
    const classes = useStyles();
    const theme = useTheme();
    const [user,setUser] = useState([])
    const [mobileOpen, setMobileOpen] = useState(false);
    const container = window !== undefined ? ()=> window.document.body : undefined
    const [anchor,setAnchor] = useState(null)
    const [anchor2,setAnchor2] = useState(null)


    const handleMobile = () =>{
        setMobileOpen(!mobileOpen)
        console.log('click');
    }

    const handleClick = (e)=>{
      setAnchor(e.currentTarget)
    }

    const handleClose = () =>{
        setAnchor(null)
    }

    const handleClick2 = (e)=>{
        setAnchor2(e.currentTarget)
    }
  
    const handleClose2 = () =>{
      setAnchor2(null)
    }

    const [opened, setOpened] = useState();

    const openMenu = (item) => () =>{
        if (opened == item.id){
            setOpened()
        } else {
            setOpened(item.id)
        }
    }

    const drawerMenu = (
        <div>
            <div className={classes.toolbar}>
                <Divider/>
                <Grid item xs={12} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', marginTop:'1rem'}}>
                    <ProfileAvatar imgUrl={""} width={50} height={50}/>
                    <Typography variant="h7">{user.first_name != "" ? user.first_name : "Username" }</Typography>
                </Grid>
                
                <List>
                    {/* {
                        menuItems.map((item,i)=>{
                            return item.nestedItems.length > 0 ? 
                            nestedMenuItem(item)
                            :
                            <ListItem component={Link} to={item.link} button key={item.text}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItem> 
                        })
                    } */}
                </List>
            </div>
        </div>
    )

    return(
        <>
        <Router>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleMobile}
                            className={classes.menuButton}
                            >
                            <MenuIcon />
                        </IconButton>
                        <Link className={classes.link} to="/">
                            <BiCameraMovie size={40}/>
                        </Link>
                    <Box xs={12} style={{position:'absolute',display:'flex',right:'0', marginRight:'1.5rem'}}>
                        <ProfileAvatar className={classes.link}/>
                        <Button component={Link} className={classes.link} to="/profile">
                            Mi perfil
                        </Button>
                        <Typography variant="h7">
                                <Button className={classes.link} onClick={handleClick} to="">
                                    WatchList
                                </Button>
                                <Menu
                                keepMounted anchorEl={anchor} 
                                open={Boolean(anchor)} 
                                onClose={handleClose}
                                getContentAnchorEl={null}
                                variant="menu"
                                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                                transformOrigin={{ vertical: "top", horizontal: "center" }}>
                                    <MenuItem variant="h7" component={Link} to="/watchlist/movies" onClick={handleClose}><Typography variant="h7">Peliculas</Typography></MenuItem>
                                    <MenuItem variant="h7" component={Link} to="/watchlist/series" onClick={handleClose}><Typography variant="h7">Series</Typography></MenuItem>
                                </Menu>
                            </Typography>
                        {/* <Typography variant="h7" className={classes.link} onClick={handleClick}>
                            WatchList
                        <Menu    
                            keepMounted anchorEl={anchor} 
                            open={Boolean(anchor)} 
                            onClose={handleClose}
                            getContentAnchorEl={null}
                            variant="menu"
                            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                            transformOrigin={{ vertical: "top", horizontal: "center" }}>
                            <MenuItem variant="h7" component={Link} to="/watchlist/movies" onClick={handleClose}><Typography variant="h7">Peliculas</Typography></MenuItem>
                            <MenuItem variant="h7" component={Link} to="/watchlist/series" onClick={handleClose}><Typography variant="h7">Series</Typography></MenuItem>
                        </Menu>
                        </Typography> */}
                    </Box>
                </Toolbar>
            </AppBar>

            {/* DRAWER MENU */}
            <nav>
                <Hidden smUp implementation="css">
                    <Drawer
                    container={container}
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={mobileOpen}
                    onClose={handleMobile}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    >
                    {drawerMenu}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open
                    >
                    {drawerMenu}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <Routes>
                    <Route exact path="/" element={<Main/>}></Route>
                    <Route path="/profile" element={<Profile/>}></Route>
                    <Route path="/watchlist/movies" element={<WatchListMovies/>}></Route>
                    <Route path="/watchlist/series" element={<WatchListSeries/>}></Route>
                </Routes>
            </main>
        </Router>
        </>
    )
}