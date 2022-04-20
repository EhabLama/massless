const env = {
    port: process.env.PORT,
    url: process.env.REMOTE_URL,
    enableVideoTranscoding: process.env.ENABLE_VIDEO_TRANSCODING,
    disableStorage: process.env.DISABLE_STORAGE,
    googleDriveEnabled: true,
    s3Enabled: true,
    activeSubscription: false,
    commercialMode: process.env.COMMERCIAL_MODE,
    uploadMode: "s3",
    emailAddress:"",
    name: ""
}

export default env;