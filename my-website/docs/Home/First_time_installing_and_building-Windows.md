---
id:  First_time_installing_and_building
title: First time installing and building (Windows)
description: First time installing and building (Windows)
slug: /Home/First_time_installing_and_building
---

# First time installing and building (Windows)

*You can get more information on the development workflow [here](https://github.com/ISISComputingGroup/ibex_developers_manual/wiki/Git-workflow)*.

If any of the websites listed here do not work, contact another developer to get an alternate solution.

## Things to know as a developer
See https://github.com/ISISComputingGroup/ibex_developers_manual/wiki/Things-to-know-as-a-developer

## Install Perl
Download and install [Strawberry Perl](http://strawberryperl.com/)

## Install WiX toolset 
Download and install latest stable version from http://wixtoolset.org/releases/

## Install Visual Studio

See  [Install Visual Studio](https://github.com/ISISComputingGroup/ibex_developers_manual/wiki/Install-Visual-Studio)

## Install Java JDK

Install **OpenJDK 11 hotspot** from https://adoptium.net/?variant=openjdk11&jvmVariant=hotspot (the MSI installer is fine, tick all the boxes when it asks you which components to install)

Do not install an Oracle JDK.

You may wish to install some optional java components [as detailed here](https://github.com/ISISComputingGroup/ibex_developers_manual/wiki/Upgrade-Java#additional-optional-steps-for-developer-installations-not-required-on-instruments).

## Install Maven 
Install [Maven](https://maven.apache.org/download.cgi) and follow the 'Windows tips' in [these instructions ](https://maven.apache.org/install.html) to set environment variables for the SDK with JAVA_HOME and maven in PATH
It is recommended to install Maven into `C:\Tools\`

The Windows Tips from the above link says you should add maven to the PATH in the user variables. If it does not recognise mvn -v afterwards, then try to add it to the list of variables in PATH in System variables.

Note: you MUST install a maven version >=3.6.0, but not 3.6.1 as this has a bug. Versions earlier than 3.6 are unable to build the GUI.

## Install Git 
Install Git [Getting-started-with-Git-and-GitHub](https://github.com/ISISComputingGroup/ibex_developers_manual/wiki/Getting-started-with-Git-and-GitHub)

## Recursive clone from git

Navigate to `C:\Instrument\Apps\` and check whether the EPICS directory already exists. If so, remove the EPICS directory before continuing.
  
In `C:\Instrument\Apps\` run:

`git clone --recursive https://github.com/ISISComputingGroup/EPICS.git`

Note: you can now shortcut both this initial `git clone` and the `build epics backend` step below by using the [Developer-Server-Build](https://github.com/ISISComputingGroup/ibex_developers_manual/wiki/Developer-Server-Build)
 
## Install MySQL

See [Installing and upgrading MySQL](https://github.com/ISISComputingGroup/ibex_developers_manual/wiki/Installing-and-Upgrading-MySQL)

## Install genie_python

See [Building and installing genie_python](https://github.com/ISISComputingGroup/ibex_developers_manual/wiki/Building-and-Installing-genie_python)

## Build EPICS back-end
Note: the instructions [here](https://github.com/ISISComputingGroup/ibex_developers_manual/wiki/Developer-Server-Build) may be much quicker than building EPICS yourself manually, if you use this method, you will need to run `config_mysql.bat` in `C:\Instrument\Apps\EPICS\SystemSetup`. The EPICS build on the build server contains all the git submodules so should work as usual. 
<details>
  <summary>Manual build</summary>

`cd` to `C:\Instrument\Apps\EPICS\` and run `build.bat`
Note that this will take some time and should end with building the documentation.

Certain items will not be built when using VS2013, these are:
*  Mk3Chopper support module and IOC - only builds with VS2010

If you see `Error 2: file not found`, you may not have installed the correct windows SDK or visual studio version. Check for `rc.exe` in `C:\Program Files (x86)\Windows Kits\10\bin\x86\` (as appropriate for your system). If you don't have `rc.exe`, try installing the windows SDK appropriate for your operating system.

If you still have build errors (especially relating to seabreeze or astrium choppers, [look at the troubleshooting here](https://github.com/ISISComputingGroup/ibex_developers_manual/wiki/Astrium-Chopper#build-issues)
</details>
Whilst this is building/copying you can independently continue with this guide (up until Set up the CS-Studio archiver).

## Building the GUI

Please see [Building the GUI](https://github.com/ISISComputingGroup/ibex_developers_manual/wiki/Building-the-GUI).

## Setting up the configurations & scripting directory

> ### Note: for all commands in this section...
> * On a developer machine use your own username rather than "spudulike"
> * Replace `<NDXXXX>` with your machine name, e.g. `NDXIRISTEST1`, `NDLT123`
> * Replace `<init_inst_name>` with your lower case machine name, e.g. `init_ndxtest1.py`, `init_ndlt123.py` 

1. Create the following folder structure: `C:\Instrument\Settings\config`

2. Navigate to the config folder

3. Enable git credential store and set a username
```
git config --global core.autocrlf true
git config --global credential.helper wincred
git config --global user.name "spudulike"
git config --global user.email "spudulike@ndxxxx.isis.cclrc.ac.uk"
```

4. Enable default recursive check
```
git config --global push.recurseSubmodules check
```

5. Set up branch for this machine 

5a) Not A New Instrument 
i.e. if this machine has had IBEX installed before and the config branch already exists, run through the following commands:
```
cd C:\Instrument\Settings\config
git clone http://control-svcs.isis.cclrc.ac.uk/gitroot/instconfigs/inst.git NDXXXX
cd NDXXXX
git checkout NDXXXX
```

5b) New Instrument
i.e. if no config branch exists for this machine name, run through the following:

* Via a git client clone the repository from 'http://spudulike@control-svcs.isis.cclrc.ac.uk/gitroot/instconfigs/inst.git' to a directory with your machine name, like so:
```
git clone http://spudulike@control-svcs.isis.cclrc.ac.uk/gitroot/instconfigs/inst.git NDXXXX
```
 (when prompted, give spudulike password)

* Confirm that you now have the config file structure in place (components, configurations and synoptics directories)

* Create a branch from master with the machine name (if on an instrument) or your fedid if on a dev machine:

```
cd <NDXXXX>/
git checkout -b <NDXXXX>
rename "C:\Instrument\Settings\config\NDXXXX\Python\<init_inst_name>.py"
git add Python/<init_inst_name>.py
git rm Python/<init_inst_name>.py
git commit -m"create initial python"
git push --set-upstream origin <NDXXXX>
```

(Note, the init_inst_name python file should have underscores rather than dashes if the machine name contains dashes. So `NDWTEST-BLAH` would have the init file `init_ndwtest_blah.py`).

Any configs created through IBEX will now be stored on this branch (they will only be pushed remotely if you do a manual push first e.g. the last line above)

These repositories can be web browsed via [http://control-svcs.isis.cclrc.ac.uk/git/](http://control-svcs.isis.cclrc.ac.uk/git/)

6. Check it is possible to access the configurations of another developer or of an instrument by fetching the correct branch and switching to it, like so:
```
git fetch
git checkout NDXALF
```
Note: The developer branch has been created to store useful configurations that may be shared amongst all developers.

## Setting up a calibrations directory

If the `C:\Instrument\Settings\config\common` directory already exists, cd into it and do a `git pull` on master. Else run the following command from a Git-enabled command prompt (or modify target to run with Git Bash):

```
git clone http://control-svcs.isis.cclrc.ac.uk/gitroot/instconfigs/common.git C:/Instrument/Settings/config/common

```

The purpose and function of the calibration files are described [here](https://github.com/ISISComputingGroup/ibex_developers_manual/wiki/Calibration-Files).

## Set up the CS-Studio archiver
Before doing this ensure that the `build.bat` started in a previous step has successfully completed.
In `C:\Instrument\Apps\EPICS\CSS\master` run `setup_css.bat`
this will create directories for the archive engine. in `.\css-win.x86_64`

## Configure DAE for simulation mode on developer's computer / Register ISISICP

* Make sure **ISISDAE-IOC-01.exe** and **ISISICP.exe** processes are not running
* run    `create_icp_binaries.bat`   in  `c:\Instrument\Apps\EPICS`   to get the latest version 
* Open an administrator command prompt (right click on command prompt in start menu and click "run as administrator")
* `cd` to     `c:\Instrument\Apps\EPICS\ICP_Binaries\isisdae\x64\Release`
* Type:
```
    isisicp.exe /RegServer
    isisdatasvr.exe /RegServer
```
Unfortunately the /RegServer registration process doesn't report either success or failure. If, on later starting the ISISDAE IOC, you see lots of errors of the form "CoCreateInstanceEx (ISISICP) : Class not registered" then it means the /RegServer flag did not work. Try registering it again in case you were not Administrator when you tried it the first time. If you get messages about missing method/functions etc. it may mean a previous isisicp.exe registered successfully, but the newer one didn't - just try again as administrator

If you use Visual Studio 2017 (or older versions) and got "vcruntime140_1.dll was not found" error, you need to install Microsoft Visual C++ Redistributable for Visual Studio 2019. 

You can do this via this link:

https://visualstudio.microsoft.com/downloads/
(Scroll down, expand "Other Tools, Frameworks and Redistributables" and install Microsoft Visual C++ Redistributable for Visual Studio 2019(x64))

And try running `isisicp.exe /RegServer` again.

## Utilities

Git clone (usually in c:\Instrument\Dev) the following utilities:

```
git clone https://github.com/ISISComputingGroup/IBEX_device_generator.git
git clone https://github.com/ISISComputingGroup/ibex_utils.git
git clone https://github.com/ISISComputingGroup/ConfigChecker.git
```

# Optional Extras

The following are not strictly required for general IBEX development. They will be useful if you are on the project for > 1 year but otherwise probably not worth installing.

## Explorer context menu shortcut for EPICS terminal

To add a shortcut to open an EPICS terminal using the context menu in Windows' file explorer, double click `add_epics_context_menu.reg` (from EPICS top) and run as admin. This will add a registry key that will enable you to right click in an empty space in file explorer and open the directory in an EPICS terminal. 

## VNC

If you are supporting instruments it may be useful to download a VNC client. We have not settled on one that we all use but we have used:

 - tighVNC (just the client) which is available [here](http://www.tightvnc.com/)
 - VNC Viewer (just the client) which is available [here](https://www.realvnc.com/en/connect/download/viewer/)

## NI DAQ

It is recommended that developers only install this if they know that they will at some point be using a DAQ mx. If you do not do this step, you will be unable to run certain IOCs (e.g. riken power supplies, muon separator), and consequently some of their tests will fail.

Some IOCs depends on DAQMX binaries from national instruments. Go to http://sine.ni.com/psp/app/doc/p/id/psp-268 or if not go here https://www.ni.com/en-gb/support/downloads/drivers/download.ni-daqmx.html#311818
and download the latest DAQMX drivers. When installing, ensure you check the box to install DAQMX.
