import axios from "axios";
import { optionsTable, optionsTeamInfo, optionsFixtures } from "./endpoints";

export function callAPITable() {
    const options = optionsTable;
    let dataTable;
    let loading = true;
    axios.request(options).then(function (response) {
        dataTable = response;
        localStorage.setItem("apiTable", JSON.stringify(dataTable.data.response[0].league.standings[0]));
        loading = false;
    })
    return {dataTable, loading}
}

export function callAPITeamInfo() {
    const options = optionsTeamInfo;
    let dataTeamInfo;
    let teamInfoLoading = true;
    axios.request(options).then(function (response) {
        dataTeamInfo = response;
        console.log(dataTeamInfo);
        localStorage.setItem("apiTeamInfo", JSON.stringify(dataTeamInfo.data.response));
    }).finally(() => {
        teamInfoLoading = false;
        console.log('teamInfoLoading is: ' + teamInfoLoading);
    })
    return {dataTeamInfo, teamInfoLoading}
}

export function callAPIFixtures() {
    const options = optionsFixtures;
    let dataFixtures;
    let fixturesLoading = true;
    axios.request(options).then(function (response) {
        dataFixtures = response;
        console.log(dataFixtures);
        localStorage.setItem("apiFixtures", JSON.stringify(dataFixtures.data.response));
    }).finally(() => {
        fixturesLoading = false;
        console.log('fixturesLoading is: ' + fixturesLoading);
    })
    return {dataFixtures, fixturesLoading}
}