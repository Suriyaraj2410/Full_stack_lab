var date=require('./dat_time')
var currentdate=date.getdate().getTime();
const endDate = new Date('2023-07-01');
var remaining=Math.floor(currentdate-endDate.getTime()/(24 * 60 * 60 * 1000))
exports.rem=(()=>{return remaining})

