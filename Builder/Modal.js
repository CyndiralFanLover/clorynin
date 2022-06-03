class Modal {
  constructor(data) {
    this.title = data?.title || null
    this.custom_id = data?.custom_id || null
    this.components = data?.components || []
  }
  setTitle(title) {
    try {
      if (!title) {
        console.log("(Clorynin Alert) Parameter title Must Fill!")
        return this
      }
      if (!typeof title === "string") {
        console.log("(Clorynin Alert) Parameter title Must Be A String")
        return this
      }
      if (title.length === 0) {
        console.log("(Clorynin Alert) Parameter title Cannot Be Empty")
        return this
      }
      this.title = title
      return this
    } catch (err) {
      console.log("(Clorynin Error) " + err)
      return this
    }
  }
  setCustomId(id) {
    try {
      if (!id) {
        console.log("(Clorynin Alert) Parameter id Must Fill!")
        return this
      }
      if (!typeof id === "string") {
        console.log("(Clorynin Alert) Parameter id Must Be A String")
        return this
      }
      if (id.length === 0) {
        console.log("(Clorynin Alert) Parameter id Cannot Be Empty")
        return this
      }
      if (id.length > 100) {
        console.log("(Clorynin Alert) Parameter id Can't Be More Than 100 Letters")
        return this
      }
      this.custom_id = id
      return this
    } catch (err) {
      console.log("(Clorynin Error) " + err)
      return this
    }
  }
  addComponents(compon) {
    if (!data) {
      console.log("(Clorynin Alert) Parameter compon Must Fill!")
      return this
    }
    if (!Array.isArray(data)) {
      console.log("(Clorynin Alert) Parameter compon Must Be A String")
      return this
    }
    if (!data.length === 0) {
      console.log("(Clorynin Alert) Parameter compon Cannot Be Empty")
      return this
    }
    data.map((neh, num) => {
      if(!neh?.type === 1) {
        console.log("(Clorynin) Only Rows Can Be Entered Here")
        return this
      }
      if(!neh?.components.length > 1) {
          neh.components = [neh.components[0]]
        }
        this.components.push(neh.components)
    })
    return this
  }
}

module.exports = {
  Modal: Modal
}
