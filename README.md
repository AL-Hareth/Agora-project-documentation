# Documentation for Agora SDK for the web

## Requirements for Agora SDK for the web
- [An Agora account](https://console.agora.io/)

## Including Agora in the project
Agora can be included in one of the following ways:
- Installing the Wanted Agora SDK in your project and importing it using a `<script>` tag.
- Using npm to install the Agora SDK
```bash
$ npm i agora-rtc-sdk-ng
```

## Usage

### Creating a client
```js
const clientConfig = { mode: 'rtc', codec: 'vp8' };
const client = AgoraRTC.createClient(clientConfig);
```

the client config has a lot of options
```js
clientConfig: {
    codec: SDK_CODEC;
    audioCodec?: SDK_AUDIO_CODEC | undefined;
    mode: SDK_MODE;
    role?: ClientRole | undefined;
    clientRoleOptions?: ClientRoleOptions | undefined;
    proxyServer?: string | undefined;
    turnServer?: TurnServerConfig | undefined;
    httpRetryConfig?: RetryConfiguration | undefined;
    websocketRetryConfig?: RetryConfiguration | undefined;
}
```
- codec: The codec that the Web browser uses for encoding.
  - "vp8": Use VP8 for encoding.
  - "h264": Use H.264 for encoding.
  - "h265": Use H.265 for encoding.
  - "vp9": (Beta) Use VP9 for encoding.

- mode: The channel profile.
The SDK differentiates channel profiles and applies different optimization algorithms accordingly. For example, it prioritizes smoothness and low latency for a video call, and prioritizes video quality for a video streaming.
The SDK supports the following channel profiles:
  - "live": Sets the channel profile as live streaming. You need to go on to call setClientRole to set the client as either a host or an audience. A host can send and receive audio or video, while an audience can only receive audio or video.
  - "rtc": Sets the channel profile as communication. It is used for a one-on-one call or a group call where all users in the channel can converse freely.

- role: The user role in a live interactive streaming (when mode is "live").
The user role determines the permissions that the SDK grants to a user, such as permission to publish local streams, subscribe to remote streams, and push streams to a CDN address. You can set the user role as "host" or "audience". A host can publish and subscribe to tracks, while an audience member can only subscribe to tracks. The default role in a live streaming is "audience". Before publishing tracks, you must set the user role as "host".
See [ClientRole](https://api-ref.agora.io/en/voice-sdk/web/4.x/globals.html#clientrole)

- clientRoleOptions: The detailed options of the user role, including user level. See [ClientRoleOptions](https://api-ref.agora.io/en/voice-sdk/web/4.x/interfaces/clientroleoptions.html)



