import React from 'react'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import classNames from 'classnames'
import { Divider } from '@material-ui/core'

// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'

// Images
import abdelghaniImage from 'assets/img/team/abdelghani-tie.jpg'

// YAML data
import introData from 'data/introData.yml'

// Style
import defaultPageStyle from 'assets/jss/material-kit-react/pages/defaultPageStyle.jsx'
class IntroSection extends React.Component {
  render() {
    const { classes } = this.props
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    )

    return (
      <>
        <section className={classes.section}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h2 className={classes.title}>Why treat chronic pain?</h2>
              <p className={classes.description}>
                Chronic pain is one of the most common conditions in the United
                Kingdom, with 2 out of 5 adults suffering its devastating
                consequences at some stage during their life. Chronic pain can
                make enjoying the simplest of life's pleasures challenging. It
                has a detrimental physical and psychological impact not only on
                you but also on your close family and loved ones.
              </p>
              <p className={classes.description}>
                Interventional procedures that are designed to treat chronic
                pain have become increasingly more established in chronic pain
                management across the globe. At Piccadilly Medical, Dr.
                Abdelghani and his team are passionate about offering the
                latest, evidence-based therapies that are personalised. Early
                intervention can help you regain control of your symptoms and
                enjoy life once again.
              </p>
            </GridItem>
          </GridContainer>
        </section>
        <Divider light variant="fullWidth" />
        <section className={classes.section}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <img src={abdelghaniImage} alt="..." className={imageClasses} />
            </GridItem>
            <GridItem xs={12} sm={12} md={8}>
              <h3 className={classes.title}>{introData.abdelghani.title}</h3>

              <p className={classes.description}>
                Dr Mowafak Abdelghani is the founder and lead physician at
                Piccadilly Medical. He is also the Clinical Lead for Chronic
                Pain Services at the Manchester Royal Infirmary, Trafford
                General Hospital and Altrincham General Hospital and a
                Consultant in Pain Medicine and Anaesthesia at Manchester
                University Hospital NHS Foundation Trust.
                {/*                 
                Dr Abdelghani's experience of nationally recognised and guideline supported treatments has come through his specialised training in large NHS trusts in Manchester, and London where he became skilled in interventional pain procedures. He has subsequently developed a diversified portfolio of treatments and therapeutic procedures that further enhances his scope of chronic pain treatment.
                Careful consideration of symptoms will determine the need for the multidisciplinary team input (if the support of psychology and physiotherapy are required).  This will ensure an enhanced choice of treatment or procedure to provide the best outcome for the patient. */}
              </p>
            </GridItem>
          </GridContainer>
        </section>
        <Divider light variant="fullWidth" />
      </>
    )
  }
}

export default withStyles(defaultPageStyle)(IntroSection)