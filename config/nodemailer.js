const nodemailer = require('nodemailer');
const ical = require('ical-generator');
const moment = require('moment');

module.exports = (user,maintenance) => {
  //Nodemailer gmail petititon.
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: 'mybonsaiironhack@gmail.com',
        pass: 'mybonsai123'
    },
  });

  // Create a 24 hour period.
  startDate = moment(maintenance.date);
  startDate.add(maintenance.periodicity, 'months');
  endDate = moment(startDate).add(20, 'hours');
  startDate = startDate.format('MMMM DD YYYY, h:mm:ss a');
  endDate = endDate.format('MMMM DD YYYY, h:mm:ss a');

  var options = {
      from: '"MyBonsai Team" <mybonsaiironhack@gmail.com>', // sender address (who sends)
      to: user.email, // list of receivers (who receives)
      subject: maintenance.type, // Subject line
      text: maintenance.description, // plaintext body
      start: startDate,
      end: endDate,
  };

  function createGmailCalenderEVent(options) {
    let cal = ical();
    cal.addEvent({
       start: options.start,
       end: options.end,
       summary: options.summary || options.subject,
       description: options.description || "",
    });
    return {
       from: options.from,
       to: options.to,
       subject: options.subject,
       text: options.text,
       alternatives: [{
           contentType: "text/calendar",
           content: new Buffer(cal.toString())
       }],
     };
   };

  transporter.sendMail(createGmailCalenderEVent(options), (err, info) => {
   return err ? console.log(err) : console.log(info);
  });
};
