import React from "react";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import styled from "styled-components";

const WorkText = styled.div`
top: 0;
position: absolute;
padding-left: 1rem;
`

const TabPanel = (props) => {
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
                    <WorkText>
                        <Typography>{children}</Typography>
                    </WorkText>
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

const a11yProps = (index) => {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`
    };
}

const TabContainer = styled.div`
transform: translate(20%, 60%);
backgroundColor: black;
color: white;
display: flex;
height: 40vh;
width: 70%;
WebkitTextFillColor: white;
paddingBlock: 5px;

.tabs{
    overflow: visible;
}

#job-links{
    text-decoration: none;
    color: #7FFFD4;
    font-weight: 600;
    font-size: 1.3rem;
}


.job-points {
    padding: 0.3rem;
    ::marker {
    content: '▹';
    color: #7FFFD4;
    }
    ::before{
        content: "";
        display: inline-block;
        width: 0.5rem;
        height: 1rem;
    }
}

.job-title{
    font-size: 1.1rem;
}

.job-desc{
    padding-top: 1rem;
    font-weight: 300;
}

`

const WorkTabs = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <TabContainer>
            <Tabs
                TabIndicatorProps={{ style: { background: '#7FFFD4' } }}
                orientation="vertical"
                variant="fixed"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className="tabs"
            >
                <Tab label="Nokia" {...a11yProps(0)} />
                <Tab label="HOIST" {...a11yProps(1)} />
                <Tab label="GAP" {...a11yProps(2)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <span className="job-title">Security Software Developer @ </span>
                <span className="job-company"><a id="job-links" href="https://www.nokia.com/" target="_blank">NOKIA</a></span>
                <div className="job-duration">Jan 2023 - Apr 2023</div>
                <ul className="job-desc">
                    <li className="job-points">Maintained CKEY, an extension to a free and open-source software (Keycloak), that provides Web Single Sign-On (SSO) and other identity and access management related functions for RESTful web services, web apps, and mobile.</li>
                    <li className="job-points">Performed and documented Quarkus CKEY load dimensioning tests in an Agile environment for vertical, horizontal and user scalability to identify resource or software bottlenecks.</li>
                    <li className="job-points">Provided bugs, defects, and enhancements support for product teams that implement CKEY by investigating and updating codebase based on the acquired solution.</li>
                </ul>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <span className="job-title">Technical Business Analyst @ </span>
                <span className="job-company"><a id="job-links" href="https://hoist.tech//" target="_blank">HOIST</a></span>
                <div className="job-duration">May 2022 - Aug 2022</div>
                <ul className="job-desc">
                    <li className="job-points">Configured cloud-based ERP and CRM solutions in IFS Application 10 for clients looking to centralize their business' data infrastructure.</li>
                    <li className="job-points">Learned SQL and PL/SQL for its relation to IFS Application 10 and used it in order to create custom objects and lobbies in various different screens.</li>
                    <li className="job-points">Designed and tested Security Roles and their respective Permission Sets and Screen Projections in order to define how different users in our client's business should perform in IFS.</li>
                    <li className="job-points">Performed migration jobs in order to transfer our client's data from old legacy systems into IFS, which allowed for an increased centralized database.</li>
                </ul>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <span className="job-title">Merchandise Handler @ </span>
                <span className="job-company"><a id="job-links" href="https://www.gapcanada.ca/" target="_blank">GAP</a></span>
                <div className="job-duration">June 2021 - Aug 2021</div>
                <ul className="job-desc">
                    <li className="job-points">Showed the ability of adapting quickly to my surroundings by moving and restocking merchandise in a large fast paced working environment.</li>
                    <li className="job-points">Acquired teamwork skills by assisting my various team leaders to move working stations in order to prepare a safe working environment for my other colleagues.</li>
                    <li className="job-points">Demonstrated flexibility by prioritizing certain tasks and creating a schedule to meet the needs of my team leaders.</li>
                </ul>
            </TabPanel>
        </TabContainer>
    );
}

export default WorkTabs;