
import StoryBookUI from './storybook';
import App from './Entry';
import StorybookUIRoot from './storybook';
import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import useSystemHook from './src/hooks/useSytemHooks';




function StoryBookStart () {
    const {isLoadingComplete} = useSystemHook();
    if (!isLoadingComplete) {
       return (<AppLoading/>);
    } else {
        return <StorybookUIRoot/>
    }
}


function AppCaller () {
    const {isLoadingComplete} = useSystemHook();
    if (!isLoadingComplete) {
       return (<AppLoading/>);
    } else {
        return <App/>
    }
}




module.exports = false ? StoryBookStart : AppCaller;