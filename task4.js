class student {
    getinfo() {
        console.log("hi my name is praveen")
    }
}
class office extends student {
    getinfo() {
        console.log("iam completed in my graduation 2024")
    }
}
class member extends student {
    getinfo() {
        console.log("my college name is mrs avn college")
    }
}
const officeInstance = new office();

officeInstance.getinfo();