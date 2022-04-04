# Clorynin

<h2>Builder</h2>
<h3>Button</h3>
<h4>setTitle</h3>

```js
.setTitle(title)
```

--------------
| Parameter | Require | Default |
| ----- | ----- | ----- |
| title | [x] | null |
--------------

Example Usage

```js
const { Button } = require("clorynin")
const btn = new Button()
.setEmoji("828383907")
.setLabel("Baka!!")
.setCustomId("apanjir")
.setStyle("Primary")
.setUrl("https://google.com")
```

<h2>Data Parser</h2>
<h3>CommandOptionType</h3>

Parse Option Type String To Option Type Number
```js
function CommandOptionType(OptionType)
```
`OptionType` (String) :
- `SUB_COMMAND`
- `SUB_COMMMAND_GROUP`
- `STRING`
- `INTEGER`
- `BOOLEAN`
- `USER`
- `CHANNEL`
- `ROLE`
- `MENTIONABLE`
- `NUMBER`
- `ATTACHMENT`

--------------------

<h3>CommandType</h3>

Parse Command Permission Type String To Command Type Number
```js
function CommandType(ApplicationCommandType)
```
`ApplicationCommandType` (String) :
- `CHAT_INPUT`
- `USER`
- `MESSAGE`

--------------------

<h3>CommandPermissionType</h3>

Parse Command Type String To Command Permission Type Number
```js
function CommandPermissionType(CommandPermissionType)
```
`CommandPermissionType` (String) :
- `ROLE`
- `USER`

---------------------

<h3>ButtonStyle</h3>

Parse Button Style String To Button Style Number
```js
function ButtonStyle(ButtonStyle)
```
`ButtonStyle` (String) :
- `PRIMARY`
- `SECONDARY`
- `SUCCESS`
- `WARNING`
- `LINK`

-------------------

<h3>ButtonStyle</h3>

Parse Text Input Style String To Text Input Style Number
```js
function TextInputStyle(InputStyle)
```
`InputStyle` (String) :
- `SHORT`
- `PARAGRAPH`
