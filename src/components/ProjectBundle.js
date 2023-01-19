export default class ProjectBundle {
    constructor(projectTitle, imageComponent, projectDate, projectTechList, projectDesciption, projectButtonList) {  // Constructor
      this.title = projectTitle
      this.image = imageComponent;
      this.date = projectDate;
      this.techList = projectTechList;
      this.description = projectDesciption;
      this.buttonList = projectButtonList;
    }
}
