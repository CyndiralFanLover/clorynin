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
    this.title = raw?.title || null
    this.description = raw?.description || null
    this.url = raw?.url || null
    this.fields = raw?.fields || []
    this.author = raw?.author || null
    this.footer = raw?.footer || null
    this.image = raw?.image || null
    this.color = raw?.color || null
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
        console.log("Field Value Must Be A String")
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
        console.log("Fields Cannot Be Empty")
        return this
      }
      if (!Array.isArray(fields)) {
        console.log("Fields Must be array")
        return this
      }
      fields.map((neh, num) => {
        if (!neh?.name || neh?.name.length === 0) {
          console.log(`[Field ${num}]` + "Provide A Name")
          return this
        }
        if (!neh?.value || neh?.value.length === 0) {
          console.log(`[Field ${num}] ` + "Provide A Value")
          return this
        }
        if (!typeof neh?.name === "string") {
          console.log(`[Field ${num}] ` + "Field Title Must Be A String")
          return this
        }
        if (!typeof neh?.value === "string") {
          console.log(`[Field ${num}] ` + "Field Value Must Be A String")
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
        console.log("   Image Must A Url\n\n\"{url: \"https://image.id/image.jpg}\"\nor\nsetImage({url:url})")
        return this
      }
      if (!typeof image?.url === "string") {
        console.log("  Image URL Must Be A String")
        return this
      }
      if ((!image.url?.startsWith("http")) || (!image.url?.startsWith("https"))) {
        console.log("  Image Must Be Using URL\n\n\"Like https://google.com/image.jpg\"")
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
        console.log("   Image Must A Url\n\n\"{url: \"https://image.id/image.jpg}\"\nor\nsetImage({url:url})")
        return this
      }
      if (!typeof image?.url === "string") {
        console.log("  Image URL Must Be A String")
        return this
      }
      if ((!image.url?.startsWith("http")) || (!image.url?.startsWith("https"))) {
        console.log("  Image Must Be Using URL\n\n\"Like https://google.com/image.jpg\"")
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
        console.log('  Description Cannot Empty')
        return this
      }
      if (!typeof description === "string") {
        console.log('  Description Must A String')
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
        console.log('  Title Cannot Empty')
        return this
      }
      if (!typeof title === "string") {
        console.log('  Title Must Be A String')
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
        console.log(' Name Cannot Empty')
        return this
      }
      if (!typeof name === "string") {
        console.log(' Name Must A String')
        return this
      }

      if (iconURL) {
        if (!typeof iconURL === "string") {
          console.log(' URL Must A String')
          return this
        }
        if (iconURL?.length === 0) {
          console.log(' URL Cannot Empty')
          return this
        }
      }
      if (url) {
        if (!typeof url === "string") {
          console.log(' URL Must A String')
          return this
        }
        if (url?.length === 0) {
          console.log(' URL Cannot Empty')
          return this
        }
      }
      this.author = { name: name, iconURL: iconURL, url: url }
      return this
    } else {
      if ((!name?.name) && name?.name.length === 0) {
        console.log(' URL Cannot Empty')
        return this
      }
      if (!typeof name.name === "string") {
        console.log(' URL Must A String')
        return this
      }
      if (name?.iconURL) {
        if (!typeof name?.iconURL === "string") {
          console.log(' iconURL Must A String')
          return this
        }
        if (name?.iconURL.length === 0) {
          console.log(' iconURL Cannot Empty')
          return this
        }
      }
      if (name?.url) {
        if (!typeof name?.url === "string") {
          console.log(' URL Must A String')
          return this
        }
        if (name?.url.length === 0) {
          console.log(' URL Cannot Empty')
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
        console.log(' text Cannot Empty')
        return this
      }
      if (!typeof text === "string") {
        console.log(' Text Must A String')
        return this
      }

      if (iconURL) {
        if (!typeof iconURL === "string") {
          console.log(' iconURL Must A String')
          return this
        }
        if (iconURL?.length === 0) {
          console.log(' iconURL Cannot Empty')
          return this
        }
      }
      this.author = { text: text, iconURL: iconURL }
      return this
    } else {
      if ((!text?.text) && text?.text.length === 0) {
        console.log(' Text Cannot Empty')
        return this
      }
      if (!typeof text.text === "string") {
        console.log(' Text Must A String')
        return this
      }
      if (text?.iconURL) {
        if (!typeof text?.iconURL === "string") {
          console.log(' iconURL Must A String')
          return this
        }
        if (text?.iconURL.length === 0) {
          console.log(' iconURL Cannot Empty')
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
        console.log(' URL Cannot Empty')
        return this
      }
      if (!typeof url === "string") {
        console.log(' URL Must A String')
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
    this.type = 
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


class Command {
  constructor(data) {
    this.name = data?.name || null
    this.description = data?.description || null
    this.options = data?.options || [];
    this.type = data?.type || 1
  }

  setName(name) {
    try {
      if ((!name) && name?.length === 0) {
        console.log('Name Cannot Empty')
        return this
      }
      if (!typeof name === "string") {
        console.log('Name Must Be A String')
        return this
      }
      this.name = name
      return this
    } catch (err) {
      console.log("Builder Err : " + err)
      return this
    }
  }

  setDescription(description) {
    try {
      if ((!description) && description?.length === 0) {
        console.log('Name Cannot Empty')
        return this
      }
      if (!typeof description === "string") {
        console.log('Name Must Be A String')
        return this
      }
      this.description = description
      return this
    } catch (err) {
      console.log("Builder Err : " + err)
      return this
    }
  }

  setType(type) {
    try {
      if (typeof type === "number") {
        if ((type > 3) && (type < 1)) {
          console.log('Type Command Isn\'t Valid (Support 1 - 3)')
          return this
        }
        this.type = type
      }
      if (typeof type === "string") {
        if (!CommandType(type)) {
          console.log("Not Valid")
          return this
        }
        this.type = CommandType(type)
      }
    } catch (err) {
      console.log("Builder Err : " + err)
      return this
    }
  }

  addOption(name, description, type, required) {
    try {
      if (!name || name?.length === 0) {
        console.log("Provide A Name For Field")
        return this
      }
      if (!description || description?.length === 0) {
        console.log("Provide A Description For Field")
        return this
      }
      if (!type) {
        console.log("Provide A Type")
        return this
      }
      if (!typeof name === "string") {
        console.log("Field Title Must Be A String")
        return this
      }
      if (!typeof description === "string") {
        console.log("Field Value Must Be A String")
        return this
      }
      if (!required === true || false) required = false

      if (typeof type === "number") {
        if ((type > 11) && (type < 1)) {
          console.log('Type Command Isn\'t Valid (Support 1 - 11)')
          return this
        }
      }
      if (typeof type === "string") {
        if (!CommandOptionType(type)) {
          console.log("Not Valid")
          return this
        }
        type = CommandOptionType(type)
      }

      if (!Array.isArray(this.options)) this.options = []
      this.options.push({ name: name, description: description, required: required })
      return this
    } catch (err) {
      console.log("Builder Err : " + err)
      return this
    }
  }

  addOptions(options) {
    try {
      if (options?.length === 0) {
        console.log("Fields Cannot Be Empty")
        return this
      }
      if (!Array.isArray(options)) {
        console.log("Fields Must be array")
        return this
      }
      options.map((neh, num) => {
        if (!neh?.name || neh?.name.length === 0) {
          console.log(`[Field ${num}]` + "Provide A Name")
          return this
        }
        if (!neh?.description || neh?.description.length === 0) {
          console.log(`[Field ${num}] ` + "Provide A Value")
          return this
        }
        if (!neh?.type) {
          console.log(`[Field ${num}] ` + "Provide A Type")
          return this
        }
        if (!typeof neh?.name === "string") {
          console.log(`[Field ${num}] ` + "Field Title Must Be A String")
          return this
        }
        if (!typeof neh?.description === "string") {
          console.log(`[Field ${num}] ` + "Field Value Must Be A String")
          return this
        }
        if (!neh?.required === true || false) neh.required = false

        if (typeof neh?.type === "number") {
          if ((neh.type > 11) && (neh.type < 1)) {
            console.log('Type Command Isn\'t Valid (Support 1 - 11)')
            return this
          }
        }
        if (typeof neh?.type === "string") {
          if (!CommandOptionType(neh?.type)) {
            console.log("Not Valid")
            return this
          }
          neh.type = CommandOptionType(neh.type)
        }

        if (!Array.isArray(this.options)) this.options = []
        this?.options.push({ title: neh?.name, description: neh?.description, required: neh?.required })
      })
      return this
    } catch (err) {
      console.log("Builder Err : " + err)
      return this
    }
  }

  addSubcommand(name, description) {
    try {
      if (!name && name.length === 0) {
        console.log('Provide A Name')
        return this
      }
      if (!description && description === 0) {
        console.log('Provide A Description')
        return this
      }
      this.options.push({ name: name, description: description, type: CommandOptionType("SUB_COMMAND") })
      return this
    } catch (err) {
      console.log("Builder Err : " + err)
      return this
    }
  }

  addSubcommandGroup(name, description, options) {
    try {
      if (!name && name.length === 0) {
        console.log('Provide A Name')
        return this
      }
      if (!description && description === 0) {
        console.log('Provide A Description')
        return this
      }
      if (Array.isArray(options)) {
        options = options.map((na, nu) => {
          return {
            name: na?.name || null,
            description: na?.description || null,
            type: na?.type || null,
            required: na?.required || false,
            autocomplete: na?.autocomplete || false,
            min_value: na?.min_value || null,
            max_value: na?.max_value || null
          }
        })
      }
      this.options.push({ name: name, description: description, type: CommandOptionType("SUB_COMMAND_GROUP"), options: options })
      return this
    } catch (err) {
      console.log("Builder Err : " + err)
      return this
    }
  }

  addStringOption(name, description, required, autocomplete) {
    try {
      if (!required === true || false) required = false
      if (!autocomplete === true || false) autocomplete = false
      if (!name && name.length === 0) {
        console.log('Provide A Name')
        return this
      }
      if (!description && description === 0) {
        console.log('Provide A Description')
        return this
      }

      this.options.push({ name: name, description: description, type: CommandOptionType("STRING"), autocomplete: autocomplete, required: required })
      return this
    } catch (err) {
      console.log("Builder Err : " + err)
      return this
    }
  }

  addIntegerOption(name, description, required, autocomplete, min_value, max_value) {
    try {
      if (!required === true || false) required = false
      if (!autocomplete === true || false) autocomplete = false
      if (!name && name.length === 0) {
        console.log('Provide A Name')
        return this
      }
      if (!description && description === 0) {
        console.log('Provide A Description')
        return this
      }
      var angka = { name: name, description: description, type: CommandOptionType("INTEGER"), autocomplete: autocomplete, required: required }

      if (min_value && (typeof min_value === "integer")) {
        angka["min_value"] = min_value
      }

      if (max_value && (typeof max_value === "integer")) {
        angka["max_value"] = max_value
      }

      this.options.push(angka)
      return this
    } catch (err) {
      console.log("Builder Err : " + err)
      return this
    }
  }

  addIntegerOption(name, description, required, autocomplete, min_value, max_value) {
    try {
      if (!required === true || false) required = false
      if (!autocomplete === true || false) autocomplete = false
      if (!name && name.length === 0) {
        console.log('Provide A Name')
        return this
      }
      if (!description && description === 0) {
        console.log('Provide A Description')
        return this
      }
      var angka = { name: name, description: description, type: CommandOptionType("NUMBER"), autocomplete: autocomplete, required: required }

      if (min_value && (typeof min_value === "number")) {
        angka["min_value"] = min_value
      }

      if (max_value && (typeof max_value === "number")) {
        angka["max_value"] = max_value
      }

      this.options.push(angka)
      return this
    } catch (err) {
      console.log("Builder Err : " + err)
      return this
    }
  }

  addBooleanOption(name, description, required) {
    try {
      if (!required === true || false) required = false
      if (!name && name.length === 0) {
        console.log('Provide A Name')
        return this
      }
      if (!description && description === 0) {
        console.log('Provide A Description')
        return this
      }
      this.options.push({ name: name, description: description, type: CommandOptionType("BOOLEAN"), required: required })
      return this
    } catch (err) {
      console.log("Builder Err : " + err)
      return this
    }
  }

  addUserOption(name, description, required) {
    try {
      if (!required === true || false) required = false
      if (!name && name.length === 0) {
        console.log('Provide A Name')
        return this
      }
      if (!description && description === 0) {
        console.log('Provide A Description')
        return this
      }
      this.options.push({ name: name, description: description, type: CommandOptionType("USER"), required: required })
      return this
    } catch (err) {
      console.log("Builder Err : " + err)
      return this
    }
  }

  addChannelOption(name, description, required) {
    try {
      if (!required === true || false) required = false
      if (!name && name.length === 0) {
        console.log('Provide A Name')
        return this
      }
      if (!description && description === 0) {
        console.log('Provide A Description')
        return this
      }
      this.options.push({ name: name, description: description, type: CommandOptionType("CHANNEL"), required: required })
      return this
    } catch (err) {
      console.log("Builder Err : " + err)
      return this
    }
  }

  addRoleOption(name, description, required) {
    try {
      if (!required === true || false) required = false
      if (!name && name.length === 0) {
        console.log('Provide A Name')
        return this
      }
      if (!description && description === 0) {
        console.log('Provide A Description')
        return this
      }
      this.options.push({ name: name, description: description, type: CommandOptionType("ROLE"), required: required })
      return this
    } catch (err) {
      console.log("Builder Err : " + err)
      return this
    }
  }

  addMentionOption(name, description, required) {
    try {
      if (!required === true || false) required = false
      if (!name && name.length === 0) {
        console.log('Provide A Name')
        return this
      }
      if (!description && description === 0) {
        console.log('Provide A Description')
        return this
      }
      this.options.push({ name: name, description: description, type: CommandOptionType("MENTIONABLE"), required: required })
      return this
    } catch (err) {
      console.log("Builder Err : " + err)
      return this
    }
  }

  addNumberOption(name, description, required, autocomplete, min_value, max_value) {
    try {
      if (!required === true || false) required = false
      if (!autocomplete === true || false) autocomplete = false
      if (!name && name.length === 0) {
        console.log('Provide A Name')
        return this
      }
      if (!description && description === 0) {
        console.log('Provide A Description')
        return this
      }
      var angka = { name: name, description: description, type: CommandOptionType("INTEGER"), autocomplete: autocomplete, required: required }

      if (min_value && (typeof min_value === "number")) {
        angka["min_value"] = min_value
      }

      if (max_value && (typeof max_value === "number")) {
        angka["max_value"] = max_value
      }
      this.options.push(angka)
      return this
    } catch (err) {
      console.log("Builder Err : " + err)
      return this
    }
  }

  addAttachmentOption(name, description, required) {
    try {
      if (!required === true || false) required = false
      if (!name && name.length === 0) {
        console.log('Provide A Name')
        return this
      }
      if (!description && description === 0) {
        console.log('Provide A Description')
        return this
      }
      this.options.push({ name: name, description: description, type: CommandOptionType("ATTACHMENT"), required: required })
      return this
    } catch (err) {
      console.log("Builder Err : " + err)
      return this
    }
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
  ActionRow: ActionRow,
  Command: Command
}
