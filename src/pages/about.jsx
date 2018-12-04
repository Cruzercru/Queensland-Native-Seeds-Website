/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
// nodejs library that concatenates classes
import classNames from "classnames";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Layout from 'components/Layout.jsx';

// core components
import ParallaxHeader from "components/Parallax/ParallaxHeader.jsx";
import ParallaxDivider from "components/Parallax/ParallaxDivider.jsx";
// sections for this page
import AboutSection1 from 'sections/about/AboutSection1';
import landingPageStyle from "assets/views/landingPage.jsx";
import withRoot from 'withRoot'
import { StaticQuery, graphql } from 'gatsby'


class AboutPage extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <StaticQuery
                query={graphql`
                    query {
                        backgroundImage: file(relativePath: { eq: "bg1.jpg" }) {
                            childImageSharp {
                                fluid(maxWidth: 1920, quality: 45) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                `}
                render={data => (
                    <>
                        <Layout>
                            <ParallaxHeader filter medium image={data.backgroundImage.childImageSharp.fluid} />
                            <div className={classNames(classes.main, classes.mainRaised)}>
                                <div className={classes.container}>
                                    <AboutSection1 />
                                </div>
                                <ParallaxDivider height={400} image={data.backgroundImage.childImageSharp.fluid}/>
                                <div className={classes.container}>
                                    <AboutSection1 />
                                    <AboutSection1 />
                                    <AboutSection1 />
                                </div>
                            </div>
                        </Layout>
                    </>
                )}
            />
        );
    }
}

AboutPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(landingPageStyle)(AboutPage));