---
sidebar_label: 'Welcome!'
sidebar_position: 1

tags:
  - Getting started
---

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
    onClick={() => {
      window.location.href = "/Docs/Home";
    }}>
    {children}
  </span>
);

<p></p>

<Highlight color="#1877F2">Developer WIKI</Highlight>

<p></p>

# IBEX Experiment Controls Software
Welcome to the IBEX! The coolest controls system in ISIS yet!

Inside the [IBEX repository](https://github.com/ISISComputingGroup/IBEX), you will find the IBEX stories, bugs, tasks and other issues. As well as release notes.
If you are looking for information about developing for or with IBEX, please consult the [IBEX Developer's Manual](https://github.com/ISISComputingGroup/ibex_developers_manual/wiki).  If you are looking for the IBEX user manual or related end-user documentation, please consult the [IBEX User Manual](https://github.com/ISISComputingGroup/ibex_user_manual/wiki).



Please see the [Project Board](https://github.com/ISISComputingGroup/IBEX/projects/1) to find out what we are currently working on.

# Release Notes

### [Latest Stable IBEX Version (10.0.0)](https://github.com/ISISComputingGroup/IBEX/blob/master/release_notes/ReleaseNotes_v10.0.0.md)

[Upcoming Release](https://github.com/ISISComputingGroup/IBEX/blob/master/release_notes/ReleaseNotes_Upcoming.md)

[Previous Releases](https://github.com/ISISComputingGroup/IBEX/blob/master/docs/all-releases.md)


# Project Vision
The objective of the IBEX/ICP project is to create a new control system for the neutron & muon instruments at ISIS.  The new control system will employ a modern, layered and distributed architecture, enabling the development of loosely-coupled client and server applications.  Device control and business logic will reside in the server applications.  The new control system, called IBEX, will be based on EPICS and related technologies.  In due course, IBEX will replace SECI, the current instrument control system used at ISIS.

### [Short description of IBEX (for including in papers)](https://github.com/ISISComputingGroup/IBEX/blob/master/docs/short-description-of-ibex.md)

