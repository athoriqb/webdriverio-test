const path = require('path');
const { config } = require('./wdio.shared.conf');

// ====================
// Runner Configuration
// ====================
//
config.port = 4723;

//
// ============
// Specs
// ============
config.specs = [
  path.join(process.cwd(), './test/specs/**/*.js')
];

//
// ============
// Capabilities
// ============
config.capabilities = [
  {
    "appium:platformVersion": "11",
    "appium:autoGrantPermissions": true,
    "appium:udid": "RR8M403PDLF",
    "appium:automationName": "uiautomator2",
    "platformName": "Android",
    "appium:app": path.join(process.cwd(),"app/Flip-Test-App-V2.apk"),
    "appium:appPackage": "com.wdiodemoapp",
    "appium:appActivity": "com.wdiodemoapp.SplashActivity",
    "appium:appWaitActivity": "com.wdiodemoapp.MainActivity"
  }
]

//
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = [
    ['appium', {
        args: {
            address: 'localhost',
            port: 4723,
            relaxedSecurity: true
        },
        command: 'appium',
        logPath: './'
}]];

exports.config = config;