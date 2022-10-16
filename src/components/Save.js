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
        transform: "translate(20%, 60%)",
        border: "1px solid red",
        backgroundColor: "black",
        display: 'flex',
        height: "40vh",
        width: "70%",
        WebkitTextFillColor: "white",
        paddingBlock: "5px",
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
                variant="fixed"
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
                <span className="job-title">Technical Business Analyst @</span>
                <span className="job-company">HOIST</span>
                <div className="job-duration">May 2022 - Aug 2022</div>
                <ul className="job-desc">
                    <li className="job-points">Configured cloud-based ERP and CRM solutions in IFS Application 10 for clients looking to centralize their business' data infrastructure.</li>
                    <li className="job-points">Learned SQL and PL/SQL for its relation to IFS Application 10 and used it in order to create custom objects and lobbies in various different screens.</li>
                    <li className="job-points">Designed and tested Security Roles and their respective Permission Sets and Screen Projections in order to define how different users in our client's business should perform in IFS.</li>
                    <li className="job-points">Performed migration jobs in order to transfer our client's data from old legacy systems into IFS, which allowed for an increased centralized database.</li>
                </ul>
            </TabPanel>
            <TabPanel value={value} index={2}>
                GAP
            </TabPanel>
        </div>
    );
}