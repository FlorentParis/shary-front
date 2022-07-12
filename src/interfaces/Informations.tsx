export default interface Informations {


    userId: any,

    // GENERAL
    name: String,
    type: String,
    description: String,

    // LIEU
    address: String,
    zipcode: String,
    city: String,
    train: Boolean,
    car: Boolean,
    autre: Boolean,
    precision: String,

    // PERSONNE A CONTACTER
    contactName: String,
    contactPhone: String,
    contactCall: Boolean,
    contactText: Boolean

    
    // PERSONNE A CONTACTER 2
    contactNameSec: String,
    contactPhoneSec: String,
    contactCallSec: Boolean,
    contactTextSec: Boolean,

    //DRESSCODE
    dresscode: String,

    //EVENT START
    start: String,
    eventStartHour: String,

    //EVENT END
    end: String,
    eventEndHour: String,

    //ALERT RAPPEL
    alertDate: String
    alertHour: String
    alertDescription: String,

    //NOTIFICATIONS
    inviteAccepted: Boolean,
    inviteRefused: Boolean,
    newClaim: Boolean,

    //UPLOAD IMAGE
    image: String,
}
