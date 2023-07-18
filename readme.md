# Mono Repo in react and react native

A monorepo (mono repository) is a version management configuration that stores many projects in one repository. The projects can be unrelated and can be completely distinct.

Monorepo is helpful in such projects where we are having multiple projects sharing common functional or business logics.
Follow this [blog](https://medium.com/@shuklaaman892/mono-repo-react-18-2-0-and-react-native-0-72-3-project-using-yarn-workspace-a85dc443707b) for help.

## Installation

run following commands in root step by step to run this project.
1. create node modules of projects

```bash
yarn web-nodeModules
yarn mobile-nodeModules
yarn shared-nodeModules
yarn shared-build
```
Now to run web app use

```bash
yarn web-start
```
and to run on mobile use

```bash
yarn mobile-pods
yarn mobile-start
yarn mobile-ios
yarn mobile-android
```
