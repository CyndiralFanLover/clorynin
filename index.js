//Type
function CommandOptionType(args) {
  args = args?.toUpperCase()
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
  args = args?.toUpperCase()
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
  args = args?.toUpperCase()
  if (args === "ROLE") {
    return 1
  }
  if (args === "USER") {
    return 2
  }
}

//Style
function ButtonStyle(args) {
  args = args?.toUpperCase()
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
  args = args?.toUpperCase()
  if (args === "SHORT") {
    return 1
  }
  if (args === "PARAGRAPH") {
    return 2
  }
}

function ResolveColor(args) {
  if ((!typeof args === "string")) console.log("Color Must Be A String")
  if (args?.startsWith("#")) {
    var bbggrr = args.substr(4, 2) + args.substr(2, 2) + args.substr(0, 2);
    return parseInt(bbggrr, 16);
  }
  args = args?.toLowerCase()
  if (!args?.startsWith('#')) {
    args = args?.toLowerCase()
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

class Embed {
  constructor(raw) {
    this.type = "rich"
    this.title = raw?.title || null
    this.description = raw?.description || null
    this.url = raw?.url || null
    this.fields = raw?.fields || []
    this.author = raw?.author || null
    this.footer = raw?.footer || null
    this.image = raw?.image || null
    this.video = null
    this.color = raw?.color || null
    this.provider = null
  }

  addField(name, value, inline) {
    try {
      if (!name || name?.length === 0) {
        console.log("Provide A Name For Field")
        return this
      }
      if (!value || value?.length === 0) {
        console.log("Provide A Description For Field")
        return this
      }
      if (!typeof name === "string") {
        console.log("Field Title Must Be A String")
        return this
      }
      if (!typeof value === "string") {
        console.log("(Error Utility)  Field Value Must Be A String")
        return this
      }
      if (!inline === true || false) inline = false
      if (!inline) inline = false
      if (!Array.isArray(this.fields)) this.fields = []
      this.fields.push({ name: name, value: value, inline: inline })
      return this
    } catch (err) {
      console.log("Builder Err : " + err)
      return this
    }
  }

  addFields(fields) {
    try {
      if (fields?.length === 0) {
        console.log("(Error Utility)  Fields Cannot Be Empty")
        return this
      }
      if (!Array.isArray(fields)) {
        console.log("(Error Utility)  Fields Must be array")
        return this
      }
      fields.map((neh, num) => {
        if (!neh?.name || neh?.name.length === 0) {
          console.log(`(Error Utility)  [Field ${num}]` + "Provide A Name")
          return this
        }
        if (!neh?.value || neh?.value.length === 0) {
          console.log(`(Error Utility)  [Field ${num}] ` + "Provide A Value")
          return this
        }
        if (!typeof neh?.name === "string") {
          console.log(`(Error Utility)  [Field ${num}] ` + "Field Title Must Be A String")
          return this
        }
        if (!typeof neh?.value === "string") {
          console.log(`(Error Utility)  [Field ${num}] ` + "Field Value Must Be A String")
          return this
        }
        if (!neh?.inline === true || false) neh.inline = false
        if (!Array.isArray(this.fields)) this.fields = []
        this?.fields.push({ title: neh?.name, value: neh?.value, inline: neh?.inline })
      })
      return this
    } catch (err) {
      console.log("Builder Err : " + err)
      return this
    }
  }

  setColor(color) {
    try {
      if ((typeof color === "string")) {
        this.color = ResolveColor(color)
        return this
      } else if ((typeof color === "integer")) {
        this.color = color
        return this
      } else if ((typeof color === "array")) {
        this.color = [color[0], color[1], color[2]]
        return this
      }
    } catch (err) {
      console.log("Builder Err : " + err)
      return this
    }
  }

  setImage(image) {
    try {
      if ((!image?.url) && (image?.url.length === 0)) {
        console.log("(Error Utility)   Image Must A Url\n\n\"{url: \"https://image.id/image.jpg}\"\nor\nsetImage({url:url})")
        return this
      }
      if (!typeof image?.url === "string") {
        console.log("(Error Utility)  Image URL Must Be A String")
        return this
      }
      if ((!image.url?.startsWith("http")) || (!image.url?.startsWith("https"))) {
        console.log("(Error Utility)  Image Must Be Using URL\n\n\"Like https://google.com/image.jpg\"")
        return this

      }
      this.image = { url: image.url }
      return this
    } catch (err) {
      console.log("Builder Err : " + err)
      return this
    }
  }

  setThumbnail(image) {
    try {
      if ((!image?.url) && (image?.url.length === 0)) {
        console.log("(Error Utility)   Image Must A Url\n\n\"{url: \"https://image.id/image.jpg}\"\nor\nsetImage({url:url})")
        return this
      }
      if (!typeof image?.url === "string") {
        console.log("(Error Utility)  Image URL Must Be A String")
        return this
      }
      if ((!image.url?.startsWith("http")) || (!image.url?.startsWith("https"))) {
        console.log("(Error Utility)  Image Must Be Using URL\n\n\"Like https://google.com/image.jpg\"")
        return this

      }
      this.thumbnail = { url: image.url }
      return this
    } catch (err) {
      console.log("Builder Err : " + err)
      return this
    }
  }

  setDescription(description) {
    try {
      if ((!description) && description.length === 0) {
        console.log('(Error Utility)  Description Cannot Empty')
        return this
      }
      if (!typeof description === "string") {
        console.log('(Error Utility)  Description Must A String')
        return this
      }
      this.description = description
      return this
    } catch (err) {
      console.log("Builder Err : " + err)
      return this
    }
  }

  setTitle(title) {
    try {
      if ((!title) && title?.length === 0) {
        console.log('(Error Utility)  Title Cannot Empty')
        return this
      }
      if (!typeof title === "string") {
        console.log('(Error Utility)  Title Must Be A String')
        return this
      }
      this.title = title
      return this
    } catch (err) {
      console.log("Builder Err : " + err)
      return this
    }
  }

  setAuthor(name, iconURL, url) {
    if (!name?.name) {
      if ((!name) && name?.length === 0) {
        console.log('(Error Utility) Name Cannot Empty')
        return this
      }
      if (!typeof name === "string") {
        console.log('(Error Utility) Name Must A String')
        return this
      }

      if (iconURL) {
        if (!typeof iconURL === "string") {
          console.log('(Error Utility) URL Must A String')
          return this
        }
        if (iconURL?.length === 0) {
          console.log('(Error Utility) URL Cannot Empty')
          return this
        }
      }
      if (url) {
        if (!typeof url === "string") {
          console.log('(Error Utility) URL Must A String')
          return this
        }
        if (url?.length === 0) {
          console.log('(Error Utility) URL Cannot Empty')
          return this
        }
      }
      this.author = { name: name, iconURL: iconURL, url: url }
      return this
    } else {
      if ((!name?.name) && name?.name.length === 0) {
        console.log('(Error Utility) URL Cannot Empty')
        return this
      }
      if (!typeof name.name === "string") {
        console.log('(Error Utility) URL Must A String')
        return this
      }
      if (name?.iconURL) {
        if (!typeof name?.iconURL === "string") {
          console.log('(Error Utility) iconURL Must A String')
          return this
        }
        if (name?.iconURL.length === 0) {
          console.log('(Error Utility) iconURL Cannot Empty')
          return this
        }
      }
      if (name?.url) {
        if (!typeof name?.url === "string") {
          console.log('(Error Utility) URL Must A String')
          return this
        }
        if (name?.url.length === 0) {
          console.log('(Error Utility) URL Cannot Empty')
          return this
        }
      }
      this.author = { name: name.name, iconURL: name.iconURL, url: name.url }
      return this
    }
  }

  setFooter(text, iconURL) {
    if (!text?.text) {
      if ((!text) && text?.length === 0) {
        console.log('(Error Utility) text Cannot Empty')
        return this
      }
      if (!typeof text === "string") {
        console.log('(Error Utility) Text Must A String')
        return this
      }

      if (iconURL) {
        if (!typeof iconURL === "string") {
          console.log('(Error Utility) iconURL Must A String')
          return this
        }
        if (iconURL?.length === 0) {
          console.log('(Error Utility) iconURL Cannot Empty')
          return this
        }
      }
      this.author = { text: text, iconURL: iconURL }
      return this
    } else {
      if ((!text?.text) && text?.text.length === 0) {
        console.log('(Error Utility) Text Cannot Empty')
        return this
      }
      if (!typeof text.text === "string") {
        console.log('(Error Utility) Text Must A String')
        return this
      }
      if (text?.iconURL) {
        if (!typeof text?.iconURL === "string") {
          console.log('(Error Utility) iconURL Must A String')
          return this
        }
        if (text?.iconURL.length === 0) {
          console.log('(Error Utility) iconURL Cannot Empty')
          return this
        }
      }
      this.footer = { text: text.text, iconURL: text.iconURL }
      return this
    }
  }

  setURL(url) {
    try {
      if ((!url) && url?.length === 0) {
        console.log('(Error Utility) URL Cannot Empty')
        return this
      }
      if (!typeof url === "string") {
        console.log('(Error Utility) URL Must A String')
        return this
      }
      this.url = url
      return this
    } catch (err) {
      console.log("Builder Err : " + err)
      return this
    }
  }

  setTimestamp(date) {
    if (!date) {
      this.date = new Date()
      return this
    }
    if (!typeof date === "date") {
      console.log("date Must Be A Date")
      return this
    }
    this.date = date
    return this
  }
}

class ActionRow {
  constructor() {
    this.type = "ACTION_ROW"
    this.components = []
  }

  addComponent(obj) {
    if (!obj) {
      console.log('Obj Cannot Empty')
      return this
    }
    if (!typeof obj === "object") {
      console.log("Obj Must Be A Object From Component Builder")
      return this
    }
    this.components.push(obj)
  }

  addComponents(naray) {
    if (!typeof naray === "array") {
      console.log('Naray Must Be Array')
      return this
    }
    naray.map((yanto, yanti) => {
      if (!yanto) {
        console.log(`[Component ${yanti}] ` + 'Obj Cannot Empty')
        return this
      }
      if (!typeof yanto === "object") {
        console.log(`[Component ${yanti}] ` + "Obj Must Be A Object From Component Builder")
        return this
      }
      this.components.push(yanto)
    })
    return this
  }
}

module.exports = {
  CommandOptionType: CommandOptionType(),
  CommandPermissionType: CommandPermissionType(),
  CommandType: CommandType(),
  ButtonStyle: ButtonStyle(),
  TextInputStyle: TextInputStyle(),
  ResolveColor: ResolveColor(),
  Embed: Embed,
  ActionRow: ActionRow
}
