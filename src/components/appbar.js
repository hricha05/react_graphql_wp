import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby'

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

const drawerWidth= 320;

const styles = theme => ({
    root: {
        width: '100%',
        display: 'flex',
    },
    container: {
        display: 'flex',
    },
    link: {
        textDecoration: 'none',
    },
    // menuButton: {
    //     marginLeft: -12,
    //     marginRight: 20,
    // },
    brandName: {
        padding: theme.spacing.unit,
        flexGrow: '12',
    },
    navMenuText: {
        // padding: theme.spacing.unit * 2,
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
    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
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
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
    hide: {
        display: 'none',
    },
});

class SimpleAppBar extends React.Component {
    state = {
        mobileOpen: false,
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    }

    handleDrawerClose = () => {
        this.setState({ open: false });
    }

    render () {
        const { classes } = this.props;
        console.log(this.props);

        const { open } = this.state;

        const drawer = (
            <div>
                <div className={classes.toolbar} />
                <Divider />
                <List>
                    {[ 'Inbox', 'Starred', 'Send email', 'Drafts' ].map((text, index) => ( <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>))}
                </List>
            </div>
        );

        return (
            <div className={classes.root}>
                <CssBasline />
                <AppBar position="static" color="default" elevation="0" className={ classes.appBar }>
                    <Toolbar>
                        <IconButton 
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerToggle}
                            className={classNames(classes.menuButton, open && classes.hide)}>
                            <Hidden smUp>
                                <MenuIcon />
                            </Hidden>
                        </IconButton>
                        <Typography variant="h6" className={classes.brandName}>
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
                            {/* <Link style={{ textDecoration: `none` }}>
                            <h1>Events</h1>
                        </Link>
                        <Link style={{ textDecoration: `none` }}>
                            <h1>Contact</h1>
                        </Link> */}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <nav className={ classes.drawer }>
                        <Hidden smUp implementation="css">
                        <Drawer
                            container={ this.props.container }
                            variant="temporary"
                            anchor='top'
                            open={ this.state.mobileOpen } 
                            onClose={ this.handleDrawerToggle }
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                        <Drawer
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            variant="permanent"
                            open={this.state.mobileOpen}
                            onClose={ this.handleDrawerToggle }
                        >
                        {drawer}
                        </Drawer>
                    </Hidden>
                </nav>
            </div>
        );
    }
}

SimpleAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
    width: PropTypes.string.isRequired,
    theme: PropTypes.object.isRequired,
};

export default compose(withStyles(styles, { withTheme: true }), withWidth(),)(SimpleAppBar);