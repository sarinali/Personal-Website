export default class ProjectBundle {
    constructor(imageComponent, projectTitle, projectDate, projectIndex, projectButtonList, projectTechList, projectDesciption, isDark, projectBackground, width) {  // Constructor
      this.image = imageComponent;
      this.title = projectTitle;
      this.date = projectDate;
      this.index = projectIndex;
      this.buttonList = projectButtonList;
      this.techList = projectTechList;
      this.description = projectDesciption;
      this.dark = isDark;
      this.background = projectBackground;
      this.textWidth = width;
    }
}
