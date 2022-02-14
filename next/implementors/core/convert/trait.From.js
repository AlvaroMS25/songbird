(function() {var implementors = {};
implementors["songbird"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/aead/0.4.3/aead/struct.Error.html\" title=\"struct aead::Error\">Error</a>&gt; for <a class=\"enum\" href=\"songbird/error/enum.ConnectionError.html\" title=\"enum songbird::error::ConnectionError\">Error</a>","synthetic":false,"types":["songbird::driver::connection::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt; for <a class=\"enum\" href=\"songbird/error/enum.ConnectionError.html\" title=\"enum songbird::error::ConnectionError\">Error</a>","synthetic":false,"types":["songbird::driver::connection::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/serde_json/1.0.79/serde_json/error/struct.Error.html\" title=\"struct serde_json::error::Error\">Error</a>&gt; for <a class=\"enum\" href=\"songbird/error/enum.ConnectionError.html\" title=\"enum songbird::error::ConnectionError\">Error</a>","synthetic":false,"types":["songbird::driver::connection::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;SendError&lt;WsMessage&gt;&gt; for <a class=\"enum\" href=\"songbird/error/enum.ConnectionError.html\" title=\"enum songbird::error::ConnectionError\">Error</a>","synthetic":false,"types":["songbird::driver::connection::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;SendError&lt;EventMessage&gt;&gt; for <a class=\"enum\" href=\"songbird/error/enum.ConnectionError.html\" title=\"enum songbird::error::ConnectionError\">Error</a>","synthetic":false,"types":["songbird::driver::connection::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;SendError&lt;MixerMessage&gt;&gt; for <a class=\"enum\" href=\"songbird/error/enum.ConnectionError.html\" title=\"enum songbird::error::ConnectionError\">Error</a>","synthetic":false,"types":["songbird::driver::connection::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Elapsed&gt; for <a class=\"enum\" href=\"songbird/error/enum.ConnectionError.html\" title=\"enum songbird::error::ConnectionError\">Error</a>","synthetic":false,"types":["songbird::driver::connection::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;TrySendError&lt;<a class=\"enum\" href=\"https://docs.rs/serenity/*/serenity/gateway/enum.InterMessage.html\" title=\"enum serenity::gateway::InterMessage\">InterMessage</a>&gt;&gt; for <a class=\"enum\" href=\"songbird/error/enum.JoinError.html\" title=\"enum songbird::error::JoinError\">JoinError</a>","synthetic":false,"types":["songbird::error::JoinError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;CommandError&gt; for <a class=\"enum\" href=\"songbird/error/enum.JoinError.html\" title=\"enum songbird::error::JoinError\">JoinError</a>","synthetic":false,"types":["songbird::error::JoinError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;ClusterCommandError&gt; for <a class=\"enum\" href=\"songbird/error/enum.JoinError.html\" title=\"enum songbird::error::JoinError\">JoinError</a>","synthetic":false,"types":["songbird::error::JoinError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"songbird/error/enum.ConnectionError.html\" title=\"enum songbird::error::ConnectionError\">Error</a>&gt; for <a class=\"enum\" href=\"songbird/error/enum.JoinError.html\" title=\"enum songbird::error::JoinError\">JoinError</a>","synthetic":false,"types":["songbird::error::JoinError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'_ <a class=\"enum\" href=\"songbird/error/enum.ConnectionError.html\" title=\"enum songbird::error::ConnectionError\">Error</a>&gt; for <a class=\"enum\" href=\"songbird/events/context_data/enum.DisconnectReason.html\" title=\"enum songbird::events::context_data::DisconnectReason\">DisconnectReason</a>","synthetic":false,"types":["songbird::events::context::data::disconnect::DisconnectReason"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"songbird/events/enum.TrackEvent.html\" title=\"enum songbird::events::TrackEvent\">TrackEvent</a>&gt; for <a class=\"enum\" href=\"songbird/events/enum.UntimedEvent.html\" title=\"enum songbird::events::UntimedEvent\">UntimedEvent</a>","synthetic":false,"types":["songbird::events::untimed::UntimedEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"songbird/events/enum.CoreEvent.html\" title=\"enum songbird::events::CoreEvent\">CoreEvent</a>&gt; for <a class=\"enum\" href=\"songbird/events/enum.UntimedEvent.html\" title=\"enum songbird::events::UntimedEvent\">UntimedEvent</a>","synthetic":false,"types":["songbird::events::untimed::UntimedEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"songbird/events/enum.TrackEvent.html\" title=\"enum songbird::events::TrackEvent\">TrackEvent</a>&gt; for <a class=\"enum\" href=\"songbird/events/enum.Event.html\" title=\"enum songbird::events::Event\">Event</a>","synthetic":false,"types":["songbird::events::Event"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"songbird/events/enum.CoreEvent.html\" title=\"enum songbird::events::CoreEvent\">CoreEvent</a>&gt; for <a class=\"enum\" href=\"songbird/events/enum.Event.html\" title=\"enum songbird::events::Event\">Event</a>","synthetic":false,"types":["songbird::events::Event"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>&gt; for <a class=\"struct\" href=\"songbird/id/struct.ChannelId.html\" title=\"struct songbird::id::ChannelId\">ChannelId</a>","synthetic":false,"types":["songbird::id::ChannelId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/serenity/*/serenity/model/id/struct.ChannelId.html\" title=\"struct serenity::model::id::ChannelId\">ChannelId</a>&gt; for <a class=\"struct\" href=\"songbird/id/struct.ChannelId.html\" title=\"struct songbird::id::ChannelId\">ChannelId</a>","synthetic":false,"types":["songbird::id::ChannelId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Id&lt;ChannelMarker&gt;&gt; for <a class=\"struct\" href=\"songbird/id/struct.ChannelId.html\" title=\"struct songbird::id::ChannelId\">ChannelId</a>","synthetic":false,"types":["songbird::id::ChannelId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>&gt; for <a class=\"struct\" href=\"songbird/id/struct.GuildId.html\" title=\"struct songbird::id::GuildId\">GuildId</a>","synthetic":false,"types":["songbird::id::GuildId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/serenity/*/serenity/model/id/struct.GuildId.html\" title=\"struct serenity::model::id::GuildId\">GuildId</a>&gt; for <a class=\"struct\" href=\"songbird/id/struct.GuildId.html\" title=\"struct songbird::id::GuildId\">GuildId</a>","synthetic":false,"types":["songbird::id::GuildId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"songbird/id/struct.GuildId.html\" title=\"struct songbird::id::GuildId\">GuildId</a>&gt; for DriverGuild","synthetic":false,"types":["serenity_voice_model::id::GuildId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Id&lt;GuildMarker&gt;&gt; for <a class=\"struct\" href=\"songbird/id/struct.GuildId.html\" title=\"struct songbird::id::GuildId\">GuildId</a>","synthetic":false,"types":["songbird::id::GuildId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>&gt; for <a class=\"struct\" href=\"songbird/id/struct.UserId.html\" title=\"struct songbird::id::UserId\">UserId</a>","synthetic":false,"types":["songbird::id::UserId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/serenity/*/serenity/model/id/struct.UserId.html\" title=\"struct serenity::model::id::UserId\">UserId</a>&gt; for <a class=\"struct\" href=\"songbird/id/struct.UserId.html\" title=\"struct songbird::id::UserId\">UserId</a>","synthetic":false,"types":["songbird::id::UserId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"songbird/id/struct.UserId.html\" title=\"struct songbird::id::UserId\">UserId</a>&gt; for DriverUser","synthetic":false,"types":["serenity_voice_model::id::UserId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Id&lt;UserMarker&gt;&gt; for <a class=\"struct\" href=\"songbird/id/struct.UserId.html\" title=\"struct songbird::id::UserId\">UserId</a>","synthetic":false,"types":["songbird::id::UserId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"songbird/input/cached/struct.Compressed.html\" title=\"struct songbird::input::cached::Compressed\">Compressed</a>&gt; for <a class=\"struct\" href=\"songbird/input/struct.Input.html\" title=\"struct songbird::input::Input\">Input</a>","synthetic":false,"types":["songbird::input::Input"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; for <a class=\"enum\" href=\"songbird/input/cached/enum.LengthHint.html\" title=\"enum songbird::input::cached::LengthHint\">LengthHint</a>","synthetic":false,"types":["songbird::input::cached::hint::LengthHint"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/time/struct.Duration.html\" title=\"struct core::time::Duration\">Duration</a>&gt; for <a class=\"enum\" href=\"songbird/input/cached/enum.LengthHint.html\" title=\"enum songbird::input::cached::LengthHint\">LengthHint</a>","synthetic":false,"types":["songbird::input::cached::hint::LengthHint"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/process/struct.Child.html\" title=\"struct std::process::Child\">Child</a>&gt; for <a class=\"enum\" href=\"songbird/input/reader/enum.Reader.html\" title=\"enum songbird::input::reader::Reader\">Reader</a>","synthetic":false,"types":["songbird::input::reader::Reader"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/process/struct.Child.html\" title=\"struct std::process::Child\">Child</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"enum\" href=\"songbird/input/reader/enum.Reader.html\" title=\"enum songbird::input::reader::Reader\">Reader</a>","synthetic":false,"types":["songbird::input::reader::Reader"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'_ <a class=\"enum\" href=\"songbird/input/codec/enum.Codec.html\" title=\"enum songbird::input::codec::Codec\">Codec</a>&gt; for <a class=\"enum\" href=\"songbird/input/codec/enum.CodecType.html\" title=\"enum songbird::input::codec::CodecType\">CodecType</a>","synthetic":false,"types":["songbird::input::codec::CodecType"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;CatcherError&gt; for <a class=\"enum\" href=\"songbird/input/error/enum.Error.html\" title=\"enum songbird::input::error::Error\">Error</a>","synthetic":false,"types":["songbird::input::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"songbird/input/error/enum.DcaError.html\" title=\"enum songbird::input::error::DcaError\">DcaError</a>&gt; for <a class=\"enum\" href=\"songbird/input/error/enum.Error.html\" title=\"enum songbird::input::error::Error\">Error</a>","synthetic":false,"types":["songbird::input::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt; for <a class=\"enum\" href=\"songbird/input/error/enum.Error.html\" title=\"enum songbird::input::error::Error\">Error</a>","synthetic":false,"types":["songbird::input::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Error&gt; for <a class=\"enum\" href=\"songbird/input/error/enum.Error.html\" title=\"enum songbird::input::error::Error\">Error</a>","synthetic":false,"types":["songbird::input::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"enum\" href=\"songbird/input/reader/enum.Reader.html\" title=\"enum songbird::input::reader::Reader\">Reader</a>","synthetic":false,"types":["songbird::input::reader::Reader"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"songbird/input/restartable/struct.Restartable.html\" title=\"struct songbird::input::restartable::Restartable\">Restartable</a>&gt; for <a class=\"struct\" href=\"songbird/input/struct.Input.html\" title=\"struct songbird::input::Input\">Input</a>","synthetic":false,"types":["songbird::input::Input"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()