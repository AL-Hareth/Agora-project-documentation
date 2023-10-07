import AgoraRTC from "agora-rtc-sdk-ng";

/**
    * These are the options needed to connect to the Agora RTC Service
    * @type {{appId: string, channel: string, token: string, uid: number}}.
    * appId: Agora App ID from the console https://console.agora.io
    * channel: The cannel that the user would join
    * token: Agora Token (Agora will generate tokens in productionm, for local testing you can generate a token and use it)
    * uid: User ID
    *
    * TODO: show how to generate a token
    */
const options = {
    appId: '1fd0298ab2e84cec9ccf8f0bfa4acba3',
    channel: 'main',
    token: '007eJxTYJjw4d/pj6d29jJoanx0yr33eX579et+TlOpbWL79uhPUNFVYDBMSzEwsrRITDJKtTBJTk22TE5Os0gzSEpLNElMTko09vWVTW0IZGQ4epiPgREKQXwWhtzEzDwGBgD3gyEi',
    uid: 0,
};

/**
    * @type {{localAudioTrack: null, remoteAudioTrack: null, remoteUid: null}}.
    * localAudioTrack: holds the local audio track
    * remoteAudioTrack: holds the remote audio track
    * remoteUid: holds the remote user id
    */
const channelParameters = {
    localAudioTrack: null,
    remoteAudioTrack: null,
    remoteUid: null,
};

/** @type {import("agora-rtc-sdk-ng").IAgoraRTCClient} */
let client = null;

async function initCall() {
    // creating the Agora client
    // client config object holds Two values
    /** @type {Prettify<import("agora-rtc-sdk-ng").ClientConfig>} */
    const clientConfig = { mode: 'rtc', codec: 'vp8' };
    client = AgoraRTC.createClient(clientConfig);

    // listens for a user joining the channel
    client.on('user-published', handleUserPublished)
    // listens for a user leaving the channel
    client.on('user-unpublished', (user) => {
        showMessage(`Remote user with ID: ${user.uid} has left the channel`);
    });

    window.onload = function() {

        const joinButton = document.getElementById("join");
        const leaveButton = document.getElementById("leave");
        const message = document.getElementById("message");

        function showMessage(messageContext) {
            message.innerHTML = messageContext;
        }

        // Linking the client to the DOM
        joinButton.onclick = async () => {
            await client.join(options.appId, options.channel, options.token, options.uid);
            showMessage(`Joined the ${options.channel} successfully successfully`);
            // Create a local audio track from the microphone audio.
            channelParameters.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
            // Publish the local audio track in the channel.
            await client.publish(channelParameters.localAudioTrack);
        }

        leaveButton.addEventListener('click', async () => {
            // Destroy the local audio track.
            channelParameters.localAudioTrack.close();
            // Leave the channel
            await client.leave();
            // Refresh the page for reuse
            window.location.reload();
        })
    }

}

/**
    * @param {Prettify<import("agora-rtc-sdk-ng").IAgoraRTCRemoteUser>} user
    * @param {"audio" | "video" | "datachannel"} mediaType
    */
async function handleUserPublished(user, mediaType) {
    // This method subscribe to the remote user
    await client.subscribe(user, mediaType);
    console.log("user joined");

    if (mediaType === "audio") {
        channelParameters.localAudioTrack = user.audioTrack;
        // Get the RemoteAudioTrack object from the AgoraRTCRemoteUser object.
        channelParameters.remoteAudioTrack = user.audioTrack;
        // Play the remote audio track.
        channelParameters.remoteAudioTrack.play();
        showMessage("Remote user connected: " + user.uid);
    }
}

initCall();
