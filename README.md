# magicmirror-configs

Automatic installation of my Magicmirror Setup.

![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)

Run:
```
chmod +x install-magicmirror.sh
```

```
bash install-magicmirror.sh
```

This Sript will:

- Installs the necessary dependencies, including Node.js.
- Clones the MagicMirror repository and installs it using npm.
- Installs pm2, a process manager that helps keep MagicMirror running in the background.
- Installs any additional modules - specified in a modules.txt file.
- Provides instructions for editing the configuration file to add API keys and other information before restarting MagicMirror.