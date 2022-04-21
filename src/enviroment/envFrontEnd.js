const env = {
    port: process.env.PORT,
    url: "https://massless.herokuapp.com",
    enableVideoTranscoding: process.env.ENABLE_VIDEO_TRANSCODING,
    disableStorage: process.env.DISABLE_STORAGE,
    googleDriveEnabled: false,
    s3Enabled: true,
    activeSubscription: false,
    commercialMode: process.env.COMMERCIAL_MODE,
    uploadMode: "s3",
    emailAddress:"",
    name: ""
}

export default env;