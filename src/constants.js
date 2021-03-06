const pythonMirror = process.env['npm_config_python_mirror'] || process.env.PYTHON_MIRROR || 'https://www.python.org/ftp/python/'

const buildTools = {
  installerName: 'BuildTools_Full.exe',
  installerUrl: 'https://download.microsoft.com/download/5/f/7/5f7acaeb-8363-451f-9425-68a90f98b238/visualcppbuildtools_full.exe',
  logName: 'build-tools-log.txt'
}

let python = {}

if (process.arch === 'x64') {
  python = {
    installerName: 'python-2.7.14.amd64.msi',
    installerUrl: pythonMirror.replace(/\/*$/, '/2.7.14/python-2.7.14.amd64.msi'),
    targetName: 'python27',
    logName: 'python-log.txt'
  }
} else {
  python = {
    installerName: 'python-2.7.14.msi',
    installerUrl: pythonMirror.replace(/\/*$/, '/2.7.14/python-2.7.14.msi'),
    targetName: 'python27',
    logName: 'python-log.txt'
  }
}

module.exports = {
  buildTools,
  python
}
