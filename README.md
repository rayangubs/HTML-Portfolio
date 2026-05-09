# Portfolio Website - Setup Guide

## Adding Videos to Projects

To add playable videos to your project modals:

1. Place your video files in the `videos/` directory
2. Supported formats: MP4, WebM, OGV
3. Update the `videoUrl` paths in `script.js` to match your video filenames

### Current Video Placeholders:
- `videos/pose-estimation-demo.mp4` - Web-Based Human Pose Estimation demo
- `videos/save-share-demo.mp4` - Save&Share software demonstration
- `videos/save-share-pitch.mp4` - Save&Share pitch video
- `videos/face-recognition-demo.mp4` - Raspberry Pi Face Recognition demo

### Example:
If you have a video file named `my-demo.mp4`, update the `videoUrl` in the project details:
```javascript
videoUrl: "videos/my-demo.mp4"
```

## Adding Images

### Project Images:
- Place project screenshots/code snippets in the `images/` directory
- Update the `src` paths in the project details in `script.js`

### Certificate Images:
- Place full certificate images in the `images/` directory
- Update the `image.src` paths in the certification details

### Experience Images:
- Place experience/leadership photos in the `images/` directory
- Update the `src` paths in the experience details

## File Structure:
```
portfolio/
├── index.html
├── style.css
├── script.js
├── images/
│   ├── formal(attempt).png
│   ├── comptia cert.png
│   ├── java cert.png
│   └── [other images]
└── videos/
    ├── pose-estimation-demo.mp4
    ├── save-share-demo.mp4
    └── [other videos]
```</content>
<parameter name="filePath">d:\Coding Stuff\HTML Portfolio\README.md