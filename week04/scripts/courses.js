const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
      {
        sectionNum: 1,
        roomNum: "STC 353",
        enrolled: 26,
        days: "TTh",
        instructor: "Bro T",
      },
      {
        sectionNum: 2,
        roomNum: "STC 347",
        enrolled: 25,
        days: "TTh",
        instructor: "Sis A",
      },
    ],
    enrollStudent: function (sectionNum) {
        // find the right section...Array.findIndex will work here
        const sectionIndex = this.sections.findIndex(
          (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0) {
          this.sections[sectionIndex].enrolled++;
          outputSections(this.sections);
        }
      },
      dropStudent: function (sectionNum) {
        // find the right section...Array.findIndex will work here
        const sectionIndex = this.sections.findIndex(
          (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0) {
          this.sections[sectionIndex].enrolled--;
          outputrSections(this.sections);
        }
      },
};
  
function setCourseInfo(course) { 
    document.querySelector("#courseName").textContent = course.name;
    document.querySelector("#courseCode").textContent = course.code;
}

function outputSections(course) {
    const sectionsContainer = document.querySelector("#sections");
    // Clear any existing rows

    // Loop through all sections and create table rows
    course.sections.forEach(section => {
        sectionsContainer.innerHTML += `
            <tr>
                <td>${section['sectionNum']}</td>
                <td>${section.roomNum}</td>
                <td>${section.enrolled}</td>
                <td>${section.days}</td>
                <td>${section.instructor}</td>
            </tr>
        `;
    });
}


// function sectionTemplate(section) {
//     return `<tr>
//       <td>${section.sectionNum}</td>
//       <td>${section.roomNum}</td>
//       <td>${section.enrolled}</td>
//       <td>${section.days}</td>
//       <td>${section.instructor}</td></tr>`
//   }
  
//   function renderSections(sections) {
//     const html = sections.map(sectionTemplate);
//     document.querySelector("#sections").innerHTML = html.join("");
//   }
  
//   setCourseInfo(aCourse);
//   renderSections(aCourse.sections);

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
  });
  document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.dropStudent(sectionNum);
  });
  
  setCourseInfo(aCourse);
  outputSections(aCourse);