import { callAPITable, callAPITeamInfo, callAPIFixtures } from "./apiCalls";

export function isLocalTableEmpty() {
    let dataTable;
    let loading = true;
    if(localStorage.getItem("apiTable") === null) {
        dataTable = callAPITable();
        loading = false;
    } else {
        dataTable = JSON.parse(localStorage.getItem("apiTable"));
        loading = false;
        console.log("API Table DIDN'T get called, it's already in local storage!")
    }
    return {dataTable, loading};
}

export function isLocalTeamInfoEmpty() {
    let dataTeamInfo;
    let teamInfoLoading = true;
    if(localStorage.getItem("apiTeamInfo") === null) {
        teamInfoLoading = false;
        console.log('team info variable in is local emtpy check is: ' + teamInfoLoading)
        return callAPITeamInfo();
    } else {
        dataTeamInfo = JSON.parse(localStorage.getItem("apiTeamInfo"));
        teamInfoLoading = false;
        console.log('teamInfoLoading in isLocalEmtpy is: ' + teamInfoLoading)
        console.log("API Team Info DIDN'T get called, it's already in local storage!");
    }
    return {dataTeamInfo, teamInfoLoading};
}

export function isLocalFixturesEmpty() {
    let dataFixtures;
    let fixturesLoading = true;
    if(localStorage.getItem("apiFixtures") === null) {
        fixturesLoading = false;
        console.log('fixturesLoading in isLocalEmtpy is: ' + fixturesLoading)
        return callAPIFixtures();
    } else {
        dataFixtures = JSON.parse(localStorage.getItem("apiFixtures"));
        fixturesLoading = false;
        console.log('fixturesLoading in isLocalEmtpy is: ' + fixturesLoading)
        console.log("API Fixtures DIDN'T get called, it's already in local storage!")
    }
    return {dataFixtures, fixturesLoading};
}