const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://catalog.calpoly.edu/coursesaz/csc/';

axios.get(url)
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html);
    const courses = [];

    $('div.courseblock').each((i, elem) => {
      const title = $(elem).find('p.courseblocktitle').text().trim();
      
      // Extract course code, name, and credits from the title
      const courseCode = title.split('.')[0].trim();
      const courseName = title.substring(title.indexOf('.') + 1, title.lastIndexOf('.')).trim();
      const credits = title.match(/\d+ units?/)[0];

      // Extract term typically offered if available
      const termTypicallyOffered = $(elem).find('p.courseblockdesc:contains("Term Typically Offered:")').text().match(/Term Typically Offered: ([^,]+)/);
      const termOffered = termTypicallyOffered ? termTypicallyOffered[1].trim() : 'Not specified';

      // Prerequisites might be in a different paragraph or in a structured format
      const prerequisiteText = $(elem).find('p.courseblockdesc:contains("Prerequisite")').text();
      const prereq = prerequisiteText ? prerequisiteText.split('Prerequisite:')[1].split('.')[0].trim() : 'None';

      // Get full description by extracting until the prerequisite information
      const fullDescription = $(elem).find('p.courseblockdesc').text().trim();
      const description = fullDescription.split('Prerequisite:')[0].trim();

      courses.push({
        courseCode,
        courseName,
        credits,
        termTypicallyOffered: termOffered,
        prerequisite: prereq,
        description
      });
    });

    console.log(courses);  // Process or save the data as needed
  })
  .catch(console.error);
