function CommandOptionType(args) {
  if (!args) return;
  if (!typeof args === "string") {
    return console.log("(Clorynin Module Eror) args Must Be A String")
  }
  args = args.toUpperCase()
  if (args === "SUB_COMMAND") {
    return 1
  }
  if (args === "SUB_COMMAND_GROUP") {
    return 2
  }
  if (args === "STRING") {
    return 3
  }
  if (args === "INTEGER") {
    return 4
  }
  if (args === "BOOLEAN") {
    return 5
  }
  if (args === "USER") {
    return 6
  }
  if (args === "CHANNEL") {
    return 7
  }
  if (args === "ROLE") {
    return 8
  }
  if (args === "MENTIONABLE") {
    return 9
  }
  if (args === "NUMBER") {
    return 10
  }
  if (args === "ATTACHMENT") {
    return 11
  }
}

function CommandType(args) {
  if (!args) return;
  if (!typeof args === "string") {
    return console.log("(Clorynin Module Eror) args Must Be A String")
  }
  args = args.toUpperCase()
  if (args === "CHAT_INPUT") {
    return 1
  }
  if (args === "USER") {
    return 2
  }
  if (args === "MESSAGE") {
    return 3
  }
}

function CommandPermissionType(args) {
  if (!args) return;
  if (!typeof args === "string") {
    return console.log("(Clorynin Module Eror) args Must Be A String")
  }
  args = args.toUpperCase()
  if (args === "ROLE") {
    return 1
  }
  if (args === "USER") {
    return 2
  }
}

function CommandType(args) {
  if (!args) return;
  if (!typeof args === "string") {
    return console.log("(Clorynin Module Eror) args Must Be A String")
  }
  args = args.toUpperCase()
  if (args === "CHAT_INPUT") {
    return 1
  }
  if (args === "USER") {
    return 2
  }
  if (args === "MESSAGE") {
    return 3
  }
}

//Style
function ButtonStyle(args) {
  if (!args) return;
  if (!typeof args === "string") {
    return console.log("(Clorynin Module Eror) args Must Be A String")
  }
  args = args.toUpperCase()
  if (args === "PRIMARY") {
    return 1
  }
  if (args === "SECONDARY") {
    return 2
  }
  if (args === "SUCCESS") {
    return 3
  }
  if (args === "DANGER") {
    return 4
  }
  if (args === "LINK") {
    return 5
  }
}

function TextInputStyle(args) {
  if (!args) return;
  if (!typeof args === "string") {
    return console.log("(Clorynin Module Eror) args Must Be A String")
  }
  if (!typeof args === "string") {
    return console.log("(Clorynin Module Eror) args Must Be A String")
  }
  args = args.toUpperCase()
  if (args === "SHORT") {
    return 1
  }
  if (args === "PARAGRAPH") {
    return 2
  }
}

function ResolveColor(args) {
  if (!args) return;
  if ((!typeof args === "string")) console.log("Color Must Be A String")
  if (args.startsWith("#")) {
    var bbggrr = args.substr(4, 2) + args.substr(2, 2) + args.substr(0, 2);
    return parseInt(bbggrr, 16);
  }
  args = args.toLowerCase()
  if (!args.startsWith('#')) {
    args = args.toLowerCase()
    if (args === "green") {
      return 3066993
    }
    if (args === "blue") {
      return 3447003
    }
    if (args === "purple") {
      return 10181046
    }
    if (args === "orange") {
      return 15105570
    }
    if (args === "red") {
      return 15158332
    }
    if (args === "yellow") {
      return 16776960
    }
    if (args === "random") {
      var datawarna = [3066993, 10181046, 3447003, 15105570, 15158332, 16776960]
      return datawarna[Math.floor(Math.random() * datawarna.length)];
    }
  }
}

function ActivityType(type) {
  type = type.toLowerCase()
  switch (type) {
    case "playing":
      return 0
      break;
    case "streaming":
      return 1
      break;
    case "listening":
      return 2
      break;
    case "watching":
      return 3
      break;
    case "custom":
      return 4
      break;
    case "competing":
      return 5
      break;
  }
}


module.exports = {
  CommandOptionType: CommandOptionType,
  CommandPermissionType: CommandPermissionType,
  CommandType: CommandType,
  ButtonStyle: ButtonStyle,
  TextInputStyle: TextInputStyle,
  ResolveColor: ResolveColor,
  ActivityType: ActivityType
}
