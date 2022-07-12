import { useEffect } from "react";
import PageBanner from "../../components/common/PageBanner";
import PageContainer from "../../components/common/PageContainer";
import BtnAddEvent from "../../components/event-pages/BtnAddEvent";
import EventCard from "../../components/event-pages/EventCard";
import { setEventsData } from "../../features/eventsSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";

const moment = require("moment");

export default function EventPass() {

    const dispatch = useAppDispatch();

    /* Events */
    const eventsData = useAppSelector((state) => state.events.data);

    return (
        <>
            <PageBanner imgSrc="/icons/gradient/event-pass-gradient.svg" title="Evénements passés" desc="Liste des évènements passés auquel vous êtes rattaché" />
            <PageContainer>
                <div className="page-event-pass">
                    <div className="bar-filter">
                        <div>
                            <div>
                                <span>Tous les évènements</span>
                                <span className="underline"></span>
                            </div>
                        </div>
                        <ul>
                            <li><span></span>Mariages</li>
                            <li><span></span>Anniversaires</li>
                            <li><span></span>Workshops</li>
                            <li><span></span>Escapades</li>
                        </ul>
                    </div>
                    <div className="grid-event-card">
                        {eventsData.length > 0 ? 
                            eventsData?.map((event: any, index: number) => {
                                if(moment().isAfter(event.end)) {
                                    return <EventCard event={event} key={index} />
                                }
                            })
                        : ''}
                        <BtnAddEvent />
                    </div>
                </div>
            </PageContainer>
        </>
    )
}