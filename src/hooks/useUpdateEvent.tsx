import axios from "axios";

export default function useUpdateEvent() {
  return (eventForm: any) => {
    return axios({
      url: "https://fathomless-forest-78481.herokuapp.com/api/event/updateEvent",
      method: "post",
      data: new URLSearchParams({
        _id: eventForm._id,
        userId: eventForm.userId,
        name: eventForm.name,
        type: eventForm.type,
        description: eventForm.description,
        address: eventForm.address,
        zipcode: eventForm.zipcode,
        city: eventForm.city,
        train: eventForm.train,
        car: eventForm.car,
        autre: eventForm.autre,
        precision: eventForm.precision,
        contactName: eventForm.contactName,
        contactPhone: eventForm.contactPhone,
        contactCall: eventForm.contactCall,
        contactText: eventForm.contactText,
        contactNameSec: eventForm.contactNameSec,
        contactPhoneSec: eventForm.contactPhoneSec,
        contactCallSec: eventForm.contactCallSec,
        contactTextSec: eventForm.contactTextSec,
        dresscode: eventForm.dresscode,
        start: eventForm.start,
        eventStartHour: eventForm.eventStartHour,
        end: eventForm.end,
        eventEndHour: eventForm.eventEndHour,
        alertDate: eventForm.alertDate,
        alertDescription: eventForm.alertDescription,
        alertHour: eventForm.alertHour,
        inviteAccepted: eventForm.inviteAccepted,
        inviteRefused: eventForm.inviteRefused,
        newClaim: eventForm.newClaim,
        img: eventForm.img
      }),
      withCredentials: true
    }).then((res) => res.data);
  };
}
