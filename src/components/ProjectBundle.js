export default class ProjectBundle {
    constructor(imageComponent, projectTitle, projectDate, projectIndex, projectButtonList, projectTechList, projectDesciption) {  // Constructor
      this.image = imageComponent;
      this.title = projectTitle;
      this.date = projectDate;
      this.index = projectIndex;
      this.buttonList = projectButtonList;
      this.techList = projectTechList;
      this.description = projectDesciption;
    }
}
