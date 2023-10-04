# Documentation of some voide specific APIs

## createMicrophoneAudioTrack
Creates an audio track from the audio sampled by a microphone.
```js
AgoraRTC.createMicrophoneAudioTrack(config?)
```
Returns a Promise<[IMicrophoneAudioTrack](https://api-ref.agora.io/en/voice-sdk/web/4.x/interfaces/imicrophoneaudiotrack.html)>

config: Configurations for the sampled audio, such as the capture device and the encoder configuration.

Most important config parameters:
- AEC: boolean -> Enable acoustic echo cancellation
- AGC: boolean -> Enable audio gain control
- ANS: boolean -> Enable automatic noise suppression

See [MicrophoneAudioTrackInitConfig](https://api-ref.agora.io/en/voice-sdk/web/4.x/interfaces/microphoneaudiotrackinitconfig.html).


