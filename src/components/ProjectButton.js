export default class ProjectButton {
    constructor(buttonLink, buttonType) {
        this.link = buttonLink;
        this.text = buttonType;
        
        if (buttonType === 'iOS') {
            this.buttonText = 'App Store';
        } else if  (buttonType === 'Android') {
            this.buttonText = 'Google Play';
        } else if (buttonType === 'GitHub') {
            this.buttonText = 'View on GH';
        } else if (buttonType === 'Devpost') {
            this.buttonText = 'View on DP';
        } else if (buttonType === 'Web') {
            this.buttonText = 'Open in browser';
        }
    }
}