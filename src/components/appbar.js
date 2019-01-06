import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby'

import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles';
import { withWidth } from '@material-ui/core';
import CssBasline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import compose from 'recompose/compose';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import Header from './header'

const drawerWidth= 425;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    container: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    drawerItems: {
        textAligin: 'center',
        align: 'center',
    },
    drawerPaper: {
        width: drawerWidth,
    },
    hide: {
        display: 'none',
    },
    link: {
        textDecoration: 'none',
    },
    list: {
        width: '100%',
        maxWidth: drawerWidth,
        backgroundColor: theme.palette.background.paper,
    },
    menuButton: {
        marginRight: 20,
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    navLink: {
        textAligin: 'center',
        align: 'right',
        color: theme.palette.common.black,
        flexGrow: '1 0 auto',
        margin: theme.spacing.unit,
    },
    title: {
        padding: theme.spacing.unit,
        flexGrow: '12',
        [theme.breakpoints.up('sm')]: {
            fontSize: 12,
        }
    },
    toolbar: theme.mixins.toolbar,
});

class SimpleAppBar extends React.Component {
    state = {
        open: false,
    };

    handleDrawerToggle = () => {
        this.setState({ open: !this.state.open });
    }

    render () {
        const { classes } = this.props;
        console.log(this.props);

        const { open } = this.state;
        console.log(this.state)

        const drawer = <div>
            <Link to="/" className={ classes.link }>
              <List component="nav" className={ classes.list}>
                {['Home', 'Events', 'Contact'].map((text) => (
                  <ListItem alignItems="center" button divider key={text}>
                    <ListItemText primary={text} />
                    <Divider light="true" />
                  </ListItem>
                ))}
              </List>
            </Link>
          </div>

        return <div className={classes.root}>
            <CssBasline />
            <AppBar position="static" color="default" elevation="0">
              <Toolbar>
                <IconButton color="inherit" aria-label="Open drawer" onClick={this.handleDrawerToggle} className={classNames(classes.menuButton, open && classes.hide)}>
                  <MenuIcon />
                </IconButton>
                <Typography variant="" className={ classes.title }>
                        <Link to="/" className={classes.link}>
                        <Header />
                  </Link>
                </Typography>
                <div className={classes.grow} />
                <Typography>
                  <div className={classes.container}>
                    <Hidden xsDown>
                      <Link to="/" className={classes.link}>
                        <h4 className={classes.navLink}>Home</h4>
                      </Link>
                    </Hidden>
                    <Hidden xsDown>
                      <Link to="page-2" className={classes.link}>
                        <h4 className={classes.navLink}>Events</h4>
                      </Link>
                    </Hidden>
                    <Hidden xsDown>
                      <Link className={classes.link}>
                        <h4 className={classes.navLink}>Contact</h4>
                      </Link>
                    </Hidden>
                  </div>
                </Typography>
              </Toolbar>
            </AppBar>
            <Drawer 
                anchor="top" 
                open={open} 
                onClose={this.handleDrawerToggle}
                classes={{ paper: classes.drawerPaper }}>
                <nav className={classes.drawer}>
                        <IconButton 
                            color="inherit" 
                            aria-label="Open drawer" 
                            onClick={this.handleDrawerToggle} 
                            className={classNames(classes.menuButton, open && classes.hide)}>
                    <MenuIcon />
                  </IconButton>
                  {drawer}
                </nav>
            </Drawer>
          </div>
    }
}

SimpleAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
    width: PropTypes.string.isRequired,
    theme: PropTypes.object.isRequired,
};

export default compose(withStyles(styles, { withTheme: true }), withWidth(),)(SimpleAppBar);