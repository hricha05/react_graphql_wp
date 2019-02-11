import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = ({
    root: {
        flexGrow: 1,
    },
})

const Footer = ({ data }) => {

}

Footer.PropTypes = {
    data: PropTypes.shape,
}

export default withStyles(style)(Footer)