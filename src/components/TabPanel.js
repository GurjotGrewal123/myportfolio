import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box"

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        transform: "translate(20%, 120%)",
        border: "1px solid red",
        backgroundColor: "black",
        display: 'flex',
        width: "75%",
        WebkitTextFillColor: "white",
        paddingBlock: "10px",
    },
    tabs: {
        overflow: 'visible'
    }
}));

export default function VerticalTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs
                TabIndicatorProps={{ style: { background: '#7FFFD4' } }}
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                <Tab label="Nokia" {...a11yProps(0)} />
                <Tab label="HOIST" {...a11yProps(1)} />
                <Tab label="GAP" {...a11yProps(2)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                Nokia
            </TabPanel>
            <TabPanel value={value} index={1}>
                <span>
                    <li>Technical Business Analyst</li>
                    <li>@ HOIST</li>
                    <li>MAY 2022 - AUG 2022</li>
                    <p>details: [
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dignissim fringilla dui ac mattis.",
                        "Donec in sodales eros. Nulla fermentum, ante in venenatis pellentesque, justo odio viverra lorem, varius posuere erat tortor et magna."</p>
                </span>
            </TabPanel>
            <TabPanel value={value} index={2}>
                GAP
            </TabPanel>
        </div>
    );
}