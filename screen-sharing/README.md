# Screen Sharing

## enableLogUpload
```typescript
enableLogUpload(): void
```
Enables log upload.

Call this method to enable log upload to Agora’s server.
The log-upload function is disabled by default. To enable this function, you must call this method before calling all the other methods.

[Read More](https://api-ref.agora.io/en/voice-sdk/web/4.x/interfaces/iagorartc.html#enablelogupload)

## createScreenVideoTrack
```typescript
createScreenVideoTrack(config: ScreenVideoTrackInitConfig, withAudio: "enable"): Promise<[ILocalVideoTrack, ILocalAudioTrack]>
```
```typescript
createScreenVideoTrack(config: ScreenVideoTrackInitConfig, withAudio: "disable"): Promise<ILocalVideoTrack>
```
```typescript
createScreenVideoTrack(config: ScreenVideoTrackInitConfig, withAudio?: "enable" | "disable" | "auto"): Promise<[ILocalVideoTrack, ILocalAudioTrack] | ILocalVideoTrack>
```

Creates a video track for screen sharing.

** Parameters **
- config: [ScreenVideoTrackInitConfig](https://api-ref.agora.io/en/voice-sdk/web/4.x/interfaces/screenvideotrackinitconfig.html)
    Configurations for the screen-sharing video, such as encoder configuration and capture configuration.
- withAudio: Whether to share the audio of the screen sharing input source when sharing the screen.
    - `enable`: Share the audio.
    - `disable`: (Default) Do not share the audio.
    - `auto`: Share the audio, dependent on whether the browser supports this function.

[Read More](https://api-ref.agora.io/en/voice-sdk/web/4.x/interfaces/iagorartc.html#createscreenvideotrack)
