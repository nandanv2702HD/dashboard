///////////////////////////////////////////////////////////////////////
///// IMPORT STATEMENTS AND REQUIREMENTS 
//////////////////////////////////////////////////////////////////////

const fs = require('fs');
const logger = require('morgan');
const { nextTick } = require('process');
const config = require('../../../../config/config.js');
const { connectToDB } = require('./connectToDB.js');
const db = require('../models');
const { Console } = require('console');
const sequelize = db.sequelize,
Sequelize = db.Sequelize;

///////////////////////////////////////////////////////////////////////
///// INSERT LOCAL AOS FILES TO DB
//////////////////////////////////////////////////////////////////////

async function transformData(){
    let names = ["STJIF","INPBG","STMSI","HARNS","CLTHK","STCPL","STHRN","REGFL","OUTPR","LCKSS","START","STHAR","BATTR","PBBKR","STREG","STBPL","ENGRD","STUFB","STPBB","HDBRR","LRCLP","RRSHK","RSTWH","INCLS","INFAR","RKNLH","STNAX","STRPR","HLFBR","STRPL","FRCSP","LCKST","HEADA","RDKPC","HORN","EXHST","CROSO","STMFL","FLMFR","FLMFL","JIFFQ","STFCL","STMSO","FLHSD","AIRCB","FFTBR/RFTBR","STFCR","STFPR","GRSLR","STFPL","STSBD","STBCR","STBCL","FFTBL/RFTBL","OUTFG","STHSM","TFGRH","STBLG","TFGLH","AIRCL","FLHTR","TPDUC","SEATP","SDBGL","SDBGR","SBKT1","TKMUF","TKBWH","TKBOD","TKSDC","TKBD1","FLTP1/TRTUR","TKTP1/TKTUR","LFSLH","LFSRH","FSTWH","FKRGT","FKLFT","ABSWS","FRKLW","FFNDR","STHHS","CTANP","CONS","CARCN","MNTEG","PVTST","TKPVS","POWER","STHOP","CFNDR","SGFST","STLHF/STRHF","FASIA","STLCM","SBRRH","SBRLH","LPBCF","PLBRP","FLSLH","LUGRK","FLSRH","XFKSL","XFRWH","XLLTT","XFRAM","XFRNT","XHARN","XPWTN","XSGMD","XACBP","XBRKE","XFNDP","XHDSH","XKIT4","XLARA","XRCOW","XSDCR","XSEAT","XSHBL","XWSGH","XFCLH","XFCRH","XHDLT","XHSLD","XLMOD","XMFEX","XOTDS","XRDSD","XRRWH","XSCOV","XUSTS","XBRGS","XCARB","XCONS","XFNSP","XHDBR","XLPTL","XMSKS","XTSEC","XCADS","XCC1S","XCC2S","XCLOK","XCOLA","XCOOL","XFLCS","XFTSS","XKIT1","XKIT2","XKIT3","XKIT5","XKIT6","XKIT7","XPGLH","XPGRH",'XRMKS',"XSETS","XSHFL","XSPDA","EVFWH","EVRWH"]

    const files = fs.readdir("C:/Users/venkatn1/Documents/Test AOS Files", (err, files) => {
        if(!err){
            // console.log(files)
            return files
        } else {
            console.log("fs read err")
        }
    });
    
    // for each file 
    // transform data into csvdata, clean up as you add
    // once rawData ready, start data insertion
    // check if table exists (select TABLE_NAME from INFORMATION_SCHEMA.TABLES), if not, create table (createCommodity) and then insert data, else, insert into commodity table
    
    fs.readFile('C:/Users/venkatn1/Documents/HD_1001_RACKSEQN_202011110646436174_1310616.TXT', 'utf8' , (err, data) => {
        if (err) {
            console.error(err)
            return []
        }
    
        let rawData = []
        dataArray = data.toString().split(/\r?\n/);

        dataArray.forEach(data => {
            rawData.push(data.split(","))
        });

        console.log(`raw data is ${JSON.stringify(rawData)}`)

        db.AOS.bulkCreate(rawData).then((res) => console.log(`res is: \n ${res}`))
    })
}

function checkCommodity (models){
    // check if commodity is table

    //connectToDB()

    // if not table, create table
}

async function insertRow(data){
    
    // change every data element and assign to variables


    // connect to DB and call insert to



}



module.exports = {
    transformData
}