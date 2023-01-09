window.SIDEBAR_ITEMS = {"enum":[["DisconnectKind","The location that a voice connection was terminated."],["DisconnectReason","The reason that a voice connection failed."]],"struct":[["ConnectData","Voice connection details gathered at setup/reinstantiation."],["DisconnectData","Voice connection details gathered at termination or failure."],["RtcpData","Telemetry/statistics packet, received from another stream (detailed in `packet`). `payload_offset` contains the true payload location within the raw packet’s `payload()`, to allow manual decoding of `Rtcp` packet bodies."],["RtpData","Opus audio packet, received from another stream (detailed in `packet`). `payload_offset` contains the true payload location within the raw packet’s `payload()`, if extensions or raw packet data are required."],["VoiceData","Voice packet and audio data for a single user, from a single tick."],["VoiceTick","Audio data from all users in a voice channel, fired every 20ms."]]};