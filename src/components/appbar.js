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
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail'

import Header from './header'

const drawerWidth= 425;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    container: {
        display: 'flex',
    },
    link: {
        textDecoration: 'none',
    },
    brandName: {
        padding: theme.spacing.unit,
        flexGrow: '12',
    },
    navMenuText: {
        textAligin: 'center',
        align: 'right',
        color: theme.palette.common.black,
        flexGrow: '1 0 auto',
        margin: theme.spacing.unit,
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    menuButton: {
        marginRight: 20,
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    hide: {
        display: 'none',
    },
    drawerItems: {
        textAligin: 'center',
        align: 'center',
    },
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

        const drawer = (
            <div>
                {/* <div className={classes.toolbar} /> */}
                <Divider />
                <List>
                    {[ 'Home', 'Events', 'Contact' ].map((text, index) => ( <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>))}
                </List>
            </div>
        );

        return <div className={classes.root}>
            <CssBasline />
            <AppBar position="static" color="default" elevation="0" className={classNames(
                classes.appBar,
                { [classes.appBarShift]: open }
              )}>
              <Toolbar>
                <IconButton color="inherit" aria-label="Open drawer" onClick={this.handleDrawerToggle} className={classNames(classes.menuButton, open && classes.hide)}>
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.brandName} noWrap>
                  <Link className={classes.link}>
                    <Header />
                  </Link>
                </Typography>
                <div className={classes.grow} />
                <Typography>
                  <div className={classes.container}>
                    <Hidden xsDown>
                      <Link className={classes.link}>
                        <h4 className={classes.navMenuText}>Home</h4>
                      </Link>
                    </Hidden>
                    <Hidden xsDown>
                      <Link className={classes.link}>
                        <h4 className={classes.navMenuText}>Events</h4>
                      </Link>
                    </Hidden>
                    <Hidden xsDown>
                      <Link className={classes.link}>
                        <h4 className={classes.navMenuText}>Contact</h4>
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