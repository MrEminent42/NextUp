const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://catalog.calpoly.edu/coursesaz/csc/';

axios.get(url)
  .then((response: { data: any; }) => {
    const html = response.data;
    const $ = cheerio.load(html);
    const courses: { courseCode: any; courseName: any; credits: any; description: string; prerequisites: string; termTypicallyOffered: string; }[] = [];

    $('div.courseblock').each((i: any, elem: any) => {
      const title = $(elem).find('p.courseblocktitle').text().trim();
      const courseCode = title.split('.')[0].trim();
      const courseName = title.split('.')[1].split(/(\d+ units)/)[0].trim();
      const creditsMatch = title.match(/(\d+-\d+ units|\d+ units)/);
      const credits = creditsMatch ? creditsMatch[0] : "N/A"; // Extract full credit info

      let description = "";
      let prerequisites = "None";
      let termTypicallyOffered = "TBD";

      $(elem).find('div.courseblockdesc p, div.noindent p').each((index: any, descElem: any) => {
        const text = $(descElem).text().trim();
        if (text.startsWith('Prerequisite:')) {
          prerequisites = text;
        } else if (text.startsWith('Term Typically Offered:')) {
          termTypicallyOffered = text.split(': ')[1];
        } else {
          description += text + " "; // Append descriptions if multiple paragraphs
        }
      });

      courses.push({
        courseCode,
        courseName,
        credits,
        description: description.trim(),
        prerequisites,
        termTypicallyOffered
      });
    });

    console.log(courses);
  })
  .catch(console.error);
