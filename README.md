# Prereqs:

npm ci # with reference to package-lock.json <br>
_or_ <br>
npm i # with refetence to package.json

Please run this before the following so Electron would have a target for loadURL :
> npm run build

---

### Launch process explained :
> Run the following command : <br>
> $ PORT=<available_PORT> npx electron main.js --disable-gpu <br>
> **1.1) NOTE** : using npx electron **expects developer to be installed Electron locally !** <br>
> 1.2) ...: **--disable-gpu** is not mandatory (optional)