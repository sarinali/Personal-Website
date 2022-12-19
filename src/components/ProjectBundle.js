export default class ProjectBundle {
    constructor(imageComponent, projectTitle, projectDate, projectIndex, projectButtonList, projectTechList) {  // Constructor
      this.image = imageComponent;
      this.title = projectTitle;
      this.date = projectDate;
      this.index = projectIndex;
      this.buttonList = projectButtonList;
      this.techList = projectTechList;
    }
}
