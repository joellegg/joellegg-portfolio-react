// <Link to="/"><i className="fa fa-home fa-2x" aria-hidden="true"></i></Link>
// <Link to="/about"><i className="fa fa-info fa-2x" aria-hidden="true"></i></Link>
// <Link to="/projects"><i className="fa fa-product-hunt fa-2x" aria-hidden="true"></i></Link>
// <Link to="/tech"><i className="fa fa-language fa-2x" aria-hidden="true"></i></Link>
// <Link to="/resume"><i className="fa fa-file-text fa-2x" aria-hidden="true"></i></Link>
// <a target="_blank" href="https://www.linkedin.com/in/joel-legg-279a5b58/"><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
// <a href="mailto:joellegg@bellsouth.net"><i className="fa fa-envelope fa-2x" aria-hidden="true"></i></a>
// <a target="_blank" href="https://github.com/joellegg"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a>


import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
    slide: {
        padding: 10,
    },
};

export default class TabsExampleSwipeable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,
        };
    }

    handleChange = (value) => {
        this.setState({
            slideIndex: value,
        });
    };

    render() {
        return (
            <div>
                <Tabs
                    onChange={this.handleChange}
                    value={this.state.slideIndex}
                >
                    <Tab label="Tab One" value={0} />
                    <Tab label="Tab Two" value={1} />
                    <Tab label="Tab Three" value={2} />
                </Tabs>
                <SwipeableViews
                    index={this.state.slideIndex}
                    onChangeIndex={this.handleChange}
                >
                    <div>
                        <h2 style={styles.headline}>Tabs with slide effect</h2>
                        Swipe to see the next slide.<br />
                    </div>
                    <div style={styles.slide}>
                        slide n°2
                    </div>
                    <div style={styles.slide}>
                        slide n°3
                    </div>
                </SwipeableViews>
            </div>
        );
    }
}