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
      const courseCode = title.split('.')[0].trim();
      const courseName = title.split('.')[1].split(/(\d+ units)/)[0].trim();
      const creditMatch = title.match(/\d+ units/);
      const credits = creditMatch ? creditMatch[0] : "N/A"; // Check if credits were found

      let description = "";
      let prerequisites = "None";

      $(elem).find('div.courseblockdesc p, div.noindent p').each((index, descElem) => {
        const text = $(descElem).text().trim();
        if (text.startsWith('Prerequisite:')) {
          prerequisites = text;
        } else {
          description += text + " "; // Append descriptions if multiple paragraphs
        }
      });

      courses.push({
        courseCode,
        courseName,
        credits,
        description: description.trim(),
        prerequisites
      });
    });

    console.log(courses);
  })
  .catch(console.error);
