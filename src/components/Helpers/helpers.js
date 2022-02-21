export const teamIdsTable = {
    arsenal: 57,
    astonVilla: 58,
    brentford: 402,
    brighton: 397,
    burnley: 328,
    chelsea: 61,
    crystalPalace: 354,
    everton: 62,
    leeds: 341,
    leicester: 338,
    liverpool: 64,
    manchesterCity: 65,
    manchesterUnited: 66,
    newcastle: 67,
    norwich: 68,
    southampton: 340,
    tottenham: 73,
    watford: 346,
    westHam: 563,
    wolves: 76
}

export const teamIdsFixtures = {
    Arsenal: 42,
    Astonvilla: 66,
    Brentford: 55,
    Brighton: 51,
    Burnley: 44,
    Chelsea: 49,
    CrystalPalace: 52,
    Everton: 45,
    Leeds: 63,
    Leicester: 46,
    Liverpool: 40,
    ManCity: 50,
    ManUnited: 33,
    Newcastle: 34,
    Norwich: 71,
    Southampton: 41,
    Tottenham: 47,
    Watford: 38,
    WestHam: 48,
    Wolves: 39
}

export function formatDate(value) {
    let date = new Date(value);
    const day = date.toLocaleString('default', { day: '2-digit' });
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.toLocaleString('default', { year: 'numeric' });
    return day + ' ' + month + ' ' + year;
}

export function formatTime(value) {
    let time = new Date(value);
    const hour = time.toLocaleTimeString('en-GB', {hour: '2-digit', minute: '2-digit'});
    return hour;
}