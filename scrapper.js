const cheerio = require('cheerio');
const axios = require('axios');

const URL = "https://www.liveworksheets.com/worksheets/en/English_as_a_Second_Language_(ESL)/Reported_speech/Reported_speech_iu80411hj";
function findTextAndReturnRemainder(target, variable){
    var chopFront = target.substring(target.search(variable)+variable.length,target.length);
    var result = chopFront.substring(0,chopFront.search(";"));
    return result;
}
const getPage = async () => {
    let resp = {}
    return await axios.get(URL).then((res) => {
        let $ = cheerio.load(res.data);
        var resp = $('script');
        var findAndClean = findTextAndReturnRemainder($(resp[3]).html(),"var contenidojson =");
        const r = JSON.parse(findAndClean.replace(/'/g, ""));
        resp = {r, html: res.data};
        return resp;
    });
}

module.exports = {
    getPage
}