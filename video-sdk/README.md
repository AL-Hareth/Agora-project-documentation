# Video SDK
most of the documentation exists in the code itself

## getMicrophones()
```typescript
getMicrophones(skipPermissionCheck?: boolean): Promise<MediaDeviceInfo[]>
```
Enumerates the audio sampling devices available, such as microphones.
If this method call succeeds, the SDK returns a list of audio input devices in an array of [MediaDeviceInfo](https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo) objects.

**Parameters**
- skipPermissionCheck: boolean (optional) -> Whether to skip the permission check. If you set this parameter as true, the SDK does not trigger the request for media device permission. In this case, the retrieved media device information may be inaccurate.
    - `true`: Skip the permission check.
    - `false`:(default) Do not skip the permission check.

[Read More](https://api-ref.agora.io/en/voice-sdk/web/4.x/interfaces/iagorartc.html#getmicrophones)

## getCameras()
```typescript
getCameras(skipPermissionCheck?: boolean): Promise<MediaDeviceInfo[]>
```
Enumerates the video capture devices available, such as cameras.
If this method call succeeds, the SDK returns a list of video input devices in an array of [MediaDeviceInfo](https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo) objects.

**Parameters**
- skipPermissionCheck: boolean (optional) -> Whether to skip the permission check. If you set this parameter as true, the SDK does not trigger the request for media device permission. In this case, the retrieved media device information may be inaccurate.
    - `true`: Skip the permission check.
    - `false`:(default) Do not skip the permission check.

[Read More](https://api-ref.agora.io/en/voice-sdk/web/4.x/interfaces/iagorartc.html#getcameras)

## getTrackLabel method
*this exists for both video and audio tracks*
```typescript
getTrackLabel(): string
```
Gets the label of a local track.

The label that the SDK returns may include:
- The [MediaDeviceInfo.label](https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo/label) property, if the track is created by calling `createMicrophoneAudioTrack` or `createCameraVideoTrack`.
- The `sourceId` property, if the track is created by calling `createScreenVideoTrack`.
- The [MediaStreamTrack.label](https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/label) property, if the track is created by calling `createCustomAudioTrack` or `createCustomVideoTrack`.

[Read More for Mic](https://api-ref.agora.io/en/voice-sdk/web/4.x/interfaces/imicrophoneaudiotrack.html#gettracklabel)
[Read More for Camera](https://api-ref.agora.io/en/voice-sdk/web/4.x/interfaces/icameravideotrack.html#gettracklabel)

## setEncoderConfiguration()

```typescript
setEncoderConfiguration(config: VideoEncoderConfiguration | VideoEncoderConfigurationPreset): Promise<void>
```

Sets the video encoder configurations, such as resolution, frame rate, and bitrate.

**Parameters**
- config: VideoEncoderConfiguration | VideoEncoderConfigurationPreset (required)
The video encoder configurations. You can pass either [VideoEncoderConfigurationPreset](https://api-ref.agora.io/en/voice-sdk/web/4.x/globals.html#videoencoderconfigurationpreset) or a customized [VideoEncoderConfiguration](https://api-ref.agora.io/en/voice-sdk/web/4.x/interfaces/videoencoderconfiguration.html) object.

[Read More](https://api-ref.agora.io/en/voice-sdk/web/4.x/interfaces/icameravideotrack.html#setencoderconfiguration)

## play() method for video track
```typescript
play(element: string | HTMLElement, config?: VideoPlayerConfig): void
```
Plays a local video track on the web page.

**Parameters**
- element: string | HTMLElement
    Specifies a DOM element. The SDK will create a `<video>` element under the specified DOM element to play the video track. You can specify a DOM element in either of the following ways:
    - `string`: Specify the ID of the DOM element.
    - `HTMLElement`: Pass the DOM element.
- config: [VideoPlayerConfig](https://api-ref.agora.io/en/voice-sdk/web/4.x/interfaces/videoplayerconfig.html) (optional)
    Sets the playback configurations, such as display mode and mirror mode. See VideoPlayerConfig. By default, the SDK enables mirror mode for a local video track.

## play() method for video track
```typescript
play(): void
```
Plays a local video track.

[Read More](https://api-ref.agora.io/en/voice-sdk/web/4.x/interfaces/ilocalaudiotrack.html#play)
