---
id: Home
sidebar_position: 2
title: Home
description: Developer Home Page
slug: /Home

tags:
  - Getting started
---

export const Highlight = ({children, color, page}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      margin: '2.5px',
      cursor: 'pointer',
    }}
    onClick={() => {
      window.location.href = page;
    }}>
    {children}
  </span>
);

# The IBEX Project - Developer Docs

<p></p>

<Highlight color="#1877F2" page="/Docs/Template" >Template</Highlight>

<Highlight color="#1877F2" page="/Docs/Instrument_and_Devices">Instrument_and_Devices</Highlight>

<p></p>

This is the developer documentation for the IBEX Project.

Developer docs are here to help you get started with the project and provide you with the best possible experience along with answers to common questions for support both you and for you to provide to users.

Developer docs is a living documentation. As a member of the IBEX team, you will be able to access the developer documentation for the project to modify as you need to.

## Template Page

TO help you with making changes to the developer docs, we have created a template page for you to use as a reference. You can find it in the [developer docs repo](https:wqww.google.com) and it is called [Template.md](https:wqww.google.com)
the template page will include examples of what is possible to write in markdown and MDX. MDX is a way to write markdown that is more powerful than markdown by incorporating other react components.

# The IBEX Project

- [Editing the Wiki](https://github.com/ISISComputingGroup/ibex_developers_manual/wiki/Editing-the-Wiki)
- [Providing Support](https://github.com/ISISComputingGroup/ibex_developers_manual/wiki/Providing-Support)

---

## Project 
- [Project overview](/docs/Home/project_overview): High level overview of the project including architectural and design documents.
- [Project Ideas](/docs/Home/project_ideas): List of project ideas for the future or to ask [SAG](https://stfc365.sharepoint.com/sites/IBEXSAG), this is lower level ideas not as high level as future [ideas](https://github.com/ISISComputingGroup/IBEX/wiki/Future-Ideas).


---

## Components of the System

- [IBEX GUI](/docs/Home/The_GUI): The GUI along with development and testing guidelines (Including how to **get started**). 
- [IBEX Server](/docs/Home/The_Backend_System): Information regarding the back-end systems, including the block server, databases, configurations, and IOCs. Also includes:
  * [The getting started guide](Home/First_time_installing_and_building) for setting up the back-end.
  * [Guidance on specific devices](Home/Specific_Device_IOC)
- [genie_python](Home/genie_python): genie_python, scripting language and python framework
- [IBEX Mini-inst Server](Home/Configure_Mini_Inst): The mini-inst is an ibex server which only runs a fixed and small number of IOCs and processes (usually without a block server or archiver)
- [Accelerator Information Forwarder](Home/Beam_Status_Shutter_accelerator_and_moderator_information): Forwards information about the state of the accelerator and various other bits of centralised data (moderators, shutters etc) into EPICS for IBEX and SECI.
- [Dataweb](Home/Web_Dashboard): Information regarding the architecture of the instrument web pages.
- [Project tools](Home/Project_Tools): Information on the project tooling, version control and continuous integration.

---

## Processes

- [Project Processes](Home/Processes): List of processes we wish to document
- [Deployment](Home/Deployment): Deployment Information
- [Component & Activity Stewards](Home/Component_Stewards): Component & Activity Stewards: who looks after which components/activities
- [On Call Guidance](Home/Providing-Support): Some hints and tips for when you're on call
- [Remote Working](Home/Remote_Working): Some procedures for setting up VNC for remote working

---

## Resources
<details>
<summary>Resources</summary>
<div>
    <li><a class="dropdown_list" href="https://github.com/ISISComputingGroup/ibex_developers_manual/wiki/Training-Instrument-Scientists-in-IBEX">Training</a>: Information about running IBEX and genie_python training courses</li>
    <li><a class="dropdown_list" href="https://github.com/ISISComputingGroup/ibex_developers_manual/wiki/New-Starters">New Starters </a>: Resources for new team members</li>
    <li><a class="dropdown_list" href="https://github.com/ISISComputingGroup/ibex_developers_manual/wiki/Glossary">Glossary </a>: Glossary of terms </li>
    <li><a class="dropdown_list" href="https://github.com/ISISComputingGroup/ibex_developers_manual/wiki/links-and-resources">Other Links and Resources </a>: Page of links and resources not in this wiki</li>
    <li><a class="dropdown_list" href="https://github.com/ISISComputingGroup/ibex_developers_manual/wiki/trouble-shooting-pages">Trouble Shooting Pages </a>: Pages that link to trouble shooting of various kinds</li>
    <li><a class="dropdown_list" href="https://github.com/ISISComputingGroup/ibex_developers_manual/wiki/galils-under-seci">Galils Under SECI </a>: Pages that link to information on control of Galils under SECI</li>
    <li><a class="dropdown_list" href="https://github.com/ISISNeutronMuon/InstrumentScripts/wiki">Python shared scripts (also know as shared instrument scripts) </a>: Start of an area to share scripts between instruments</li>
    <li><a class="dropdown_list" href="https://github.com/ISISComputingGroup/ibex_developers_manual/wiki/Shared-utility-scripts">Shared utility scripts </a>: An area to document any utility scripts for us to use</li>
    <li><a class="dropdown_list" href="https://stfc365.sharepoint.com/sites/IBEXSAG">SAG</a>: Sharepoint site for Scientific Advisory Group (SAG) material.</li>

</div>
</details>












