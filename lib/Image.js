const Base = require('./Base');
const Message = require('./Message');
const ReplyMessage = require('./ReplyMessage');
const config = require("../config");

class Image extends Base {
  constructor(client, data, msg) {
    super(client);
    if (data) this._patch(data, msg);
  }

  _patch(data, msg) {
    this.isGroup = data.isGroup;
    this.id = data.key.id === undefined ? undefined : data.key.id;
    this.jid = data.key.remoteJid;
    this.pushName = data.pushName;
    this.participant = data.sender;
    this.sudo = config.SUDO.split(",").includes(this.participant.split("@")[0]);
    this.text = data.body;
    this.fromMe = data.key.fromMe;
    this.timestamp =
      typeof data.messageTimestamp === "object"
        ? data.messageTimestamp.low
        : data.messageTimestamp;
    this.message = { key: data.key, message: data.message };

    if (data.quoted) {
      this.reply_message = data.quoted;
    } else {
      this.reply_message = false;
    }

    return super._patch(data);
  }
  async reply(text, opt = { withTag: true }) {
    return this.client.sendMessage(
      this.jid,
      {
        text: require("util").format(text),
        ...opt,
      },
      { ...opt, quoted: this.data }
    );
  }
}
