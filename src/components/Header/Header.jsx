import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import Hidden from '@material-ui/core/Hidden'
import Drawer from '@material-ui/core/Drawer'
// @material-ui/icons
import Menu from '@material-ui/icons/Menu'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/EmailOutlined'
// core components
import headerStyle from 'assets/jss/material-kit-react/components/headerStyle.jsx'
import PicmedLogo from 'assets/img/picmed-logo-text-2.png'

// Data
import siteMetaData from 'data/siteMetaData.yml'
import HeaderLinks from './HeaderLinks.jsx'

class Header extends React.Component
{
  constructor ( props )
  {
    super( props )
    this.state = {
      mobileOpen: false,
    }
    this.handleDrawerToggle = this.handleDrawerToggle.bind( this )
    this.headerColorChange = this.headerColorChange.bind( this )
  }
  handleDrawerToggle ()
  {
    this.setState( { mobileOpen: !this.state.mobileOpen } )
  }
  componentDidMount ()
  {
    if ( this.props.changeColorOnScroll )
    {
      window.addEventListener( 'scroll', this.headerColorChange )
    }
  }
  headerColorChange ()
  {
    const { classes, color, changeColorOnScroll } = this.props
    const windowsScrollTop = typeof window !== 'undefined' && window.pageYOffset
    if ( windowsScrollTop > changeColorOnScroll.height )
    {
      document.body
        .getElementsByTagName( 'header' )[ 0 ]
        .classList.remove( classes[ color ] )
      document.body
        .getElementsByTagName( 'header' )[ 0 ]
        .classList.add( classes[ changeColorOnScroll.color ] )
    } else
    {
      document.body
        .getElementsByTagName( 'header' )[ 0 ]
        .classList.add( classes[ color ] )
      document.body
        .getElementsByTagName( 'header' )[ 0 ]
        .classList.remove( classes[ changeColorOnScroll.color ] )
    }
  }
  componentWillUnmount ()
  {
    if ( this.props.changeColorOnScroll )
    {
      typeof window !== 'undefined' &&
        window.removeEventListener( 'scroll', this.headerColorChange )
    }
  }
  render ()
  {
    const {
      classes,
      color,
      rightLinks,
      leftLinks,
      brand,
      fixed,
      absolute,
    } = this.props
    const appBarClasses = classNames( {
      [ classes.appBar ]: true,
      [ classes[ color ] ]: color,
      [ classes.absolute ]: absolute,
      [ classes.fixed ]: fixed,
    } )
    // Edit this to include logo to left of brand name
    const brandComponent = (
      <Button className={ classes.title }>
        <img src={ PicmedLogo } className={ classes.logo } />
        {/* Remove title text as revised logo has text on side */ }
        {/* { brand } */ }
      </Button>
    )
    return (
      <AppBar className={ appBarClasses }>
        <Toolbar className={ classes.container }>
          { leftLinks !== undefined ? brandComponent : null }
          <div className={ classes.flex }>
            { leftLinks !== undefined ? (
              <Hidden smDown implementation="css">
                { leftLinks }
              </Hidden>
            ) : (
                brandComponent
              ) }
          </div>
          <Hidden mdUp>
            <IconButton
              href='tel:+441614476638'>
              <PhoneIcon />
            </IconButton>
            <IconButton
              href='mailto:info@piccadillymedical.com?Subject=Request%20for%20information' >
              <EmailIcon />
            </IconButton>
          </Hidden>
          <Hidden smDown implementation="css">
            { rightLinks }
          </Hidden>
          <Hidden mdUp>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={ this.handleDrawerToggle }
            >
              <Menu />
            </IconButton>
          </Hidden>

        </Toolbar>
        <Hidden mdUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={ 'right' }
            open={ this.state.mobileOpen }
            classes={ {
              paper: classes.drawerPaper,
            } }
            onClose={ this.handleDrawerToggle }
          >
            <div className={ classes.appResponsive }>
              { leftLinks }
              { rightLinks }
            </div>
          </Drawer>
        </Hidden>
      </AppBar>
    )
  }
}

Header.defaultProp = {
  color: 'white',
  changeColorOnScroll: {
    height: 400,
    color: 'white'
  },
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf( [
    'primary',
    'info',
    'success',
    'warning',
    'danger',
    'transparent',
    'white',
    'rose',
    'dark',
  ] ),
  rightLinks: PropTypes.node,
  leftLinks: PropTypes.node,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // this.props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // this.props.color (see above)
  changeColorOnScroll: PropTypes.shape( {
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf( [
      'primary',
      'info',
      'success',
      'warning',
      'danger',
      'transparent',
      'white',
      'rose',
      'dark',
    ] ),
  } ),
}

export default withStyles( headerStyle )( Header )
